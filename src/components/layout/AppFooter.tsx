import { FOOTER_COLUMNS, STORE_BADGES } from '../../data/dashboard';
import { FillIcon } from '../ui/Icon';
import styles from './AppFooter.module.css';

/** Chân trang: nhận diện đơn vị, thông tin liên hệ, hỗ trợ, ứng dụng di động. */
export function AppFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <img src="/assets/ktnn-crest.png" alt="" className={styles.crest} />

        <div className={styles.identity}>
          <div className={styles.identityTitle}>
            Hệ thống Quản lý Văn bản và Điều hành
            <br />
            Kiểm toán nhà nước Việt Nam
          </div>
          <div className={styles.copyright}>© 2026 Bản quyền thuộc Kiểm toán nhà nước Việt Nam</div>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <div className={styles.colTitle}>{column.title}</div>
            <div className={styles.colLines}>
              {column.lines.map((line) => (
                <div key={line} className={styles.colLine}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}

        <span className={styles.spacer} />

        <div className={styles.stores}>
          <div className={styles.colTitle}>ỨNG DỤNG DI ĐỘNG</div>
          <div className={styles.storeRow}>
            {STORE_BADGES.map((store) => (
              <button key={store.name} type="button" className={styles.store}>
                <FillIcon d={store.icon} size={16} />
                <span className={styles.storeText}>
                  <span className={styles.storeSmall}>{store.small}</span>
                  <span className={styles.storeName}>{store.name}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
