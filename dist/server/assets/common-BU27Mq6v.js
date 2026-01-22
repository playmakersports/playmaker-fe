function hexToRgb(hex, output) {
  hex = hex.replace(/^#/, "");
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r2, g2, b2) => {
    return r2 + r2 + g2 + g2 + b2 + b2;
  });
  const bigint = parseInt(hex, 16);
  const r = bigint >> 16 & 255;
  const g = bigint >> 8 & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}
function secondToMinSec(target) {
  return `${Math.floor(target / 60) < 10 ? `0${Math.floor(target / 60)}` : Math.floor(target / 60)}:${target % 60 < 10 ? `0${target % 60}` : target % 60}`;
}
function minSecToSecond(target) {
  const [mm, ss] = target.split(":");
  return Number(mm) * 60 + Number(ss);
}
export {
  hexToRgb as h,
  minSecToSecond as m,
  secondToMinSec as s
};
