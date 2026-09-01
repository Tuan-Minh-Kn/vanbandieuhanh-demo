import { useCallback, useEffect, useRef, useState } from 'react';
import { formatSeconds } from './format';
import type { AssistantMode, RunStatus } from '../types';

/** Khoảng thời gian khối "AI đang suy nghĩ" chạy — mỗi lần chạy lấy ngẫu nhiên trong khoảng này. */
export const THINKING_MIN_MS = 3000;
export const THINKING_MAX_MS = 5000;

function thinkingDuration(): number {
  return THINKING_MIN_MS + Math.random() * (THINKING_MAX_MS - THINKING_MIN_MS);
}

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
  stream: string;
  /** Thời gian chạy thực đo được của lần gần nhất, ví dụ "7,8 giây"; null nếu chưa chạy. */
  elapsedLabel: string | null;
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
 * Máy trạng thái của trợ lý: idle → running ("AI đang suy nghĩ", 3–5 giây ngẫu
 * nhiên) → streaming (gõ dần) → done. Ở chế độ "Tham mưu" bỏ qua bước gõ chữ và chuyển
 * thẳng sang done.
 */
export function useAssistant({
  summaryText,
  initialMode = 'summary',
  initialStatus = 'done',
}: UseAssistantOptions): AssistantController {
  const [mode, setModeState] = useState<AssistantMode>(initialMode);
  const [status, setStatus] = useState<RunStatus>(initialStatus);
  const [stream, setStream] = useState(initialStatus === 'done' ? summaryText : '');
  const [elapsedLabel, setElapsedLabel] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [cite, setCite] = useState(true);
  const [lengthIndex, setLengthIndex] = useState(1);

  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const copyTimeoutRef = useRef<number | null>(null);
  /** Mốc bắt đầu lần chạy hiện tại, để đo thời gian thực. */
  const startedAtRef = useRef(0);
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

  const finish = useCallback(() => {
    setElapsedLabel(formatSeconds((Date.now() - startedAtRef.current) / 1000));
    setStatus('done');
  }, []);

  const type = useCallback(() => {
    if (modeRef.current === 'advice') {
      finish();
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
        finish();
      } else {
        setStream(text.slice(0, cursor));
      }
    }, TYPE_TICK);
  }, [clearTimers, finish]);

  const run = useCallback(() => {
    clearTimers();
    setStatus('running');
    setStream('');
    setElapsedLabel(null);
    setCopied(false);
    startedAtRef.current = Date.now();
    timeoutRef.current = window.setTimeout(type, thinkingDuration());
  }, [clearTimers, type]);

  const reset = useCallback(() => {
    clearTimers();
    setStatus('idle');
    setStream('');
    setElapsedLabel(null);
    setCopied(false);
  }, [clearTimers]);

  const setMode = useCallback(
    (next: AssistantMode) => {
      clearTimers();
      modeRef.current = next;
      setModeState(next);
      setStatus('idle');
      setStream('');
      setElapsedLabel(null);
    },
    [clearTimers],
  );

  const start = useCallback(
    (next: AssistantMode, delay = 240) => {
      clearTimers();
      modeRef.current = next;
      setModeState(next);
      setStatus('idle');
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
    stream,
    elapsedLabel,
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
