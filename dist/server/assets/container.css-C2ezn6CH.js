import { style } from "@vanilla-extract/css";
const baseContainer = style({
  padding: "0 var(--global-lr-padding) calc(var(--safe-bottom-navigation) + 52px)"
});
const innerChildContainer = style({
  margin: "0 calc(-1 * var(--global-lr-padding))"
});
const baseContainerPaddingTop = style([{ paddingTop: "20px" }, baseContainer]);
const flexColumnGap40 = style({
  display: "flex",
  flexDirection: "column",
  gap: "40px"
});
const flexColumnGap30 = style({
  display: "flex",
  flexDirection: "column",
  gap: "30px"
});
const flexColumnGap24 = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px"
});
const flexColumnGap20 = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px"
});
const flexColumnGap16 = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px"
});
const flexColumnGap12 = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px"
});
const flexColumnGap10 = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px"
});
const flexColumnGap8 = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px"
});
const flexColumnGap4 = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px"
});
const flexRowGap10 = style({
  display: "flex",
  gap: "10px"
});
const flexRowGap12 = style({
  display: "flex",
  gap: "12px"
});
const flexRowGap16 = style({
  display: "flex",
  gap: "16px"
});
const flexRowGap24 = style({
  display: "flex",
  gap: "24px"
});
const flexRowGap8 = style({
  display: "flex",
  gap: "8px"
});
const flexRowGap4 = style({
  display: "flex",
  gap: "4px"
});
const flexAlignCenter = style({
  display: "flex",
  alignItems: "center"
});
const flexCenterJA = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
const flexSpaceBetween = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});
const flexSpaceEvenly = style({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center"
});
const baseCardContainerNoTrans = style({
  borderRadius: "10px",
  padding: "16px",
  border: "1px solid var(--gray200)",
  transition: "all 0.2s",
  backgroundColor: "var(--white)"
});
const baseCardContainer = style([
  baseCardContainerNoTrans,
  {
    selectors: {
      "&:active": {
        transform: "scale(0.98)"
      }
    }
  }
]);
const baseDividedLine = style({
  display: "block",
  width: "var(--mobile-max-width)",
  height: "6px",
  backgroundColor: "var(--gray50)"
});
const baseDividedLineChild = style([
  baseDividedLine,
  {
    margin: "0 calc(-1 *  var(--global-lr-padding))"
  }
]);
export {
  flexColumnGap20 as a,
  flexColumnGap40 as b,
  flexColumnGap16 as c,
  flexColumnGap4 as d,
  flexColumnGap8 as e,
  flexColumnGap12 as f,
  flexColumnGap10 as g,
  baseContainer as h,
  innerChildContainer as i,
  baseDividedLineChild as j,
  flexRowGap4 as k,
  flexAlignCenter as l,
  flexSpaceBetween as m,
  flexRowGap8 as n,
  baseCardContainer as o,
  flexRowGap10 as p,
  flexColumnGap24 as q,
  flexRowGap12 as r,
  baseContainerPaddingTop as s,
  flexRowGap16 as t,
  baseCardContainerNoTrans as u,
  flexCenterJA as v,
  flexColumnGap30 as w,
  baseDividedLine as x,
  flexSpaceEvenly as y,
  flexRowGap24 as z
};
