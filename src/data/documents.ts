import type { IncomingDoc, OutgoingDoc } from '../types';

/**
 * Văn bản đến chưa xử lý.
 *
 * Số ký hiệu, cơ quan ban hành, ngày ban hành và tệp đính kèm lấy từ ba văn bản
 * thật trong `public/data_sources` (xem trước được ngay trên giao diện). Trích yếu mở
 * đầu bằng loại văn bản đúng như trên bản gốc.
 *
 * Thứ tự mảng là thứ tự hiển thị: Tờ trình → Thông tư → Nghị định. Ngày đến được đặt
 * giảm dần theo thứ tự đó để cột "NGÀY ĐẾN" không trông như sắp xếp sai.
 * Ngày đến, hạn xử lý, bút phê là dữ liệu mẫu.
 *
 * `summary` của Tờ trình và Thông tư là BẢN TÓM TẮT THẬT do Qwen3-4B-Instruct-2507 sinh
 * ra từ chính tệp PDF (qua /api/summarize/file của ai-chatbot-demo), giữ NGUYÊN VĂN
 * model trả về — kể cả chỗ model đọc sai số ký hiệu / ngày do chất lượng tệp scan.
 * Nghị định vẫn là nội dung mẫu: lượt chạy thất bại vì server inference ngắt kết nối.
 */
export const INCOMING_DOCS: IncomingDoc[] = [
  {
    id: '8662-TTr-SNV',
    arrived: '28/08/2026',
    code: '8662/TTr-SNV',
    issued: 'VB 22/05/2026',
    org: 'Sở Nội vụ — UBND TP. Hồ Chí Minh',
    title:
      'Tờ trình về công tác quản lý, sử dụng biên chế, số lượng người làm việc trong thời gian chờ giao biên chế năm 2026',
    due: '02/09/2026',
    dueNote: 'còn 2 ngày',
    level: 'urgent',
    files: '1 tệp',
    hasSummary: true,
    note: 'Chuyển các phòng để biết và thực hiện',
    attachments: [
      {
        ext: 'PDF',
        name: '8662-TTr-SNV-quan-ly-bien-che-2026.pdf',
        meta: '1,4 MB · 2 trang',
        url: '/data_sources/8662-TTr-SNV-quan-ly-bien-che-2026.pdf',
      },
    ],
    summary:
      'Văn bản là Tờ trình số 662/TIr-SNV ngày 22 tháng 5 năm 2026 của Sở Nội vụ Thành phố Hồ Chí Minh về công tác quản lý, sử dụng biên chế và số lượng người làm việc trong thời gian chờ giao biên chế năm 2026. Văn bản nêu rõ phạm vi điều chỉnh là các cơ quan, đơn vị, địa phương thuộc khối hành chính trong phạm vi quản lý của Thành phố, với đối tượng áp dụng là các sở, ban, ngành và UBND cấp xã. Nội dung chính đề xuất tạm dừng tuyển dụng, tiếp nhận công chức, viên chức và người hoạt động không chuyên trách vào làm việc hưởng lương từ ngân sách nhà nước trong thời gian chờ Trung ương giao biên chế, đồng thời yêu cầu Sở Nội vụ theo dõi, kiểm tra và tham mưu cho UBND Thành phố về việc phân bổ biên chế năm 2026. Hiệu lực thi hành được xác định là từ khi được UBND Thành phố xem xét, quyết định.',
    metrics: [
      { label: 'ĐỘ NÉN', value: '1.317 token → 173 từ' },
      { label: 'ĐIỀU KHOẢN DẪN', value: '2 mục' },
      { label: 'NGÀY BAN HÀNH', value: '22/05/2026' },
      { label: 'NƠI NHẬN', value: 'UBND Thành phố' },
    ],
    citations: [
      { ref: 'Mục 1', text: 'Trách nhiệm của thủ trưởng các sở, ban, ngành và Chủ tịch UBND cấp xã.' },
      { ref: 'Mục 2', text: 'Các nội dung đề nghị trong thời gian chờ giao biên chế chính thức.' },
    ],
  },
  {
    id: '03-2026-TT-NHNN',
    arrived: '27/08/2026',
    code: '03/2026/TT-NHNN',
    issued: 'VB 31/03/2026',
    org: 'Ngân hàng Nhà nước Việt Nam',
    title:
      'Thông tư quy định định mức khoán chi trong công tác xây dựng Thông tư của Thống đốc Ngân hàng Nhà nước Việt Nam và Thông tư liên tịch do Ngân hàng Nhà nước Việt Nam chủ trì xây dựng',
    due: '30/09/2026',
    dueNote: 'còn 1 tháng',
    level: 'ok',
    files: '1 tệp',
    hasSummary: true,
    note: 'Giao Phòng KH-TH theo dõi',
    attachments: [
      {
        ext: 'PDF',
        name: '03-2026-TT-NHNN-dinh-muc-khoan-chi-xay-dung-van-ban.pdf',
        meta: '3,4 MB · 8 trang',
        url: '/data_sources/03-2026-TT-NHNN-dinh-muc-khoan-chi-xay-dung-van-ban.pdf',
      },
    ],
    summary:
      'Văn bản là Thông tư số 03/2026/TT-NHNN ngày 03 tháng 3 năm 2026 của Ngân hàng Nhà nước Việt Nam, quy định về định mức khống chế chi trong công tác xây dựng. Phạm vi điều chỉnh bao gồm các đơn vị thuộc Ngân hàng Nhà nước thực hiện nhiệm vụ liên quan đến xây dựng, quản lý, sử dụng, thanh toán và quyết toán chi phí cho công trình xây dựng vốn ban quy phạm pháp luật. Đối tượng áp dụng gồm các đơn vị thuộc Ngân hàng Nhà nước thực hiện nhiệm vụ xây dựng, các cơ quan, tổ chức, cá nhân có liên quan đến việc lập, điều chỉnh, phê duyệt và thực hiện chi phí xây dựng. Thông tư quy định định mức chi cụ thể theo các phương án, kế hoạch, dự toán, điều chỉnh kế hoạch chi phí xây dựng vốn ban quy phạm pháp luật, yêu cầu các đơn vị phải báo cáo, thẩm định, phê duyệt trước khi thực hiện thanh toán, quyết toán. Thông tư có hiệu lực thi hành từ ngày 03 tháng 3 năm 2026.',
    metrics: [
      { label: 'ĐỘ NÉN', value: '7.210 token → 186 từ' },
      { label: 'ĐIỀU KHOẢN DẪN', value: '2 điều' },
      { label: 'NGÀY BAN HÀNH', value: '31/03/2026' },
      { label: 'ĐẦU MỐI', value: 'Phòng KH-TH' },
    ],
    citations: [
      { ref: 'Điều 1', text: 'Phạm vi điều chỉnh — định mức khoán chi và việc lập, quyết toán dự toán.' },
      { ref: 'Điều 2', text: 'Đối tượng áp dụng — các đơn vị thuộc Ngân hàng Nhà nước.' },
    ],
  },
  {
    id: '283-2026-ND-CP',
    arrived: '26/08/2026',
    code: '283/2026/NĐ-CP',
    issued: 'VB 15/07/2026',
    org: 'Chính phủ',
    title:
      'Nghị định quy định xử phạt vi phạm hành chính trong lĩnh vực lao động, bảo hiểm xã hội, người lao động Việt Nam đi làm việc ở nước ngoài theo hợp đồng',
    due: '05/09/2026',
    dueNote: 'còn 5 ngày',
    level: 'soon',
    files: '1 tệp',
    hasSummary: false,
    note: 'K/c các đ/c nghiên cứu, tham gia ý kiến',
    attachments: [
      {
        ext: 'PDF',
        name: '283-2026-ND-CP-xu-phat-vphc-lao-dong.pdf',
        meta: '556 KB · 100 trang',
        url: '/data_sources/283-2026-ND-CP-xu-phat-vphc-lao-dong.pdf',
      },
    ],
    summary:
      'Nghị định của Chính phủ quy định về xử phạt vi phạm hành chính trong lĩnh vực lao động, bảo hiểm xã hội và người lao động Việt Nam đi làm việc ở nước ngoài, có hiệu lực từ ngày 15 tháng 7 năm 2026 (với một số quy định có hiệu lực từ ngày 10 tháng 9 năm 2026), điều chỉnh các hành vi vi phạm trong tuyển dụng, quản lý lao động, an toàn vệ sinh lao động, bảo hiểm xã hội và hoạt động đưa người lao động đi làm việc ở nước ngoài. Đối tượng áp dụng bao gồm người sử dụng lao động, người lao động và các tổ chức, cá nhân liên quan, với mức phạt tiền dao động từ 300.000 đồng đến 200.000.000 đồng tùy theo tính chất và mức độ vi phạm, đồng thời áp dụng các hình thức xử phạt bổ sung như tịch thu tang vật, tước quyền sử dụng chứng chỉ, đình chỉ hoạt động hoặc trục xuất người lao động. Các hành vi vi phạm bị xử phạt bằng hình thức cảnh cáo hoặc phạt tiền, kèm theo biện pháp khắc phục hậu quả như buộc trả lương, bồi thường thiệt hại, hoàn trả tiền, giấy tờ hoặc cải chính thông tin, và các hình thức xử phạt được thực hiện theo thẩm quyền của các cơ quan như Bộ Nội vụ, Công an, Bảo hiểm xã hội, Cục Việc làm, và các cơ quan đại diện ngoại giao. Thời hiệu xử phạt là 01 năm đối với vi phạm lao động, bảo hiểm xã hội và 02 năm đối với vi phạm liên quan đến người lao động đi làm việc ở nước ngoài; các hành vi có dấu hiệu tội phạm sẽ được chuyển cho cơ quan tiến hành tố tụng hình sự theo quy định tại Điều 62 của Luật Xử lý vi phạm hành chính.',
    metrics: [
      { label: 'ĐỘ NÉN', value: '— → — từ' },
      { label: 'ĐIỀU KHOẢN DẪN', value: '2 điều' },
      { label: 'NGÀY BAN HÀNH', value: '15/07/2026' },
      { label: 'ĐẦU MỐI', value: 'Phòng KH-TH' },
    ],
    citations: [
      { ref: 'Chương I', text: 'Quy định chung: phạm vi điều chỉnh và đối tượng áp dụng.' },
      { ref: 'Điều 1', text: 'Phạm vi điều chỉnh — nhóm hành vi, hình thức xử phạt, thẩm quyền xử phạt.' },
    ],
  },
];

/** Văn bản đi chưa xử lý (chờ phát hành) — dữ liệu mẫu. */
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
