import { RECENT_SESSIONS, REMINDER_NOTE } from '../../data/assistant';
import styles from './SessionList.module.css';

/** Cột trái trang Trợ lý: phiên gần đây và ghi chú nhắc nhanh. */
export function SessionList() {
  return (
    <aside className={styles.column}>
      <div className={styles.card}>
        <div className={styles.cardTitle}>PHIÊN GẦN ĐÂY</div>
        {RECENT_SESSIONS.map((session) => (
          <button key={session.title} type="button" className={styles.row}>
            <span className={styles.stripe} style={{ background: session.color }} />
            <span className={styles.rowText}>
              <span className={styles.rowTitle}>{session.title}</span>
              <span className={styles.rowMeta}>{session.meta}</span>
            </span>
          </button>
        ))}
      </div>

      <div className={styles.reminder}>
        <div className={styles.reminderTitle}>Nhắc nhanh</div>
        <div className={styles.reminderText}>{REMINDER_NOTE}</div>
      </div>
    </aside>
  );
}
