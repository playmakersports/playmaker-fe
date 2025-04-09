import { baseContainer } from "@/styles/container.css";
import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

export const stageWrapper = {
  container: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "calc(100vh - var(--safe-area-top) - 1px)",
  }),
  title: style([
    fonts.body1.semibold,
    {
      color: "var(--gray900)",
    },
  ]),
  description: style([
    fonts.body4.regular,
    {
      margin: "4px 0 40px",
      color: "var(--gray700)",
    },
  ]),
  contents: style({
    flex: 1,
    marginBottom: "28px",
  }),
  buttons: style({
    display: "flex",
    gap: "8px",
    padding: "0 16px calc(var(--safe-bottom) + 16px)",
  }),
};

export const stageFormWrapper = style([
  baseContainer,
  {
    display: "flex",
    paddingTop: 0,
    flexDirection: "column",
    gap: "10px",
  },
]);
