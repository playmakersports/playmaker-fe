import { fonts } from "@/styles/fonts.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const baseInputWrapper = style({
  maxWidth: "var(--mobile-max-width)",
});

export const baseInputHeader = style([
  fonts.body4.medium,
  {
    display: "flex",
    marginBottom: "8px",
    alignItems: "center",
    gap: "4px",
    color: "var(--gray700)",
  },
]);

export const baseInputQuestionIcon = style({
  position: "relative",
  cursor: "help",
  width: "20px",
  height: "20px",
});

export const timeInputModalContainer = style({
  position: "absolute",
  left: 0,
  margin: "8px -4px",
  width: "320px",
  minWidth: "320px",
  padding: "16px",
  backgroundColor: "var(--background-light)",
  borderRadius: "10px",
  boxShadow: "var(--shadow-lg)",
  zIndex: 50,
  color: "var(--gray700)",
});

export const numberFlowContainer = style({
  position: "relative",
  display: "grid",
  width: "inherit",
  alignItems: "center",
  justifyItems: "center",
  textAlign: "center",
  gridTemplateAreas: "'overlap'",
  boxSizing: "border-box",
});
export const numberFlowInternalInput = style({
  width: "inherit",
  fontVariantNumeric: "inherit",
  appearance: "textfield",
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontWeight: "inherit",
  textAlign: "center",
  color: "transparent !important",
  caretColor: "var(--gray700)",

  "::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "::-webkit-outer-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
});
globalStyle(`${numberFlowContainer} > *`, {
  gridArea: "overlap",
});

export const dropdownAsset = {
  Box: style({
    position: "absolute",
    display: "flex",
    padding: "4px",
    flexDirection: "column",
    gap: "4px",
    width: "100%",
    minWidth: "140px",
    borderRadius: "10px",
    backgroundColor: "var(--white)",
    boxShadow: "var(--shadow-lg)",
    zIndex: 50,
    overflow: "auto",
    boxSizing: "border-box",
  }),
};

export const commentContainer = style({
  display: "flex",
  height: "44px",
  alignItems: "center",
  padding: "0 10px 0 12px",
  borderRadius: "8px",
  border: "1px solid var(--gray200)",
  transition: "border-color 0.2s ease-in-out",
});
export const commentInput = style([
  fonts.body4.regular,
  {
    flex: 1,
    padding: "12px 0",
    color: "var(--gray700)",
    selectors: {
      "&::placeholder": {
        color: "var(--gray400)",
      },
    },
  },
]);
globalStyle(`${commentContainer}:has(input:not(:placeholder-shown))`, {
  borderColor: "var(--primary500)",
});
globalStyle(`${commentContainer}:has(input:not(:placeholder-shown)) > svg`, {
  fill: "var(--primary500)",
});
