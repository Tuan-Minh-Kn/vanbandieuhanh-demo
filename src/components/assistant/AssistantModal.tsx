import { useEffect, useState } from 'react';
import { DIRECTIVE_PRESETS, DISCLAIMER_INBOX, MODEL_NOTE } from '../../data/assistant';
import { getAdviceGroups } from '../../data/advice';
import type { AssistantController } from '../../lib/useAssistant';
import type { IncomingDoc } from '../../types';
import { Button } from '../ui/Button';
import { CloseIcon, CopyIcon, DownloadIcon, SparkleIcon } from '../ui/Icon';
import { AdviceGroups } from './AdviceGroups';
import { ContextPanel } from './ContextPanel';
import { DirectiveInput } from './DirectiveInput';
import { EmptyResult } from './EmptyResult';
import { ModeTabs } from './ModeTabs';
import { ResultDisclaimer } from './ResultDisclaimer';
import { ThinkingIndicator } from './ThinkingIndicator';
import { SummaryStream } from './SummaryStream';
import styles from './AssistantModal.module.css';

const EMPTY_HINT = {
  summary: 'Bản tóm tắt hiện dần theo từng chữ, kèm điều khoản được dẫn để đối chiếu với văn bản gốc.',
  advice: 'Kết quả gồm bốn mục: việc tham mưu, nội dung cần nghiên cứu, việc tiếp theo và điểm chưa rõ.',
};

const ELAPSED = { summary: '7,8 giây', advice: '11,4 giây' };

const THINKING_NOTE = {
  summary: 'Đang đọc văn bản trong ngữ cảnh và đối chiếu điều khoản liên quan.',
  advice: 'Đang đối chiếu chỉ đạo của lãnh đạo với nội dung văn bản.',
};

export interface AssistantModalProps {
  open: boolean;
  doc: IncomingDoc;
  assistant: AssistantController;
  /** Tên tệp được chọn cho lần chạy này. */
  selectedFile: string | null;
  onSelectFile: (name: string) => void;
  onPreviewFile: (name: string) => void;
  onClose: () => void;
}

/** Hộp thoại trợ lý gọi từ một hàng văn bản trong hộp việc. */
export function AssistantModal({
  open,
  doc,
  assistant,
  selectedFile,
  onSelectFile,
  onPreviewFile,
  onClose,
}: AssistantModalProps) {
  const [directive, setDirective] = useState('');
  const { mode, isIdle, isRunning, isStreaming, isDone, stream } = assistant;
  const advice = mode === 'advice';

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const busy = isRunning || isStreaming;
  const nothingSelected = selectedFile === null;

  const runLabel = busy
    ? 'Đang xử lý…'
    : nothingSelected
      ? 'Chọn tệp cần xử lý'
      : advice
        ? 'Đề xuất việc cần làm'
        : doc.attachments.length > 1
          ? 'Tóm tắt tệp đã chọn'
          : 'Tóm tắt văn bản này';

  return (
    <>
      <div
        className={[styles.overlay, open ? '' : styles.overlayHidden].join(' ')}
        onClick={onClose}
        aria-hidden
      />
      <div
        className={[styles.panel, open ? '' : styles.panelHidden].join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label="Trợ lý văn bản pháp luật"
      >
        <header className={styles.header}>
          <span className={styles.mark}>
            <SparkleIcon size={15} />
          </span>
          <div className={styles.headText}>
            <div className={styles.headTitle}>Trợ lý văn bản pháp luật</div>
            <div className={styles.headModel}>
              <span className={styles.live} />
              {MODEL_NOTE}
            </div>
          </div>
          <span className={styles.spacer} />
          <button type="button" className={styles.close} onClick={onClose} aria-label="Đóng trợ lý">
            <CloseIcon size={14} />
          </button>
        </header>

        <div className={styles.tabs}>
          <ModeTabs mode={mode} onChange={assistant.setMode} />
        </div>

        <div className={styles.body}>
          <ContextPanel
            doc={doc}
            selectedFile={selectedFile}
            onSelectFile={onSelectFile}
            onPreviewFile={onPreviewFile}
          />

          {advice && (
            <DirectiveInput
              value={directive}
              onChange={setDirective}
              presets={DIRECTIVE_PRESETS}
              placeholder="Dán bút phê hoặc chỉ đạo. Ví dụ: Nghiên cứu, đề xuất nội dung tham gia ý kiến; báo cáo trước 08/09."
            />
          )}

          <Button
            size="block"
            variant={busy || nothingSelected ? 'muted' : 'primary'}
            disabled={busy || nothingSelected}
            onClick={assistant.run}
          >
            {runLabel}
          </Button>

          {isRunning && <ThinkingIndicator note={THINKING_NOTE[mode]} />}

          {isIdle && <EmptyResult hint={EMPTY_HINT[mode]} />}

          {!advice && (isStreaming || isDone) && (
            <SummaryStream
              text={stream}
              streaming={isStreaming}
              elapsed={isDone ? (assistant.elapsedLabel ?? ELAPSED.summary) : undefined}
              source={selectedFile}
            />
          )}

          {advice && isDone && <AdviceGroups groups={getAdviceGroups(doc.code)} />}
        </div>

        {isDone && (
          <div className={styles.footer}>
            <div className={styles.footerRow}>
              <Button size="block" variant="primary" onClick={assistant.copy}>
                <CopyIcon size={13} strokeWidth={1.9} />
                {assistant.copied ? 'Đã sao chép' : 'Sao chép'}
              </Button>
              <Button size="block" variant="secondary">
                <DownloadIcon size={13} strokeWidth={1.9} />
                Xuất DOCX
              </Button>
            </div>
            <ResultDisclaimer>{DISCLAIMER_INBOX}</ResultDisclaimer>
          </div>
        )}
      </div>
    </>
  );
}
