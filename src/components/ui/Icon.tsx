import type { CSSProperties, SVGProps } from 'react';

export interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
  color?: string;
}

/** Icon dạng nét (Lucide-style): viewBox 24, stroke currentColor, đầu nét tròn. */
function strokeProps({ size = 16, strokeWidth = 2, className, style, color }: IconProps): SVGProps<SVGSVGElement> {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color ?? 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    style,
    'aria-hidden': true,
    focusable: false,
  };
}

/** Icon dựng từ dữ liệu path (dùng cho thanh điều hướng lấy path từ file data). */
export function PathIcon({ d, ...props }: IconProps & { d: string }) {
  return (
    <svg {...strokeProps(props)}>
      <path d={d} />
    </svg>
  );
}

/** Icon tô đặc (badge App Store / Google Play). */
export function FillIcon({ d, size = 16, className }: { d: string; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden focusable="false">
      <path d={d} />
    </svg>
  );
}

export const ShieldIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const SummaryIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M4 6h16M4 11h16M4 16h9" />
  </svg>
);

export const AdviceIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
  </svg>
);

export const RefreshIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5" />
  </svg>
);

export const UploadIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M12 16V4m0 0L7 9m5-5 5 5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const CopyIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h8" />
  </svg>
);

export const DownloadIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M12 3v12m0 0-4-4m4 4 4-4M4 19h16" />
  </svg>
);

export const FileTextIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>
);

export const FileIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM14 3v5h5" />
  </svg>
);

export const WarningIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M12 9v4m0 4h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
  </svg>
);

export const SearchIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const BellIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8M13.7 21a2 2 0 0 1-3.4 0" />
  </svg>
);

export const SparkleIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z" />
  </svg>
);

export const PlusIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const PaperclipIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M21.4 11.1 12.3 20a5 5 0 0 1-7-7l8.2-8.2a3.3 3.3 0 0 1 4.7 4.7l-8.2 8.2a1.7 1.7 0 0 1-2.3-2.3l7.5-7.4" />
  </svg>
);

export const FolderIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M4 5a2 2 0 0 1 2-2h5l2 3h5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
  </svg>
);

export const ExternalLinkIcon = (p: IconProps) => (
  <svg {...strokeProps(p)}>
    <path d="M15 3h4a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4M14 10l7-7M10 14l-7 7" />
  </svg>
);
