import { fonts } from "@/styles/fonts.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const matchWinLoseLabel = style([
  fonts.body4.semibold,
  {
    margin: "0 auto",
    width: "90px",
    borderRadius: "0 0 8px 8px",
    padding: "4px 0",
    backgroundColor: "var(--primary500)",
    color: "var(--white)",
    textAlign: "center",
  },
]);

export const matchTeamLogo = style({
  position: "relative",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "var(--gray100)",
  border: "1px solid var(--gray200)",
  selectors: {
    "&[data-win='true']": {
      border: "2.5px solid var(--primary500)",
    },
  },
});
globalStyle(`${matchTeamLogo} > svg`, {
  position: "absolute",
  top: "-20px",
  left: "50%",
  transform: "translateX(-50%)",
});

export const matchFlowWinRate = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  backgroundColor: "var(--primary500)",
  color: "var(--white)",
  borderRadius: "8px",
});
export const matchFlowScoredQuarter = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1px",
  backgroundColor: "var(--gray100)",
});

export const matchPlayersDataCard = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  borderRadius: "8px",
  backgroundColor: "var(--gray50)",
  padding: "16px",
});
export const matchPlayerDataMVPDetail = style({
  flex: 1,
  borderRadius: "8px",
  backgroundColor: "var(--white)",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
});
export const matchPlayerMvpPhoto = style({
  display: "flex",
  alignItems: "flex-end",
  width: "100%",
  height: "156px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
  overflow: "hidden",
});
export const matchPlayerMvpInfo = style([
  fonts.body3.medium,
  {
    padding: "4px 0 8px",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(6px)",
    textAlign: "center",
    color: "var(--gray100)",
  },
]);
