"use client";

import React, { useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";
import clsx from "clsx";

import { FONTS } from "@/styles/common";
import { fonts } from "@/styles/fonts.css";
import { InputWrapperStyledProps } from "./type";
import { InputStyledWrapper } from "../Wrapper";
import InputWrapper from "./InputWrapper";

import CloseIcon from "@/assets/icon/common/Close20.svg";
import SearchIcon from "@/assets/icon/common/Search.svg";
import MailIcon from "@/assets/icon/common/filled/Mail.svg";
// import CalendarIcon from "@/assets/icon/common/filled/Calendar.svg";
import EyeOpenedIcon from "@/assets/icon/common/outlined/EyeOpened.svg";
import EyeClosedIcon from "@/assets/icon/common/outlined/EyeClosed.svg";

type InputIconType = "search" | "email" | "calendar";
export type InputProps = Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "required">> & {
  type: "text" | "number" | "password" | "email" | "tel" | "file";
  iconType?: InputIconType;
  error?: boolean;
  delButton?: boolean;
  onButtonWrapClick?: () => void;
  description?: string;
  suffix?: string;
  large?: boolean;
} & InputWrapperStyledProps;

export const BasicInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type,
    title,
    iconType,
    error = false,
    delButton = false,
    onButtonWrapClick,
    required,
    information,
    description,
    suffix,
    large = false,
    ...rest
  } = props;
  const [showPassword, setShowPassword] = useState(false);
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

  const onClickShowPassword = () => {
    setShowPassword((prev) => !prev);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const ICON_TYPE = {
    search: <SearchIcon />,
    email: <MailIcon />,
    calendar: <SearchIcon />,
  };
  const isShowSideIconDivider = delButton && (suffix || type === "password");

  return (
    <InputWrapper information={information} title={title} required={required}>
      <ValueContainer $isError={error} style={{ height: large ? "72px" : "40px" }}>
        {iconType && <IconArea>{ICON_TYPE[iconType]}</IconArea>}
        {onButtonWrapClick ? (
          <ButtonWrapInput type="button" onClick={onButtonWrapClick}>
            <input
              ref={inputRef}
              type={type}
              readOnly={true}
              placeholder={props.placeholder ?? " "}
              aria-disabled="true"
              tabIndex={-1}
              className={clsx(large ? fonts.head6.medium : fonts.body4.regular)}
              {...rest}
            />
          </ButtonWrapInput>
        ) : (
          <StyledInput
            ref={inputRef}
            className={clsx(large ? fonts.head6.medium : fonts.body4.regular)}
            type={type === "password" && showPassword ? "text" : type}
            placeholder={props.placeholder ?? " "}
            pattern={type === "number" || type === "tel" ? "[0-9]*" : undefined}
            inputMode={type === "number" || type === "tel" ? "numeric" : undefined}
            {...rest}
          />
        )}
        <div className="dropdown-icons">
          {delButton && (
            <>
              <ClearIcon role="button" onClick={handleClearInputValue} aria-label="입력값 초기화">
                <CloseIcon />
              </ClearIcon>
              {isShowSideIconDivider && (
                <div className="divider" style={{ height: "16px", backgroundColor: "var(--gray200)" }} />
              )}
            </>
          )}
          {suffix && (
            <span
              className="input-suffix"
              data-large={large}
              style={{ color: props.disabled ? "var(--gray300)" : undefined }}
            >
              {suffix}
            </span>
          )}
          {type === "password" && (
            <IconArea role="button" onClick={onClickShowPassword}>
              {showPassword ? <EyeOpenedIcon /> : <EyeClosedIcon />}
            </IconArea>
          )}
        </div>
      </ValueContainer>
      {description && <Description data-error={error}>{description}</Description>}
    </InputWrapper>
  );
});
BasicInput.displayName = "BasicInput";

const ValueContainer = styled(InputStyledWrapper)`
  justify-content: space-between;
  color: var(--gray700);

  div.dropdown-icons {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
  span.input-suffix {
    ${FONTS.body4("regular")};
    color: var(--gray400); /* placeholder일 때, */

    &[data-large="true"] {
      ${FONTS.body2("regular")};
    }
  }
`;
const IconArea = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 100%;
    height: auto;
    fill: var(--gray700);
  }
  &[role="button"] {
    cursor: pointer;
  }
`;
const ClearIcon = styled(IconArea)`
  width: 1px;
  opacity: 0;
  transition: all 0.15s;
  transition-delay: 0.2s;
  & + div.divider {
    width: 0;
    transition: width 0.1s;
    transition-delay: 0.15s;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  color: var(--gray700);

  &::placeholder {
    color: var(--gray400);
  }

  &:not(:placeholder-shown) + div.dropdown-icons > span.input-suffix {
    /* 값이 있을 때, suffix 색상 */
    color: var(--gray700);
  }
  &:not(:placeholder-shown):focus + div.dropdown-icons > ${ClearIcon} {
    width: 20px;
    opacity: 1;
    & + div.divider {
      width: 1px;
    }
  }
  &:disabled {
    & + div.dropdown-icons > ${ClearIcon} {
      display: none;
    }
  }
`;
const ButtonWrapInput = styled(StyledInput).attrs({ as: "button" })`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input {
    color: var(--gray700);
    &::placeholder {
      color: var(--gray400);
    }
    &:disabled {
      color: var(--gray400);
    }
  }

  & + ${IconArea} {
    display: none !important;
  }
`;

const Description = styled.p`
  margin-top: 8px;
  ${FONTS.caption1("regular")};
  color: var(--gray400);

  &[data-error="true"] {
    color: var(--red500);
  }
`;
