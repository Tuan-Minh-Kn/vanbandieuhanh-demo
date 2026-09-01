import type { AssistantSession } from '../types';

export const MODEL_NAME = 'Qwen3-4B Instruct 2507';

export const MODEL_NOTE = 'Qwen3-4B · xử lý cục bộ trong mạng KTNN';

export const PRIVACY_NOTE = 'Xử lý cục bộ — không gửi dữ liệu ra ngoài';

/**
 * Gợi ý bút phê nhanh cho ô "Chỉ đạo của lãnh đạo". Giữ ở mức chung chung, dùng
 * được cho mọi loại văn bản đến (nghị định, thông tư, tờ trình, công văn…) —
 * không gắn với nghiệp vụ kiểm toán.
 */
export const DIRECTIVE_PRESETS = ['Rà soát việc phải làm và thời hạn', 'Đánh giá tác động tới đơn vị'];

export const LENGTH_OPTIONS = {
  summary: ['4 câu', '6 câu', 'Theo chương'],
  advice: ['Gọn', 'Chuẩn', 'Kèm phương án'],
} as const;

export const DISCLAIMER_INBOX =
  'Nội dung do máy soạn từ văn bản trong ngữ cảnh — kiểm toán viên rà soát trước khi trình lãnh đạo.';

export const DISCLAIMER_STANDALONE =
  'Nội dung do máy soạn từ tài liệu bạn cung cấp — cần kiểm toán viên rà soát trước khi sử dụng chính thức.';

export const REMINDER_NOTE =
  'Bản do máy soạn chỉ để tham khảo. Kiểm toán viên đối chiếu điều khoản gốc trước khi trình lãnh đạo.';

/** Phiên làm việc gần đây — trang Trợ lý độc lập. */
export const RECENT_SESSIONS: AssistantSession[] = [
  { title: 'ND 114/2024 — tài sản công', meta: 'Tóm tắt · 14:32', color: 'var(--c-blue)' },
  { title: 'Kế hoạch kiểm toán NSNN 2026', meta: 'Tham mưu · 11:05', color: 'var(--c-teal)' },
  { title: 'TT 08/2025/TT-BTC', meta: 'Tóm tắt · hôm qua', color: 'var(--n-300)' },
  { title: 'Luật KTNN sửa đổi — chương III', meta: 'Tham mưu · 29/08', color: 'var(--n-300)' },
];

export const STANDALONE_SESSION_LABEL = 'Phiên làm việc 31/08 · 14:32';
