import React, { useImperativeHandle, useRef } from "react";
import { FONTS } from "@/styles/common";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { InputStyledWrapper } from "./Wrapper";
import DeleteAllIcon from "@/assets/icon/global/DeleteAll.svg";
import SearchIcon from "@/assets/icon/global/Search.svg";
import ExclamationIcon from "@/assets/icon/global/Exclamation.svg";

type Props = Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">> & {
  type: "text" | "number" | "password";
  search?: boolean;
  errorText?: string;
  delButton?: boolean;
  hasBorder?: boolean;
  medium?: boolean;
};

export const BasicInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { search, errorText, delButton = false, hasBorder = false, medium = false, ...rest } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const handleClearInputValue = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
      if (props.onChange) {
        props.onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  };

  return (
    <InputStyledWrapper isMedium={medium} hasBorder={hasBorder} isError={!!props.errorText}>
      {search && <SearchIcon />}
      <StyledInput ref={inputRef} placeholder={props.placeholder ?? " "} {...rest} />
      {errorText && (
        <ErrorIconArea aria-label="다시 입력해주세요" role="alert">
          <ErrorText>{props.errorText}</ErrorText>
          <ExclamationIcon />
        </ErrorIconArea>
      )}
      <ClearIconArea role="button" onClick={handleClearInputValue} aria-label="입력값 초기화">
        <DeleteAllIcon />
      </ClearIconArea>
    </InputStyledWrapper>
  );
});
BasicInput.displayName = "BasicInput";

const ErrorAnimate = keyframes`
    from {transform: scale(0.5); opacity: 0.5};
    to {transform: scale(1); opacity: 1};
`;

const IconArea = styled.div`
  position: absolute;
  display: inline-flex;
  right: 8px;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;
const ErrorIconArea = styled(IconArea)`
  svg {
    fill: var(--point);
  }
`;
const ClearIconArea = styled(IconArea)`
  cursor: pointer;
  display: none;
  fill: var(--gray5);
`;
const StyledInput = styled.input`
  flex: 1;
  ${FONTS.MD1};
  font-size: 1.8rem;
  font-weight: 500;
  transition: all 0.2s;
  color: var(--black);

  &::placeholder {
    color: var(--gray5);
  }

  &:not(:placeholder-shown) + ${ClearIconArea} {
    display: flex;
  }

  /* &[type="date"]::-webkit-calendar-picker-indicator {
    visibility: hidden;
    margin-left: -36px;
  }
  &[type="time"]::-webkit-calendar-picker-indicator,
  &[type="month"]::-webkit-calendar-picker-indicator,
  &[type="week"]::-webkit-calendar-picker-indicator,
  &[type="datetime-local"]::-webkit-calendar-picker-indicator {
    visibility: hidden;
    margin-left: -32px;
    padding-left: 10px;
  } */
`;

const ErrorText = styled.p`
  ${FONTS.MD1W500};
  position: absolute;
  width: max-content;
  min-width: 40px;
  padding: 4px 12px;
  top: calc(-100% - 20px);
  right: -9px; // container padding 8px + border 1px
  border-radius: 8px;
  letter-spacing: -0.1px;
  color: #fff;
  background-color: var(--point);
  animation: ${ErrorAnimate} 0.25s cubic-bezier(0.05, 0, 0, 1);
  transform-origin: calc(100% - 12px) 120%;
  user-select: none;
  -webkit-user-select: none;
  z-index: 1;

  &::before {
    // 화살표
    position: absolute;
    right: 12px;
    bottom: -14px;
    content: "";
    background-color: var(--point);
    width: 18px;
    height: 18px;
    clip-path: path(
      "M8.73205 11C7.96225 12.3333 6.03775 12.3333 5.26795 11L0.937822 3.5C0.168022 2.16666 1.13027 0.499999 2.66988 0.499999L11.3301 0.5C12.8697 0.5 13.832 2.16667 13.0622 3.5L8.73205 11Z"
    );
  }
`;
