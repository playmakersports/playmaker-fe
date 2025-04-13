import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

export const settingsHeaderProfile = style({
  userSelect: "none",
  display: "flex",
  padding: "20px 0",
  alignItems: "center",
  gap: "10px",
});
export const settingsMyInfoHeaderProfile = style({
  userSelect: "none",
  display: "flex",
  flexDirection: "column",
  padding: "20px 0",
  alignItems: "center",
  gap: "12px",
});
export const settingsHeaderProfileImage = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "48px",
  height: "48px",
  borderRadius: "10px",
  backgroundColor: "var(--gray50)",
});
export const settingsGroupWrapper = style({
  margin: "20px 0",
});
export const settingsGroupTitle = style([
  fonts.body4.regular,
  {
    marginBottom: "16px",
    color: "var(--gray400)",
  },
]);
export const settingsMyInfoFormWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});
