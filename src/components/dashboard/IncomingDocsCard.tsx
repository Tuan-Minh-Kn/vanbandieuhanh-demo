import { useState } from 'react';
import { INBOX_FILTERS } from '../../data/dashboard';
import type { IncomingDoc } from '../../types';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { SegmentedControl } from '../ui/SegmentedControl';
import { DocTableHead } from './DocTableHead';
import { IncomingDocRow } from './IncomingDocRow';
import styles from './IncomingDocsCard.module.css';

const COLUMNS = ['NGÀY ĐẾN', 'SỐ KÝ HIỆU', 'TRÍCH YẾU · CƠ QUAN', 'HẠN XỬ LÝ', 'Ý KIẾN · THAO TÁC'];

export interface IncomingDocsCardProps {
  docs: IncomingDoc[];
  onSummarize: (index: number) => void;
  onAdvise: (index: number) => void;
}

/** Bảng "Văn bản đến chưa xử lý" — lọc nhanh, mở tệp đính kèm, gọi trợ lý. */
export function IncomingDocsCard({ docs, onSummarize, onAdvise }: IncomingDocsCardProps) {
  const [filter, setFilter] = useState(0);
  const [expanded, setExpanded] = useState(0);

  return (
    <Card
      accent="var(--c-blue)"
      title="Văn bản đến chưa xử lý"
      count={<Badge tone="info">{docs.length}</Badge>}
      actions={
        <div className={styles.headerActions}>
          <SegmentedControl items={INBOX_FILTERS} value={filter} onChange={setFilter} ariaLabel="Lọc văn bản đến" />
          <button type="button" className={styles.viewAll}>
            Xem tất cả
          </button>
        </div>
      }
    >
      <DocTableHead layout="incoming" columns={COLUMNS} />
      {docs.map((doc, index) => (
        <IncomingDocRow
          key={doc.id}
          doc={doc}
          expanded={expanded === index}
          onToggle={() => setExpanded((current) => (current === index ? -1 : index))}
          onSummarize={() => onSummarize(index)}
          onAdvise={() => onAdvise(index)}
        />
      ))}
    </Card>
  );
}
