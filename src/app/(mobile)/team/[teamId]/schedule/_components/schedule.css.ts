import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

export const teamFindListItem = style({
  userSelect: "none",
  paddingBottom: "16px",
  paddingRight: "4px",
  marginBottom: "16px",
  borderBottom: "1px solid var(--gray200)",
  selectors: {
    "&:last-child": {
      borderBottom: "none",
    },
  },
});
export const teamFindListSelectButton = style([
  fonts.body4.medium,
  {
    padding: "8px 14px",
    border: "1px solid var(--gray200)",
    borderRadius: "8px",
    color: "var(--gray700)",
    selectors: {
      "&:active": {
        backgroundColor: "var(--gray50)",
      },
    },
  },
]);
export const scheduleDetailDelEditButton = style({
  width: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
  transition: "background-color 0.2s, box-shadow 0.2s",
  selectors: {
    "&:active": {
      backgroundColor: "var(--gray100)",
      boxShadow: "0 0 0 6px var(--gray100)",
    },
  },
});
