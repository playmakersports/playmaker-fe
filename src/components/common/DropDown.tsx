import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { InputStyledWrapper } from "./Wrapper";

import ToggleArrowIcon from "@/assets/icon/arrow/toggle/UpToggle.svg";

type Props = {
  id: string;
  defaultValue: string;
  options: {
    name: string;
    value: string;
  }[];
  getSelectedValue: (target: string) => void;
  medium?: boolean;
};

function DropDown(props: Props) {
  const { id, defaultValue, options, getSelectedValue, medium } = props;
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue ?? "");

  useEffect(() => {
    const outSideClick = (e: any) => {
      if (showOptions && dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", outSideClick);
  }, [showOptions]);

  const onSelected = (target: string) => {
    getSelectedValue(target);
    setSelectedOption(target);
    setShowOptions(false);
  };

  return (
    <Container ref={dropDownRef} isError={false} isMedium={medium} isOpen={showOptions}>
      <button
        type="button"
        aria-label={`선택 팝업 열기. 현재 선택된 항목 - ${
          options.find((option) => option.value === selectedOption)?.name
        }`}
        role="menu"
        onClick={() => setShowOptions((prev) => !prev)}
        className={`button-area ${showOptions && `active`}`}
      >
        {options.find((option) => option.value === selectedOption)?.name}
      </button>
      <Options show={showOptions} aria-modal="true" role="modal">
        {options.map((option) => (
          <Option
            key={option.value}
            className={selectedOption === option.value ? "selected" : ""}
            onClick={() => onSelected(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Options>
      <ArrowWrapper toggle={showOptions}>
        <ToggleArrowIcon />
      </ArrowWrapper>
    </Container>
  );
}

const Container = styled(InputStyledWrapper)<{ isOpen: boolean }>`
  position: relative;
  border: ${({ isOpen }) => (isOpen ? `1px solid var(--main)` : "")};
  user-select: none;
  background-color: var(--background-light);
  gap: 0;

  & p {
    cursor: pointer;
    width: 100%;
  }
  button {
    flex: 1;
    text-align: left;
  }
  &:has(button.button-area:focus) {
    border: 1px solid var(--main);
  }
  button.active {
    font-weight: 700;
  }
`;

const ArrowWrapper = styled.div<{ toggle: boolean }>`
  display: inline-flex;
  align-items: center;
  transform: rotate(${({ toggle }) => (toggle ? 0 : 180)}deg);
  transition: transform 0.25s;
  svg {
    fill: var(--gray800) !important;
  }
`;

const Options = styled.div<{ show: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4px;
  top: 100%;
  margin-top: 6px;
  padding: 8px;
  left: -2px;
  width: calc(100% + 4px);
  background-color: var(--background);
  border-radius: 8px;
  border: 1px solid var(--gray300);
  box-shadow: var(--shadow-alpha20);
  transition: all 0.2s;

  transform: translateY(${({ show }) => (show ? "0px" : "-20px")});
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: 1;
`;
const Option = styled.button`
  cursor: pointer;
  padding: 10px;
  user-select: none;
  border-radius: 8px;
  transition: all 0.2s;
  font-weight: 400;
  border: 1px solid transparent;

  &:active {
    opacity: 0.7;
  }
  &:focus {
    opacity: 0.7;
    border: 1px solid var(--gray700);
  }
  &.selected {
    background: var(--main);
    color: #fff;
    font-weight: 600;
    &:focus {
      background: var(--gray300);
      color: var(--gray900);
    }
  }
`;

export default DropDown;
