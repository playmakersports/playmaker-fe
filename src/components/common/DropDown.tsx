import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { BUTTON_ACTIVE, FONTS, INNER_BUTTON_ACTIVE } from "@/styles/common";

type Props = {
  id: string;
  defaultValue: string;
  options: {
    name: string;
    value: string;
  }[];
  getSelectedValue: (target: string) => void;
};

function DropDown(props: Props) {
  const { id, defaultValue, options, getSelectedValue } = props;
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
    <Container ref={dropDownRef}>
      <div
        role="button"
        onClick={() => setShowOptions((prev) => !prev)}
        className={`button-area ${showOptions && `active`}`}
      >
        <p className="inner-button">{options.find((option) => option.value === selectedOption)?.name}</p>
      </div>
      <Options show={showOptions}>
        {options.map((option) => (
          <Option role="button" key={option.value} onClick={() => onSelected(option.value)}>
            {option.name}
          </Option>
        ))}
      </Options>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  ${FONTS.MD1W500};
  .button-area {
    padding: 16px;
    background-color: var(--card);
    ${INNER_BUTTON_ACTIVE("var(--card)")};
  }
  .active {
    font-weight: 700;
  }
`;

const Options = styled.ul<{ show: boolean }>`
  position: absolute;
  top: 100%;
  margin-top: 12px;
  padding: 8px 2px;
  left: 0;
  width: 100%;
  background-color: var(--drop-down-background);
  border-radius: 16px;
  border: 1px solid var(--background);
  box-shadow: 0 10px 16px 12px var(--box-shadow);
  transition: all 0.2s;

  transform: translateY(${({ show }) => (show ? "0px" : "-30px")});
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? 1 : 0)};

  z-index: 1;
`;
const Option = styled.li`
  padding: 16px;
  user-select: none;
  ${BUTTON_ACTIVE("var(--background)")};
`;

export default DropDown;
