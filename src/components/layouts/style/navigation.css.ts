import { FONTS, getFontsJSON } from "@/styles/common";
import { globalStyle, keyframes, style } from "@vanilla-extract/css";

const bounce = keyframes({
  "0%": { transform: "scale(1)" },
  "30%": { transform: "scale(1.15)" },
  "60%": { transform: "scale(0.95)" },
  "100%": { transform: "scale(1)" },
});

export const navigationLayoutWrapper = style({
  position: "fixed",
  bottom: "-1px",
  left: 0,
  right: 0,
  width: "100%",
  minHeight: " var(--navigation-height)",
  zIndex: 900,
  transition: "transform 0.35s ease, opacity 0.3s ease",

  "@media": {
    "screen and (min-width: 880px)": {
      width: "160px",
      left: "50%",
      top: "80px",
      opacity: "1 !important",
      transform: "translateX(calc(-50% - var(--mobile-max-width) / 2 - 80px)) !important",
      transition: "none",
    },
  },
});
export const navigationContainer = style({
  margin: "0 auto",
  maxWidth: "var(--mobile-max-width)",
  "@media": {
    "screen and (max-width: 560px)": {
      width: "100%",
    },
  },
});

export const navigationInner = style({
  width: "100%",
  height: "100%",
  padding: "10px 16px calc(var(--safe-bottom) + 10px)",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "0 0 15px 0 rgba(51, 65, 85, 0.05)",
  backgroundColor: "var(--background-light)",
  "@media": {
    "screen and (min-width: 880px)": {
      flexDirection: "column",
      gap: "10px",
      boxShadow: "none",
      backgroundColor: "transparent",
    },
  },
});

export const navigationButton = style({
  cursor: "pointer",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  selectors: {
    "&::after": {
      content: "attr(data-label)",
      width: "max-content",
      marginTop: "2px",
      zIndex: 1,
      color: "var(--gray400)",
      ...getFontsJSON(FONTS.caption1("regular")),
    },
    '&[data-active="true"]::after': {
      color: "var(--primary500)",
      ...getFontsJSON(FONTS.caption1("semibold")),
    },
  },

  "@media": {
    "screen and (min-width: 880px)": {
      flexDirection: "row",
      gap: "12px",
      selectors: {
        "&::after": {
          color: "var(--gray400)",
          ...getFontsJSON(FONTS.body2("regular")),
        },
        '&[data-active="true"]::after': {
          color: "var(--primary500)",
          ...getFontsJSON(FONTS.body2("semibold")),
        },
      },
    },
  },
});
globalStyle(`${navigationButton}:active > svg`, {
  transform: "scale(0.9)",
  transition: "transform 0.1s ease",
});

export const navigationSvg = style({
  flexShrink: 0,
  width: "24px",
  height: "24px",
  fill: "var(--gray300)",
  zIndex: 1,
});

export const activeIcon = style({
  fill: "var(--primary500)",
  animation: `${bounce} 0.4s ease`,
});
