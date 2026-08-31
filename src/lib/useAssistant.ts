import { useCallback, useEffect, useRef, useState } from 'react';
import type { AssistantMode, RunStatus } from '../types';

/** Ba bước xử lý hiển thị trong lúc chạy. */
export const RUN_STEP_COUNT = 3;

const STEP_FIRST_DELAY = 500;
const STEP_DELAY = 600;
const TYPE_DELAY = 460;
const TYPE_TICK = 16;
const TYPE_CHUNK = 5;
const COPY_RESET = 1400;

export interface UseAssistantOptions {
  /** Đoạn tóm tắt sẽ hiện dần theo từng chữ khi ở chế độ "Tóm tắt". */
  summaryText: string;
  initialMode?: AssistantMode;
  /** Bản demo mở ra ở trạng thái đã có kết quả để người xem thấy ngay giao diện đầy đủ. */
  initialStatus?: RunStatus;
}

export interface AssistantController {
  mode: AssistantMode;
  status: RunStatus;
  /** Số bước đã hoàn thành (0…3). */
  step: number;
  stream: string;
  copied: boolean;
  /** Bật/tắt "Kèm điều khoản trích dẫn". */
  cite: boolean;
  lengthIndex: number;
  isIdle: boolean;
  isRunning: boolean;
  isStreaming: boolean;
  isDone: boolean;
  setMode: (mode: AssistantMode) => void;
  setLengthIndex: (index: number) => void;
  toggleCite: () => void;
  run: () => void;
  reset: () => void;
  copy: () => void;
  /** Đổi chế độ rồi tự chạy sau một nhịp ngắn — dùng khi mở trợ lý từ một hàng văn bản. */
  start: (mode: AssistantMode, delay?: number) => void;
}

/**
 * Máy trạng thái của trợ lý: idle → running (3 bước) → streaming (gõ dần) → done.
 * Ở chế độ "Tham mưu" bỏ qua bước gõ chữ và chuyển thẳng sang done.
 */
export function useAssistant({
  summaryText,
  initialMode = 'summary',
  initialStatus = 'done',
}: UseAssistantOptions): AssistantController {
  const [mode, setModeState] = useState<AssistantMode>(initialMode);
  const [status, setStatus] = useState<RunStatus>(initialStatus);
  const [step, setStep] = useState(initialStatus === 'done' ? RUN_STEP_COUNT : 0);
  const [stream, setStream] = useState(initialStatus === 'done' ? summaryText : '');
  const [copied, setCopied] = useState(false);
  const [cite, setCite] = useState(true);
  const [lengthIndex, setLengthIndex] = useState(1);

  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const copyTimeoutRef = useRef<number | null>(null);
  /** Giữ giá trị mới nhất để các callback không bắt phải bản cũ. */
  const summaryRef = useRef(summaryText);
  const modeRef = useRef(mode);

  summaryRef.current = summaryText;
  modeRef.current = mode;

  const clearTimers = useCallback(() => {
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    timeoutRef.current = null;
    intervalRef.current = null;
  }, []);

  useEffect(() => {
    return () => {
      clearTimers();
      if (copyTimeoutRef.current !== null) window.clearTimeout(copyTimeoutRef.current);
    };
  }, [clearTimers]);

  const type = useCallback(() => {
    if (modeRef.current === 'advice') {
      setStatus('done');
      return;
    }
    const text = summaryRef.current;
    let cursor = 0;
    setStatus('streaming');
    setStream('');
    intervalRef.current = window.setInterval(() => {
      cursor += TYPE_CHUNK;
      if (cursor >= text.length) {
        clearTimers();
        setStream(text);
        setStatus('done');
      } else {
        setStream(text.slice(0, cursor));
      }
    }, TYPE_TICK);
  }, [clearTimers]);

  const run = useCallback(() => {
    clearTimers();
    setStatus('running');
    setStep(0);
    setStream('');
    setCopied(false);

    let current = 0;
    const advance = () => {
      current += 1;
      setStep(current);
      timeoutRef.current = window.setTimeout(
        current < RUN_STEP_COUNT ? advance : type,
        current < RUN_STEP_COUNT ? STEP_DELAY : TYPE_DELAY,
      );
    };
    timeoutRef.current = window.setTimeout(advance, STEP_FIRST_DELAY);
  }, [clearTimers, type]);

  const reset = useCallback(() => {
    clearTimers();
    setStatus('idle');
    setStep(0);
    setStream('');
    setCopied(false);
  }, [clearTimers]);

  const setMode = useCallback(
    (next: AssistantMode) => {
      clearTimers();
      modeRef.current = next;
      setModeState(next);
      setStatus('idle');
      setStep(0);
      setStream('');
    },
    [clearTimers],
  );

  const start = useCallback(
    (next: AssistantMode, delay = 240) => {
      clearTimers();
      modeRef.current = next;
      setModeState(next);
      setStatus('idle');
      setStep(0);
      setStream('');
      timeoutRef.current = window.setTimeout(run, delay);
    },
    [clearTimers, run],
  );

  const copy = useCallback(() => {
    setCopied(true);
    if (copyTimeoutRef.current !== null) window.clearTimeout(copyTimeoutRef.current);
    copyTimeoutRef.current = window.setTimeout(() => setCopied(false), COPY_RESET);
  }, []);

  const toggleCite = useCallback(() => setCite((value) => !value), []);

  return {
    mode,
    status,
    step,
    stream,
    copied,
    cite,
    lengthIndex,
    isIdle: status === 'idle',
    isRunning: status === 'running',
    isStreaming: status === 'streaming',
    isDone: status === 'done',
    setMode,
    setLengthIndex,
    toggleCite,
    run,
    reset,
    copy,
    start,
  };
}
