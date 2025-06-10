import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

export const playersListTableRow = style({
  cursor: "default",
  userSelect: "none",
  display: "flex",
  gap: "12px",
  padding: "12px 16px",
  selectors: {
    "&:nth-child(2n-1)": {
      backgroundColor: "var(--gray50)",
    },
    "&:nth-child(2n)": {
      backgroundColor: "var(--white)",
    },
  },
});
export const playersListTableHead = style([
  fonts.body4.medium,
  {
    position: "sticky",
    color: "var(--gray500)",
    zIndex: 3,
    selectors: {
      "&.stuck": {
        boxShadow: "var(--shadow-sm)",
        borderBottom: "1px solid var(--gray200)",
      },
    },
  },
]);
export const playersListTableFlex1 = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
});
export const playersListTableW54 = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "54px",
  textAlign: "center",
});
export const playersListTableW70 = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "70px",
  textAlign: "center",
});
export const playersListTableColumnDivider = style({
  margin: "6px 0",
  backgroundColor: "var(--gray200)",
  width: "1px",
  selectors: {
    "&[data-header='true']": {
      margin: "2px 0",
    },
  },
});
