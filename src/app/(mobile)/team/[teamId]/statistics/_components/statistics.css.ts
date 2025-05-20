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
  display: "inline-flex",
  gap: "5px",
  color: "var(--gray800)",
});
globalStyle(`${TeamDataRecordItem} > span.title`, {
  color: "var(--gray600)",
});

export const TeamStatisticsDetailContainer = style({
  margin: "0 -16px",
  padding: "32px var(--global-lr-padding) 20px",
  backgroundColor: "var(--gray100)",
  borderRadius: "20px 20px 0 0",
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
export const TeamStatisticsGroupCard = style({
  padding: "12px 16px",
  borderRadius: "10px",
  backgroundColor: "var(--white)",
});
export const TeamStatisticsGroupCardItem = style([
  fonts.body4.medium,
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 4px",
    borderBottom: "1px solid var(--gray200)",
    color: "var(--gray800)",
    selectors: {
      "&:last-of-type": {
        borderBottom: "none",
      },
    },
  },
]);
globalStyle(`${TeamStatisticsGroupCardItem} > span.item-title`, {
  color: "var(--gray600)",
});
