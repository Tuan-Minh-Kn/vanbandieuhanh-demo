import { WarningIcon } from '../ui/Icon';
import styles from './ResultDisclaimer.module.css';

/**
 * Cảnh báo bắt buộc: bản do máy soạn chỉ để tham khảo, phải rà soát trước khi
 * sử dụng chính thức.
 */
export function ResultDisclaimer({ children, size = 'md' }: { children: string; size?: 'md' | 'lg' }) {
  return (
    <div className={[styles.wrap, size === 'lg' ? styles.lg : ''].join(' ')}>
      <WarningIcon size={size === 'lg' ? 14 : 13} color="var(--c-warning)" className={styles.icon} />
      <span className={styles.text}>{children}</span>
    </div>
  );
}
