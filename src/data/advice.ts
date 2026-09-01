import type { AdviceGroup } from '../types';

/** Bảng màu bốn nhóm kết quả tham mưu. */
const GROUP_STYLE = {
  advise: { color: 'var(--c-blue)', bg: '#F1F8FD' },
  study: { color: 'var(--c-teal)', bg: '#F1FBF9' },
  next: { color: 'var(--c-warning)', bg: '#FEFAF0' },
  unclear: { color: 'var(--n-400)', bg: 'var(--n-50)' },
} as const;

/**
 * NỘI DUNG MẪU để trình diễn bố cục bốn nhóm — chưa phải kết quả tham mưu thật.
 * Sẽ thay bằng kết quả model sinh ra từ tệp đính kèm và chỉ đạo của lãnh đạo.
 */
const PLACEHOLDER_ADVICE: AdviceGroup[] = [
  {
    title: 'Việc tham mưu',
    count: '2 việc',
    ...GROUP_STYLE.advise,
    items: [
      {
        no: '01',
        text: '(Nội dung mẫu) Việc cần trình lãnh đạo, kèm mốc thời gian nội bộ để kịp hạn xử lý của văn bản.',
        refs: ['Bút phê'],
      },
      {
        no: '02',
        text: '(Nội dung mẫu) Đề xuất phân công đầu mối và cách thu thập hồ sơ, số liệu phục vụ nội dung tham mưu.',
        refs: [],
      },
    ],
  },
  {
    title: 'Cần nghiên cứu',
    count: '1 nội dung',
    ...GROUP_STYLE.study,
    items: [
      {
        no: '01',
        text: '(Nội dung mẫu) Điều khoản cần đối chiếu với quy định hiện hành trước khi kết luận.',
        refs: [],
      },
    ],
  },
  {
    title: 'Việc tiếp theo',
    count: '1 mốc',
    ...GROUP_STYLE.next,
    items: [
      {
        no: '01',
        text: '(Nội dung mẫu) Mốc gửi dự thảo ý kiến và mốc trình lãnh đạo ký văn bản trả lời.',
        refs: [],
      },
    ],
  },
  {
    title: 'Điểm chưa rõ',
    count: '1 điểm',
    ...GROUP_STYLE.unclear,
    items: [
      {
        no: '01',
        text: '(Nội dung mẫu) Nội dung văn bản không nêu rõ, cần hỏi lại cơ quan ban hành — model không suy đoán.',
        refs: [],
      },
    ],
  },
];

/** Kết quả tham mưu theo số ký hiệu văn bản; hiện mọi văn bản đều dùng bộ mẫu chung. */
const ADVICE_BY_CODE: Record<string, AdviceGroup[]> = {};

export function getAdviceGroups(code: string): AdviceGroup[] {
  return ADVICE_BY_CODE[code] ?? PLACEHOLDER_ADVICE;
}
