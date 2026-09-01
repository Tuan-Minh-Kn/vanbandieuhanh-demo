import type { Attachment, IncomingDoc, UrgencyLevel } from '../../types';
import { Button } from '../ui/Button';
import { AdviceIcon, ChevronDownIcon, PaperclipIcon, SparkleIcon } from '../ui/Icon';
import { IconButton } from '../ui/IconButton';
import { AttachmentPanel } from './AttachmentPanel';
import styles from './IncomingDocRow.module.css';

const DUE_TONE: Record<UrgencyLevel, string> = {
  urgent: styles.dueUrgent,
  soon: styles.dueSoon,
  ok: styles.dueOk,
};

export interface IncomingDocRowProps {
  doc: IncomingDoc;
  expanded: boolean;
  onToggle: () => void;
  onSummarize: () => void;
  /** Tóm tắt đúng một tệp — bỏ qua bước chọn tệp. */
  onSummarizeFile: (file: Attachment) => void;
  onPreviewFile: (file: Attachment) => void;
  onAdvise: () => void;
}

/** Một hàng văn bản đến: mở/gập danh sách tệp, gọi trợ lý tóm tắt hoặc tham mưu. */
export function IncomingDocRow({
  doc,
  expanded,
  onToggle,
  onSummarize,
  onSummarizeFile,
  onPreviewFile,
  onAdvise,
}: IncomingDocRowProps) {
  return (
    <div className={[styles.wrap, expanded ? styles.wrapExpanded : ''].join(' ')}>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        className={[styles.row, expanded ? styles.rowExpanded : ''].join(' ')}
        onClick={onToggle}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onToggle();
          }
        }}
      >
        <div className={styles.arrived}>{doc.arrived}</div>

        <div>
          <div className={styles.code}>{doc.code}</div>
          <div className={styles.issued}>{doc.issued}</div>
        </div>

        <div className={styles.subject}>
          <div className={styles.title}>{doc.title}</div>
          <div className={styles.metaRow}>
            <span className={styles.org}>{doc.org}</span>
            <span
              className={[styles.attachChip, expanded ? styles.attachChipActive : ''].join(' ')}
              onClick={(event) => {
                event.stopPropagation();
                onToggle();
              }}
            >
              <PaperclipIcon size={11} strokeWidth={2.2} />
              {doc.files}
              <ChevronDownIcon
                size={10}
                strokeWidth={2.6}
                className={[styles.chevron, expanded ? styles.chevronOpen : ''].join(' ')}
              />
            </span>
          </div>
        </div>

        <div className={styles.dueCell}>
          <span className={[styles.due, DUE_TONE[doc.level]].join(' ')}>{doc.due}</span>
          <div className={styles.dueNote}>{doc.dueNote}</div>
        </div>

        <div className={styles.actions}>
          <div className={styles.note}>{doc.note}</div>
          <div className={styles.actionRow}>
            <Button
              size="sm"
              variant="brand"
              onClick={(event) => {
                event.stopPropagation();
                onSummarize();
              }}
            >
              <SparkleIcon size={11} strokeWidth={2.3} />
              Tóm tắt
            </Button>
            <IconButton
              variant="outline"
              label="Tham mưu"
              onClick={(event) => {
                event.stopPropagation();
                onAdvise();
              }}
            >
              <AdviceIcon size={13} strokeWidth={1.9} />
            </IconButton>
          </div>
        </div>
      </div>

      {expanded && (
        <AttachmentPanel
          attachments={doc.attachments}
          onSummarizeFile={onSummarizeFile}
          onPreviewFile={onPreviewFile}
        />
      )}
    </div>
  );
}
