import { style } from "@vanilla-extract/css";
import { fonts } from "./fonts.css";

export const colors = {
  gray400: style({
    color: "var(--gray400)",
  }),
  gray500: style({
    color: "var(--gray500)",
  }),
  gray600: style({
    color: "var(--gray600)",
  }),
  gray900: style({
    color: "var(--gray900)",
  }),
  primary500: style({
    color: "var(--primary500)",
  }),
  red500: style({
    color: "var(--red500)",
  }),
};

export const semantic = {
  description: style([
    fonts.caption1.regular,
    {
      color: "var(--gray400)",
    },
  ]),
};

export const omittedText = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
