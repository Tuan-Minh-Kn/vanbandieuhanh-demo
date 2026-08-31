import styles from './SectionLabel.module.css';

/** Nhãn overline in hoa, giãn chữ — BẢN TÓM TẮT, ĐIỀU KHOẢN ĐƯỢC DẪN, TỆP ĐÍNH KÈM… */
export function SectionLabel({ children, tight = false }: { children: string; tight?: boolean }) {
  return <span className={[styles.label, tight ? styles.tight : ''].join(' ')}>{children}</span>;
}
