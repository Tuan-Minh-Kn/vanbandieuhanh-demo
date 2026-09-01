import type { IncomingDoc } from '../../types';
import { Badge } from '../ui/Badge';
import { DownloadIcon, ExternalLinkIcon } from '../ui/Icon';
import { FileBadge } from '../ui/FileBadge';
import { IconButton } from '../ui/IconButton';
import { Radio } from '../ui/Radio';
import { SectionLabel } from '../ui/SectionLabel';
import styles from './ContextPanel.module.css';

export interface ContextPanelProps {
  doc: IncomingDoc;
  /** Tên tệp sẽ đưa vào lần chạy này — mỗi lần chỉ xử lý được một tệp. */
  selectedFile: string | null;
  onSelectFile: (name: string) => void;
  onPreviewFile: (name: string) => void;
}

/**
 * Ngữ cảnh của trợ lý: văn bản đang xử lý và các tệp kèm theo. Người dùng chọn
 * đúng một tệp để trợ lý đọc.
 */
export function ContextPanel({ doc, selectedFile, onSelectFile, onPreviewFile }: ContextPanelProps) {
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

      <div role="radiogroup" aria-label="Chọn tệp cần xử lý">
        {doc.attachments.map((file) => {
          const checked = selectedFile === file.name;
          return (
            <div key={file.name} className={[styles.file, checked ? styles.fileSelected : ''].join(' ')}>
              <Radio checked={checked} onChange={() => onSelectFile(file.name)} label={`Chọn tệp ${file.name}`} />
              <FileBadge ext={file.ext} size="sm" />
              <div className={styles.fileText}>
                <div className={styles.fileName}>{file.name}</div>
                <div className={styles.fileMeta}>{file.meta}</div>
              </div>
              {file.url && (
                <IconButton
                  variant="tint"
                  label={`Xem trước ${file.name}`}
                  onClick={() => onPreviewFile(file.name)}
                >
                  <ExternalLinkIcon size={12} />
                </IconButton>
              )}
              <IconButton variant="tint" label={`Tải xuống ${file.name}`}>
                <DownloadIcon size={12} />
              </IconButton>
            </div>
          );
        })}
      </div>
    </div>
  );
}
