import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useRef, useImperativeHandle } from "react";
import { F as FONTS } from "./common-6ceLbjxn.js";
import styled from "styled-components";
import NumberFlow from "@number-flow/react";
import { I as InputStyledWrapper } from "./Wrapper-DpW65hF8.js";
import { I as InputWrapper } from "./InputWrapper-CgYCSwII.js";
const TextArea = React.forwardRef((props, ref) => {
  const { title, required, error, displayLength, description, information, onChange, ...rest } = props;
  const [length, setLength] = useState(0);
  const textareaRef = useRef(null);
  useImperativeHandle(ref, () => textareaRef.current);
  return /* @__PURE__ */ jsxs(InputWrapper, { title, required, information, children: [
    /* @__PURE__ */ jsxs(TextAreaWrapper, { $isError: error, style: { height: rest.height ?? "auto" }, children: [
      displayLength && /* @__PURE__ */ jsxs(Length, { children: [
        /* @__PURE__ */ jsx(NumberFlow, { value: length, willChange: true, format: { useGrouping: false } }),
        rest.maxLength && `/${rest.maxLength}`
      ] }),
      /* @__PURE__ */ jsx(
        StyledTextArea,
        {
          style: { height: "100%", resize: "none" },
          ref: textareaRef,
          placeholder: props.placeholder ?? " ",
          onChange: (event) => {
            onChange && onChange(event);
            displayLength && setLength(event.target.value.length);
          },
          ...rest
        }
      )
    ] }),
    description && /* @__PURE__ */ jsx(Description, { "data-error": error, children: description })
  ] });
});
TextArea.displayName = "TextArea";
const TextAreaWrapper = styled(InputStyledWrapper)`
  height: auto;
  &:has(textarea:disabled) {
    background-color: var(--gray50);
    border-color: var(--gray200);
  }
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px 0;

  ${FONTS.body4("regular")};
  color: var(--gray700);

  ${TextAreaWrapper}:has(&:focus) {
    border-color: var(--gray300);
  }
  &::placeholder {
    color: var(--gray400);
  }
  &:disabled {
    color: var(--gray300);
  }
`;
const Length = styled.div`
  position: absolute;
  padding: 2px 4px;
  margin: 4px 8px;
  right: 0;
  bottom: 0;
  ${FONTS.caption1("regular")};
  color: var(--gray400);
  backdrop-filter: blur(8px);
  background-color: rgba(256, 256, 256, 0.7);
  border-radius: 20px;
`;
const Description = styled.p`
  margin-top: 8px;
  ${FONTS.caption1("regular")};
  color: var(--gray400);

  &[data-error="true"] {
    color: var(--red500);
  }
`;
export {
  TextArea as T
};
