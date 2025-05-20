import { innerChildContainer } from "@/styles/container.css";
import { fonts } from "@/styles/fonts.css";
import { hexToRgb } from "@/util/common";
import { globalStyle, style } from "@vanilla-extract/css";

export const teamMainTopBanner = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  width: "100%",
  height: "180px",
  objectFit: "cover",
  backgroundColor: "var(--gray100)",
  backgroundSize: "cover",
  backgroundPosition: "top center",
});
export const teamMainTopInfoList = style({
  padding: "12px 20px",
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  backdropFilter: "blur(5px)",
  backgroundColor: "rgba(0,0,0,0.1)",
});
export const teamMainTopInfoListItem = style([
  fonts.caption1.regular,
  {
    display: "flex",
    gap: "4px",
    alignItems: "center",
    color: "var(--white)",
    opacity: "0.85",
  },
]);
globalStyle(`${teamMainTopInfoListItem} > svg`, {
  width: "18px",
  height: "18px",
  fill: "var(--white)",
});

export const teamMainTopHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  color: "var(--gray700)",
});

export const teamMainContentsGroup = style({
  display: "flex",
  paddingBottom: "10px",
  flexDirection: "column",
  gap: "16px",
});

export const teamMainScheduleItem = style({
  paddingBottom: "20px",
  borderBottom: "1px solid var(--gray100)",
  selectors: {
    "&:last-of-type": {
      borderBottom: "none",
    },
    "&:active": {
      backgroundColor: "var(--gray50)",
    },
  },
});
export const teamMainTextWithIcon = style({
  display: "inline-flex",
  gap: "4px",
  alignItems: "center",
  color: "var(--gray400)",
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

export const teamMainRecentVoteContainer = style([
  innerChildContainer,
  {
    padding: "20px 0",
    background: "var(--gray50)",
  },
]);
export const teamMainRecentVoteList = style({
  scrollbarWidth: "none",
});
export const teamMainRecentVoteCard = style({
  width: "280px !important",
  borderRadius: "10px",
  padding: "16px",
  backgroundColor: "var(--white)",
  border: "1px solid var(--gray200)",
  marginRight: "var(--global-lr-padding)",
  selectors: {
    "&:first-of-type": {
      marginLeft: "var(--global-lr-padding)",
    },
  },
});
export const teamMainRecentVoteCardDateHeader = style({
  paddingBottom: "10px",
  marginBottom: "10px",
  borderBottom: "1px dashed var(--gray200)",
});

export const teamMainBoardListImage = style({
  width: "52px",
  height: "52px",
  borderRadius: "8px",
  backgroundColor: "var(--gray100)",
  objectFit: "cover",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
});
