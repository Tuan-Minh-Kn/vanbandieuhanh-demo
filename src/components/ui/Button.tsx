import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'brand' | 'muted';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: 'md' | 'sm' | 'lg' | 'block';
}

/**
 * primary = dải xanh KTNN (hành động chính) · brand = nền gradient nhạt (hành động AI)
 * secondary = viền mảnh · muted = đang xử lý, không bấm được.
 */
export function Button({ children, variant = 'secondary', size = 'md', className, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={[styles.base, styles[size], styles[variant], className ?? ''].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
