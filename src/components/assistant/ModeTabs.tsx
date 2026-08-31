import type { AssistantMode } from '../../types';
import { AdviceIcon, SummaryIcon } from '../ui/Icon';
import styles from './ModeTabs.module.css';

export interface ModeTabsProps {
  mode: AssistantMode;
  onChange: (mode: AssistantMode) => void;
  /** "panel" cho hộp thoại trong hộp việc, "hero" cho trang Trợ lý độc lập. */
  variant?: 'panel' | 'hero';
}

const HERO_HINT: Record<AssistantMode, string> = {
  summary: 'Một văn bản → 4–6 câu',
  advice: 'Tài liệu + chỉ đạo → việc cần làm',
};

const LABEL: Record<AssistantMode, string> = {
  summary: 'Tóm tắt',
  advice: 'Tham mưu',
};

/** Chuyển giữa hai chế độ của trợ lý: Tóm tắt và Tham mưu. */
export function ModeTabs({ mode, onChange, variant = 'panel' }: ModeTabsProps) {
  const modes: AssistantMode[] = ['summary', 'advice'];

  if (variant === 'hero') {
    return (
      <div className={styles.hero} role="tablist" aria-label="Chế độ trợ lý">
        {modes.map((value) => {
          const Icon = value === 'summary' ? SummaryIcon : AdviceIcon;
          return (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={mode === value}
              className={[styles.heroTab, mode === value ? styles.heroTabActive : ''].join(' ')}
              onClick={() => onChange(value)}
            >
              <Icon size={16} strokeWidth={1.8} />
              <span className={styles.heroText}>
                <span className={styles.heroTitle}>{LABEL[value]}</span>
                <span className={styles.heroHint}>{HERO_HINT[value]}</span>
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={styles.panel} role="tablist" aria-label="Chế độ trợ lý">
      {modes.map((value) => {
        const Icon = value === 'summary' ? SummaryIcon : AdviceIcon;
        return (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={mode === value}
            className={[styles.panelTab, mode === value ? styles.panelTabActive : ''].join(' ')}
            onClick={() => onChange(value)}
          >
            <Icon size={14} strokeWidth={1.9} />
            {LABEL[value]}
          </button>
        );
      })}
    </div>
  );
}
