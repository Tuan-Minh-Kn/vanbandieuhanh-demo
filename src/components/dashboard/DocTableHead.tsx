import styles from './DocTableHead.module.css';

export interface DocTableHeadProps {
  /** Bộ cột: hàng văn bản đến (5 cột) hoặc văn bản đi (4 cột). */
  layout: 'incoming' | 'outgoing';
  columns: string[];
}

/** Hàng tiêu đề cột của bảng văn bản; cột cuối luôn căn phải. */
export function DocTableHead({ layout, columns }: DocTableHeadProps) {
  return (
    <div className={[styles.head, styles[layout]].join(' ')}>
      {columns.map((column, index) => (
        <span key={column} className={index === columns.length - 1 ? styles.right : undefined}>
          {column}
        </span>
      ))}
    </div>
  );
}
