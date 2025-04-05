import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

export const articleDetailHeader = {
  container: style({
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "20px",
    padding: "0 8px 12px",
    color: "var(--gray700)",
    borderBottom: "1px solid var(--gray200)",
  }),
  title: style([fonts.body3.semibold]),
  info: style([
    fonts.body4.regular,
    {
      display: "flex",
      justifyContent: "space-between",
    },
  ]),
};

export const articleDetailComment = style({});
