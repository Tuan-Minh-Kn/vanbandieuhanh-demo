import { useState } from 'react';
import { AssistantModal } from '../components/assistant/AssistantModal';
import { EmptyQueues } from '../components/dashboard/EmptyQueues';
import { IncomingDocsCard } from '../components/dashboard/IncomingDocsCard';
import { KpiRow } from '../components/dashboard/KpiRow';
import { OutgoingDocsCard } from '../components/dashboard/OutgoingDocsCard';
import { PersonalStats } from '../components/dashboard/PersonalStats';
import { AppFooter } from '../components/layout/AppFooter';
import { AppHeader } from '../components/layout/AppHeader';
import { Sidebar } from '../components/layout/Sidebar';
import { Button } from '../components/ui/Button';
import { PlusIcon, SparkleIcon } from '../components/ui/Icon';
import { INCOMING_DOCS, OUTGOING_DOCS } from '../data/documents';
import { useAssistant } from '../lib/useAssistant';
import type { AssistantMode } from '../types';
import styles from './InboxPage.module.css';

export interface InboxPageProps {
  /** Chuyển sang trang Trợ lý đầy đủ. */
  onOpenAssistantPage: () => void;
}

/** Trang "Hộp việc của tôi" — hộp việc văn bản đến/đi kèm trợ lý AI. */
export function InboxPage({ onOpenAssistantPage }: InboxPageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const activeDoc = INCOMING_DOCS[activeIndex];
  const assistant = useAssistant({ summaryText: activeDoc.summary });

  /** Mở trợ lý cho một văn bản và chạy luôn chế độ được chọn. */
  const focusDoc = (index: number, mode: AssistantMode) => {
    setActiveIndex(index);
    setAssistantOpen(true);
    assistant.start(mode);
  };

  return (
    <div className={styles.page}>
      <AppHeader />

      <div className={styles.body}>
        <Sidebar />

        <main className={styles.main}>
          <div className={styles.toolbar}>
            <div>
              <h1 className={styles.pageTitle}>Hộp việc của tôi</h1>
              <div className={styles.pageMeta}>5 văn bản chờ xử lý · 1 sắp đến hạn · cập nhật 20:08</div>
            </div>
            <span className={styles.spacer} />
            <Button variant="brand" onClick={() => focusDoc(0, 'summary')}>
              <SparkleIcon size={14} />
              Tóm tắt cả hộp việc
            </Button>
            <Button variant="primary">
              <PlusIcon size={14} strokeWidth={2.2} />
              Soạn văn bản
            </Button>
          </div>

          <div className={styles.scroll}>
            <div className={styles.stack}>
              <KpiRow />
              <IncomingDocsCard
                docs={INCOMING_DOCS}
                onSummarize={(index) => focusDoc(index, 'summary')}
                onAdvise={(index) => focusDoc(index, 'advice')}
              />
              <OutgoingDocsCard docs={OUTGOING_DOCS} onCompare={() => focusDoc(0, 'summary')} />
              <EmptyQueues />
              <PersonalStats />
            </div>
            <AppFooter />
          </div>
        </main>
      </div>

      <AssistantModal
        open={assistantOpen}
        doc={activeDoc}
        assistant={assistant}
        onClose={() => setAssistantOpen(false)}
        onOpenFullPage={onOpenAssistantPage}
      />
    </div>
  );
}
