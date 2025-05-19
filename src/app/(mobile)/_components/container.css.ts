import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

export const homeContentsContainer = style({
  position: "relative",
  padding: "0 var(--global-lr-padding)",
  marginTop: "-20px",
  display: "flex",
  borderRadius: "20px 20px 0 0",
  flexDirection: "column",
  gap: "20px",
  backgroundColor: "var(--background-light)",
});

export const filterButtonContainer = style([
  fonts.body4.medium,
  {
    cursor: "pointer",
    userSelect: "none",
    display: "inline-flex",
    width: "fit-content",
    alignItems: "center",
    gap: "4px",
    padding: "4px 8px",
    borderRadius: "6px",
    border: "1px solid var(--gray200)",
    color: "var(--gray600)",
    selectors: {
      "&:active": {
        backgroundColor: "var(--gray50)",
      },
    },
  },
]);
