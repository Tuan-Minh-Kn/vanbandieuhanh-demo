import { EMPTY_QUEUES } from '../../data/dashboard';
import { CheckIcon } from '../ui/Icon';
import styles from './EmptyQueues.module.css';

/** Ba hàng đợi đang rỗng — dự thảo, tờ trình, văn bản nội bộ. */
export function EmptyQueues() {
  return (
    <div className={styles.grid}>
      {EMPTY_QUEUES.map((queue) => (
        <div key={queue.title} className={styles.card}>
          <span className={styles.icon}>
            <CheckIcon size={15} strokeWidth={1.9} />
          </span>
          <div>
            <div className={styles.title}>{queue.title}</div>
            <div className={styles.note}>{queue.note}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
