import styles from './Chip.module.css';

/** Gợi ý bút phê bấm được. */
export function PresetChip({
  children,
  size = 'sm',
  onClick,
}: {
  children: string;
  size?: 'sm' | 'lg';
  onClick?: () => void;
}) {
  return (
    <button type="button" className={[styles.preset, size === 'lg' ? styles.lg : ''].join(' ')} onClick={onClick}>
      {children}
    </button>
  );
}

/** Nhãn điều khoản được dẫn (Điều 4.2, Mục V, Bút phê…). */
export function RefChip({ children, size = 'sm' }: { children: string; size?: 'sm' | 'lg' }) {
  return <span className={[styles.ref, size === 'lg' ? styles.refLg : ''].join(' ')}>{children}</span>;
}
