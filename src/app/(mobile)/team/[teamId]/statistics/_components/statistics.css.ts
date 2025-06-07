import { globalStyle, style } from "@vanilla-extract/css";
import { fonts } from "@/styles/fonts.css";

export const ProgressCircleTrophyWrapper = style({
  margin: "0 auto 10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 32,
  height: 32,
  borderRadius: "50%",
  backgroundColor: "#fff",
});
export const TeamDataRecordContainer = style([
  fonts.body4.medium,
  {
    position: "relative",
    width: "100%",
    padding: "8px 0",
    display: "flex",
    justifyContent: "center",
    gap: "32px",
    boxShadow: "var(--shadow-xs)",
    backgroundColor: "rgba(256, 256, 256, 0.5)",
    border: "1px solid #fff",
    borderRadius: "8px",
    zIndex: 2,
    backdropFilter: "blur(16px)",
  },
]);
export const TeamDataRecordItem = style({
  display: "flex",
  minWidth: "80px",
  alignItems: "center",
  flexDirection: "column",
  gap: "5px",
  color: "var(--gray800)",
});
globalStyle(`${TeamDataRecordItem} span.title`, {
  display: "inline-block",
  marginRight: "5px",
  color: "var(--gray400)",
});

export const TeamStatisticsDetailContainer = style({
  margin: "0 -16px",
  padding: "30px var(--global-lr-padding) 20px",
  backgroundColor: "var(--white)",
  borderRadius: "30px 30px 0 0",
});
export const TeamStatisticsGroupTitle = style([
  fonts.body2.semibold,
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "var(--gray900)",
  },
]);
export const TeamStatisticsGroupCardItem = style([
  fonts.body4.medium,
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "var(--gray800)",
  },
]);
globalStyle(`${TeamStatisticsGroupCardItem} span.item-title`, {
  color: "var(--gray600)",
});
export const TeamStatisticsGroupHeadIconWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "32px",
  borderRadius: "6px",
});
