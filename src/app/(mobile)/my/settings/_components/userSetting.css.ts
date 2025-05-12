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

export const settingsMyTeamListGroupTitle = style([
  fonts.body3.semibold,
  {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "var(--gray900)",
  },
]);
export const settingsMyTeamListContainer = style({
  padding: "12px",
  borderRadius: "10px",
  backgroundColor: "var(--gray50)",
});
export const settingsMyTeamListSportsGroupTitle = style([
  fonts.body4.regular,
  {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    color: "var(--gray400)",
  },
]);
export const settingsMyTeamListSportsGroupItem = style([
  fonts.body4.medium,
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "var(--gray700)",
  },
]);
export const settingsMyTeamListSportsGroupItemLogo = style({
  display: "inline-block",
  width: "32px",
  height: "32px",
  border: "1px solid var(--gray200)",
  borderRadius: "50%",
});

export const settingsMyNotificationItem = style({
  paddingBottom: "20px",
  borderBottom: "1px solid var(--gray100)",
  selectors: {
    "&:last-of-type": {
      borderBottom: "none",
    },
  },
});
