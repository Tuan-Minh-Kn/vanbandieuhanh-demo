import { useState } from 'react';
import { AssistantModal } from '../components/assistant/AssistantModal';
import { DocumentPreviewModal } from '../components/preview/DocumentPreviewModal';
import { EmptyQueues } from '../components/dashboard/EmptyQueues';
import { IncomingDocsCard } from '../components/dashboard/IncomingDocsCard';
import { KpiRow } from '../components/dashboard/KpiRow';
import { OutgoingDocsCard } from '../components/dashboard/OutgoingDocsCard';
import { PersonalStats } from '../components/dashboard/PersonalStats';
import { AppFooter } from '../components/layout/AppFooter';
import { AppHeader } from '../components/layout/AppHeader';
import { Sidebar } from '../components/layout/Sidebar';
import { INCOMING_DOCS, OUTGOING_DOCS } from '../data/documents';
import { useAssistant } from '../lib/useAssistant';
import type { Attachment, AssistantMode } from '../types';
import styles from './InboxPage.module.css';

/** Trang "Hộp việc của tôi" — hộp việc văn bản đến/đi kèm trợ lý AI. */
export function InboxPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [assistantOpen, setAssistantOpen] = useState(false);
  /** Tên tệp sẽ đưa vào lần chạy hiện tại — mỗi lần chỉ xử lý một tệp. */
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  /** Tệp đang xem trước; null là không mở. */
  const [previewFile, setPreviewFile] = useState<Attachment | null>(null);
  const activeDoc = INCOMING_DOCS[activeIndex];
  const assistant = useAssistant({ summaryText: activeDoc.summary });

  /**
   * Mở trợ lý cho một văn bản, chọn sẵn tệp đầu tiên và dừng ở bước chọn tệp —
   * người dùng đổi tệp nếu cần rồi tự bấm chạy.
   */
  const openAssistant = (index: number, mode: AssistantMode) => {
    setActiveIndex(index);
    setSelectedFile(INCOMING_DOCS[index].attachments[0]?.name ?? null);
    setAssistantOpen(true);
    assistant.setMode(mode);
  };

  /** Đã chỉ rõ tệp thì bỏ qua bước chọn, chạy tóm tắt ngay. */
  const summarizeFile = (index: number, file: Attachment) => {
    setActiveIndex(index);
    setSelectedFile(file.name);
    setAssistantOpen(true);
    assistant.start('summary');
  };

  /**
   * Đổi tệp thì bỏ kết quả cũ: giữ lại sẽ thành bản tóm tắt của lần chạy trước
   * nhưng ghi nguồn là tệp vừa chọn.
   */
  /** Xem trước theo tên tệp — dùng từ hộp thoại trợ lý, nơi chỉ có tên. */
  const previewByName = (name: string) => {
    const file = activeDoc.attachments.find((item) => item.name === name);
    if (file) setPreviewFile(file);
  };

  const selectFile = (name: string) => {
    if (name === selectedFile) return;
    assistant.reset();
    setSelectedFile(name);
  };

  return (
    <div className={styles.page}>
      <AppHeader />

      <div className={styles.body}>
        <Sidebar />

        <main className={styles.main}>
          <div className={styles.toolbar}>
            <h1 className={styles.pageTitle}>Hộp việc của tôi</h1>
            <div className={styles.pageMeta}>3 văn bản chờ xử lý · 1 sắp đến hạn · cập nhật 20:08</div>
          </div>

          <div className={styles.scroll}>
            <div className={styles.stack}>
              <KpiRow />
              <IncomingDocsCard
                docs={INCOMING_DOCS}
                onSummarize={(index) => openAssistant(index, 'summary')}
                onSummarizeFile={summarizeFile}
                onPreviewFile={setPreviewFile}
                onAdvise={(index) => openAssistant(index, 'advice')}
              />
              <OutgoingDocsCard docs={OUTGOING_DOCS} onCompare={() => openAssistant(0, 'summary')} />
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
        selectedFile={selectedFile}
        onSelectFile={selectFile}
        onPreviewFile={previewByName}
        onClose={() => setAssistantOpen(false)}
      />

      <DocumentPreviewModal file={previewFile} onClose={() => setPreviewFile(null)} />
    </div>
  );
}
