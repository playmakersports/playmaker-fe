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
    <RadioWrapper>
      <div
        style={{ position: "relative", display: buttonType ? "none" : "inline-flex", width: "24px", height: "24px" }}
      >
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
    border: 1px solid var(--gray5);
    background-color: transparent;
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
    border: 1px solid var(--gray5);
    background-color: transparent;
  }
  &:checked + ${RadioIcon} {
    display: flex;
    align-items: center;
    justify-content: center;
    fill: #fff;
    border: 1px solid var(--main);
    &::after {
      content: "";
      width: 13px;
      height: 13px;
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
  color: var(--gray4);
  background-color: var(--gray7);
`;
const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  &:has(${Radio}:checked) {
    ${ButtonLabel} {
      color: #fff;
      background-color: var(--main);
      font-weight: 600;
    }
  }
`;
