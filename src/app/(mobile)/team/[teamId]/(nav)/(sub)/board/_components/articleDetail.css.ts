import { font } from "@/styles/font.css";
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
  title: style([font.body3.semibold]),
  info: style([
    font.body4.regular,
    {
      display: "flex",
      justifyContent: "space-between",
    },
  ]),
};

export const articleDetailComment = style({});
