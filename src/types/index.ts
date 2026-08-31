/** Mức độ gấp của hạn xử lý — quyết định màu của chip "HẠN XỬ LÝ". */
export type UrgencyLevel = 'urgent' | 'soon' | 'ok';

/** Phần mở rộng tệp được gán màu badge riêng. */
export type AttachmentExt = 'PDF' | 'DOCX' | 'XLSX';

export interface Attachment {
  ext: AttachmentExt;
  name: string;
  meta: string;
}

export interface Citation {
  ref: string;
  text: string;
}

export interface Metric {
  label: string;
  value: string;
}

/** Một văn bản đến trong hộp việc. */
export interface IncomingDoc {
  id: string;
  arrived: string;
  code: string;
  issued: string;
  org: string;
  title: string;
  due: string;
  dueNote: string;
  level: UrgencyLevel;
  /** Nhãn số tệp hiển thị trên chip đính kèm, ví dụ "2 tệp". */
  files: string;
  hasSummary: boolean;
  attachments: Attachment[];
  /** Bút phê / ý kiến chỉ đạo đã ghi trên văn bản. */
  note: string;
  summary: string;
  metrics: Metric[];
  citations: Citation[];
}

export interface OutgoingDoc {
  id: string;
  code: string;
  date: string;
  title: string;
  signer: string;
  unit: string;
  to: string;
}

export interface AdviceItem {
  no: string;
  text: string;
  refs: string[];
}

/** Bốn nhóm kết quả tham mưu: việc tham mưu / cần nghiên cứu / việc tiếp theo / điểm chưa rõ. */
export interface AdviceGroup {
  title: string;
  count: string;
  color: string;
  bg: string;
  items: AdviceItem[];
}

export interface NavItem {
  label: string;
  /** Dữ liệu path của icon (stroke, viewBox 24). */
  icon: string;
  badge?: string;
}

export interface NavFootItem {
  label: string;
  icon: string;
  badge?: string;
  items: { label: string; meta: string }[];
}

export interface Kpi {
  value: string;
  label: string;
  trend: string;
  color: string;
  trendColor: string;
}

export interface PersonalStat {
  label: string;
  value: string;
  color: string;
  note: string;
  percent: number;
}

export interface FooterColumn {
  title: string;
  lines: string[];
}

export interface StoreBadge {
  name: string;
  small: string;
  icon: string;
}

/** Phiên làm việc gần đây trong trang Trợ lý. */
export interface AssistantSession {
  title: string;
  meta: string;
  color: string;
}

export type AssistantMode = 'summary' | 'advice';

export type RunStatus = 'idle' | 'running' | 'streaming' | 'done';
