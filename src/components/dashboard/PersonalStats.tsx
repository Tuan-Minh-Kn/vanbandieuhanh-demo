import { PERSONAL_STATS, PERSONAL_STATS_PERIOD } from '../../data/dashboard';
import styles from './PersonalStats.module.css';

/** Thống kê văn bản đến của cá nhân trong tháng. */
export function PersonalStats() {
  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <span className={styles.accent} />
        <h2 className={styles.title}>Thống kê văn bản đến cá nhân</h2>
        <span className={styles.spacer} />
        <span className={styles.period}>{PERSONAL_STATS_PERIOD}</span>
      </header>

      <div className={styles.grid}>
        {PERSONAL_STATS.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <div className={styles.statHead}>
              <span className={styles.swatch} style={{ background: stat.color }} />
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.spacer} />
              <span className={styles.value}>{stat.value}</span>
            </div>
            <div className={styles.track}>
              <div className={styles.bar} style={{ width: `${stat.percent}%`, background: stat.color }} />
            </div>
            <div className={styles.note}>{stat.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
