/**
 * 마지막 글자의 받침이 있다면 true, 없다면 false
 */
export function isEndWithConsonant(korStr: string) {
  const finalChrCode = korStr.charCodeAt(korStr.length - 1);
  // 0 = 받침 없음, 그 외 = 받침 있음
  const finalConsonantCode = (finalChrCode - 44032) % 28;
  return finalConsonantCode !== 0;
}

/**
 * HEX 색상코드를 RGB로 변환
 */
export function hexToRgb(hex: string, output: "Object" | "String") {
  hex = hex.replace(/^#/, "");

  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  if (output === "Object") return { r, g, b };
  if (output === "String") return `${r}, ${g}, ${b}`;
}

/**
 * 초를 mm:ss 단위로 변환
 */
export function secondToMinSec(target: number) {
  return `${Math.floor(target / 60) < 10 ? `0${Math.floor(target / 60)}` : Math.floor(target / 60)}:${
    target % 60 < 10 ? `0${target % 60}` : target % 60
  }`;
}
/**
 * mm:ss를 초 단위로 변환
 */
export function minSecToSecond(target: string): number {
  const [min, sec] = target.split(":").map((v) => Number(v));
  return min * 60 + sec;
}
