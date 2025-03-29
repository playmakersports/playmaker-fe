type FontsWeight = "semibold" | "medium" | "regular";
const FONTS_WEIGHT: Record<FontsWeight, number> = {
  semibold: 600,
  medium: 500,
  regular: 400,
};
export const FONTS = {
  HEAD1: `font-weight: 700; font-size: 2rem; line-height: 2.2rem;`,
  HEAD2: `font-weight: 600; font-size: 1.6rem; line-height: 2.2rem;`,
  MD1: `font-weight: 600; font-size: 1.6rem; line-height: 2.4rem;`,
  MD1W500: `font-weight: 500; font-size: 1.6rem; line-height: 2.4rem;`,
  MD2: `font-weight: 500; font-size: 1.4rem; line-height: 2.2rem;`,
  MD3: `font-weight: 400; font-size: 1.3rem; line-height: 1.8rem;`,

  head1: (weight: FontsWeight) => `font-size: 6.4rem; line-height: 8rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  head2: (weight: FontsWeight) => `font-size: 5.6rem; line-height: 7.2rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  head3: (weight: FontsWeight) => `font-size: 4.8rem; line-height: 6.4rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  head4: (weight: FontsWeight) => `font-size: 4rem; line-height: 5.6rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  head5: (weight: FontsWeight) => `font-size: 3.2rem; line-height: 4rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  head6: (weight: FontsWeight) => `font-size: 2.4rem; line-height: 3.2rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  body1: (weight: FontsWeight) => `font-size: 2rem; line-height: 3rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  body2: (weight: FontsWeight) => `font-size: 1.8rem; line-height: 2.8rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  body3: (weight: FontsWeight) => `font-size: 1.6rem; line-height: 2.4rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  body4: (weight: FontsWeight) => `font-size: 1.4rem; line-height: 2rem; font-weight: ${FONTS_WEIGHT[weight]}`,
  caption1: (weight: FontsWeight) => `font-size: 1.2rem; line-height: 1.8rem; font-weight: ${FONTS_WEIGHT[weight]}`,
};
export const getFontsJSON = (target: string) => {
  return target
    .split(";")
    .map((value) => value.split(":"))
    .reduce((acc, [key, value]) => {
      const CAMEL_KEY: Record<string, string> = {
        "font-size": "fontSize",
        "line-height": "lineHeight",
        "font-weight": "fontWeight",
      };
      return { ...acc, [CAMEL_KEY[key.trim()]]: value.trim() };
    }, {});
};

export const SCROLL_HIDE = `
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
}`;

export const CARD_ACTIVE = `
  transition: all 0.2s;
  &:active {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.01);
    transform: translateY(2px);
  }
`;
export const BUTTON_ACTIVE = (color?: string, radius?: number) => `
    border-radius: ${radius ?? 8}px;
    transition: all 0.2s;
    user-select: none;
    &:active {
      transform: scale(0.98);
      background-color: ${color ?? "var(--background)"};
    }
`;

export const INNER_BUTTON_ACTIVE = (color?: string) => `
    border-radius: 8px;
    transition: all 0.2s;
    &:active {
      background-color: ${color ?? "var(--background)"};
    }
    &:active > .inner-button {
      transition: transform 0.2s;
      transform: scale(0.97);
    }
`;

export const SCROLL_MASKED_GRADIENT = (rgbColor: string) => `
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

export const TEXT_ACTIVE = (
  backgroundColor?: string,
  props?: {
    activeRange?: number;
    hover?: boolean;
    scalable?: boolean;
    focus?: boolean;
  }
) => `
  transition: box-shadow 0.2s cubic-bezier(0.05, 0, 0, 1), background-color 0.2s cubic-bezier(0.05, 0, 0, 1),
    transform 0.3s cubic-bezier(0.05, 0, 0, 1);
  &:active ${props?.hover ? ", &:hover" : ""} ${props?.focus ? ", &:focus" : ""} {
    background-color: ${backgroundColor ?? "var(--background)"};
    box-shadow: 0 0 0 ${props?.activeRange ?? 8}px ${backgroundColor ?? "var(--background)"};
    ${props?.scalable ? "transform: scale(0.97);" : ""}
  }
`;
