import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

export const headerContainer = style({
  position: "fixed",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "var(--mobile-max-width)",
  top: "0",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "env(safe-area-inset-top) 16px",
  height: "var(--header-height)",
  zIndex: 999,
  transition: "background-color 0.3s, backdrop-filter 0.3s",
});
export const headerMainContainer = style([
  headerContainer,
  {
    backgroundColor: "rgba(0,0,0,0.25)",
    // backdropFilter: "blur(6px)",
    "@media": {
      "screen and (max-width: 540px)": {
        maxWidth: "100%",
      },
    },
  },
]);
export const headerMainScrolledContainer = style({
  backgroundColor: "var(--background-light)",
  backdropFilter: "none",
});
export const headerMainLogoContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
export const headerInnerContainer = style({
  display: "flex",
  width: "100%",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  padding: "env(safe-area-inset-top) 4px 0",
});

export const headerButtonIconWrapper = style({
  display: "inline-flex",
  width: "24px",
  height: "24px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "2px",
  selectors: {
    "&:active": {
      backgroundColor: "var(--gray100)",
      boxShadow: "0 0 0 6px var(--gray100)",
    },
  },
});
export const headerButtonDarkBgIconWrapper = style({
  selectors: {
    "&:active": {
      backgroundColor: "var(--gray800)",
      boxShadow: "0 0 0 6px var(--gray800)",
    },
  },
});
export const headerButtonIcon = style({
  width: "24px",
  height: "24px",
});
export const headerSingleSubActionButton = style([
  fonts.body3.medium,
  {
    marginLeft: "-8px",
    minWidth: "32px",
    color: "var(--primary600)",
    wordBreak: "keep-all",
    borderRadius: "2px",
    transition: "background-color 0.3s, box-shadow 0.2s",
    selectors: {
      "&:active": {
        backgroundColor: "var(--primary50)",
        boxShadow: "0 0 0 6px var(--primary50)",
      },
    },
  },
]);
