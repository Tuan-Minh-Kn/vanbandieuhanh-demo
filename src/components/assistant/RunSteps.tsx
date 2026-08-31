import styles from './RunSteps.module.css';

export interface RunStepsProps {
  steps: string[];
  /** Số bước đã hoàn thành; bước thứ `step` là bước đang chạy. */
  step: number;
  size?: 'md' | 'lg';
}

/** Ba bước xử lý kèm thanh tiến trình chạy quét. */
export function RunSteps({ steps, step, size = 'md' }: RunStepsProps) {
  const lg = size === 'lg';
  return (
    <div className={styles.wrap} aria-live="polite">
      {steps.map((label, index) => (
        <div key={label} className={[styles.step, lg ? styles.stepLg : ''].join(' ')}>
          <span
            className={[
              styles.dot,
              lg ? styles.dotLg : '',
              index < step ? styles.dotDone : '',
              index === step ? styles.dotCurrent : '',
            ].join(' ')}
          />
          <span
            className={[styles.label, lg ? styles.labelLg : '', index <= step ? styles.labelActive : ''].join(' ')}
          >
            {label}
          </span>
        </div>
      ))}
      <div className={styles.track}>
        <div className={styles.sweep} />
      </div>
    </div>
  );
}
