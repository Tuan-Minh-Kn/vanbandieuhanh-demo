import type { IncomingDoc } from '../../types';
import { Badge } from '../ui/Badge';
import { CloseIcon, DownloadIcon } from '../ui/Icon';
import { FileBadge } from '../ui/FileBadge';
import { IconButton } from '../ui/IconButton';
import { SectionLabel } from '../ui/SectionLabel';
import styles from './ContextPanel.module.css';

/** Ngữ cảnh của trợ lý: văn bản đang xử lý và các tệp kèm theo. */
export function ContextPanel({ doc }: { doc: IncomingDoc }) {
  return (
    <div className={styles.panel}>
      <div className={styles.head}>
        <SectionLabel tight>VĂN BẢN</SectionLabel>
        <Badge tone="info" size="sm">
          {doc.attachments.length} tệp
        </Badge>
        <span className={styles.spacer} />
        <button type="button" className={styles.addLink}>
          Thêm văn bản
        </button>
      </div>

      <div className={styles.doc}>
        <div className={styles.docText}>
          <div className={styles.code}>{doc.code}</div>
          <div className={styles.title}>{doc.title}</div>
          <div className={styles.meta}>
            {doc.org} · đến {doc.arrived} · hạn {doc.due}
          </div>
        </div>
      </div>

      {doc.attachments.map((file) => (
        <div key={file.name} className={styles.file}>
          <FileBadge ext={file.ext} size="sm" />
          <div className={styles.fileText}>
            <div className={styles.fileName}>{file.name}</div>
            <div className={styles.fileMeta}>{file.meta}</div>
          </div>
          <IconButton variant="tint" label={`Tải xuống ${file.name}`}>
            <DownloadIcon size={12} />
          </IconButton>
          <IconButton variant="ghost" label={`Bỏ ${file.name} khỏi ngữ cảnh`}>
            <CloseIcon size={13} />
          </IconButton>
        </div>
      ))}
    </div>
  );
}
