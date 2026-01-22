import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import styled from "styled-components";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { C as CheckIcon } from "./Check-xgghRidd.js";
const InputCheckbox = React.forwardRef(
  ({ size = "LARGE", color = "default", text, ...rest }, ref) => {
    const SIZE = size === "LARGE" ? "24px" : "20px";
    return /* @__PURE__ */ jsxs(TextContainer, { children: [
      /* @__PURE__ */ jsxs("div", { style: { position: "relative", display: "inline-block", width: SIZE, height: SIZE }, children: [
        /* @__PURE__ */ jsx(Check, { type: "checkbox", ref, $color: color === "error", size, ...rest }),
        /* @__PURE__ */ jsx("i", { style: { width: SIZE, height: SIZE }, children: /* @__PURE__ */ jsx(CheckIcon, {}) })
      ] }),
      text && /* @__PURE__ */ jsxs("div", { className: "text-container", "data-size": size, children: [
        /* @__PURE__ */ jsx("label", { className: "title", htmlFor: rest.id, children: text.title }),
        text.description && /* @__PURE__ */ jsx("p", { className: "description", children: text.description })
      ] })
    ] });
  }
);
InputCheckbox.displayName = "InputCheckBox";
const InputRadio = React.forwardRef(
  ({ size = "LARGE", color = "default", text, buttonType = false, ...rest }, ref) => {
    const SIZE = size === "LARGE" ? "24px" : "20px";
    return /* @__PURE__ */ jsxs(TextContainer, { children: [
      /* @__PURE__ */ jsxs("div", { style: { position: "relative", display: "inline-block", width: SIZE, height: SIZE }, children: [
        /* @__PURE__ */ jsx(Radio, { type: "radio", "data-error": color === "error", ref, ...rest }),
        /* @__PURE__ */ jsx(RadioIcon, {})
      ] }),
      text && /* @__PURE__ */ jsxs("div", { className: "text-container", "data-size": size, children: [
        /* @__PURE__ */ jsx("label", { className: "title", htmlFor: rest.id, children: text.title }),
        text.description && /* @__PURE__ */ jsx("p", { className: "description", children: text.description })
      ] })
    ] });
  }
);
InputRadio.displayName = "InputRadio";
const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  label.title {
    cursor: pointer;
    user-select: none;
    padding-right: 6px;
    color: var(--gray700);
  }
  p.description {
    margin-top: 4px;
    color: var(--gray400);
  }
  div.text-container[data-size="LARGE"] {
    label.title {
      ${FONTS.body3("medium")};
    }
    p.description {
      ${FONTS.body4("regular")};
    }
  }
  div.text-container[data-size="MEDIUM"] {
    label.title {
      ${FONTS.body4("medium")};
    }
    p.description {
      ${FONTS.caption1("regular")};
    }
  }
`;
const Check = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;

  & + i {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ size }) => size === "LARGE" ? "8px" : "6px"};
    border: 1px solid ${({ $color }) => $color ? "var(--red200)" : "var(--gray200)"};
    background-color: #fff;
    svg {
      display: none;
      width: 100%;
      height: 100%;
    }
  }
  &:focus:not(:checked) + i {
    outline: 2px solid ${({ $color }) => $color ? "var(--red300)" : "var(--gray300)"};
  }
  &:focus + i {
    outline: 2px solid ${({ $color }) => $color ? "var(--red300)" : "var(--primary300)"};
  }
  &:checked + i {
    border: 1px solid transparent;
    background-color: ${({ $color }) => $color ? "var(--red500)" : "var(--primary500)"};
    svg {
      display: block;
      fill: var(--white);
    }
  }

  &:checked:disabled + i {
    border: 1px solid transparent;
    background-color: var(--gray200);
    svg {
      display: block;
      fill: var(--gray100);
    }
  }
  &:disabled + i {
    background-color: var(--gray50);
    border: 1px solid var(--gray200);
  }
`;
const RadioIcon = styled.div``;
const Radio = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;

  &[data-error="true"] {
    & + ${RadioIcon} {
      border: 1px solid var(--red200);
    }
    &:checked + ${RadioIcon} {
      background-color: var(--red500);
    }
    &:focus:checked + ${RadioIcon} {
      outline: 3px solid var(--red100);
    }
  }

  & + ${RadioIcon} {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid var(--gray200);
    background-color: transparent;
  }
  &:focus:not(:checked) + ${RadioIcon} {
    outline: 3px solid var(--gray100);
  }
  &:focus:checked + ${RadioIcon} {
    outline: 3px solid var(--primary100);
  }

  &:checked:disabled + ${RadioIcon} {
    background-color: var(--gray200);
  }
  &:disabled + ${RadioIcon} {
    background-color: var(--gray50);
  }
  &:checked + ${RadioIcon} {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary500);
    border: 1px solid transparent;

    &::after {
      content: "";
      width: 8px;
      height: 8px;
      background-color: var(--white);
      border-radius: 50%;
    }
  }
`;
export {
  InputCheckbox as I,
  InputRadio as a
};
