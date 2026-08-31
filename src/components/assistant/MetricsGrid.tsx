import type { Metric } from '../../types';
import styles from './MetricsGrid.module.css';

/** Ba–bốn số liệu rút ra từ văn bản: độ nén, số điều khoản dẫn, hiệu lực… */
export function MetricsGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div className={styles.grid}>
      {metrics.map((metric) => (
        <div key={metric.label} className={styles.cell}>
          <div className={styles.label}>{metric.label}</div>
          <div className={styles.value}>{metric.value}</div>
        </div>
      ))}
    </div>
  );
}
