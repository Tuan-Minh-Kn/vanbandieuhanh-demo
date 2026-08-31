import type { AttachmentExt } from '../../types';
import styles from './FileBadge.module.css';

const TONE: Record<AttachmentExt, string> = {
  PDF: styles.pdf,
  XLSX: styles.xlsx,
  DOCX: styles.docx,
};

/** Nhãn vuông ghi phần mở rộng tệp, màu theo loại tệp. */
export function FileBadge({ ext, size = 'md' }: { ext: AttachmentExt; size?: 'md' | 'sm' }) {
  return <span className={[styles.badge, styles[size], TONE[ext]].join(' ')}>{ext}</span>;
}
