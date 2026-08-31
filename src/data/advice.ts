import type { AdviceGroup } from '../types';

/** Bảng màu bốn nhóm kết quả tham mưu. */
const GROUP_STYLE = {
  advise: { color: 'var(--c-blue)', bg: '#F1F8FD' },
  study: { color: 'var(--c-teal)', bg: '#F1FBF9' },
  next: { color: 'var(--c-warning)', bg: '#FEFAF0' },
  unclear: { color: 'var(--n-400)', bg: 'var(--n-50)' },
} as const;

const ADVICE_1041: AdviceGroup[] = [
  {
    title: 'Việc tham mưu',
    count: '2 việc',
    ...GROUP_STYLE.advise,
    items: [
      {
        no: '01',
        text: 'Trình lãnh đạo Phòng phân công đ/c Hằng chủ trì tổng hợp ý kiến về Dự thảo Hướng dẫn kiểm toán CNTT, hạn nội bộ 05/09 để kịp gửi Vụ Chính sách trước 08/09.',
        refs: ['Mục V', 'Bút phê'],
      },
      {
        no: '02',
        text: 'Đề xuất bổ sung yêu cầu về năng lực kiểm toán viên CNTT vào kế hoạch đào tạo 2027 — dự thảo đặt ra kỹ năng thu thập bằng chứng điện tử mà lực lượng hiện tại chưa được tập huấn.',
        refs: ['Mục IV.3'],
      },
    ],
  },
  {
    title: 'Cần nghiên cứu',
    count: '2 nội dung',
    ...GROUP_STYLE.study,
    items: [
      {
        no: '01',
        text: 'Đối chiếu quy trình bốn bước trong dự thảo với quy trình kiểm toán hiện hành để phát hiện chồng lấn ở bước đánh giá rủi ro.',
        refs: ['Mục II.2'],
      },
      {
        no: '02',
        text: 'Tính khả thi của yêu cầu ghi nhận hàm băm tệp tại đơn vị được kiểm toán không có công cụ trích xuất chuẩn.',
        refs: ['Mục IV.3'],
      },
    ],
  },
  {
    title: 'Việc tiếp theo',
    count: '2 mốc',
    ...GROUP_STYLE.next,
    items: [
      { no: '01', text: 'Gửi dự thảo ý kiến của Phòng để các đ/c cho ý kiến trước 03/09.', refs: ['Bút phê'] },
      { no: '02', text: 'Tổng hợp, trình lãnh đạo ký văn bản trả lời trước 08/09/2026.', refs: ['Mục V'] },
    ],
  },
  {
    title: 'Điểm chưa rõ',
    count: '1 điểm',
    ...GROUP_STYLE.unclear,
    items: [
      {
        no: '01',
        text: 'Dự thảo không nêu áp dụng cho cuộc kiểm toán đang triển khai hay chỉ từ kế hoạch 2027 — cần hỏi lại Vụ Chính sách, không suy đoán.',
        refs: [],
      },
    ],
  },
];

/** Kết quả tham mưu mẫu, tra theo số ký hiệu văn bản. */
const ADVICE_BY_CODE: Record<string, AdviceGroup[]> = {
  '1041/VCS-TH': ADVICE_1041,
};

/** Văn bản chưa có kịch bản riêng dùng bộ kết quả mặc định (chỉ đúng với bản demo). */
export function getAdviceGroups(code: string): AdviceGroup[] {
  return ADVICE_BY_CODE[code] ?? ADVICE_1041;
}
