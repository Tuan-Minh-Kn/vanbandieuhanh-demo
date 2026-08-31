import styles from './BrandBar.module.css';

export interface BrandBarProps {
  /** Tên phân hệ hiển thị sau vạch phân cách. */
  title: string;
  size?: 'md' | 'lg';
}

/**
 * Khối nhận diện KTNN đầu thanh tiêu đề. Trả về fragment để các phần tử con
 * tham gia trực tiếp vào flex layout của header.
 */
export function BrandBar({ title, size = 'md' }: BrandBarProps) {
  const lg = size === 'lg';
  return (
    <>
      <img
        src="/assets/ktnn-crest.png"
        alt="Kiểm toán nhà nước"
        className={[styles.crest, lg ? styles.crestLg : styles.crestMd].join(' ')}
      />
      <div className={[styles.names, lg ? styles.lg : ''].join(' ')}>
        <span className={styles.org}>KIỂM TOÁN NHÀ NƯỚC</span>
        <span className={styles.orgEn}>STATE AUDIT OFFICE OF VIETNAM</span>
      </div>
      <span className={[styles.divider, lg ? styles.lgDivider : ''].join(' ')} />
      <span className={[styles.appTitle, lg ? styles.lgTitle : ''].join(' ')}>{title}</span>
    </>
  );
}
