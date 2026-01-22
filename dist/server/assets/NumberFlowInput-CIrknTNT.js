import { jsxs, jsx } from "react/jsx-runtime";
import NumberFlow from "@number-flow/react";
import React, { useRef, useState, useImperativeHandle, useEffect } from "react";
import { n as numberFlowContainer, g as numberFlowInternalInput } from "./container.css-DZr6lpKA.js";
const NumberFlowInput = React.forwardRef((props, ref) => {
  const { width = "flexible", value = 0, min = 0, ...rest } = props;
  const inputRef = useRef(null);
  const flowRef = useRef(null);
  const [flexibleWidth, setFlexibleWidth] = useState(0);
  const [animated, setAnimated] = useState(true);
  useImperativeHandle(ref, () => inputRef.current);
  const handleInput = ({ currentTarget: el }) => {
    setAnimated(false);
    let next;
    if (el.value === "") {
      next = 0;
    } else {
      const num = el.valueAsNumber;
      next = num;
    }
    el.value = String(next);
  };
  const handleInputBlur = () => {
    setAnimated(true);
  };
  useEffect(() => {
    if (flowRef.current) {
      setFlexibleWidth(flowRef.current.clientWidth);
    }
  }, [value]);
  const calFlexibleWidth = () => {
    if (rest.style?.padding && typeof rest.style.padding === "string") {
      const padding = rest.style.padding?.split(" ")[1].split("px")[0];
      return flexibleWidth + 1 + Number(padding) * 2;
    }
    if (rest.style?.paddingRight && typeof rest.style.paddingRight === "string" || rest.style?.paddingLeft && typeof rest.style.paddingLeft === "string") {
      const paddingRight = rest.style.paddingRight?.split("px")[0];
      const paddingLeft = rest.style.paddingLeft?.split("px")[0];
      return flexibleWidth + 1 + Number(paddingRight) + Number(paddingLeft);
    }
    return flexibleWidth;
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: numberFlowContainer,
      style: {
        width: width === "flexible" ? `${calFlexibleWidth()}px` : width
      },
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: inputRef,
            className: numberFlowInternalInput,
            style: {
              fontKerning: "none"
            },
            type: "number",
            autoComplete: "off",
            inputMode: "numeric",
            step: 1,
            value,
            onInput: handleInput,
            onBlur: handleInputBlur,
            min,
            ...rest
          }
        ),
        /* @__PURE__ */ jsx(
          NumberFlow,
          {
            ref: flowRef,
            value: Number(value),
            locales: "en-US",
            format: { useGrouping: false },
            "aria-hidden": "true",
            animated,
            style: { pointerEvents: "none" },
            willChange: true
          }
        )
      ]
    }
  );
});
NumberFlowInput.displayName = "NumberFlowInput";
export {
  NumberFlowInput as N
};
