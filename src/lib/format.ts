/** Định dạng số giây theo kiểu Việt Nam: 7.8 → "7,8 giây". */
export function formatSeconds(seconds: number): string {
  return `${seconds.toFixed(1).replace('.', ',')} giây`;
}
