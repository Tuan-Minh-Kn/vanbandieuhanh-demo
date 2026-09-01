import { useState } from 'react';
import { NAV_FOOT_ITEMS, NAV_ITEMS } from '../../data/navigation';
import { ChevronDownIcon, CloseIcon, DownloadIcon, FileIcon, FolderIcon, PathIcon } from '../ui/Icon';
import { IconButton } from '../ui/IconButton';
import styles from './Sidebar.module.css';

export interface SidebarProps {
  /** Chỉ có tác dụng ở khổ hẹp, nơi thanh điều hướng là drawer phủ lên nội dung. */
  open?: boolean;
  onClose?: () => void;
}

/** Thanh điều hướng bên trái: nhóm phân hệ văn bản + ba mục tiện ích gập/mở. */
export function Sidebar({ open = false, onClose }: SidebarProps) {
  const [groupOpen, setGroupOpen] = useState(true);
  const [activeNav, setActiveNav] = useState(0);
  const [openFoot, setOpenFoot] = useState(-1);

  return (
    <>
      {open && <div className={styles.overlay} onClick={onClose} aria-hidden />}
      <nav
        className={[styles.sidebar, open ? styles.sidebarOpen : ''].join(' ')}
        aria-label="Điều hướng phân hệ"
      >
        <div className={styles.closeRow}>
          <button type="button" className={styles.close} onClick={onClose}>
            <CloseIcon size={14} />
            Đóng menu
          </button>
        </div>
      <div className={styles.group}>
        <button
          type="button"
          className={styles.groupHeader}
          aria-expanded={groupOpen}
          onClick={() => setGroupOpen((current) => !current)}
        >
          <FolderIcon size={15} strokeWidth={1.9} />
          <span className={styles.groupLabel}>Quản lý văn bản, điều hành</span>
          <ChevronDownIcon
            size={12}
            strokeWidth={2.4}
            className={[styles.chevron, groupOpen ? styles.chevronOpen : ''].join(' ')}
          />
        </button>

        {groupOpen && (
          <div className={styles.navList}>
            {NAV_ITEMS.map((item, index) => {
              const active = activeNav === index;
              return (
                <button
                  key={item.label}
                  type="button"
                  aria-current={active}
                  className={[styles.navItem, active ? styles.navItemActive : ''].join(' ')}
                  onClick={() => setActiveNav(index)}
                >
                  <PathIcon d={item.icon} size={15} strokeWidth={1.8} className={styles.navIcon} />
                  <span className={styles.navLabel}>{item.label}</span>
                  {item.badge && (
                    <span className={[styles.navBadge, active ? styles.navBadgeActive : ''].join(' ')}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {NAV_FOOT_ITEMS.map((item, index) => {
          const expanded = openFoot === index && item.items.length > 0;
          return (
            <div key={item.label}>
              <button
                type="button"
                className={styles.footItem}
                aria-expanded={expanded}
                onClick={() => setOpenFoot((current) => (current === index ? -1 : index))}
              >
                <PathIcon d={item.icon} size={15} strokeWidth={1.9} className={styles.footIcon} />
                <span className={styles.footLabel}>{item.label}</span>
                {item.badge && <span className={styles.footBadge}>{item.badge}</span>}
                {item.items.length > 0 && (
                  <ChevronDownIcon
                    size={12}
                    strokeWidth={2.4}
                    className={[styles.chevron, styles.footIcon, expanded ? styles.chevronOpen : ''].join(' ')}
                  />
                )}
              </button>

              {expanded && (
                <div className={styles.footPanel}>
                  {item.items.map((entry) => (
                    <div key={entry.label} className={styles.footRow}>
                      <FileIcon size={14} strokeWidth={1.8} className={styles.footRowIcon} />
                      <div className={styles.footRowText}>
                        <div className={styles.footRowLabel}>{entry.label}</div>
                        <div className={styles.footRowMeta}>{entry.meta}</div>
                      </div>
                      <IconButton variant="tint" label={`Tải xuống ${entry.label}`}>
                        <DownloadIcon size={11} strokeWidth={2.1} />
                      </IconButton>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        </div>
      </nav>
    </>
  );
}
