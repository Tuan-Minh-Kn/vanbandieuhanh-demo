import type { NavFootItem, NavItem } from '../types';

/** Nhóm "Quản lý văn bản, điều hành" trên thanh điều hướng bên trái. */
export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Văn bản đến',
    icon: 'M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM14 3v5h5',
    badge: '4',
  },
  {
    label: 'Văn bản đi',
    icon: 'M12 19V5m0 0-5 5m5-5 5 5',
    badge: '1',
  },
  {
    label: 'Văn bản dự thảo',
    icon: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z',
  },
  {
    label: 'Tờ trình',
    icon: 'M9 3h9l3 3v15H9zM9 8H4v13h5',
  },
  { label: 'Văn bản nội bộ', icon: 'M3 21V9l9-6 9 6v12M9 21v-7h6v7' },
  {
    label: 'Văn bản chia sẻ nhóm',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M22 21v-2a4 4 0 0 0-3-3.9',
    badge: '2',
  },
  {
    label: 'Quản lý công việc',
    icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
  },
  { label: 'Quản lý hồ sơ', icon: 'M4 4h6l2 3h8v13H4z' },
  {
    label: 'Biểu mẫu',
    icon: 'M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2M9 3h6v3H9zM8 11h8M8 15h5',
  },
  {
    label: 'Lịch làm việc',
    icon: 'M8 2v4M16 2v4M3 8h18M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
    badge: '3',
  },
  {
    label: 'Điều hành',
    icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V22a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 7 20.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 2 15V13a2 2 0 1 1 0-2h.1a1.7 1.7 0 0 0 1.2-2.9L3.2 8a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 9 4V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0 1.2 2.9H22a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1',
  },
];

/** Ba mục cuối thanh điều hướng — dạng gập/mở. */
export const NAV_FOOT_ITEMS: NavFootItem[] = [
  {
    label: 'Download tiện ích',
    icon: 'M12 3v12m0 0-4-4m4 4 4-4M4 19h16',
    items: [
      { label: 'Ký số bản 32 bit', meta: 'Bộ cài · 18,4 MB' },
      { label: 'Ký số bản 64 bit', meta: 'Bộ cài · 21,2 MB' },
      { label: 'Hướng dẫn cấu hình cài đặt ký số', meta: 'PDF · 1,2 MB' },
      { label: 'Hướng dẫn sử dụng hệ thống', meta: 'PDF · 3,6 MB' },
    ],
  },
  {
    label: 'Thông báo',
    icon: 'M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8M13.7 21a2 2 0 0 1-3.4 0',
    badge: '9',
    items: [],
  },
  {
    label: 'Câu hỏi thường gặp',
    icon: 'M9.1 9a3 3 0 1 1 4.5 2.6c-.9.6-1.6 1.2-1.6 2.4m0 3h.01M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z',
    items: [],
  },
];
