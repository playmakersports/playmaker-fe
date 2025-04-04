import { font } from "@/styles/font.css";
import { style } from "@vanilla-extract/css";

export const baseInputWrapper = style({
  maxWidth: "var(--mobile-max-width)",
});

export const baseInputHeader = style([
  font.body4.medium,
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
