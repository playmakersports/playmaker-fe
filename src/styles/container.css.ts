import { style } from "@vanilla-extract/css";

export const baseContainer = style({
  padding: "0 var(--global-lr-padding) calc(var(--safe-bottom-navigation) + 52px)",
});
export const innerChildContainer = style({
  margin: "0 calc(-1 * var(--global-lr-padding))",
});
export const baseContainerPaddingTop = style([{ paddingTop: "20px" }, baseContainer]);
export const flexColumnGap40 = style({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});
export const flexColumnGap30 = style({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});
export const flexColumnGap24 = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});
export const flexColumnGap20 = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});
export const flexColumnGap16 = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
export const flexColumnGap12 = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});
export const flexColumnGap10 = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});
export const flexColumnGap8 = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
export const flexColumnGap4 = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});
export const flexRowGap10 = style({
  display: "flex",
  gap: "10px",
});
export const flexRowGap12 = style({
  display: "flex",
  gap: "12px",
});
export const flexRowGap16 = style({
  display: "flex",
  gap: "16px",
});
export const flexRowGap24 = style({
  display: "flex",
  gap: "24px",
});
export const flexRowGap8 = style({
  display: "flex",
  gap: "8px",
});
export const flexRowGap4 = style({
  display: "flex",
  gap: "4px",
});

export const flexAlignCenter = style({
  display: "flex",
  alignItems: "center",
});
export const flexCenterJA = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const flexSpaceBetween = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export const flexSpaceEvenly = style({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
});

export const baseCardContainerNoTrans = style({
  borderRadius: "10px",
  padding: "16px",
  border: "1px solid var(--gray200)",
  transition: "all 0.2s",
  backgroundColor: "var(--white)",
});
export const baseCardContainer = style([
  baseCardContainerNoTrans,
  {
    selectors: {
      "&:active": {
        transform: "scale(0.98)",
      },
    },
  },
]);
export const baseDividedLine = style({
  display: "block",
  width: "var(--mobile-max-width)",
  height: "6px",
  backgroundColor: "var(--gray50)",
});
export const baseDividedLineChild = style([
  baseDividedLine,
  {
    margin: "0 calc(-1 *  var(--global-lr-padding))",
  },
]);
