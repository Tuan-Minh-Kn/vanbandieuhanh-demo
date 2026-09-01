import { useEffect, useState } from 'react';
import { SparkleIcon } from '../ui/Icon';
import styles from './ThinkingIndicator.module.css';

const TICK = 100;

export interface ThinkingIndicatorProps {
  size?: 'md' | 'lg';
  /** Dòng phụ mô tả model đang làm gì. */
  note?: string;
}

/**
 * Trạng thái "AI đang suy nghĩ": chỉ một khối duy nhất, chạy trong lúc model xử lý
 * rồi nhường chỗ cho bản tóm tắt hiện dần. Đồng hồ đếm giây do chính component
 * giữ, chỉ chạy khi khối này còn trên màn hình.
 */
export function ThinkingIndicator({ size = 'md', note }: ThinkingIndicatorProps) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = window.setInterval(() => setElapsed((Date.now() - start) / 1000), TICK);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={[styles.wrap, size === 'lg' ? styles.lg : ''].join(' ')} aria-live="polite" aria-busy>
      <div className={styles.head}>
        <span className={styles.orb}>
          <SparkleIcon size={size === 'lg' ? 16 : 14} strokeWidth={2} />
        </span>
        <span className={styles.label}>AI đang suy nghĩ</span>
        <span className={styles.dots} aria-hidden>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </span>
        <span className={styles.spacer} />
        <span className={styles.timer}>{elapsed.toFixed(1).replace('.', ',')} giây</span>
      </div>

      <div className={styles.lines} aria-hidden>
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </div>

      {note && <div className={styles.note}>{note}</div>}
    </div>
  );
}
