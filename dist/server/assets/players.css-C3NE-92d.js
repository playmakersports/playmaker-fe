import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { style, globalStyle } from "@vanilla-extract/css";
const playersListTableRow = style({
  cursor: "default",
  userSelect: "none",
  display: "flex",
  gap: "12px",
  padding: "12px 16px",
  selectors: {
    "&:nth-child(2n-1)": {
      backgroundColor: "var(--gray50)"
    },
    "&:nth-child(2n)": {
      backgroundColor: "var(--white)"
    }
  }
});
globalStyle(`${playersListTableRow} span.bullet`, {
  display: "inline-block",
  width: "4px",
  height: "4px",
  borderRadius: "50%",
  backgroundColor: "var(--primary500)"
});
const playersListTableHead = style([
  fonts.body4.medium,
  {
    position: "sticky",
    color: "var(--gray500)",
    zIndex: 3,
    selectors: {
      "&.stuck": {
        boxShadow: "var(--shadow-sm)",
        borderBottom: "1px solid var(--gray200)"
      }
    }
  }
]);
const playersListTableFlex1 = style({
  flex: 1,
  display: "flex",
  alignItems: "center"
});
const playersListTableW54 = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "54px",
  textAlign: "center"
});
const playersListTableW70 = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "70px",
  textAlign: "center"
});
const playersListTableColumnDivider = style({
  margin: "6px 0",
  backgroundColor: "var(--gray200)",
  width: "1px",
  selectors: {
    "&[data-header='true']": {
      margin: "2px 0"
    }
  }
});
export {
  playersListTableFlex1 as a,
  playersListTableW70 as b,
  playersListTableRow as c,
  playersListTableHead as d,
  playersListTableW54 as e,
  playersListTableColumnDivider as p
};
