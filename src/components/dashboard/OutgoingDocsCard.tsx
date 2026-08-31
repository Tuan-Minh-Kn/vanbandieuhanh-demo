import type { OutgoingDoc } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { DocTableHead } from './DocTableHead';
import styles from './OutgoingDocsCard.module.css';

const COLUMNS = ['SỐ KÝ HIỆU', 'TRÍCH YẾU', 'NGƯỜI KÝ', 'NƠI NHẬN · THAO TÁC'];

export interface OutgoingDocsCardProps {
  docs: OutgoingDoc[];
  /** Đối chiếu dự thảo bằng trợ lý. */
  onCompare: (doc: OutgoingDoc) => void;
}

/** Bảng "Văn bản đi chưa xử lý" (chờ phát hành). */
export function OutgoingDocsCard({ docs, onCompare }: OutgoingDocsCardProps) {
  return (
    <Card
      accent="var(--c-teal)"
      title="Văn bản đi chưa xử lý"
      count={<Badge tone="success">{docs.length}</Badge>}
      actions={
        <button type="button" className={styles.viewAll}>
          Xem tất cả
        </button>
      }
    >
      <DocTableHead layout="outgoing" columns={COLUMNS} />
      {docs.map((doc) => (
        <div key={doc.id} className={styles.row}>
          <div>
            <div className={styles.code}>{doc.code}</div>
            <div className={styles.date}>{doc.date}</div>
          </div>
          <div className={styles.title}>{doc.title}</div>
          <div>
            <div className={styles.signer}>{doc.signer}</div>
            <div className={styles.unit}>{doc.unit}</div>
          </div>
          <div className={styles.actions}>
            <span className={styles.to}>{doc.to}</span>
            <Button size="sm" variant="secondary" onClick={() => onCompare(doc)}>
              Đối chiếu dự thảo
            </Button>
          </div>
        </div>
      ))}
    </Card>
  );
}
