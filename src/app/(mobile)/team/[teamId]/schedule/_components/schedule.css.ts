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
