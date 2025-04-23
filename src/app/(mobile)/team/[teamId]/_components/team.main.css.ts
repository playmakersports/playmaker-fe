import { fonts } from "@/styles/fonts.css";
import { hexToRgb } from "@/util/common";
import { globalStyle, style } from "@vanilla-extract/css";

export const teamMainTopBanner = style({
  position: "relative",
  marginBottom: "18px",
  width: "100%",
  height: "160px",
  objectFit: "cover",
  backgroundColor: "var(--gray100)",
  backgroundSize: "cover",
  backgroundPosition: "top center",
});
export const teamMainTopInfoContainer = style({
  position: "absolute",
  bottom: 0,
  display: "flex",
  padding: "8px 10px",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 20px",
  width: "calc(100% - 40px)",
  backgroundColor: "rgba(256,256,256,0.7)",
  borderRadius: "8px",
  backdropFilter: "blur(15px)",
  transform: "translateY(50%)",
});
export const teamMainTopInfoList = style({
  display: "flex",
  gap: "12px",
});
export const teamMainTopInfoListItem = style([
  fonts.caption1.regular,
  {
    display: "flex",
    gap: "4px",
    alignItems: "center",
    color: "var(--gray700)",
  },
]);
globalStyle(`${teamMainTopInfoListItem} > svg`, {
  width: "18px",
  height: "18px",
  fill: "var(--gray700)",
});

export const teamMainTopHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  color: "var(--gray700)",
});

export const teamMainContentsGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const teamMainTextWithIcon = style({
  display: "inline-flex",
  gap: "4px",
  alignItems: "center",
  color: "var(--gray400)",
});
export const teamMainCardContainer = style({
  padding: "16px",
  borderRadius: "10px",
  border: "1px solid var(--gray200)",
});
export const teamMainMatchTeamContainer = style({
  margin: "20px auto 0",
  display: "flex",
  maxWidth: "300px",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  color: "var(--gray700)",
});
export const teamMainMatchTeamScoreContainer = style([
  fonts.body2.regular,
  {
    display: "flex",
    alignItems: "center",
    padding: "8px 14px",
    borderRadius: "8px",
    gap: "10px",
    backgroundColor: "var(--gray50)",
  },
]);
export const teamMainMatchTeamName = style([
  fonts.body4.medium,
  {
    maxWidth: "54px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
]);
export const teamMainMatchTeamScoreBox = style({
  minWidth: "28px",
  textAlign: "center",
});
export const teamMainMatchTeamScoreContainerWin = style({
  backgroundColor: "#D4FCDB",
  background: `linear-gradient(90deg,  #D4FCDB 0%, rgba(${hexToRgb("#D4FCDB", "String")},0.2) 100%)`,
});
export const teamMainMatchTeamScoreContainerLose = style({
  backgroundColor: "#FEE8D8",
  background: `linear-gradient(90deg, rgba(${hexToRgb("#FEE8D8", "String")},0.2) 0%, #FEE8D8 100%)`,
});
export const teamMainMatchResultBox = style([
  fonts.caption1.medium,
  {
    padding: "3px 8px",
    borderRadius: "6px",
    backgroundColor: "var(--gray700)",
    color: "var(--white)",
  },
]);
export const teamMainMatchResultBoxWin = style({
  backgroundColor: "var(--primary500)",
});
export const teamMainMatchResultBoxLose = style({
  backgroundColor: "var(--red500)",
});

export const teamHeartButtonBox = style({
  width: "20px",
  height: "20px",
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3px",
  transition: "all 0.25s",
  selectors: {
    "&:active": {
      boxShadow: "0 0 0 4px var(--gray50)",
      backgroundColor: "var(--gray50)",
      transform: "scale(0.97)",
    },
  },
});
export const teamHeartButtonIcon = style({
  width: "100%",
  height: "100%",
});
