import { jsxs, jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { differenceInCalendarDays } from "date-fns";
import { d as flexColumnGap4, j as baseDividedLineChild, a as flexColumnGap20, p as flexRowGap10, s as baseContainerPaddingTop, q as flexColumnGap24 } from "./container.css-C2ezn6CH.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { f as settingsMyNotificationItem } from "./userSetting.css-B3SV-hPj.js";
import { B as Badge } from "./Badge-CVtyNCaL.js";
import "jotai";
import "react";
import "@vanilla-extract/css";
import "styled-components";
import "./common-6ceLbjxn.js";
function ServiceNotice() {
  useHeader({
    title: "공지사항",
    options: {
      titleAlign: "center"
    }
  });
  const noticeList = [{
    articleId: 5123,
    title: "새로운 일정",
    date: "2025-05-12"
  }, {
    articleId: 1323,
    title: "새로운 일정",
    date: "2025-05-10"
  }, {
    articleId: 1123,
    title: "새로운 일정",
    date: "2025-04-22"
  }, {
    articleId: 1003,
    title: "새로운 일정",
    date: "2025-01-09"
  }];
  return /* @__PURE__ */ jsxs("div", { className: clsx(baseContainerPaddingTop, flexColumnGap24), children: [
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, children: [
      /* @__PURE__ */ jsx("p", { className: fonts.body2.semibold, style: {
        color: "var(--gray900)"
      }, children: "공지사항" }),
      /* @__PURE__ */ jsx("p", { className: fonts.body4.regular, style: {
        color: "var(--gray700)"
      }, children: "플레이어메이커의 다양한 공지사항을 안내드려요." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: baseDividedLineChild }),
    /* @__PURE__ */ jsx("div", { className: flexColumnGap20, children: noticeList.map((noti) => /* @__PURE__ */ jsx("div", { className: clsx(settingsMyNotificationItem, flexRowGap10), children: /* @__PURE__ */ jsxs("div", { style: {
      flex: 1
    }, className: flexColumnGap4, children: [
      /* @__PURE__ */ jsxs("p", { className: fonts.body4.semibold, style: {
        color: "var(--gray700)"
      }, children: [
        noti.title,
        " ",
        differenceInCalendarDays(/* @__PURE__ */ new Date(), new Date(noti.date)) < 5 ? /* @__PURE__ */ jsx(Badge, { nSquare: true, size: "small", type: "primary", fillType: "light", children: "N" }) : ""
      ] }),
      /* @__PURE__ */ jsx("p", { className: fonts.caption1.regular, style: {
        color: "var(--gray400)"
      }, children: noti.date })
    ] }) }, noti.articleId)) })
  ] });
}
export {
  ServiceNotice as component
};
