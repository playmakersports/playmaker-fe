const FONTS_WEIGHT = {
  semibold: 600,
  medium: 500,
  regular: 400
};
const FONTS = {
  head1: (weight) => `font-size: 6.4rem; line-height: 8rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  head2: (weight) => `font-size: 5.6rem; line-height: 7.2rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  head3: (weight) => `font-size: 4.8rem; line-height: 6.4rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  head4: (weight) => `font-size: 4rem; line-height: 5.6rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  head5: (weight) => `font-size: 3.2rem; line-height: 4rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  head6: (weight) => `font-size: 2.4rem; line-height: 3.2rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  body1: (weight) => `font-size: 2rem; line-height: 3rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  body2: (weight) => `font-size: 1.8rem; line-height: 2.8rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  body3: (weight) => `font-size: 1.6rem; line-height: 2.4rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  body4: (weight) => `font-size: 1.4rem; line-height: 2rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  caption1: (weight) => `font-size: 1.2rem; line-height: 1.8rem; font-weight: ${FONTS_WEIGHT[weight]}`
};
const SCROLL_HIDE = `
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
}`;
const CARD_ACTIVE = `
  transition: all 0.2s;
  &:active {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.01);
    transform: translateY(2px);
  }
`;
const BUTTON_ACTIVE = (color, radius) => `
    border-radius: ${8}px;
    transition: all 0.2s;
    user-select: none;
    &:active {
      transform: scale(0.98);
      background-color: ${color ?? "var(--background)"};
    }
`;
const SCROLL_MASKED_GRADIENT = (rgbColor) => `
    position: relative;
    overflow: hidden;

    .prev-scroll-mask {
      ${SCROLL_HIDE};
      &:before {
      content: "";
      position: absolute;
      width: 36px;
      height: 100%;
      top: 0;
      left: -1px;
      background-image: linear-gradient(to right, rgba(${rgbColor}) 10%, rgba(${rgbColor}, 0) 100%);
      z-index: 1;
    }};
    .next-scroll-mask {
      ${SCROLL_HIDE};
      &:after {
      content: "";
      position: absolute;
      width: 36px;
      height: 100%;
      top: 0;
      right: -1px;
      background-image: linear-gradient(to left, rgba(${rgbColor}) 10%, rgba(${rgbColor}, 0) 100%);
      z-index: 1;
    }};
    .top-scroll-mask {
      ${SCROLL_HIDE};
      &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 36px;
      top: 0;
      left: -1px;
      background-image: linear-gradient(to bottom, rgba(${rgbColor}) 10%, rgba(${rgbColor}, 0) 100%);
      z-index: 1;
    }};
    .bottom-scroll-mask {
      ${SCROLL_HIDE};
      &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 36px;
      bottom: 0;
      left: -1px;
      background-image: linear-gradient(to top, rgba(${rgbColor}) 10%, rgba(${rgbColor}, 0) 100%);
      z-index: 1;
    }};
 `;
const TEXT_ACTIVE = (backgroundColor, props) => `
  transition: box-shadow 0.2s cubic-bezier(0.05, 0, 0, 1), background-color 0.2s cubic-bezier(0.05, 0, 0, 1),
    transform 0.3s cubic-bezier(0.05, 0, 0, 1);
  &:active ${props?.hover ? ", &:hover" : ""} ${props?.focus ? ", &:focus" : ""} {
    background-color: ${backgroundColor ?? "var(--background)"};
    box-shadow: 0 0 0 ${props?.activeRange ?? 8}px ${backgroundColor ?? "var(--background)"};
    ${props?.scalable ? "transform: scale(0.97);" : ""}
  }
`;
export {
  BUTTON_ACTIVE as B,
  CARD_ACTIVE as C,
  FONTS as F,
  SCROLL_MASKED_GRADIENT as S,
  TEXT_ACTIVE as T,
  SCROLL_HIDE as a
};
