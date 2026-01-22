import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { a as stageWrapper } from "./stage.css-BcVhTwyI.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import { B as Badge } from "./Badge-CVtyNCaL.js";
const useFunnel = ({ initialStep }) => {
  const [step, setStep] = useState(initialStep);
  const Step = useCallback((props) => {
    return /* @__PURE__ */ jsx(Fragment, { children: props.children });
  }, []);
  const Funnel = useCallback(
    ({ children }) => {
      const targetStep = children.find((childStep) => childStep.props.name === step);
      return /* @__PURE__ */ jsx(Fragment, { children: targetStep });
    },
    [step]
  );
  return { Funnel, Step, setStep, currentStep: step };
};
function StageWrapper(props) {
  const {
    children,
    onClickNext,
    onClickPrev,
    onClickLast,
    start = false,
    last = false,
    length,
    current,
    currentStageName,
    disableNext = false
  } = props;
  return /* @__PURE__ */ jsxs("div", { className: stageWrapper.container, children: [
    /* @__PURE__ */ jsxs("section", { className: stageWrapper.contents, children: [
      /* @__PURE__ */ jsx("div", { style: { margin: "24px 0 16px" }, children: currentStageName && current === -1 ? /* @__PURE__ */ jsx(Badge, { type: "gray", fillType: "light", size: "large", children: currentStageName }) : /* @__PURE__ */ jsxs(Badge, { type: "gray", fillType: "light", size: "large", children: [
        current,
        " / ",
        length
      ] }) }),
      children
    ] }),
    /* @__PURE__ */ jsxs("div", { className: stageWrapper.buttons, children: [
      !start && /* @__PURE__ */ jsx(Button, { type: "button", size: "large", flex: 1, mode: "gray", fillType: "outline", onClick: onClickPrev, children: "이전" }),
      !last && /* @__PURE__ */ jsx(Button, { type: "button", size: "large", disabled: disableNext, flex: 1, onClick: onClickNext, children: "다음" }),
      last && /* @__PURE__ */ jsx(Button, { type: "submit", size: "large", disabled: disableNext, flex: 1, onClick: onClickLast, children: "완료" })
    ] })
  ] });
}
export {
  StageWrapper as S,
  useFunnel as u
};
