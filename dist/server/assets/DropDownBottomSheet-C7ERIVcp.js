import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import styled from "styled-components";
import { u as useModal } from "./useModal--yzWVOVY.js";
import { T as TEXT_ACTIVE, F as FONTS, B as BUTTON_ACTIVE } from "./common-6ceLbjxn.js";
import { D as DownArrowIcon } from "./DownArrow-CJuEPh4T.js";
import { C as CheckIcon } from "./Check-xgghRidd.js";
const DropDownBottomSheet = (props) => {
  const { mode = "default", title, information, options, defaultValue, getCurrentValue, placeholder } = props;
  const { showModal, ModalComponents } = useModal();
  const [selectedOption, setSelectedOption] = useState(defaultValue ?? "");
  const onSelected = (target) => {
    getCurrentValue(target);
    setSelectedOption(target);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Container, { children: [
      title && /* @__PURE__ */ jsx("p", { className: "input-title", children: title }),
      mode === "default" ? /* @__PURE__ */ jsxs(Select, { onClick: showModal, children: [
        !!selectedOption ? /* @__PURE__ */ jsx("p", { className: "dropdown-current-value", children: options?.find((option) => option.value === selectedOption)?.name }) : /* @__PURE__ */ jsx("p", { className: "dropdown-placeholder", children: placeholder }),
        /* @__PURE__ */ jsx("i", { className: "arrow-icon", children: /* @__PURE__ */ jsx(DownArrowIcon, {}) })
      ] }) : /* @__PURE__ */ jsxs(SelectCard, { onClick: showModal, children: [
        !!selectedOption ? /* @__PURE__ */ jsx("div", { className: "dropdown-current-value", children: options?.find((option) => option.value === selectedOption)?.name }) : /* @__PURE__ */ jsx("div", { className: "dropdown-placeholder", children: placeholder ?? "선택" }),
        /* @__PURE__ */ jsx("i", { className: "arrow-icon", children: /* @__PURE__ */ jsx(DownArrowIcon, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(ModalComponents, { draggable: "all", children: ({ closeModal }) => /* @__PURE__ */ jsx(ModalInner, { children: options.map((option) => /* @__PURE__ */ jsxs("label", { children: [
      option.name,
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "radio",
          name: "dropdown-option",
          defaultChecked: selectedOption === option.value ? true : false,
          value: option.value,
          onClick: () => {
            onSelected(option.value);
            closeModal();
          }
        }
      ),
      /* @__PURE__ */ jsx(CheckIcon, {})
    ] }, option.value)) }) })
  ] });
};
const Container = styled.div`
  .input-title {
    font-size: 1.4rem;
    margin-bottom: 4px;
    padding: 0 10px;
    font-weight: 500;
    color: var(--gray700);
    line-height: 2.4rem;
  }

  .input-information {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    padding: 0 8px;
    font-size: 1.2rem;
    color: var(--gray700);
    gap: 4px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
const Select = styled.div`
  cursor: pointer;
  ${TEXT_ACTIVE("var(--gray100)", { activeRange: 3 })}
  ${FONTS.body4("regular")};
  font-weight: 400;
  user-select: none;
  display: flex;
  padding: 0 2px 0 6px;
  align-items: center;
  justify-content: space-between;
  color: var(--gray500);
  gap: 8px;
  border-radius: 4px;

  i.arrow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 24px;
    svg {
      width: 20px;
      height: 22px;
      fill: var(--gray500);
    }
  }
`;
const SelectCard = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 10px 12px;
  border: 1px solid var(--gray200);
  user-select: none;
  display: flex;
  justify-content: space-between;

  div.dropdown-current-value {
    user-select: none;
    ${FONTS.body4("regular")}
  }
  div.dropdown-placeholder {
    user-select: none;
    ${FONTS.body4("regular")};
    font-weight: 400;
    color: var(--gray400);
  }
  i.arrow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray700);
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
const ModalInner = styled.div`
  display: flex;
  margin: 0 -6px;
  flex-direction: column;
  gap: 4px;

  label {
    user-select: none !important;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    color: var(--gray700);
    ${FONTS.body3("regular")};
    ${BUTTON_ACTIVE("var(--gray100)")};
    svg {
      fill: transparent;
    }
  }
  i,
  input[type="radio"] {
    display: none;
  }
  label:has(input:checked) {
    background-color: var(--gray50);
    svg {
      width: 24px;
      height: 24px;
      fill: var(--primary500);
    }
  }
`;
export {
  DropDownBottomSheet as D
};
