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

export const headerTeamTag = style([
  fonts.body2.semibold,
  {
    userSelect: "none",
    display: "flex",
    color: "var(--gray900)",
    gap: "12px",
    transition: "width 0.45s, margin 0.45s, opacity 0.3s ease-in-out",
    selectors: {
      "&::after": {
        display: "block",
        margin: "5px 0",
        content: "",
        width: "2px",
        backgroundColor: "var(--gray200)",
        transition: "all 0.3s ease-in-out",
      },
      "&[data-divider='false']::after": {
        opacity: 0,
        width: 0,
        transform: "translateX(-8px)",
      },
      "&[data-divider='true']::after": {
        opacity: 1,
        transform: "translateX(0)",
      },
      "&[data-show='false']": {
        width: 0,
        marginLeft: "-24px",
        marginRight: "12px",
        opacity: 0,
      },
    },
  },
]);
export const headerTitleTransitionShow = style({
  transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
  selectors: {
    "&[data-show='false']": {
      opacity: 0,
      transform: "translateX(-8px)",
    },
    "&[data-show='true']": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
});
