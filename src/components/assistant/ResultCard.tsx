import { DISCLAIMER_STANDALONE } from '../../data/assistant';
import {
  STANDALONE_ADVICE,
  STANDALONE_CITATIONS,
  STANDALONE_METRICS,
} from '../../data/standaloneSession';
import type { AssistantController } from '../../lib/useAssistant';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { CopyIcon, DownloadIcon } from '../ui/Icon';
import { AdviceGroups } from './AdviceGroups';
import { CitationList } from './CitationList';
import { EmptyResult } from './EmptyResult';
import { MetricsGrid } from './MetricsGrid';
import { ResultDisclaimer } from './ResultDisclaimer';
import { ThinkingIndicator } from './ThinkingIndicator';
import { SummaryStream } from './SummaryStream';
import styles from './ResultCard.module.css';

const EMPTY_HINT = {
  summary: 'Bản tóm tắt văn xuôi hiện dần theo từng chữ, kèm điều khoản được dẫn để đối chiếu.',
  advice: 'Kết quả gồm bốn mục: việc tham mưu, nội dung cần nghiên cứu, việc tiếp theo và điểm chưa rõ.',
};

const ELAPSED = { summary: '7,8 giây', advice: '11,4 giây' };

const THINKING_NOTE = {
  summary: 'Đang đọc tài liệu bạn cung cấp và trích các điều khoản liên quan.',
  advice: 'Đang đối chiếu chỉ đạo của lãnh đạo với nội dung tài liệu.',
};

/** Cột phải trang Trợ lý: trạng thái xử lý và kết quả đầy đủ. */
export function ResultCard({ assistant }: { assistant: AssistantController }) {
  const { mode, isIdle, isRunning, isStreaming, isDone, stream, cite, elapsedLabel } = assistant;
  const advice = mode === 'advice';

  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.title}>Kết quả</h2>
        {isDone && <Badge tone="success">Hoàn tất · {elapsedLabel ?? ELAPSED[mode]}</Badge>}
        <span className={styles.spacer} />
        {isDone && (
          <div className={styles.actions}>
            <Button size="sm" variant="secondary" onClick={assistant.copy}>
              <CopyIcon size={13} strokeWidth={1.9} />
              {assistant.copied ? 'Đã sao chép' : 'Sao chép'}
            </Button>
            <Button size="sm" variant="secondary">
              <DownloadIcon size={13} strokeWidth={1.9} />
              Xuất DOCX
            </Button>
          </div>
        )}
      </header>

      {isIdle && <EmptyResult variant="filled" hint={EMPTY_HINT[mode]} />}

      {isRunning && (
        <div className={styles.running}>
          <ThinkingIndicator size="lg" note={THINKING_NOTE[mode]} />
        </div>
      )}

      {!advice && (isStreaming || isDone) && (
        <div className={styles.output}>
          <SummaryStream size="lg" text={stream} streaming={isStreaming} />
          {isDone && (
            <div className={styles.details}>
              <MetricsGrid metrics={STANDALONE_METRICS} />
              <CitationList citations={cite ? STANDALONE_CITATIONS : []} />
            </div>
          )}
        </div>
      )}

      {advice && isDone && (
        <div className={[styles.output, styles.outputAdvice].join(' ')}>
          <AdviceGroups size="lg" groups={STANDALONE_ADVICE} />
        </div>
      )}

      <div className={styles.grow} />

      {isDone && (
        <div className={styles.footer}>
          <ResultDisclaimer size="lg">{DISCLAIMER_STANDALONE}</ResultDisclaimer>
        </div>
      )}
    </section>
  );
}
