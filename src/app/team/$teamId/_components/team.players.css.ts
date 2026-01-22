import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

export const playersListSortTabContentsWrapper = style({
  position: "relative",
  width: "300%",
  display: "flex",
  transition: "transform 0.35s ease-in-out",
  whiteSpace: "wrap",
  overflowX: "hidden",
});
export const playersListSortTabContentsBox = style({
  width: "100%",
  display: "inline-block",
  padding: "0 20px",
});
export const dropdownBottomSheetLabel = style([
  fonts.body3.regular,
  {
    cursor: "pointer",
    userSelect: "none",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 -10px",
    padding: "10px",
    color: "var(--gray700)",
    borderRadius: "8px",
    transition: "all 0.2s",
    selectors: {
      "&:active": {
        transform: "scale(0.98)",
        backgroundColor: "var(--gray100)",
      },
    },
  },
]);
