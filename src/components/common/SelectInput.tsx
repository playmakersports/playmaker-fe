"use client";

import React from "react";
import styled from "styled-components";

import CheckIcon from "@/assets/icon/global/CheckIcon.svg";
import { FONTS } from "@/styles/common";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  size?: "LARGE" | "MEDIUM";
};
type RadioProps = Props & { $fullWidth?: boolean; labelName: string; buttonType?: boolean };

export const InputCheckbox = React.forwardRef<HTMLInputElement, Props>(({ size = "LARGE", ...rest }, ref) => (
  <div style={{ position: "relative", display: "inline-block", width: "24px", height: "24px" }}>
    <Check type="checkbox" ref={ref} {...rest} />
    <i>
      <CheckIcon />
    </i>
  </div>
));
InputCheckbox.displayName = "InputCheckBox";

export const InputRadio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ $fullWidth = false, size = "LARGE", labelName, buttonType = false, id, ...rest }, ref) => (
    <RadioWrapper $isLarge={size === "LARGE"} $fullWidth={$fullWidth}>
      <div style={{ position: "relative", display: buttonType ? "none" : "inline-flex" }}>
        <Radio type="radio" id={id} ref={ref} {...rest} />
        <RadioIcon />
      </div>
      {buttonType ? (
        <ButtonLabel htmlFor={id}>{labelName}</ButtonLabel>
      ) : (
        <BasicLabel htmlFor={id}>{labelName}</BasicLabel>
      )}
    </RadioWrapper>
  )
);
InputRadio.displayName = "InputRadio";

const Check = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  & + i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    svg {
      width: 14px;
      height: 14px;
      fill: var(--gray200);
    }
    border: 2px solid var(--gray300);
    background-color: transparent;
  }
  &:focus:not(:checked) + i {
    outline: 3px solid var(--gray400);
  }
  &:focus + i {
    outline: 3px solid var(--primary300);
  }
  &:checked + i {
    border: 1px solid transparent;
    background-color: var(--main);
    svg {
      fill: #fff;
    }
  }
`;

const RadioIcon = styled.div``;
const Radio = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;

  & + ${RadioIcon} {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid var(--gray500);
    background-color: transparent;
  }
  &:focus:not(:checked) + ${RadioIcon} {
    outline: 3px solid var(--gray600);
  }
  &:focus:checked + ${RadioIcon} {
    outline: 3px solid var(--primary300);
  }
  &:checked + ${RadioIcon} {
    display: flex;
    align-items: center;
    justify-content: center;
    fill: #fff;
    border: 1px solid var(--main);
    &::after {
      content: "";
      background-color: var(--main);
      border-radius: 50%;
    }
  }
`;
const BasicLabel = styled.label`
  ${FONTS.MD1W500};
  font-weight: 400;
`;
const ButtonLabel = styled.label`
  cursor: pointer;
  width: 100%;
  padding: 8px 4px;
  ${FONTS.MD1W500};
  border-radius: 10px;
  color: var(--gray500);
  background-color: var(--gray100);
  text-align: center;
  word-break: keep-all;
`;
const RadioWrapper = styled.div<{ $fullWidth: boolean; $isLarge: boolean }>`
  display: flex;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  align-items: center;
  gap: 4px;
  & > div,
  & > div > input[type="radio"] + ${RadioIcon} {
    width: ${({ $isLarge }) => ($isLarge ? "24px" : "20px")};
    height: ${({ $isLarge }) => ($isLarge ? "24px" : "20px")};

    &::after {
      width: ${({ $isLarge }) => ($isLarge ? "12px" : "10px")};
      height: ${({ $isLarge }) => ($isLarge ? "12px" : "10px")};
    }
  }

  &:has(${Radio}:checked) {
    ${ButtonLabel} {
      color: #fff;
      background-color: var(--main);
      font-weight: 600;
    }
  }

  & > ${BasicLabel} {
    line-height: ${({ $isLarge }) => ($isLarge ? "2.2rem" : "2rem")};
  }
`;
