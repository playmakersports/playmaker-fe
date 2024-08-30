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
      <p
        role="button"
        onClick={() => setShowOptions((prev) => !prev)}
        className={`button-area ${showOptions && `active`}`}
      >
        <p className="inner-button">{options.find((option) => option.value === selectedOption)?.name}</p>
      </p>
      <Options show={showOptions}>
        {options.map((option) => (
          <Option
            key={option.value}
            aria-selected={selectedOption === option.value}
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
  background-color: var(--path-white);
  gap: 0;

  & p {
    cursor: pointer;
    width: 100%;
  }
  p.active {
    font-weight: 700;
  }
`;

const ArrowWrapper = styled.div<{ toggle: boolean }>`
  display: inline-flex;
  align-items: center;
  transform: rotate(${({ toggle }) => (toggle ? 0 : 180)}deg);
  transition: transform 0.25s;
  svg {
    fill: var(--gray2);
  }
`;

const Options = styled.ul<{ show: boolean }>`
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
  border: 1px solid var(--gray7);
  box-shadow: var(--shadow-alpha20);
  transition: all 0.2s;

  transform: translateY(${({ show }) => (show ? "0px" : "-20px")});
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: 1;
`;
const Option = styled.li`
  cursor: pointer;
  padding: 10px;
  user-select: none;
  border-radius: 8px;
  transition: opacity 0.2s;
  font-weight: 400;

  &:active {
    opacity: 0.5;
  }
  &[aria-selected="true"] {
    background: var(--main);
    color: #fff;
    font-weight: 600;
  }
`;

export default DropDown;
