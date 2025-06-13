import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

export const stageWrapper = {
  container: style({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "space-between",
    height: "calc(100vh - var(--safe-area-top) - 1px)",
  }),
  title: style([
    fonts.body1.semibold,
    {
      color: "var(--gray900)",
    },
  ]),
  description: style([
    fonts.body4.regular,
    {
      margin: "4px 0 40px",
      color: "var(--gray700)",
    },
  ]),
  contents: style({
    flex: 1,
    display: "flex",
    padding: "0 var(--global-lr-padding)",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
  }),
  buttons: style({
    display: "flex",
    gap: "8px",
    padding: "0 16px calc(var(--safe-bottom) + 16px)",
  }),
};

export const stageFormWrapper = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const stageFavSportsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px 10px",
  justifyItems: "center",
});
export const stageWelcomeContainer = style({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  padding: "48px 16px calc(var(--safe-bottom) + 16px)",
  width: "100%",
  left: 0,
  bottom: 0,
  height: "100%",
  background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--primary100) 100%)",
});
