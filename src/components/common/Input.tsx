"use client";

import React, { useImperativeHandle, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { FONTS } from "@/styles/common";

import { InputStyledWrapper } from "./Wrapper";
import DeleteAllIcon from "@/assets/icon/global/DeleteAll.svg";
import SearchIcon from "@/assets/icon/global/Search.svg";
import QuestionIcon from "@/assets/icon/global/Question.svg";
import ExclamationIcon from "@/assets/icon/global/Exclamation.svg";

export type InputProps = Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">> & {
  type: "text" | "number" | "password" | "email" | "tel" | "file";
  title?: string;
  search?: boolean;
  errorText?: string;
  delButton?: boolean;
  medium?: boolean;
  onButtonWrapClick?: () => void;
  information?: { text: string; onClick?: () => void };
};

export const BasicInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type,
    title,
    search,
    errorText,
    delButton = false,
    medium = false,
    onButtonWrapClick,
    information,
    ...rest
  } = props;
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
    <Container style={{ width: "100%" }}>
      {title && <p className="input-title">{title}</p>}
      <InputStyledWrapper $isMedium={medium} $isError={!!props.errorText}>
        {search && <SearchIcon className="search-icon" />}
        {onButtonWrapClick ? (
          <>
            <ButtonWrapInput type="button" onClick={onButtonWrapClick}>
              <input
                ref={inputRef}
                type={type}
                readOnly={true}
                placeholder={props.placeholder ?? " "}
                aria-disabled="true"
                tabIndex={-1}
                {...rest}
              />
            </ButtonWrapInput>
          </>
        ) : (
          <StyledInput
            ref={inputRef}
            type={type}
            placeholder={props.placeholder ?? " "}
            pattern={type === "number" || type === "tel" ? "[0-9]*" : undefined}
            inputMode={type === "number" || type === "tel" ? "numeric" : undefined}
            {...rest}
          />
        )}
        {errorText && (
          <ErrorIconArea aria-label="다시 입력해주세요" role="alert">
            <ErrorText>{props.errorText}</ErrorText>
            <ExclamationIcon />
          </ErrorIconArea>
        )}
        {delButton && (
          <ClearIconArea role="button" onClick={handleClearInputValue} aria-label="입력값 초기화">
            <DeleteAllIcon />
          </ClearIconArea>
        )}
      </InputStyledWrapper>
      {information && (
        <span className="input-information" onClick={information.onClick}>
          <QuestionIcon />
          {information.text}
        </span>
      )}
    </Container>
  );
});
BasicInput.displayName = "BasicInput";

const ErrorAnimate = keyframes`
    from {transform: scale(0.5); opacity: 0.5};
    to {transform: scale(1); opacity: 1};
`;

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
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    padding: 0 8px;
    font-size: 1.3rem;
    color: var(--gray600);
    gap: 4px;
    svg {
      width: 16px;
      height: 16px;
      fill: var(--gray500);
    }
  }

  svg.search-icon {
    fill: var(--gray800);
  }
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
    fill: var(--warning500);
  }
`;
const ClearIconArea = styled(IconArea)`
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s, visibility 0.1s;
  transition-delay: 0.1s;
  svg {
    fill: var(--gray500);
  }
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 10px 0;
  ${FONTS.MD1};
  font-weight: 400;
  transition: all 0.2s;
  color: var(--black);

  &::placeholder {
    color: var(--gray500);
  }

  &:not(:placeholder-shown):focus + ${ClearIconArea} {
    visibility: visible;
    opacity: 1;
  }
  &:disabled {
    color: var(--gray600);
    & + ${ClearIconArea} {
      display: none;
    }
  }
`;
const ButtonWrapInput = styled(StyledInput).attrs({ as: "button" })`
  input {
    width: 100%;
    color: var(--black);

    &::placeholder {
      color: var(--gray500);
    }
    &:disabled {
      color: var(--gray600);
    }
  }

  & + ${ClearIconArea} {
    display: none !important;
  }
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
  background-color: var(--warning500);
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
    background-color: var(--warning500);
    width: 18px;
    height: 18px;
    clip-path: path(
      "M8.73205 11C7.96225 12.3333 6.03775 12.3333 5.26795 11L0.937822 3.5C0.168022 2.16666 1.13027 0.499999 2.66988 0.499999L11.3301 0.5C12.8697 0.5 13.832 2.16667 13.0622 3.5L8.73205 11Z"
    );
  }
`;
