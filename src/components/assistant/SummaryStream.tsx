import { Badge } from '../ui/Badge';
import { SectionLabel } from '../ui/SectionLabel';
import styles from './SummaryStream.module.css';

export interface SummaryStreamProps {
  text: string;
  streaming: boolean;
  /** Thời gian xử lý, hiện khi đã xong. */
  elapsed?: string;
  /** Tên tệp đã dùng để soạn bản tóm tắt. */
  source?: string | null;
  size?: 'md' | 'lg';
}

/** Bản tóm tắt hiện dần theo từng chữ, kèm con trỏ nhấp nháy khi đang gõ. */
export function SummaryStream({ text, streaming, elapsed, source, size = 'md' }: SummaryStreamProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <SectionLabel>BẢN TÓM TẮT</SectionLabel>
        {elapsed && (
          <Badge tone="success" size="sm">
            {elapsed}
          </Badge>
        )}
      </div>
      {source && (
        <div className={styles.sources} title={source}>
          Nguồn: {source}
        </div>
      )}
      <p className={[styles.text, size === 'lg' ? styles.lg : ''].join(' ')} aria-live="polite">
        {text}
        {streaming && <span className={styles.caret} />}
      </p>
    </div>
  );
}
