import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './IconButton.module.css';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'outline' | 'tint' | 'solid' | 'ghost';
  label: string;
}

/** Nút chỉ có icon; `label` bắt buộc để đọc được bằng trình đọc màn hình. */
export function IconButton({ children, variant = 'outline', label, className, ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      className={[styles.base, styles[variant], className ?? ''].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
