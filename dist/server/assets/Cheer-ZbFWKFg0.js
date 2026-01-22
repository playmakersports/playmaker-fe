import { style, globalStyle } from "@vanilla-extract/css";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { jsxs, jsx } from "react/jsx-runtime";
import styled from "styled-components";
const ProgressCircleTrophyWrapper = style({
  margin: "0 auto 10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 32,
  height: 32,
  borderRadius: "50%",
  backgroundColor: "#fff"
});
const TeamDataRecordContainer = style([
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
    backdropFilter: "blur(16px)"
  }
]);
const TeamDataRecordItem = style({
  display: "flex",
  minWidth: "80px",
  alignItems: "center",
  flexDirection: "column",
  gap: "5px",
  color: "var(--gray800)"
});
globalStyle(`${TeamDataRecordItem} span.title`, {
  display: "inline-block",
  marginRight: "5px",
  color: "var(--gray400)"
});
const TeamStatisticsDetailContainer = style({
  margin: "0 -16px",
  padding: "30px var(--global-lr-padding) 20px",
  backgroundColor: "var(--white)",
  borderRadius: "30px 30px 0 0"
});
const TeamStatisticsGroupTitle = style([
  fonts.body2.semibold,
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "var(--gray900)"
  }
]);
const TeamStatisticsGroupCardItem = style([
  fonts.body4.medium,
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "var(--gray800)"
  }
]);
globalStyle(`${TeamStatisticsGroupCardItem} span.item-title`, {
  color: "var(--gray600)"
});
const TeamStatisticsGroupHeadIconWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "32px",
  borderRadius: "6px"
});
const ArcTrack = styled.path`
  fill: none;
  stroke-linecap: round;
`;
const ArcProgress = styled.path`
  fill: none;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.8s ease;
`;
function polarToCartesian(cx, cy, r, angleDeg) {
  const angleRad = (angleDeg - 90) * Math.PI / 180;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad)
  };
}
function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? "1" : "0";
  return ["M", start.x, start.y, "A", r, r, 0, largeArcFlag, 1, end.x, end.y].join(" ");
}
const ProgressCircle = ({
  size = 200,
  percentage,
  rate = 0.5,
  children,
  direction = "right-to-left",
  stroke = 24,
  color
}) => {
  const radiusStroke = typeof stroke === "number" ? stroke : stroke.track;
  const strokeTrack = typeof stroke === "number" ? stroke / 2 : stroke.track;
  const strokeProgress = typeof stroke === "number" ? stroke : stroke.progress;
  const RADIUS = (size - radiusStroke) / 2;
  const CENTER = size / 2;
  const arcDegrees = 360 * (rate === 1 ? 0.999 : rate);
  const arcLength = Math.PI * RADIUS * arcDegrees / 180;
  const startAngle = 90 + arcDegrees / 2;
  const endAngle = 90 - arcDegrees / 2;
  const path = describeArc(CENTER, CENTER, RADIUS, startAngle, endAngle);
  const dashOffset = arcLength * (1 - percentage / 100);
  const isLeftToRight = direction === "left-to-right";
  return /* @__PURE__ */ jsxs("div", { style: { position: "relative", width: size, height: size }, children: [
    /* @__PURE__ */ jsxs(
      "svg",
      {
        viewBox: `0 0 ${size} ${size}`,
        width: size,
        height: size,
        style: {
          transform: `rotate(${(isLeftToRight ? -1 : 1) * 90}deg) scaleX(${isLeftToRight ? 1 : -1})`
        },
        children: [
          /* @__PURE__ */ jsx(ArcTrack, { d: path, stroke: color?.track ?? "var(--gray100)", strokeWidth: strokeTrack }),
          /* @__PURE__ */ jsx(
            ArcProgress,
            {
              d: path,
              stroke: color?.progress ?? "var(--primary500)",
              strokeWidth: strokeProgress,
              strokeDasharray: arcLength,
              strokeDashoffset: dashOffset
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children
      }
    )
  ] });
};
const TrophyIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_411_6598'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_411_6598)'%3e%3cpath%20d='M8.44225%2020.5C8.02804%2020.5%207.69225%2020.1642%207.69225%2019.75C7.69225%2019.3358%208.02804%2019%208.44225%2019H11.25V15.573C10.4013%2015.4025%209.65133%2015.0455%209%2014.502C8.34867%2013.9583%207.88583%2013.2807%207.6115%2012.4692C6.45767%2012.3321%205.484%2011.8423%204.6905%2011C3.89683%2010.1577%203.5%209.15767%203.5%208V7C3.5%206.591%203.64775%206.23875%203.94325%205.94325C4.23875%205.64775%204.591%205.5%205%205.5H7.327C7.327%204.39543%208.22243%203.5%209.327%203.5H14.673C15.7776%203.5%2016.673%204.39543%2016.673%205.5H19C19.409%205.5%2019.7613%205.64775%2020.0568%205.94325C20.3523%206.23875%2020.5%206.591%2020.5%207V8C20.5%209.15767%2020.1032%2010.1577%2019.3095%2011C18.516%2011.8423%2017.5423%2012.3321%2016.3885%2012.4692C16.1142%2013.2807%2015.6513%2013.9583%2015%2014.502C14.3487%2015.0455%2013.5987%2015.4025%2012.75%2015.573V19H15.5577C15.972%2019%2016.3077%2019.3358%2016.3077%2019.75C16.3077%2020.1642%2015.972%2020.5%2015.5577%2020.5H8.44225ZM7.327%2010.8577V7H5V8C5%208.6975%205.21858%209.31%205.65575%209.8375C6.09292%2010.365%206.65%2010.7051%207.327%2010.8577ZM16.673%2010.8577C17.35%2010.7051%2017.9071%2010.365%2018.3443%209.8375C18.7814%209.31%2019%208.6975%2019%208V7H16.673V10.8577Z'%20/%3e%3c/g%3e%3c/svg%3e";
const ThumbUpIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1381_13977'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1381_13977)'%3e%3cpath%20d='M17.7308%2020.5001H7.827V8.50005L14.4615%201.90405L15.3075%202.75005C15.4115%202.85389%2015.4978%202.99139%2015.5663%203.16255C15.6349%203.33372%2015.6693%203.49497%2015.6693%203.6463V3.90005L14.6075%208.50005H20.6923C21.1679%208.50005%2021.5881%208.68247%2021.9527%209.0473C22.3176%209.41197%2022.5%209.83214%2022.5%2010.3078V11.9231C22.5%2012.0269%2022.4891%2012.1391%2022.4673%2012.2596C22.4454%2012.3801%2022.4128%2012.4923%2022.3693%2012.5963L19.5038%2019.3578C19.3603%2019.6783%2019.1199%2019.9488%2018.7828%2020.1693C18.4456%2020.3898%2018.0949%2020.5001%2017.7308%2020.5001ZM6.327%208.50005V20.5001H2.5V8.50005H6.327Z'%20/%3e%3c/g%3e%3c/svg%3e";
const ThumbDownIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1381_13976'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1381_13976)'%3e%3cpath%20d='M6.26925%203.90405H16.173V15.9038L9.5385%2022.5001L8.6925%2021.6538C8.5885%2021.55%208.50225%2021.4125%208.43375%2021.2413C8.36508%2021.0701%208.33075%2020.909%208.33075%2020.7578V20.5038L9.3925%2015.9038H3.30775C2.83208%2015.9038%202.41192%2015.7215%202.04725%2015.3568C1.68242%2014.992%201.5%2014.5718%201.5%2014.0963V12.4808C1.5%2012.377%201.51092%2012.2648%201.53275%2012.1443C1.55458%2012.0238%201.58725%2011.9116%201.63075%2011.8078L4.49625%205.0463C4.63975%204.7258%204.88008%204.4553%205.21725%204.2348C5.55442%204.0143%205.90508%203.90405%206.26925%203.90405ZM17.673%2015.9038V3.90405H21.5V15.9038H17.673Z'%20/%3e%3c/g%3e%3c/svg%3e";
const CheerIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1381_13979'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1381_13979)'%3e%3cpath%20d='M7.89616%205.03281L6.99216%202.33081L8.10366%201.96731L9.00766%204.65381L7.89616%205.03281ZM11.4037%203.84631V1.15381H12.5962V3.84631H11.4037ZM16.1037%205.03281L14.9922%204.65381L15.8962%201.96731L17.0077%202.34631L16.1037%205.03281ZM21.6442%2022.7693L16.3692%2021.9596C15.8538%2021.8827%2015.3997%2021.6744%2015.0067%2021.3346C14.6137%2020.9949%2014.3352%2020.5776%2014.1712%2020.0828L13.3212%2017.4328C13.1507%2016.8943%2013.1423%2016.36%2013.2962%2015.8298C13.45%2015.2998%2013.7307%2014.8591%2014.1384%2014.5078L15.4172%2018.4981L16.2212%2018.2423L13.9537%2011.1096C13.7692%2010.5224%2013.7788%209.94131%2013.9827%209.36631C14.1865%208.79131%2014.5518%208.35131%2015.0787%208.04631L16.0979%207.47131L20.5134%2015.8406C20.6159%2016.0521%2020.7672%2016.2149%2020.9672%2016.3291C21.1672%2016.4431%2021.3812%2016.5001%2021.6094%2016.5001H22.5844L21.6442%2022.7693ZM2.37116%2022.7596L1.43066%2016.4906H2.40566C2.634%2016.4906%202.84816%2016.4335%203.04816%2016.3193C3.24816%2016.2051%203.39941%2016.0423%203.50191%2015.8308L7.91716%207.46156L8.93641%208.03656C9.46341%208.34173%209.82883%208.78181%2010.0327%209.35681C10.2365%209.93181%2010.2461%2010.5129%2010.0614%2011.1001L7.77866%2018.2328L8.58266%2018.4886L9.86141%2014.4828C10.2794%2014.8341%2010.5653%2015.2774%2010.7192%2015.8126C10.873%2016.3479%2010.8647%2016.8847%2010.6942%2017.4231L9.84416%2020.0731C9.68%2020.5679%209.4015%2020.9852%209.00866%2021.3251C8.61566%2021.6647%208.1615%2021.8731%207.64616%2021.9501L2.37116%2022.7596Z'%20/%3e%3c/g%3e%3c/svg%3e";
export {
  CheerIcon as C,
  ProgressCircle as P,
  TrophyIcon as T,
  ProgressCircleTrophyWrapper as a,
  TeamDataRecordContainer as b,
  TeamDataRecordItem as c,
  ThumbUpIcon as d,
  ThumbDownIcon as e,
  TeamStatisticsGroupTitle as f,
  TeamStatisticsGroupCardItem as g,
  TeamStatisticsGroupHeadIconWrapper as h,
  TeamStatisticsDetailContainer as i
};
