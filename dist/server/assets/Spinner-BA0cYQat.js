import { s as semantic } from "./color.css-BLEreRIo.js";
import { v as flexCenterJA } from "./container.css-C2ezn6CH.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { style, globalStyle } from "@vanilla-extract/css";
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
const articleDetailHeader = {
  container: style({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    color: "var(--gray700)"
  }),
  title: style([
    fonts.body3.semibold,
    {
      marginBottom: "12px"
    }
  ]),
  info: style([
    fonts.body4.regular,
    {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      padding: "8px 0"
    }
  ])
};
const boardListFixedSection = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "var(--white)"
});
const boardListFixedSectionTitle = style({
  display: "flex",
  alignItems: "center",
  padding: "12px 16px",
  gap: "10px",
  color: "var(--gray700)",
  borderBottom: "1px solid var(--gray200)",
  selectors: {
    "&:last-of-type": {
      borderBottom: "none"
    }
  }
});
style([
  fonts.body3.medium,
  {
    display: "block",
    width: "32px",
    height: "32px",
    color: "var(--gray700)",
    borderRadius: "6px",
    selectors: {
      "&[data-active=true]": {
        fontWeight: 600,
        color: "var(--white)",
        backgroundColor: "var(--primary500)"
      }
    }
  }
]);
const commentListWrapper = style({
  flex: 1,
  position: "relative",
  marginTop: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  minHeight: "12vh"
});
style({
  display: "flex",
  flexDirection: "column",
  gap: "8px"
});
const commentInputBottomWrapper = style({
  position: "sticky",
  margin: "0 -16px",
  padding: "12px 16px max(16px, var(--env-sab))",
  width: "calc(100% + 32px)",
  bottom: 0,
  left: 0,
  backgroundColor: "var(--background-light)",
  borderTop: "1px solid var(--gray200)"
});
globalStyle(`${commentInputBottomWrapper}[data-safe-area='true']:has(input[type='text']:focus)`, {
  paddingBottom: "0",
  marginBottom: "-4px"
});
const commentItemUserAvatar = style({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: "var(--gray200)",
  flexShrink: 0,
  backgroundSize: "24px 24px",
  backgroundPosition: "center",
  objectFit: "cover"
});
const commentItemHasReply = style({
  flexShrink: 0,
  display: "flex",
  justifyContent: "center",
  width: "24px",
  selectors: {
    '&[data-reply="true"]:after': {
      content: "",
      display: "block",
      width: "1px",
      height: "100%",
      backgroundColor: "var(--gray200)"
    }
  }
});
const commentInputContainer = style({
  display: "flex",
  alignItems: "center",
  padding: "10px 12px",
  width: "100%",
  height: "48px",
  backgroundColor: "var(--gray100)",
  borderRadius: "8px",
  gap: "8px",
  color: "var(--primary500)"
});
const commentInputStyle = style([
  fonts.body3.regular,
  {
    flex: 1,
    color: "var(--gray700)",
    selectors: {
      "&::placeholder": {
        color: "var(--gray400)"
      },
      "&:disabled": {
        color: "var(--gray500)"
      }
    }
  }
]);
globalStyle(`${commentInputContainer}:has(${commentInputStyle}:placeholder-shown)`, {
  color: "var(--gray400)"
});
const boardImagesGridContainer = style({
  display: "flex",
  margin: "0 -16px",
  flexWrap: "nowrap",
  marginTop: "24px",
  gap: "8px",
  overflowX: "auto"
});
const boardImagesGridItem = style({
  flexShrink: 0,
  display: "flex",
  width: "80px",
  height: "80px",
  borderRadius: "10px",
  border: "1px solid var(--gray100)",
  overflow: "hidden",
  selectors: {
    "&:first-of-type": {
      marginLeft: "16px"
    },
    "&:last-of-type": {
      marginRight: "16px"
    }
  }
});
const boardImageViewerContainer = style({
  position: "fixed",
  top: 0,
  display: "flex",
  alignItems: "center",
  left: "50%",
  width: "var(--mobile-max-width)",
  transform: "translateX(-50%)",
  height: "100vh",
  backgroundColor: "rgba(15, 23, 42, 0.6)",
  zIndex: 901
});
const boardImageViewerItemList = style([
  fonts.body4.regular,
  {
    position: "relative",
    width: "100%",
    height: "auto",
    minHeight: "55vh",
    backgroundColor: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(4px)"
  }
]);
const boardImageViewerBullet = style({
  position: "absolute",
  bottom: "-16px",
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  width: "100%"
});
const boardEmptyCommentArea = style([
  semantic.description,
  flexCenterJA,
  {
    flex: 1,
    paddingBottom: "28px",
    minHeight: "15vh",
    whiteSpace: "pre-wrap",
    textAlign: "center"
  }
]);
const boardArticleListContainer = style({
  minHeight: "calc(100vh - var(--header-height) - 40px - var(--navigation-height))",
  paddingBottom: "var(--safe-bottom-navigation)",
  backgroundColor: "var(--gray50)"
});
const boardEmptyArticleArea = style([
  fonts.caption1.regular,
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - var(--header-height) - 40px - var(--navigation-height))",
    backgroundColor: "var(--gray50)",
    color: "var(--gray400)",
    textAlign: "center"
  }
]);
function Spinner({ size = 20, color = "var(--primary500)" }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 200", width: size, height: size, children: [
    /* @__PURE__ */ jsxs("radialGradient", { id: "a11", cx: ".66", fx: ".66", cy: ".3125", fy: ".3125", gradientTransform: "scale(1.5)", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: color }),
      /* @__PURE__ */ jsx("stop", { offset: ".3", stopColor: color, stopOpacity: ".9" }),
      /* @__PURE__ */ jsx("stop", { offset: ".6", stopColor: color, stopOpacity: ".6" }),
      /* @__PURE__ */ jsx("stop", { offset: ".8", stopColor: color, stopOpacity: ".3" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: color, stopOpacity: "0" })
    ] }),
    /* @__PURE__ */ jsx(
      "circle",
      {
        fill: "none",
        stroke: "url(#a11)",
        strokeWidth: "24",
        strokeLinecap: "round",
        strokeDasharray: "200 1000",
        cx: "100",
        cy: "100",
        r: "70",
        children: /* @__PURE__ */ jsx(
          "animateTransform",
          {
            attributeName: "transform",
            type: "rotate",
            from: "0 100 100",
            to: "-360 100 100",
            dur: "2s",
            repeatCount: "indefinite"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "circle",
      {
        fill: "none",
        opacity: ".2",
        stroke: color,
        strokeWidth: "24",
        strokeLinecap: "round",
        cx: "100",
        cy: "100",
        r: "70"
      }
    )
  ] }) });
}
export {
  Spinner as S,
  boardListFixedSection as a,
  boardArticleListContainer as b,
  boardListFixedSectionTitle as c,
  boardEmptyArticleArea as d,
  articleDetailHeader as e,
  commentListWrapper as f,
  commentItemUserAvatar as g,
  commentItemHasReply as h,
  boardEmptyCommentArea as i,
  commentInputBottomWrapper as j,
  commentInputContainer as k,
  commentInputStyle as l,
  boardImagesGridContainer as m,
  boardImagesGridItem as n,
  boardImageViewerContainer as o,
  boardImageViewerItemList as p,
  boardImageViewerBullet as q
};
