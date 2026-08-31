import { FileTextIcon } from '../ui/Icon';
import styles from './EmptyResult.module.css';

export interface EmptyResultProps {
  hint: string;
  /** "boxed" là khung nét đứt trong hộp thoại, "filled" chiếm hết thẻ Kết quả. */
  variant?: 'boxed' | 'filled';
}

/** Trạng thái chưa chạy trợ lý. */
export function EmptyResult({ hint, variant = 'boxed' }: EmptyResultProps) {
  const filled = variant === 'filled';
  return (
    <div className={filled ? styles.filled : styles.boxed}>
      <FileTextIcon size={filled ? 30 : 26} strokeWidth={1.5} color="var(--n-300)" />
      <div className={styles.title}>Chưa có kết quả</div>
      <div className={styles.hint}>{hint}</div>
    </div>
  );
}
