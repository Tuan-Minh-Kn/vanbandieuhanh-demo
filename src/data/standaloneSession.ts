import type { AdviceGroup, Attachment, Citation, Metric } from '../types';

/** Phiên mẫu của trang Trợ lý độc lập: Nghị định về quản lý tài sản công. */
export const STANDALONE_SUMMARY =
  'Nghị định quy định chi tiết việc quản lý, sử dụng và khai thác tài sản công tại đơn vị sự nghiệp công lập, thay thế các quy định tương ứng của Nghị định 151/2017/NĐ-CP. Văn bản phân định lại thẩm quyền phê duyệt đề án sử dụng tài sản công vào mục đích kinh doanh, cho thuê, liên doanh — liên kết theo giá trị tài sản, trong đó đề án từ 500 tỷ đồng trở lên do bộ quản lý ngành phê duyệt sau khi có ý kiến của Bộ Tài chính. Đơn vị phải xác định giá cho thuê theo giá thị trường thông qua tổ chức có chức năng thẩm định giá và công khai kết quả trên cổng thông tin của đơn vị trong 15 ngày. Toàn bộ số thu từ khai thác tài sản công phải hạch toán riêng, nộp vào ngân sách phần chênh lệch sau khi trừ chi phí hợp lý và trích lập quỹ theo quy chế nội bộ. Nghị định có hiệu lực từ 01/01/2025; các đề án đã được phê duyệt trước thời điểm này được tiếp tục thực hiện đến hết thời hạn nhưng phải rà soát lại giá cho thuê trong 12 tháng.';

export const STANDALONE_FILES_SUMMARY: Attachment[] = [
  { ext: 'PDF', name: 'ND-114-2024-quan-ly-tai-san-cong.pdf', meta: '1,8 MB · 34 trang · 12.480 từ' },
];

export const STANDALONE_FILES_ADVICE: Attachment[] = [
  { ext: 'PDF', name: 'ND-114-2024-quan-ly-tai-san-cong.pdf', meta: '1,8 MB · 34 trang' },
  { ext: 'DOCX', name: 'Cong-van-421-KTNN-huong-dan.docx', meta: '246 KB · 6 trang' },
];

export const STANDALONE_METRICS: Metric[] = [
  { label: 'ĐỘ NÉN', value: '12.480 → 214 từ' },
  { label: 'ĐIỀU KHOẢN DẪN', value: '5 điều' },
  { label: 'HIỆU LỰC', value: '01/01/2025' },
];

export const STANDALONE_CITATIONS: Citation[] = [
  { ref: 'Điều 4.2', text: 'Thẩm quyền phê duyệt đề án theo giá trị tài sản; ngưỡng 500 tỷ đồng.' },
  { ref: 'Điều 9.1', text: 'Giá cho thuê xác định theo giá thị trường qua tổ chức thẩm định giá.' },
  { ref: 'Điều 9.4', text: 'Công khai kết quả trên cổng thông tin của đơn vị trong 15 ngày.' },
  { ref: 'Điều 12', text: 'Hạch toán riêng số thu, nộp ngân sách phần chênh lệch.' },
  { ref: 'Điều 27', text: 'Điều khoản chuyển tiếp cho đề án đã phê duyệt trước 01/01/2025.' },
];

export const STANDALONE_ADVICE: AdviceGroup[] = [
  {
    title: 'Việc tham mưu',
    count: '2 việc',
    color: 'var(--c-blue)',
    bg: '#F1F8FD',
    items: [
      {
        no: '01',
        text: 'Trình lãnh đạo bổ sung nội dung "quản lý, khai thác tài sản công tại đơn vị sự nghiệp" vào kế hoạch kiểm toán 2026, tập trung các đề án cho thuê từ 500 tỷ đồng.',
        refs: ['Điều 4.2', 'Công văn 421/KTNN'],
      },
      {
        no: '02',
        text: 'Dự thảo hướng dẫn nội bộ về mẫu biểu thu thập hồ sơ đề án và bằng chứng thẩm định giá cho các đoàn kiểm toán.',
        refs: ['Điều 9.1'],
      },
    ],
  },
  {
    title: 'Cần nghiên cứu',
    count: '2 nội dung',
    color: 'var(--c-teal)',
    bg: '#F1FBF9',
    items: [
      {
        no: '01',
        text: 'So sánh cơ chế phân chia số thu với Nghị định 151/2017 để nhận diện thay đổi ảnh hưởng tới kết luận kiểm toán các năm trước.',
        refs: ['Điều 12'],
      },
      {
        no: '02',
        text: 'Cách xử lý các đề án chuyển tiếp chưa rà soát lại giá cho thuê trong 12 tháng — có coi là sai phạm hay chỉ kiến nghị chấn chỉnh.',
        refs: ['Điều 27'],
      },
    ],
  },
  {
    title: 'Việc tiếp theo',
    count: '2 mốc',
    color: 'var(--c-warning)',
    bg: '#FEFAF0',
    items: [
      {
        no: '01',
        text: 'Gửi vụ chuyên môn lấy ý kiến trước 15/9 để kịp tổng hợp báo cáo lãnh đạo trước 30/9.',
        refs: ['Chỉ đạo'],
      },
      {
        no: '02',
        text: 'Lập danh sách đơn vị sự nghiệp có đề án cho thuê tài sản trong 3 năm gần nhất từ dữ liệu kiểm toán.',
        refs: [],
      },
    ],
  },
  {
    title: 'Điểm chưa rõ',
    count: '1 điểm',
    color: 'var(--n-400)',
    bg: 'var(--n-50)',
    items: [
      {
        no: '01',
        text: 'Tài liệu không nêu chế tài khi đơn vị không công khai kết quả cho thuê — cần tra cứu văn bản khác, model không suy đoán.',
        refs: ['Điều 9.4'],
      },
    ],
  },
];
