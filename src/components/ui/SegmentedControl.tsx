import styles from './SegmentedControl.module.css';

export interface SegmentedControlProps {
  items: readonly string[];
  value: number;
  onChange: (index: number) => void;
  /** "wide" dùng cho các nhóm nút trong khối nhập liệu (chữ 12px). */
  size?: 'sm' | 'wide';
  ariaLabel?: string;
}

/** Nhóm nút chọn một trong nhiều — lọc hộp việc, độ dài tóm tắt, cách nhập văn bản. */
export function SegmentedControl({ items, value, onChange, size = 'sm', ariaLabel }: SegmentedControlProps) {
  return (
    <div className={styles.track} role="tablist" aria-label={ariaLabel}>
      {items.map((label, index) => (
        <button
          key={label}
          type="button"
          role="tab"
          aria-selected={value === index}
          className={[styles.item, size === 'wide' ? styles.wide : '', value === index ? styles.active : ''].join(' ')}
          onClick={() => onChange(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
