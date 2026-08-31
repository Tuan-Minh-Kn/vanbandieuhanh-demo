import { PresetChip } from '../ui/Chip';
import styles from './DirectiveInput.module.css';

export interface DirectiveInputProps {
  value: string;
  onChange: (value: string) => void;
  presets: string[];
  placeholder: string;
  size?: 'md' | 'lg';
}

/** Ô nhập chỉ đạo của lãnh đạo — bắt buộc ở chế độ Tham mưu. */
export function DirectiveInput({ value, onChange, presets, placeholder, size = 'md' }: DirectiveInputProps) {
  return (
    <div className={[styles.wrap, size === 'lg' ? styles.lg : ''].join(' ')}>
      <div className={styles.head}>
        <label className={styles.label} htmlFor="directive">
          Chỉ đạo của lãnh đạo
        </label>
        <span className={styles.required}>bắt buộc</span>
      </div>
      <textarea
        id="directive"
        className={styles.field}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <div className={styles.presets}>
        {presets.map((preset) => (
          <PresetChip key={preset} size={size === 'lg' ? 'lg' : 'sm'} onClick={() => onChange(preset)}>
            {preset}
          </PresetChip>
        ))}
      </div>
    </div>
  );
}
