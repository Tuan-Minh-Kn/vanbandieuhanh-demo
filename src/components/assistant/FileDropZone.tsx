import { UploadIcon } from '../ui/Icon';
import styles from './FileDropZone.module.css';

/** Vùng kéo thả tệp; bản demo không thực sự tải tệp lên. */
export function FileDropZone({ title }: { title: string }) {
  return (
    <button type="button" className={styles.zone}>
      <UploadIcon size={22} strokeWidth={1.8} color="var(--c-blue-deep)" />
      <span className={styles.title}>{title}</span>
      <span className={styles.hint}>PDF, DOCX, TXT, MD — tối đa 20 MB mỗi tệp</span>
    </button>
  );
}
