import { InputSourceCard } from '../components/assistant/InputSourceCard';
import { ModeTabs } from '../components/assistant/ModeTabs';
import { ResultCard } from '../components/assistant/ResultCard';
import { SessionList } from '../components/assistant/SessionList';
import { BrandBar } from '../components/layout/BrandBar';
import { Button } from '../components/ui/Button';
import { RefreshIcon, ShieldIcon } from '../components/ui/Icon';
import { MODEL_NAME, PRIVACY_NOTE, STANDALONE_SESSION_LABEL } from '../data/assistant';
import { STANDALONE_SUMMARY } from '../data/standaloneSession';
import { useAssistant } from '../lib/useAssistant';
import styles from './AssistantPage.module.css';

export interface AssistantPageProps {
  /** Quay lại hộp việc. */
  onBack: () => void;
}

/** Trang Trợ lý văn bản pháp luật độc lập: nạp tài liệu rời, tóm tắt hoặc tham mưu. */
export function AssistantPage({ onBack }: AssistantPageProps) {
  const assistant = useAssistant({ summaryText: STANDALONE_SUMMARY });

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <BrandBar title="Trợ lý văn bản pháp luật" size="lg" />
        <span className={styles.spacer} />
        <span className={styles.chip}>
          <ShieldIcon size={13} />
          {PRIVACY_NOTE}
        </span>
        <span className={styles.modelChip}>
          <span className={styles.live} />
          {MODEL_NAME}
        </span>
      </header>

      <div className={styles.toolbar}>
        <ModeTabs variant="hero" mode={assistant.mode} onChange={assistant.setMode} />
        <span className={styles.spacer} />
        <span className={styles.session}>{STANDALONE_SESSION_LABEL}</span>
        <span className={styles.divider} />
        <Button variant="secondary" onClick={onBack}>
          Về hộp việc
        </Button>
        <Button variant="secondary" onClick={assistant.reset}>
          <RefreshIcon size={14} />
          Phiên mới
        </Button>
      </div>

      <div className={styles.grid}>
        <SessionList />
        <InputSourceCard assistant={assistant} />
        <ResultCard assistant={assistant} />
      </div>
    </div>
  );
}
