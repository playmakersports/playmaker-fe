import { FONTS, getFontsJSON } from "@/styles/common";
import { keyframes, style } from "@vanilla-extract/css";

const bounce = keyframes({
  "0%": { transform: "scale(1)" },
  "30%": { transform: "scale(1.15)" },
  "60%": { transform: "scale(0.95)" },
  "100%": { transform: "scale(1)" },
});

export const navigationContainer = style({
  margin: "0 auto",
  maxWidth: "var(--mobile-max-width)",
  "@media": {
    "screen and (max-width: 540px)": {
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
});

export const navigationButton = style({
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
  },
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
