import { jsxs, jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { useForm } from "react-hook-form";
import { d as flexColumnGap4, j as baseDividedLineChild, a as flexColumnGap20, p as flexRowGap10, s as baseContainerPaddingTop, q as flexColumnGap24 } from "./container.css-C2ezn6CH.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { T as ToggleSwitch } from "./ToggleSwitch-BI6P-uHJ.js";
import { f as settingsMyNotificationItem } from "./userSetting.css-B3SV-hPj.js";
import "jotai";
import "react";
import "@vanilla-extract/css";
import "styled-components";
import "./common-6ceLbjxn.js";
import "./Minus-Dzq7_5JU.js";
import "./Check-xgghRidd.js";
function NotificationSetting() {
  const {
    register
  } = useForm();
  useHeader({
    title: "알림 설정",
    options: {
      titleAlign: "center"
    },
    subActions: {
      name: "저장",
      action: () => {
      }
    }
  });
  const notificationList = [{
    title: "새로운 일정",
    description: "팀에서 업로드되는 새로운 일정을 알려드려요.",
    registerName: "newSchedule"
  }, {
    title: "투표",
    description: "팀에서 업로드되는 일정 참여 여부에 대해 알려드려요.",
    registerName: "vote"
  }, {
    title: "공지사항",
    description: "플레이어메이커의 다양한 공지사항을 알려드려요.",
    registerName: "serviceNotice"
  }, {
    title: "팀 해체",
    description: "팀의 해체 정보에 대해 알려드려요.",
    registerName: "teamDissolution"
  }, {
    title: "탈퇴, 추방 내역",
    description: "가입 되어있던 팀의 탈퇴 및 추방 내역에 대해 알려드려요.",
    registerName: "withdrawal"
  }];
  return /* @__PURE__ */ jsxs("div", { className: clsx(baseContainerPaddingTop, flexColumnGap24), children: [
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, children: [
      /* @__PURE__ */ jsx("p", { className: fonts.body2.semibold, style: {
        color: "var(--gray900)"
      }, children: "정보 알림" }),
      /* @__PURE__ */ jsx("p", { className: fonts.body4.regular, style: {
        color: "var(--gray700)"
      }, children: "내 활동에 대한 알림을 보내드려요." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: baseDividedLineChild }),
    /* @__PURE__ */ jsx("div", { className: flexColumnGap20, children: notificationList.map((noti) => /* @__PURE__ */ jsxs("div", { className: clsx(settingsMyNotificationItem, flexRowGap10), children: [
      /* @__PURE__ */ jsxs("div", { style: {
        flex: 1
      }, className: flexColumnGap4, children: [
        /* @__PURE__ */ jsx("p", { className: fonts.body4.semibold, style: {
          color: "var(--gray700)"
        }, children: noti.title }),
        /* @__PURE__ */ jsx("p", { className: fonts.caption1.regular, style: {
          color: "var(--gray400)"
        }, children: noti.description })
      ] }),
      /* @__PURE__ */ jsx(ToggleSwitch, { size: "large", ...register(noti.registerName) })
    ] }, noti.registerName)) })
  ] });
}
export {
  NotificationSetting as component
};
