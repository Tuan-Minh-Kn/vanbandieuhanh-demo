import styles from './Toggle.module.css';

export interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  size?: 'sm' | 'lg';
}

/** Công tắc nhỏ — dùng cho "Kèm điều khoản trích dẫn". */
export function Toggle({ checked, onChange, label, size = 'sm' }: ToggleProps) {
  return (
    <button type="button" className={styles.wrap} role="switch" aria-checked={checked} onClick={onChange}>
      <span
        className={[styles.track, size === 'lg' ? styles.lg : '', checked ? styles.on : ''].join(' ')}
      >
        <span className={styles.knob} />
      </span>
      {label}
    </button>
  );
}
