import { globalStyle, style } from "@vanilla-extract/css";

export const notificationItemContainer = style({
  display: "flex",
  gap: "10px",
  padding: "10px var(--global-lr-padding) 16px",
  selectors: {
    "&.unread": {
      backgroundColor: "rgba(231, 253, 235, 0.7)",
    },
  },
});
export const notificationItemIcon = style({
  flexShrink: 0,
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  backgroundColor: "var(--white)",
});
globalStyle(`${notificationItemIcon} svg`, {
  width: "30px",
  height: "30px",
});

export const notificationItemContents = style({
  userSelect: "none",
  paddingTop: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%",
});
export const notificationItemContentsHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
