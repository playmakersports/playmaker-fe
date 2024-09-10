import React from "react";
import styled from "@emotion/styled";

import CheckIcon from "@/assets/icon/global/CheckIcon.svg";
import { FONTS } from "@/styles/common";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  size?: "LARGE" | "MEDIUM";
};
type RadioProps = Props & { labelName: string; buttonType?: boolean };

export const InputCheckbox = React.forwardRef<HTMLInputElement, Props>(({ size = "LARGE", ...rest }, ref) => (
  <div style={{ position: "relative", display: "inline-block", width: "24px", height: "24px" }}>
    <Check type="checkbox" ref={ref} {...rest} />
    <CheckIcon />
  </div>
));
InputCheckbox.displayName = "InputCheckBox";

export const InputRadio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ size = "LARGE", labelName, buttonType = false, id, ...rest }, ref) => (
    <RadioWrapper LARGE={size === "LARGE"}>
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
  & + svg {
    padding: 1px 3px 2px;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    fill: none;
    border: 1px solid var(--gray500);
    background-color: transparent;
  }
  &:focus:not(:checked) + svg {
    outline: 3px solid var(--gray400);
  }
  &:focus + svg {
    outline: 3px solid var(--sub1);
  }
  &:checked + svg {
    fill: #fff;
    border: 1px solid transparent;
    background-color: var(--main);
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
    outline: 3px solid var(--sub1);
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
  padding: 8px 32px;
  ${FONTS.MD1W500};
  border-radius: 20px;
  color: var(--gray600);
  background-color: var(--gray300);
`;
const RadioWrapper = styled.div<{ LARGE: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  & > div,
  & > div > input[type="radio"] + ${RadioIcon} {
    width: ${({ LARGE }) => (LARGE ? "24px" : "20px")};
    height: ${({ LARGE }) => (LARGE ? "24px" : "20px")};

    &::after {
      width: ${({ LARGE }) => (LARGE ? "12px" : "10px")};
      height: ${({ LARGE }) => (LARGE ? "12px" : "10px")};
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
    line-height: ${({ LARGE }) => (LARGE ? "2.2rem" : "2rem")};
  }
`;
