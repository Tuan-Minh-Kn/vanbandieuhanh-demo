import type { AdviceGroup } from '../types';

/** Bảng màu bốn nhóm kết quả tham mưu. */
const GROUP_STYLE = {
  advise: { color: 'var(--c-blue)', bg: '#F1F8FD' },
  study: { color: 'var(--c-teal)', bg: '#F1FBF9' },
  next: { color: 'var(--c-warning)', bg: '#FEFAF0' },
  unclear: { color: 'var(--n-400)', bg: 'var(--n-50)' },
} as const;

/**
 * Chỉ đạo nào có kịch bản riêng. Mọi chỉ đạo khác — kể cả người dùng tự gõ — đều rơi
 * về `review`, đúng như kết quả model trả về khi chỉ đạo không nêu yêu cầu đặc thù.
 */
export type DirectiveVariant = 'review' | 'impact';

const DIRECTIVE_VARIANTS: Record<string, DirectiveVariant> = {
  'Rà soát việc phải làm và thời hạn': 'review',
  'Đánh giá tác động tới đơn vị': 'impact',
};

export function resolveDirectiveVariant(directive: string): DirectiveVariant {
  return DIRECTIVE_VARIANTS[directive.trim()] ?? 'review';
}

/** Đếm số mục hiển thị cạnh tiêu đề nhóm, tránh lệch khi sửa nội dung. */
function group(
  title: string,
  unit: string,
  style: (typeof GROUP_STYLE)[keyof typeof GROUP_STYLE],
  texts: string[],
): AdviceGroup {
  return {
    title,
    count: `${texts.length} ${unit}`,
    ...style,
    items: texts.map((text, index) => ({
      no: String(index + 1).padStart(2, '0'),
      text,
      refs: [],
    })),
  };
}

/**
 * Kết quả tham mưu THẬT do Qwen3-4B-Instruct-2507 sinh ra cho Tờ trình 8662/TTr-SNV,
 * giữ nguyên văn model trả về. Nhóm nào model không trả thì không hiện.
 */
const ADVICE_TO_TRINH: Record<DirectiveVariant, AdviceGroup[]> = {
  review: [
    group('Việc tham mưu', 'việc', GROUP_STYLE.advise, [
      'Xin ý kiến lãnh đạo về việc tạm dừng tuyển dụng, tiếp nhận công chức, viên chức và người hoạt động không chuyên trách vào làm việc hưởng lương từ ngân sách nhà nước trong thời gian chờ Trung ương giao biên chế năm 2026',
      'Tham mưu cho lãnh đạo về việc phân bổ biên chế năm 2026 dựa trên kết quả theo dõi, kiểm tra của Sở Nội vụ',
    ]),
    group('Cần nghiên cứu', 'nội dung', GROUP_STYLE.study, [
      'Rà soát danh sách các sở, ban, ngành và UBND cấp xã thuộc phạm vi quản lý của Thành phố để xác định các đơn vị có nhu cầu tuyển dụng hoặc tiếp nhận nhân sự trong thời gian chờ giao biên chế',
      'Đánh giá tình hình hiện tại về số lượng người làm việc trong thời gian chờ giao biên chế để xác định mức độ cần thiết của việc tạm dừng tuyển dụng',
    ]),
    group('Việc tiếp theo', 'mốc', GROUP_STYLE.next, [
      'Giao Sở Nội vụ theo dõi, kiểm tra thực hiện việc tạm dừng tuyển dụng, tiếp nhận công chức, viên chức và người hoạt động không chuyên trách trong thời gian chờ giao biên chế năm 2026',
    ]),
  ],
  impact: [
    group('Việc tham mưu', 'việc', GROUP_STYLE.advise, [
      'Xin ý kiến lãnh đạo về việc đánh giá tác động của việc tạm dừng tuyển dụng, tiếp nhận công chức, viên chức và người hoạt động không chuyên trách đến các đơn vị thuộc khối hành chính trong thành phố.',
    ]),
    group('Cần nghiên cứu', 'nội dung', GROUP_STYLE.study, [
      'Rà soát danh sách các sở, ban, ngành và UBND cấp xã đang có nhu cầu tuyển dụng hoặc đang trong thời gian chờ giao biên chế để đánh giá tác động cụ thể.',
    ]),
    group('Việc tiếp theo', 'mốc', GROUP_STYLE.next, [
      'Tổ chức đánh giá tác động của việc tạm dừng tuyển dụng đến hoạt động thực thi nhiệm vụ của các đơn vị trong thời gian chờ giao biên chế năm 2026, với mốc hoàn thành trước ngày 10 tháng 6 năm 2026.',
    ]),
    group('Điểm chưa rõ', 'điểm', GROUP_STYLE.unclear, [
      'Không rõ tiêu chí, phương pháp hoặc phạm vi cụ thể để đánh giá tác động đến đơn vị.',
    ]),
  ],
};

/**
 * Kết quả tham mưu THẬT cho Thông tư 03/2026/TT-NHNN, giữ nguyên văn model trả về —
 * kể cả các chỗ model đọc sai từ tệp scan ("khống chế chi", "vốn ban quy phạm pháp
 * luật", ngày 03 tháng 3) đã thấy ở bản tóm tắt.
 */
const ADVICE_THONG_TU: Record<DirectiveVariant, AdviceGroup[]> = {
  review: [
    group('Việc tham mưu', 'việc', GROUP_STYLE.advise, [
      'Xin ý kiến lãnh đạo về việc áp dụng Thông tư số 03/2026/TT-NHNN trong công tác quản lý chi phí xây dựng tại các đơn vị thuộc Ngân hàng Nhà nước',
    ]),
    group('Cần nghiên cứu', 'nội dung', GROUP_STYLE.study, [
      'Rà soát danh mục các đơn vị thuộc Ngân hàng Nhà nước có thực hiện nhiệm vụ xây dựng để xác định đối tượng áp dụng Thông tư',
      'Đối chiếu các phương án, kế hoạch, dự toán chi phí xây dựng vốn ban quy phạm pháp luật với định mức khống chế chi quy định trong Thông tư',
      'Xác định các bước báo cáo, thẩm định, phê duyệt trước khi thanh toán và quyết toán theo quy định của Thông tư',
    ]),
    group('Việc tiếp theo', 'mốc', GROUP_STYLE.next, [
      'Tổ chức triển khai việc cập nhật định mức khống chế chi theo Thông tư số 03/2026/TT-NHNN cho các đơn vị liên quan, bắt đầu từ ngày 03 tháng 3 năm 2026',
      'Ban hành văn bản hướng dẫn cụ thể về việc thực hiện các bước báo cáo, thẩm định, phê duyệt chi phí xây dựng trước khi thanh toán và quyết toán',
    ]),
    group('Điểm chưa rõ', 'điểm', GROUP_STYLE.unclear, [
      'Không có nội dung chỉ đạo cụ thể về thời hạn rà soát việc phải làm, do đó chưa xác định được mốc thời gian cụ thể để triển khai',
    ]),
  ],
  impact: [
    group('Việc tham mưu', 'việc', GROUP_STYLE.advise, [
      'Xin ý kiến lãnh đạo về việc đánh giá tác động của Thông tư số 03/2026/TT-NHNN đến các đơn vị thuộc Ngân hàng Nhà nước trong công tác xây dựng',
    ]),
    group('Cần nghiên cứu', 'nội dung', GROUP_STYLE.study, [
      'Rà soát các đơn vị thuộc Ngân hàng Nhà nước có thực hiện nhiệm vụ xây dựng, quản lý, sử dụng và thanh toán chi phí công trình xây dựng vốn ban quy phạm pháp luật',
      'Đối chiếu nội dung định mức chi trong Thông tư số 03/2026/TT-NHNN với thực tế hiện tại của các đơn vị liên quan để xác định mức độ ảnh hưởng',
    ]),
    group('Việc tiếp theo', 'mốc', GROUP_STYLE.next, [
      'Tổ chức báo cáo đánh giá tác động của Thông tư số 03/2026/TT-NHNN đến các đơn vị thuộc Ngân hàng Nhà nước trong thời gian 5 ngày làm việc kể từ khi có ý kiến lãnh đạo',
    ]),
  ],
};

/**
 * Kết quả tham mưu THẬT cho Nghị định 283/2026/NĐ-CP, giữ nguyên văn model trả về.
 * Lưu ý: `summary` của văn bản này vẫn là nội dung mẫu (lượt tóm tắt 100 trang thất
 * bại), nên hai chế độ của cùng một văn bản đang ở hai mức độ thật khác nhau.
 */
const ADVICE_NGHI_DINH: Record<DirectiveVariant, AdviceGroup[]> = {
  review: [
    group('Việc tham mưu', 'việc', GROUP_STYLE.advise, [
      'Xin ý kiến lãnh đạo về việc rà soát các hành vi vi phạm trong lĩnh vực lao động, bảo hiểm xã hội và đưa người lao động đi làm việc ở nước ngoài theo Nghị định mới có hiệu lực từ 15/7/2026',
    ]),
    group('Cần nghiên cứu', 'nội dung', GROUP_STYLE.study, [
      'Rà soát danh mục các hành vi vi phạm cụ thể được quy định trong Nghị định về tuyển dụng, quản lý lao động, an toàn vệ sinh lao động, bảo hiểm xã hội và hoạt động đưa người lao động đi làm việc ở nước ngoài',
      'Đối chiếu thời hiệu xử phạt (01 năm và 02 năm) với các quy định hiện hành để xác định các trường hợp cần điều chỉnh hoặc bổ sung',
      'Xem xét thẩm quyền xử phạt của các cơ quan như Bộ Nội vụ, Công an, Bảo hiểm xã hội, Cục Việc làm và cơ quan đại diện ngoại giao để xác định trách nhiệm thực thi',
    ]),
    group('Việc tiếp theo', 'mốc', GROUP_STYLE.next, [
      'Tổ chức rà soát và cập nhật danh mục vi phạm, mức phạt tiền (từ 300.000 đồng đến 200.000.000 đồng) và các hình thức xử phạt bổ sung (tịch thu tang vật, tước quyền sử dụng chứng chỉ, đình chỉ hoạt động, trục xuất) trong thời hạn 10 ngày kể từ ngày nhận chỉ đạo',
    ]),
    group('Điểm chưa rõ', 'điểm', GROUP_STYLE.unclear, [
      'Không có nội dung nào trong tài liệu yêu cầu về việc xử lý hành vi có dấu hiệu tội phạm hoặc quy định cụ thể về chuyển hồ sơ cho cơ quan tiến hành tố tụng hình sự ngoài việc nêu tại Điều 62 Luật Xử lý vi phạm hành chính, nên chưa rõ nội dung chỉ đạo cụ thể về việc này',
    ]),
  ],
  impact: [
    group('Việc tham mưu', 'việc', GROUP_STYLE.advise, [
      'Xin ý kiến lãnh đạo về việc đánh giá tác động của Nghị định quy định xử phạt vi phạm hành chính trong lĩnh vực lao động, bảo hiểm xã hội và người lao động đi làm việc ở nước ngoài đến hoạt động của đơn vị.',
    ]),
    group('Cần nghiên cứu', 'nội dung', GROUP_STYLE.study, [
      'Rà soát các hoạt động tuyển dụng, quản lý lao động, an toàn vệ sinh lao động, bảo hiểm xã hội và hoạt động đưa người lao động đi làm việc ở nước ngoài của đơn vị để xác định các hành vi có thể vi phạm theo Nghị định.',
    ]),
    group('Việc tiếp theo', 'mốc', GROUP_STYLE.next, [
      'Tổ chức đánh giá tác động của Nghị định đến các quy trình, chính sách và hoạt động hiện tại của đơn vị, với mục tiêu hoàn thành báo cáo trước ngày 15 tháng 7 năm 2026.',
    ]),
  ],
};

/**
 * NỘI DUNG MẪU — chỗ dựa cuối cho văn bản mới chưa chạy tham mưu thật. Cả ba văn bản
 * trong hộp việc hiện đã có kết quả thật, bộ này chỉ dùng khi thêm văn bản mới.
 */
const PLACEHOLDER_ADVICE: AdviceGroup[] = [
  group('Việc tham mưu', 'việc', GROUP_STYLE.advise, [
    '(Nội dung mẫu) Việc cần trình lãnh đạo, kèm mốc thời gian nội bộ để kịp hạn xử lý của văn bản.',
    '(Nội dung mẫu) Đề xuất phân công đầu mối và cách thu thập hồ sơ, số liệu phục vụ nội dung tham mưu.',
  ]),
  group('Cần nghiên cứu', 'nội dung', GROUP_STYLE.study, [
    '(Nội dung mẫu) Điều khoản cần đối chiếu với quy định hiện hành trước khi kết luận.',
  ]),
  group('Việc tiếp theo', 'mốc', GROUP_STYLE.next, [
    '(Nội dung mẫu) Mốc gửi dự thảo ý kiến và mốc trình lãnh đạo ký văn bản trả lời.',
  ]),
  group('Điểm chưa rõ', 'điểm', GROUP_STYLE.unclear, [
    '(Nội dung mẫu) Nội dung văn bản không nêu rõ, cần hỏi lại cơ quan ban hành — model không suy đoán.',
  ]),
];

const ADVICE_BY_CODE: Record<string, Record<DirectiveVariant, AdviceGroup[]>> = {
  '8662/TTr-SNV': ADVICE_TO_TRINH,
  '03/2026/TT-NHNN': ADVICE_THONG_TU,
  '283/2026/NĐ-CP': ADVICE_NGHI_DINH,
};

/** Kết quả tham mưu theo số ký hiệu văn bản và chỉ đạo của lãnh đạo. */
export function getAdviceGroups(code: string, directive: string): AdviceGroup[] {
  const byDirective = ADVICE_BY_CODE[code];
  if (!byDirective) return PLACEHOLDER_ADVICE;
  return byDirective[resolveDirectiveVariant(directive)];
}
