import type { Attachment } from '../../types';
import { CheckIcon, CloseIcon } from '../ui/Icon';
import { IconButton } from '../ui/IconButton';
import styles from './AttachedFileList.module.css';

/** Danh sách tệp đã nạp vào phiên, kèm trạng thái "Đã đọc". */
export function AttachedFileList({ files }: { files: Attachment[] }) {
  return (
    <div className={styles.list}>
      {files.map((file) => (
        <div key={file.name} className={styles.row}>
          <span className={styles.badge}>{file.ext}</span>
          <div className={styles.text}>
            <div className={styles.name}>{file.name}</div>
            <div className={styles.meta}>{file.meta}</div>
          </div>
          <span className={styles.read}>
            <CheckIcon size={13} strokeWidth={2.4} />
            Đã đọc
          </span>
          <IconButton variant="ghost" label={`Bỏ ${file.name}`}>
            <CloseIcon size={14} />
          </IconButton>
        </div>
      ))}
    </div>
  );
}
