import { style } from "@vanilla-extract/css";

export const homeContentsContainer = style({
  position: "relative",
  padding: "0 20px",
  marginTop: "-20px",
  display: "flex",
  borderRadius: "20px 20px 0 0",
  flexDirection: "column",
  gap: "20px",
  backgroundColor: "var(--background-light)",
});
