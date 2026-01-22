import { style } from "@vanilla-extract/css";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
const colors = {
  gray400: style({
    color: "var(--gray400)"
  }),
  gray500: style({
    color: "var(--gray500)"
  }),
  gray600: style({
    color: "var(--gray600)"
  }),
  gray800: style({
    color: "var(--gray800)"
  }),
  gray900: style({
    color: "var(--gray900)"
  }),
  primary500: style({
    color: "var(--primary500)"
  }),
  red500: style({
    color: "var(--red500)"
  })
};
const semantic = {
  description: style([
    fonts.caption1.regular,
    {
      color: "var(--gray400)"
    }
  ])
};
const omittedText = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
});
export {
  colors as c,
  omittedText as o,
  semantic as s
};
