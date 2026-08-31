import type { AssistantMode } from '../types';

/** Nhãn ba bước xử lý; bước cuối đổi theo chế độ đang chạy. */
export function buildRunSteps(mode: AssistantMode, subject: 'văn bản' | 'tài liệu' = 'văn bản'): string[] {
  return [
    `Đọc và tách cấu trúc ${subject}`,
    'Trích xuất điều khoản liên quan',
    mode === 'advice' ? 'Soạn đề xuất theo chỉ đạo' : 'Soạn bản tóm tắt',
  ];
}
