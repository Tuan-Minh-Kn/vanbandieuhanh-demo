import type { IncomingDoc, OutgoingDoc } from '../types';

/** Văn bản đến chưa xử lý — dữ liệu mẫu của bản demo (không phải văn bản thật). */
export const INCOMING_DOCS: IncomingDoc[] = [
  {
    id: '1041-VCS-TH',
    arrived: '28/08/2026',
    code: '1041/VCS-TH',
    issued: 'VB 28/08/2026',
    org: 'Vụ Chính sách — KTNN',
    title: 'Phối hợp, tham gia ý kiến Dự thảo Hướng dẫn kiểm toán công nghệ thông tin',
    due: '08/09/2026',
    dueNote: 'còn 8 ngày',
    level: 'soon',
    files: '2 tệp',
    hasSummary: true,
    note: 'K/c các đ/c tham gia ý kiến; đ/c Hằng chủ trì',
    attachments: [
      { ext: 'PDF', name: 'Du-thao-Huong-dan-kiem-toan-CNTT.pdf', meta: '1,4 MB · 28 trang' },
      { ext: 'DOCX', name: 'Phu-luc-mau-bieu-thu-thap-bang-chung.docx', meta: '312 KB · 9 trang' },
    ],
    summary:
      'Vụ Chính sách đề nghị các đơn vị phối hợp, tham gia ý kiến đối với Dự thảo Hướng dẫn kiểm toán công nghệ thông tin, gửi về trước ngày 08/09/2026. Dự thảo gồm bốn phần: phạm vi áp dụng cho cuộc kiểm toán có nội dung CNTT, quy trình bốn bước (khảo sát – đánh giá rủi ro – kiểm tra kiểm soát chung và kiểm soát ứng dụng – kết luận), bộ tiêu chí đánh giá dựa trên khung COBIT rút gọn, và hệ thống mẫu biểu thu thập bằng chứng điện tử. Điểm mới đáng lưu ý là yêu cầu kiểm toán viên lập biên bản niêm phong dữ liệu và ghi nhận hàm băm tệp tại thời điểm trích xuất. Văn bản nêu rõ đơn vị không có ý kiến khác cũng phải trả lời bằng văn bản để Vụ Chính sách tổng hợp.',
    metrics: [
      { label: 'ĐỘ NÉN', value: '9.640 → 176 từ' },
      { label: 'ĐIỀU KHOẢN DẪN', value: '4 mục' },
      { label: 'HẠN TRẢ LỜI', value: '08/09/2026' },
      { label: 'ĐẦU MỐI', value: 'Đ/c Hằng' },
    ],
    citations: [
      {
        ref: 'Mục II.2',
        text: 'Quy trình kiểm toán CNTT bốn bước, bắt buộc với cuộc kiểm toán có hệ thống thông tin.',
      },
      { ref: 'Mục III.1', text: 'Bộ tiêu chí đánh giá kiểm soát chung dựa trên khung COBIT rút gọn.' },
      { ref: 'Mục IV.3', text: 'Biên bản niêm phong dữ liệu và ghi nhận hàm băm tệp khi trích xuất.' },
      { ref: 'Mục V', text: 'Thời hạn và cách thức gửi ý kiến về Vụ Chính sách.' },
    ],
  },
  {
    id: '1501-QD-KTNN',
    arrived: '26/08/2026',
    code: '1501/QĐ-KTNN',
    issued: 'VB 26/08/2026',
    org: 'Kiểm toán nhà nước',
    title: 'Ban hành danh mục cơ quan, bộ phận, vị trí trọng yếu, cơ mật tại Kiểm toán nhà nước',
    due: '02/09/2026',
    dueNote: 'còn 2 ngày',
    level: 'urgent',
    files: '1 tệp',
    hasSummary: false,
    note: 'Chuyển các phòng để biết và thực hiện',
    attachments: [
      { ext: 'PDF', name: '1501-QD-KTNN-danh-muc-vi-tri-trong-yeu.pdf', meta: '860 KB · 12 trang' },
    ],
    summary:
      'Quyết định ban hành danh mục cơ quan, bộ phận, vị trí trọng yếu, cơ mật tại Kiểm toán nhà nước, áp dụng toàn ngành từ ngày ký. Danh mục xác định ba nhóm: bộ phận trọng yếu về cơ mật, vị trí tiếp cận thông tin thuộc danh mục bí mật nhà nước, và vị trí liên quan tới dữ liệu kiểm toán chưa công bố. Kèm theo là yêu cầu rà soát nhân sự tại các vị trí này hằng năm, quy định về luân chuyển và xác minh tiêu chuẩn chính trị trước khi bố trí. Các đơn vị cập nhật danh sách người giữ vị trí trọng yếu về Văn phòng KTNN trong 30 ngày kể từ ngày quyết định có hiệu lực.',
    metrics: [
      { label: 'ĐỘ NÉN', value: '5.120 → 132 từ' },
      { label: 'ĐIỀU KHOẢN DẪN', value: '3 điều' },
      { label: 'HIỆU LỰC', value: 'Từ ngày ký' },
      { label: 'VIỆC PHẢI LÀM', value: 'Báo cáo 30 ngày' },
    ],
    citations: [
      { ref: 'Điều 1', text: 'Ba nhóm vị trí trọng yếu, cơ mật và tiêu chí xác định.' },
      { ref: 'Điều 3', text: 'Rà soát nhân sự hằng năm; xác minh tiêu chuẩn chính trị trước khi bố trí.' },
      { ref: 'Điều 4', text: 'Đơn vị cập nhật danh sách về Văn phòng KTNN trong 30 ngày.' },
    ],
  },
  {
    id: '73-KH-DUQH',
    arrived: '26/08/2026',
    code: '73-KH/ĐUQH',
    issued: 'VB 25/08/2026',
    org: 'Đảng ủy Quốc hội',
    title:
      'Kế hoạch thực hiện Quy định số 207-QĐ/TW ngày 26/7/2026 của Ban Chấp hành Trung ương về những điều đảng viên không được làm',
    due: '15/12/2026',
    dueNote: 'còn 3 tháng',
    level: 'ok',
    files: '3 tệp',
    hasSummary: false,
    note: 'K/c ACE',
    attachments: [
      { ext: 'PDF', name: '73-KH-DUQH-ke-hoach-trien-khai.pdf', meta: '1,1 MB · 8 trang' },
      { ext: 'PDF', name: 'Quy-dinh-207-QD-TW.pdf', meta: '640 KB · 6 trang' },
      { ext: 'XLSX', name: 'Bieu-mau-bao-cao-ket-qua.xlsx', meta: '96 KB · 3 sheet' },
    ],
    summary:
      'Kế hoạch của Đảng ủy Quốc hội triển khai Quy định số 207-QĐ/TW ngày 26/7/2026 của Ban Chấp hành Trung ương về những điều đảng viên không được làm. Kế hoạch xác định bốn nhóm nhiệm vụ: tổ chức nghiên cứu, học tập trong toàn Đảng bộ; rà soát, bổ sung quy chế làm việc của cấp ủy cho phù hợp; đưa nội dung Quy định vào tiêu chí kiểm điểm, đánh giá đảng viên hằng năm; tăng cường kiểm tra, giám sát việc thực hiện. Mốc thời gian yêu cầu hoàn thành phổ biến trong tháng 9/2026 và báo cáo kết quả trước 15/12/2026.',
    metrics: [
      { label: 'ĐỘ NÉN', value: '4.380 → 121 từ' },
      { label: 'ĐIỀU KHOẢN DẪN', value: '3 mục' },
      { label: 'MỐC ĐẦU', value: 'Tháng 9/2026' },
      { label: 'BÁO CÁO', value: '15/12/2026' },
    ],
    citations: [
      { ref: 'Mục II.1', text: 'Tổ chức nghiên cứu, học tập Quy định trong toàn Đảng bộ.' },
      { ref: 'Mục II.3', text: 'Đưa nội dung vào tiêu chí kiểm điểm, đánh giá đảng viên hằng năm.' },
      { ref: 'Mục III', text: 'Chế độ báo cáo kết quả trước 15/12/2026.' },
    ],
  },
  {
    id: '968-BTC-QLKT',
    arrived: '25/08/2026',
    code: '968/BTC-QLKT',
    issued: 'VB 22/08/2026',
    org: 'Bộ Tài chính',
    title: 'Hướng dẫn quyết toán kinh phí ngân sách năm 2026 đối với các đơn vị dự toán cấp I',
    due: '30/09/2026',
    dueNote: 'còn 1 tháng',
    level: 'ok',
    files: '2 tệp',
    hasSummary: false,
    note: 'Giao Phòng KH-TH theo dõi',
    attachments: [
      { ext: 'PDF', name: '968-BTC-QLKT-huong-dan-quyet-toan-2026.pdf', meta: '1,7 MB · 22 trang' },
      { ext: 'XLSX', name: 'Bieu-mau-quyet-toan-2026.xlsx', meta: '148 KB · 6 sheet' },
    ],
    summary:
      'Bộ Tài chính hướng dẫn quyết toán kinh phí ngân sách năm 2026 đối với đơn vị dự toán cấp I, thay thế hướng dẫn cùng nội dung năm 2025. Văn bản chuẩn hoá bộ biểu mẫu quyết toán, quy định thời hạn gửi báo cáo về Bộ Tài chính trước 30/09/2026 và yêu cầu thuyết minh riêng đối với các khoản chi chuyển nguồn, kinh phí không tự chủ và kinh phí mua sắm tài sản. Đơn vị phải đối chiếu số liệu với Kho bạc Nhà nước trước khi tổng hợp và chịu trách nhiệm về tính chính xác của số liệu quyết toán.',
    metrics: [
      { label: 'ĐỘ NÉN', value: '7.210 → 148 từ' },
      { label: 'ĐIỀU KHOẢN DẪN', value: '3 mục' },
      { label: 'HẠN GỬI', value: '30/09/2026' },
      { label: 'ĐẦU MỐI', value: 'Phòng KH-TH' },
    ],
    citations: [
      { ref: 'Mục 1', text: 'Phạm vi áp dụng và bộ biểu mẫu quyết toán chuẩn hoá.' },
      { ref: 'Mục 3', text: 'Thuyết minh riêng chi chuyển nguồn và kinh phí mua sắm tài sản.' },
      { ref: 'Mục 5', text: 'Đối chiếu số liệu với Kho bạc Nhà nước trước khi tổng hợp.' },
    ],
  },
];

/** Văn bản đi chưa xử lý (chờ phát hành). */
export const OUTGOING_DOCS: OutgoingDoc[] = [
  {
    id: '872-PTDCV-CNTT',
    code: '872/PTĐCV-CNTT',
    date: '25/08/2026',
    title:
      'V/v Trao đổi, thảo luận và đóng góp ý kiến đối với Dự thảo Khung kiến trúc số của Kiểm toán nhà nước giai đoạn 2026 – 2031',
    signer: 'Nguyễn Văn Quang',
    unit: 'Phòng Kế hoạch – Tổng hợp',
    to: 'Đơn vị: TH, CS, CNTT, KHTH',
  },
];
