import type { Citation } from '../../types';
import { SectionLabel } from '../ui/SectionLabel';
import styles from './CitationList.module.css';

/** Các điều khoản được dẫn để kiểm toán viên đối chiếu với văn bản gốc. */
export function CitationList({ citations }: { citations: Citation[] }) {
  if (citations.length === 0) return null;

  return (
    <div>
      <div className={styles.heading}>
        <SectionLabel>ĐIỀU KHOẢN ĐƯỢC DẪN</SectionLabel>
      </div>
      <div className={styles.list}>
        {citations.map((citation) => (
          <div key={citation.ref} className={styles.item}>
            <span className={styles.ref}>{citation.ref}</span>
            <span className={styles.text}>{citation.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
