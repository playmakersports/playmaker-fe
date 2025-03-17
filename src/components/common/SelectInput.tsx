"use client";

import React from "react";
import styled from "styled-components";

import CheckIcon from "@/assets/icon/global/CheckIcon.svg";
import { FONTS } from "@/styles/common";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "title "> & {
  size?: "LARGE" | "MEDIUM";
  color?: "default" | "error";
  text?: {
    title: string;
    description?: string;
  };
};
type RadioProps = Props & { $fullWidth?: boolean; labelName: string; buttonType?: boolean };

export const InputCheckbox = React.forwardRef<HTMLInputElement, Props>(
  ({ size = "LARGE", color = "default", text, ...rest }, ref) => {
    const SIZE = size === "LARGE" ? "24px" : "20px";

    return (
      <TextContainer>
        <div style={{ position: "relative", display: "inline-block", width: SIZE, height: SIZE }}>
          <Check type="checkbox" ref={ref} $color={color === "error"} size={size} {...rest} />
          <i style={{ width: SIZE, height: SIZE }}>
            <CheckIcon width={size === "LARGE" ? "14px" : "12px"} height={size === "LARGE" ? "14px" : "12px"} />
          </i>
        </div>
        {text && (
          <div className="text-container" data-size={size}>
            <label className="title" htmlFor={rest.id}>
              {text.title}
            </label>
            {text.description && <p className="description">{text.description}</p>}
          </div>
        )}
      </TextContainer>
    );
  }
);
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
const Check = styled.input<{ size: Props["size"]; $color: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;

  & + i {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ size }) => (size === "LARGE" ? "8px" : "6px")};
    border: 1px solid ${({ $color }) => ($color ? "var(--red200)" : "var(--gray200)")};
    background-color: transparent;
  }
  &:focus:not(:checked) + i {
    outline: 2px solid ${({ $color }) => ($color ? "var(--red300)" : "var(--gray300)")};
  }
  &:focus + i {
    outline: 2px solid ${({ $color }) => ($color ? "var(--red300)" : "var(--primary300)")};
  }
  &:checked + i {
    border: 1px solid transparent;
    background-color: ${({ $color }) => ($color ? "var(--red500)" : "var(--primary500)")};
    svg {
      fill: var(--white);
    }
  }

  &:checked:disabled + i {
    border: 1px solid transparent;
    background-color: #d9d9d9;
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
