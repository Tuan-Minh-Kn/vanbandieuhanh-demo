import type { ReactNode } from 'react';
import styles from './Badge.module.css';

export type BadgeTone = 'info' | 'success' | 'warning' | 'danger' | 'neutral' | 'brand';

export interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  size?: 'md' | 'sm';
}

/** Chip đếm / nhãn trạng thái dạng viên thuốc. */
export function Badge({ children, tone = 'info', size = 'md' }: BadgeProps) {
  return <span className={[styles.badge, styles[tone], size === 'sm' ? styles.sm : ''].join(' ')}>{children}</span>;
}
