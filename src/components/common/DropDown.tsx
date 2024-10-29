import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { InputStyledWrapper } from "./Wrapper";

import ToggleArrowIcon from "@/assets/icon/arrow/toggle/UpToggle.svg";
import { FONTS } from "@/styles/common";

type Props = {
  title?: string;
  placeholder?: string;
  id: string;
  defaultValue?: string;
  options: {
    name: string;
    value: string;
  }[];
  getSelectedValue: (target: string) => void;
  medium?: boolean;
};

function DropDown(props: Props) {
  const { title, placeholder, id, defaultValue = "", options, getSelectedValue, medium = false } = props;
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
    <Wrapper>
      {title && <p className="input-title">{title}</p>}
      <Container ref={dropDownRef} isError={false} isOpen={showOptions}>
        <DisplayValue
          type="button"
          aria-label={`선택 팝업 열기. 현재 선택된 항목 - ${
            options?.find((option) => option.value === selectedOption)?.name
          }`}
          role="menu"
          onClick={() => setShowOptions((prev) => !prev)}
          isMedium={medium}
          className={showOptions ? "active" : ""}
        >
          {!!selectedOption ? (
            <p className="dropdown-current-value">{options?.find((option) => option.value === selectedOption)?.name}</p>
          ) : (
            <p className="dropdown-placeholder">{placeholder}</p>
          )}
          <ArrowWrapper toggle={showOptions}>
            <ToggleArrowIcon />
          </ArrowWrapper>
        </DisplayValue>
        <Options show={showOptions} aria-modal="true" role="modal">
          {options.length > 0 ? (
            options?.map((option) => (
              <Option
                key={option.value}
                type="button"
                className={selectedOption === option.value ? "selected" : ""}
                onClick={() => onSelected(option.value)}
              >
                {option.name}
              </Option>
            ))
          ) : (
            <Error>옵션을 불러오지 못했어요</Error>
          )}
        </Options>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  p.input-title {
    font-size: 1.4rem;
    margin-bottom: 4px;
    padding: 0 10px;
    font-weight: 500;
    color: var(--gray700);
    line-height: 2.4rem;
  }
`;
const DisplayValue = styled.button<{ isMedium: boolean }>`
  flex: 1;
  display: flex;
  padding: ${({ isMedium }) => (isMedium ? "6px 8px" : "10px 12px")};
  align-items: center;
  text-align: left;
  ${FONTS.MD1W500}
  font-weight: 400;

  p.dropdown-current-value {
    flex: 1;
  }
  p.dropdown-placeholder {
    flex: 1;
    color: var(--gray500);
  }
  &.active {
    font-weight: 500;
  }
`;
const Container = styled(InputStyledWrapper)<{ isOpen: boolean }>`
  padding: 0;
  position: relative;
  border: ${({ isOpen }) => (isOpen ? `1px solid var(--main)` : "")};
  user-select: none;
  background-color: var(--background-light);
  gap: 0;

  & p {
    cursor: pointer;
    width: 100%;
  }
`;

const ArrowWrapper = styled.div<{ toggle: boolean }>`
  display: inline-flex;
  align-items: center;
  transform: rotate(${({ toggle }) => (toggle ? 0 : 180)}deg);
  transition: transform 0.25s;
  svg {
    fill: var(--gray400) !important;
  }
`;

const Options = styled.div<{ show: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4px;
  top: 100%;
  margin-top: 10px;
  padding: 8px;
  left: -2px;
  width: calc(100% + 4px);
  height: max-content;
  max-height: 47vh;
  background-color: var(--background-light);
  border-radius: 10px;
  transition: all 0.2s;
  box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.07);
  overflow-y: auto;

  transform: translateY(${({ show }) => (show ? "0px" : "-12px")});
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: 1;
`;
const Option = styled.button`
  ${FONTS.MD1W500}
  font-weight: 400;
  cursor: pointer;
  padding: 8px 10px;
  user-select: none;
  text-align: left;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: all 0.2s;
  color: var(--gray800);

  &:focus {
    background: var(--gray200);
  }
  &:hover {
    background: var(--gray100);
  }
  &:active {
    color: var(--gray1000);
    background: var(--gray200);
  }
  &.selected {
    background: var(--main);
    font-weight: 500;
    color: #fff;

    &:focus {
      background: var(--gray200);
      color: var(--black);
    }
  }
`;

const Error = styled.div`
  ${FONTS.MD1W500}
  padding: 20px 0;
  width: 100%;
  text-align: center;
  color: var(--point);
`;

export default DropDown;
