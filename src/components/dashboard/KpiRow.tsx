import { KPIS } from '../../data/dashboard';
import styles from './KpiRow.module.css';

/** Bốn chỉ số đầu hộp việc: tồn, sắp đến hạn, chờ phát hành, đã có tóm tắt AI. */
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
