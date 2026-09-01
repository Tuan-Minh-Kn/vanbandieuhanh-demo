import { KPIS } from '../../data/dashboard';
import styles from './KpiRow.module.css';

/** Chỉ số đầu hộp việc: văn bản tồn, sắp đến hạn, văn bản đi chờ phát hành. */
export function KpiRow() {
  return (
    <div className={styles.grid}>
      {KPIS.map((kpi) => (
        <button key={kpi.label} type="button" className={styles.card}>
          <span className={styles.dot} style={{ background: kpi.color }} />
          <span>
            <span className={styles.value}>{kpi.value}</span>
            <span className={styles.label}>{kpi.label}</span>
          </span>
          <span className={styles.spacer} />
          <span className={styles.trend} style={{ color: kpi.trendColor }}>
            {kpi.trend}
          </span>
        </button>
      ))}
    </div>
  );
}
