import type { Attachment } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { DownloadIcon, ExternalLinkIcon, SparkleIcon } from '../ui/Icon';
import { FileBadge } from '../ui/FileBadge';
import { IconButton } from '../ui/IconButton';
import { SectionLabel } from '../ui/SectionLabel';
import styles from './AttachmentPanel.module.css';

export interface AttachmentPanelProps {
  attachments: Attachment[];
  /** Tóm tắt riêng một tệp đính kèm. */
  onSummarizeFile?: (attachment: Attachment) => void;
}

/** Khối tệp đính kèm mở ra dưới một hàng văn bản đến. */
export function AttachmentPanel({ attachments, onSummarizeFile }: AttachmentPanelProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <SectionLabel tight>TỆP ĐÍNH KÈM</SectionLabel>
          <Badge tone="info" size="sm">
            {attachments.length} tệp
          </Badge>
          <span className={styles.spacer} />
          <Button size="sm" variant="secondary">
            <DownloadIcon size={12} />
            Tải tất cả (.zip)
          </Button>
        </div>

        {attachments.map((file) => (
          <div key={file.name} className={styles.row}>
            <FileBadge ext={file.ext} />
            <div className={styles.text}>
              <div className={styles.name}>{file.name}</div>
              <div className={styles.meta}>{file.meta}</div>
            </div>
            <Button size="sm" variant="brand" onClick={() => onSummarizeFile?.(file)}>
              <SparkleIcon size={11} strokeWidth={2.3} />
              Tóm tắt tệp
            </Button>
            <Button size="sm" variant="secondary">
              <ExternalLinkIcon size={12} />
              Xem
            </Button>
            <IconButton variant="solid" label={`Tải xuống ${file.name}`}>
              <DownloadIcon size={13} strokeWidth={2.1} />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
}
