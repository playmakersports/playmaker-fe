export const FONTS = {
  HEAD1: `font-weight: 700; font-size: 2rem; line-height: 2.2rem;`,
  HEAD2: `font-weight: 600; font-size: 1.6rem; line-height: 2rem;`,
  MD1: `font-weight: 600; font-size: 1.6rem; line-height: 2.4rem;`,
  MD1W500: `font-weight: 500; font-size: 1.6rem; line-height: 2.4rem;`,
  MD2: `font-weight: 500; font-size: 1.4rem; line-height: 2rem;`,
  MD3: `font-weight: 500; font-size: 1.2rem; line-height: 1.8rem;`,
};

export const SCROLL_HIDE = `
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
}`;

export const CARD_ACTIVE = `
    border-radius: 16px;
    transition: all 0.2s;
    &:active {
      transform: scale(0.95);
      background-color: var(--card-active);
    }
`;
export const BUTTON_ACTIVE = (color?: string) => `
    border-radius: 16px;
    transition: all 0.2s;
    &:active {
      transform: scale(0.95);
      background-color: ${color ?? "var(--background)"};
    }
`;

export const INNER_BUTTON_ACTIVE = (color?: string) => `
    border-radius: 16px;
    transition: all 0.2s;
    &:active {
      background-color: ${color ?? "var(--background)"};
    }
    &:active > .inner-button {
      transition: transform 0.2s;
      transform: scale(0.95);
    }
`;
