import { useEffect } from 'react';
import type { Attachment } from '../../types';
import { CloseIcon, DownloadIcon, ExternalLinkIcon } from '../ui/Icon';
import { FileBadge } from '../ui/FileBadge';
import styles from './DocumentPreviewModal.module.css';

export interface DocumentPreviewModalProps {
  /** Tệp đang xem; null thì không hiện gì. */
  file: Attachment | null;
  onClose: () => void;
}

/**
 * Xem trước tệp văn bản thật bằng trình đọc PDF sẵn có của trình duyệt.
 * Nằm trên hộp thoại trợ lý (z-index 60/61) để xem được cả khi trợ lý đang mở.
 */
export function DocumentPreviewModal({ file, onClose }: DocumentPreviewModalProps) {
  useEffect(() => {
    if (!file) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [file, onClose]);

  if (!file || !file.url) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} aria-hidden />
      <div className={styles.panel} role="dialog" aria-modal="true" aria-label={`Xem trước ${file.name}`}>
        <header className={styles.header}>
          <FileBadge ext={file.ext} />
          <div className={styles.text}>
            <div className={styles.name}>{file.name}</div>
            <div className={styles.meta}>{file.meta}</div>
          </div>
          <div className={styles.actions}>
            <a className={styles.linkButton} href={file.url} target="_blank" rel="noreferrer">
              <ExternalLinkIcon size={13} />
              Mở tab mới
            </a>
            <a className={styles.linkButton} href={file.url} download={file.name}>
              <DownloadIcon size={13} />
              Tải xuống
            </a>
            <button type="button" className={styles.close} onClick={onClose} aria-label="Đóng xem trước">
              <CloseIcon size={15} />
            </button>
          </div>
        </header>

        <iframe className={styles.viewer} src={`${file.url}#view=FitH`} title={`Xem trước ${file.name}`} />

        <div className={styles.fallback}>
          Trình duyệt không hiện được tệp? Bấm <strong>Mở tab mới</strong> hoặc <strong>Tải xuống</strong>.
        </div>
      </div>
    </>
  );
}
