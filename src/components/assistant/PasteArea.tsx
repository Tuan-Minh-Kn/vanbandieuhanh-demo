import styles from './PasteArea.module.css';

/** Ước lượng số trang A4 theo số ký tự (khoảng 1.800 ký tự/trang). */
const CHARS_PER_PAGE = 1800;

export interface PasteAreaProps {
  value: string;
  onChange: (value: string) => void;
}

/** Ô dán toàn văn thay cho tải tệp. */
export function PasteArea({ value, onChange }: PasteAreaProps) {
  const pages = Math.round((value.length / CHARS_PER_PAGE) * 10) / 10;
  return (
    <div>
      <textarea
        className={styles.field}
        placeholder="Dán toàn văn hoặc đoạn trích văn bản…"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Dán văn bản"
      />
      <div className={styles.count}>
        {value.length.toLocaleString('vi-VN')} ký tự · khoảng {pages.toLocaleString('vi-VN')} trang A4
      </div>
    </div>
  );
}
