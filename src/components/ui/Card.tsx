import type { ReactNode } from 'react';
import styles from './Card.module.css';

export interface CardProps {
  /** Màu vạch dọc trước tiêu đề (var(--c-blue), var(--c-teal)…). */
  accent?: string;
  title?: string;
  /** Chip đếm hiển thị ngay sau tiêu đề. */
  count?: ReactNode;
  /** Khu vực bên phải của header. */
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Thẻ nội dung nền trắng, viền mảnh, bóng nhuốm navy. */
export function Card({ accent, title, count, actions, children, className }: CardProps) {
  return (
    <section className={[styles.card, className ?? ''].join(' ')}>
      {title && (
        <header className={styles.header}>
          {accent && <span className={styles.accent} style={{ background: accent }} />}
          <h2 className={styles.title}>{title}</h2>
          {count}
          <span className={styles.spacer} />
          {actions}
        </header>
      )}
      {children}
    </section>
  );
}
