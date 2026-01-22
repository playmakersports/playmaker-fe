import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { style } from "@vanilla-extract/css";
const stageWrapper = {
  container: style({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "space-between",
    height: "calc(100vh - var(--safe-area-top) - 1px)"
  }),
  title: style([
    fonts.body1.semibold,
    {
      color: "var(--gray900)"
    }
  ]),
  description: style([
    fonts.body4.regular,
    {
      margin: "4px 0 40px",
      color: "var(--gray700)"
    }
  ]),
  contents: style({
    flex: 1,
    display: "flex",
    padding: "0 var(--global-lr-padding)",
    flexDirection: "column",
    height: "100%",
    overflow: "hidden"
  }),
  buttons: style({
    display: "flex",
    gap: "8px",
    padding: "0 16px calc(var(--safe-bottom) + 16px)"
  })
};
const stageFormWrapper = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "10px"
});
const stageFavSportsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px 10px",
  justifyItems: "center"
});
const stageWelcomeContainer = style({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  padding: "48px 16px calc(var(--safe-bottom) + 16px)",
  width: "100%",
  left: 0,
  bottom: 0,
  height: "100%",
  background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--primary100) 100%)"
});
const welcomeTextContainer = style({
  userSelect: "none",
  display: "grid",
  alignItems: "center"
});
const welcomeTextItem = style({
  gridArea: "2/1",
  opacity: 0,
  textShadow: "0 0 8px rgba(243, 254, 245, 1)",
  transform: "translateY(20px)",
  transition: "all 0.5s ease-in-out"
});
const welcomeTextFadeIn = style({
  transform: "translateY(0)",
  opacity: 1
});
export {
  stageWrapper as a,
  stageFavSportsGrid as b,
  stageWelcomeContainer as c,
  welcomeTextItem as d,
  welcomeTextFadeIn as e,
  stageFormWrapper as s,
  welcomeTextContainer as w
};
