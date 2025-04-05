import { globalStyle, style } from "@vanilla-extract/css";

export const editorContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  overscrollBehavior: "contain",
});

export const editorTextAreaContainer = style({
  flex: 1,
  width: "100%",
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid var(--gray200)",
  selectors: {
    '&[data-focus="true"]': {
      borderColor: "var(--gray300)",
    },
  },
});

globalStyle(`${editorTextAreaContainer} div:focus-visible`, {
  outline: "none",
});
globalStyle(`${editorTextAreaContainer} > div > div[role="textbox"]`, {
  minHeight: "340px",
  overflowY: "auto",
});

export const editorMenuContainer = style({
  display: "flex",
  gap: "4px",
  position: "sticky",
  top: "var(--safe-area-top)",
  margin: "0 -16px",
  padding: "6px 16px",
  overflowX: "auto",
  overflowY: "hidden",
  whiteSpace: "nowrap",
  transition: "all 0.2s",
  scrollbarWidth: "none",
  selectors: {
    "&.stuck": {
      padding: "12px 16px 8px",
      backgroundColor: "var(--background-light)",
      borderBottom: "1px solid var(--gray200)",
      boxShadow: "var(--shadow-xs)",
      zIndex: 10,
    },
  },
});

export const editorMenuButton = style({
  display: "flex",
  backgroundColor: "var(--gray100)",
  borderRadius: "4px",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px 10px",
});
export const editorMenuButtonActive = style({
  backgroundColor: "var(--primary500)",
  color: "#fff",
});
globalStyle(`${editorMenuContainer} svg`, {
  width: "16px",
  height: "14px",
  fill: "var(--gray600)",
});
globalStyle(`${editorMenuButtonActive} svg`, {
  fill: "#fff",
});
