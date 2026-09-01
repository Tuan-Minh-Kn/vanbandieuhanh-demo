import { useState } from 'react';
import { DIRECTIVE_PRESETS, LENGTH_OPTIONS } from '../../data/assistant';
import { STANDALONE_FILES_ADVICE, STANDALONE_FILES_SUMMARY } from '../../data/standaloneSession';
import type { AssistantController } from '../../lib/useAssistant';
import { Button } from '../ui/Button';
import { SegmentedControl } from '../ui/SegmentedControl';
import { Toggle } from '../ui/Toggle';
import { AttachedFileList } from './AttachedFileList';
import { DirectiveInput } from './DirectiveInput';
import { FileDropZone } from './FileDropZone';
import { PasteArea } from './PasteArea';
import styles from './InputSourceCard.module.css';

const SOURCE_TABS = ['Tải file', 'Dán văn bản'];

const RUN_HINT = {
  summary: 'Ctrl + Enter để chạy · trung bình 6–12 giây cho văn bản 30 trang',
  advice: 'Ctrl + Enter để chạy · model chỉ dựa vào tài liệu và chỉ đạo bạn đưa vào',
};

/** Cột giữa trang Trợ lý: nạp văn bản, nhập chỉ đạo, chọn tuỳ chọn rồi chạy. */
export function InputSourceCard({ assistant }: { assistant: AssistantController }) {
  const [source, setSource] = useState(0);
  const [pasted, setPasted] = useState('');
  const [directive, setDirective] = useState('');

  const { mode, isRunning, isStreaming } = assistant;
  const advice = mode === 'advice';
  const busy = isRunning || isStreaming;
  const usingFiles = source === 0;

  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.title}>{advice ? 'Tài liệu & chỉ đạo' : 'Văn bản cần tóm tắt'}</h2>
        <span className={styles.spacer} />
        <SegmentedControl
          items={SOURCE_TABS}
          value={source}
          onChange={setSource}
          size="wide"
          ariaLabel="Cách nạp văn bản"
        />
      </header>

      <div className={styles.section}>
        {usingFiles ? (
          <FileDropZone
            title={
              advice
                ? 'Kéo thả các tài liệu liên quan, hoặc bấm để chọn'
                : 'Kéo thả văn bản vào đây, hoặc bấm để chọn'
            }
          />
        ) : (
          <PasteArea value={pasted} onChange={setPasted} />
        )}
      </div>

      {usingFiles && (
        <div className={styles.section}>
          <AttachedFileList files={advice ? STANDALONE_FILES_ADVICE : STANDALONE_FILES_SUMMARY} />
        </div>
      )}

      {advice && (
        <div className={styles.section}>
          <DirectiveInput
            size="lg"
            value={directive}
            onChange={setDirective}
            presets={DIRECTIVE_PRESETS}
            placeholder="Dán bút phê hoặc chỉ đạo. Ví dụ: Nghiên cứu, đề xuất nội dung tham gia ý kiến; báo cáo trước 30/9."
          />
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.options}>
          <span className={styles.optionLabel}>{advice ? 'Mức chi tiết' : 'Độ dài'}</span>
          <SegmentedControl
            items={LENGTH_OPTIONS[mode]}
            value={assistant.lengthIndex}
            onChange={assistant.setLengthIndex}
            size="wide"
            ariaLabel={advice ? 'Mức chi tiết' : 'Độ dài bản tóm tắt'}
          />
          <span className={styles.spacer} />
          <Toggle
            size="lg"
            checked={assistant.cite}
            onChange={assistant.toggleCite}
            label="Kèm điều khoản trích dẫn"
          />
        </div>

        <div className={styles.runRow}>
          <Button size="lg" variant={busy ? 'muted' : 'primary'} disabled={busy} onClick={assistant.run}>
            {busy ? 'Đang xử lý…' : advice ? 'Đề xuất việc cần làm' : 'Tóm tắt văn bản'}
          </Button>
          <span className={styles.runHint}>{RUN_HINT[mode]}</span>
        </div>
      </div>
    </section>
  );
}
