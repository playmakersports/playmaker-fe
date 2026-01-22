import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { style, globalStyle } from "@vanilla-extract/css";
const settingsHeaderProfile = style({
  userSelect: "none",
  display: "flex",
  padding: "20px 0",
  alignItems: "center",
  gap: "10px"
});
const settingsMyInfoHeaderProfile = style({
  userSelect: "none",
  display: "flex",
  flexDirection: "column",
  padding: "20px 0",
  alignItems: "center",
  gap: "12px"
});
const settingsHeaderProfileImage = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "48px",
  height: "48px",
  borderRadius: "10px",
  backgroundColor: "var(--gray50)",
  overflow: "hidden"
});
globalStyle(`${settingsHeaderProfileImage} img.profile-image`, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center"
});
const settingsGroupWrapper = style({
  margin: "20px 0"
});
const settingsGroupTitle = style([
  fonts.body4.regular,
  {
    marginBottom: "16px",
    color: "var(--gray400)"
  }
]);
const settingsMyInfoFormWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px"
});
const settingsMyTeamListGroupTitle = style([
  fonts.body3.semibold,
  {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "var(--gray900)"
  }
]);
const settingsMyTeamListContainer = style({
  padding: "12px",
  borderRadius: "10px",
  backgroundColor: "var(--gray50)"
});
style([
  fonts.body4.regular,
  {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    color: "var(--gray400)"
  }
]);
const settingsMyTeamListSportsGroupItem = style([
  fonts.body4.medium,
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "var(--gray700)"
  }
]);
style({
  display: "inline-block",
  width: "32px",
  height: "32px",
  border: "1px solid var(--gray200)",
  borderRadius: "50%"
});
const settingsMyNotificationItem = style({
  paddingBottom: "20px",
  borderBottom: "1px solid var(--gray100)",
  selectors: {
    "&:last-of-type": {
      borderBottom: "none"
    }
  }
});
const settingsAccountButton = style([
  settingsMyTeamListSportsGroupItem,
  {
    padding: "10px 12px",
    margin: "0 -12px",
    borderRadius: "8px",
    transition: "background-color 0.2s ease-in-out, transform 0.2s ease-in-out",
    selectors: {
      "&:active": {
        transform: "scale(0.98)",
        backgroundColor: "var(--gray50)"
      }
    }
  }
]);
export {
  settingsGroupTitle as a,
  settingsHeaderProfile as b,
  settingsHeaderProfileImage as c,
  settingsMyTeamListGroupTitle as d,
  settingsMyTeamListContainer as e,
  settingsMyNotificationItem as f,
  settingsMyInfoHeaderProfile as g,
  settingsMyInfoFormWrapper as h,
  settingsAccountButton as i,
  settingsGroupWrapper as s
};
