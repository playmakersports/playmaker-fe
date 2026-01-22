import { jsxs, jsx } from "react/jsx-runtime";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { h as baseContainer } from "./container.css-C2ezn6CH.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { a as stageWrapper, s as stageFormWrapper } from "./stage.css-BcVhTwyI.js";
import "jotai";
import "react";
import "@vanilla-extract/css";
import "styled-components";
import "./common-6ceLbjxn.js";
import "./fonts.css-vMQm04zv.js";
import "./Wrapper-DpW65hF8.js";
import "./InputWrapper-CgYCSwII.js";
import "./container.css-DZr6lpKA.js";
import "./Close20-w_89MMCP.js";
import "./Search-DrxoJQ2v.js";
function MyPhysical() {
  const {
    register
  } = useForm();
  useHeader({
    title: "신체 정보 관리",
    options: {
      titleAlign: "center"
    },
    subActions: {
      name: "저장",
      action: () => {
      }
    }
  });
  return /* @__PURE__ */ jsxs("div", { className: clsx(baseContainer, stageFormWrapper), style: {
    paddingTop: "40px"
  }, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: stageWrapper.title, children: "신체정보를 입력해주세요" }),
      /* @__PURE__ */ jsx("p", { className: stageWrapper.description, children: "키와 체중, 주로 사용하시는 손을 알려주세요!" })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: {
      display: "flex",
      gap: "12px"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        flex: 1
      }, children: /* @__PURE__ */ jsx(BasicInput, { type: "text", style: {
        textAlign: "center"
      }, large: true, title: "키", suffix: "cm", ...register("height") }) }),
      /* @__PURE__ */ jsx("div", { style: {
        flex: 1
      }, children: /* @__PURE__ */ jsx(BasicInput, { type: "text", style: {
        textAlign: "center"
      }, large: true, title: "체중", suffix: "kg", ...register("weight") }) })
    ] })
  ] });
}
export {
  MyPhysical as component
};
