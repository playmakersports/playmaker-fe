import { jsxs, jsx } from "react/jsx-runtime";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { u as useProfileGet } from "./user-D6JVBRgW.js";
import { h as baseContainer, t as flexRowGap16, l as flexAlignCenter } from "./container.css-C2ezn6CH.js";
import { g as settingsMyInfoHeaderProfile, c as settingsHeaderProfileImage, h as settingsMyInfoFormWrapper } from "./userSetting.css-B3SV-hPj.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import { f as formattedDateNoHyphen } from "./date-DKPo_LKv.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { T as ToggleSwitch } from "./ToggleSwitch-BI6P-uHJ.js";
import { I as InputWrapper } from "./InputWrapper-CgYCSwII.js";
import { T as TextArea } from "./TextArea-C-rWbjLd.js";
import { P as PersonIcon } from "./Person-BRhULpHA.js";
import "jotai";
import "react";
import "./authToken-Bx9YTtw3.js";
import "cookies-next";
import "axios";
import "./query-Ciubt76c.js";
import "@tanstack/react-query";
import "@vanilla-extract/css";
import "date-fns";
import "styled-components";
import "clsx";
import "./common-6ceLbjxn.js";
import "./Wrapper-DpW65hF8.js";
import "./Close20-w_89MMCP.js";
import "./Search-DrxoJQ2v.js";
import "./Minus-Dzq7_5JU.js";
import "./Check-xgghRidd.js";
import "./container.css-DZr6lpKA.js";
import "@number-flow/react";
function MySettingInfo() {
  const {
    data,
    isLoading
  } = useProfileGet();
  useHeader({
    title: "내 프로필 수정",
    subActions: {
      name: "저장",
      action: () => {
      }
    },
    options: {
      titleAlign: "center"
    }
  });
  return /* @__PURE__ */ jsxs("form", { className: baseContainer, children: [
    isLoading && /* @__PURE__ */ jsx(Loading, { page: true }),
    /* @__PURE__ */ jsxs("div", { className: settingsMyInfoHeaderProfile, children: [
      /* @__PURE__ */ jsx("div", { className: settingsHeaderProfileImage, children: data?.imageUrl ? /* @__PURE__ */ jsx("img", { src: data?.imageUrl, alt: data?.userName, className: "profile-image" }) : /* @__PURE__ */ jsx(PersonIcon, { width: 24, height: 24, fill: "var(--gray300)" }) }),
      /* @__PURE__ */ jsxs("div", { className: "profile", children: [
        /* @__PURE__ */ jsx("p", { className: fonts.body3.medium, style: {
          color: "var(--gray700)"
        }, children: data?.userName }),
        /* @__PURE__ */ jsx("p", { className: fonts.body4.regular, style: {
          color: "var(--gray400)"
        }, children: "@test" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: settingsMyInfoFormWrapper, children: [
      /* @__PURE__ */ jsxs("div", { className: flexRowGap16, children: [
        /* @__PURE__ */ jsx("div", { style: {
          flex: 1
        }, children: /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "이름", defaultValue: data?.userName, disabled: true }) }),
        /* @__PURE__ */ jsx(InputWrapper, { title: "공개", children: /* @__PURE__ */ jsx("div", { className: flexAlignCenter, style: {
          display: "flex",
          height: "40px"
        }, children: /* @__PURE__ */ jsx(ToggleSwitch, { size: "large", showIcon: true }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: flexRowGap16, children: [
        /* @__PURE__ */ jsx("div", { style: {
          flex: 1
        }, children: /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "생년월일", defaultValue: formattedDateNoHyphen(data?.birth ?? ""), disabled: true }) }),
        /* @__PURE__ */ jsx(InputWrapper, { title: "공개", children: /* @__PURE__ */ jsx("div", { className: flexAlignCenter, style: {
          display: "flex",
          height: "40px"
        }, children: /* @__PURE__ */ jsx(ToggleSwitch, { size: "large", showIcon: true }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: flexRowGap16, children: [
        /* @__PURE__ */ jsx("div", { style: {
          flex: 1
        }, children: /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "연락처", defaultValue: data?.contact }) }),
        /* @__PURE__ */ jsx(InputWrapper, { title: "공개", children: /* @__PURE__ */ jsx("div", { className: flexAlignCenter, style: {
          display: "flex",
          height: "40px"
        }, children: /* @__PURE__ */ jsx(ToggleSwitch, { size: "large", showIcon: true }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: flexRowGap16, children: [
        /* @__PURE__ */ jsx("div", { style: {
          flex: 1
        }, children: /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "성별", defaultValue: data?.sexKey, disabled: true }) }),
        /* @__PURE__ */ jsx(InputWrapper, { title: "공개", children: /* @__PURE__ */ jsx("div", { className: flexAlignCenter, style: {
          display: "flex",
          height: "40px"
        }, children: /* @__PURE__ */ jsx(ToggleSwitch, { size: "large", showIcon: true }) }) })
      ] }),
      /* @__PURE__ */ jsx(TextArea, { title: "자기소개", height: 150, defaultValue: data?.selfIntro ?? "" })
    ] })
  ] });
}
export {
  MySettingInfo as component
};
