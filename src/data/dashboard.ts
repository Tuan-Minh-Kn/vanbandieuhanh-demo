import type { FooterColumn, Kpi, PersonalStat, StoreBadge } from '../types';

export const CURRENT_USER = {
  initials: 'ĐA',
  name: 'Đào Xuân An',
  unit: 'Phòng Kế hoạch – Tổng hợp',
};

export const SESSION_CLOCK = '20:08 · 31/08/2026';

export const NOTIFICATION_COUNT = 9;

export const KPIS: Kpi[] = [
  {
    value: '4',
    label: 'Văn bản đến chưa xử lý',
    trend: '+2 hôm nay',
    color: 'var(--c-blue)',
    trendColor: 'var(--c-blue-deep)',
  },
  {
    value: '1',
    label: 'Sắp đến hạn trong 3 ngày',
    trend: 'ưu tiên',
    color: 'var(--c-warning)',
    trendColor: 'var(--c-warning-ink)',
  },
  {
    value: '1',
    label: 'Văn bản đi chờ phát hành',
    trend: 'chờ ký',
    color: 'var(--c-teal)',
    trendColor: 'var(--c-teal-ink)',
  },
  {
    value: '3',
    label: 'Đã có tóm tắt AI sẵn',
    trend: 'tiết kiệm ~40 phút',
    color: 'var(--c-green)',
    trendColor: 'var(--c-success-ink)',
  },
];

export const INBOX_FILTERS = ['Tất cả', 'Sắp đến hạn', 'Tôi là đầu mối'];

export const EMPTY_QUEUES = [
  { title: 'Văn bản dự thảo', note: 'Không có việc chờ xử lý' },
  { title: 'Văn bản tờ trình', note: 'Không có việc chờ xử lý' },
  { title: 'Văn bản nội bộ', note: 'Không có việc chờ xử lý' },
];

export const PERSONAL_STATS: PersonalStat[] = [
  { label: 'Chưa xử lý', value: '0', color: 'var(--c-danger)', note: 'Không có văn bản tồn', percent: 0 },
  {
    label: 'Đang xử lý',
    value: '4',
    color: 'var(--c-warning)',
    note: '3 văn bản có hạn trong tháng 9',
    percent: 57,
  },
  {
    label: 'Là đầu mối, chưa xử lý',
    value: '3',
    color: 'var(--c-blue)',
    note: 'Đ/c là đầu mối tổng hợp',
    percent: 43,
  },
];

export const PERSONAL_STATS_PERIOD = 'Tháng 08/2026 · 7 văn bản';

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'THÔNG TIN LIÊN HỆ',
    lines: ['116 Nguyễn Chánh, Cầu Giấy, Hà Nội', 'Điện thoại: 024.6262.8616', 'Email: banbientap@sav.gov.vn'],
  },
  {
    title: 'HỖ TRỢ SỬ DỤNG',
    lines: ['Zalo: Hỗ trợ hệ thống VBĐH', 'Tổng đài nội bộ: 1080', 'Hướng dẫn sử dụng trợ lý AI'],
  },
];

export const STORE_BADGES: StoreBadge[] = [
  {
    name: 'App Store',
    small: 'TẢI VỀ TRÊN',
    icon: 'M16.5 12.8c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.9-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.6-.9.9-1.7 1.1-2.3-2.1-.8-2.4-3.4-2.4-3.6zM14.4 5.6c.6-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.1 1.8-1 2.9 1.1.1 2.2-.6 2.9-1.4z',
  },
  {
    name: 'Google Play',
    small: 'TẢI VỀ TRÊN',
    icon: 'M3.6 2.3c-.4.3-.6.8-.6 1.5v16.4c0 .7.2 1.2.6 1.5l9.1-9.7L3.6 2.3zm10.3 8.4 2.9-3.1L5.6 1.4c-.4-.2-.8-.2-1.1 0l9.4 9.3zm0 2.6-9.4 9.3c.3.2.7.2 1.1 0l11.2-6.2-2.9-3.1zm5.1-4.6-2.2 1.2 3 3.2 2.2-1.2c.6-.4 1-.9 1-1.6s-.4-1.2-1-1.6l-3-.1v.1z',
  },
];
