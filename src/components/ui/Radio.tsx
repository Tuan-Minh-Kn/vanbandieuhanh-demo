import styles from './Radio.module.css';

export interface RadioProps {
  checked: boolean;
  onChange: () => void;
  /** Nhãn cho trình đọc màn hình — ô chỉ hiển thị vòng tròn. */
  label: string;
}

/** Ô chọn một tệp duy nhất để đưa vào lần chạy của trợ lý. */
export function Radio({ checked, onChange, label }: RadioProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      aria-label={label}
      className={styles.wrap}
      onClick={onChange}
    >
      <span className={[styles.dot, checked ? styles.checked : ''].join(' ')}>
        <span className={styles.inner} />
      </span>
    </button>
  );
}
