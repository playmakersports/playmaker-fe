import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

export const headerMoverContainer = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "var(--header-height)",
});
export const headerMoverButton = style({
  display: "flex",
  gap: "4px",
  alignItems: "center",
  color: "var(--gray900)",
});
export const headerListContainer = style({
  position: "fixed",
  margin: "0 auto",
  left: "50%",
  marginTop: "-1px",
  top: "var(--safe-area-top)",
  transform: "translateX(-50%)",
  width: "var(--mobile-max-width)",
  padding: "0 12px 20px",
  backgroundColor: "var(--background-light)",
  borderRadius: "0 0 20px 20px",
  transition: "transform 0.3s, opacity 0.3s",
  zIndex: 901,
});
export const headerListItem = style([
  fonts.body4.regular,
  {
    userSelect: "none",
    cursor: "pointer",
    display: "inline-flex",
    width: "100%",
    padding: "10px 8px",
    color: "var(--gray600)",
    textAlign: "left",
  },
]);
