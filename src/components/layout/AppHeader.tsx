import { CURRENT_USER, NOTIFICATION_COUNT, SESSION_CLOCK } from '../../data/dashboard';
import { BellIcon, ClockIcon, SearchIcon } from '../ui/Icon';
import { BrandBar } from './BrandBar';
import styles from './AppHeader.module.css';

/** Thanh tiêu đề hệ thống: nhận diện KTNN, ô tìm kiếm, đồng hồ, thông báo, người dùng. */
export function AppHeader() {
  return (
    <header className={styles.header}>
      <BrandBar title="Hệ thống Quản lý Văn bản và Điều hành" />

      <div className={styles.searchWrap}>
        <button type="button" className={styles.search}>
          <SearchIcon size={14} className={styles.searchIcon} />
          <span className={styles.searchPlaceholder}>Tìm số ký hiệu, trích yếu, cơ quan ban hành…</span>
          <span className={styles.kbd}>Ctrl K</span>
        </button>
      </div>

      <div className={styles.clock}>
        <ClockIcon size={14} />
        {SESSION_CLOCK}
      </div>

      <button type="button" className={styles.bell} aria-label={`Thông báo (${NOTIFICATION_COUNT})`}>
        <BellIcon size={16} strokeWidth={1.9} />
        <span className={styles.bellCount}>{NOTIFICATION_COUNT}</span>
      </button>

      <button type="button" className={styles.user}>
        <span className={styles.avatar}>{CURRENT_USER.initials}</span>
        <span className={styles.userText}>
          <span className={styles.userName}>{CURRENT_USER.name}</span>
          <span className={styles.userUnit}>{CURRENT_USER.unit}</span>
        </span>
      </button>
    </header>
  );
}
