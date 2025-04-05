import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

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
