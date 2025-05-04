"use client";

import React from "react";
import styled from "styled-components";
import { FONTS } from "@/styles/common";
import CheckIcon from "@/assets/icon/common/Check.svg";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "title "> & {
  size?: "LARGE" | "MEDIUM";
  color?: "default" | "error";
  text?: {
    title: string;
    description?: string;
  };
};
type RadioProps = Props & { buttonType?: boolean };

export const InputCheckbox = React.forwardRef<HTMLInputElement, Props>(
  ({ size = "LARGE", color = "default", text, ...rest }, ref) => {
    const SIZE = size === "LARGE" ? "24px" : "20px";

    return (
      <TextContainer>
        <div style={{ position: "relative", display: "inline-block", width: SIZE, height: SIZE }}>
          <Check type="checkbox" ref={ref} $color={color === "error"} size={size} {...rest} />
          <i style={{ width: SIZE, height: SIZE }}>
            <CheckIcon />
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
  ({ size = "LARGE", color = "default", text, buttonType = false, ...rest }, ref) => {
    const SIZE = size === "LARGE" ? "24px" : "20px";

    return (
      <TextContainer>
        <div style={{ position: "relative", display: "inline-block", width: SIZE, height: SIZE }}>
          <Radio type="radio" data-error={color === "error"} ref={ref} {...rest} />
          <RadioIcon />
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
    svg {
      display: none;
      width: 100%;
      height: 100%;
    }
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
      display: block;
      fill: var(--white);
    }
  }

  &:checked:disabled + i {
    border: 1px solid transparent;
    background-color: var(--gray200);
    svg {
      display: block;
      fill: var(--gray100);
    }
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

  &[data-error="true"] {
    & + ${RadioIcon} {
      border: 1px solid var(--red200);
    }
    &:checked + ${RadioIcon} {
      background-color: var(--red500);
    }
    &:focus:checked + ${RadioIcon} {
      outline: 3px solid var(--red100);
    }
  }

  & + ${RadioIcon} {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid var(--gray200);
    background-color: transparent;
  }
  &:focus:not(:checked) + ${RadioIcon} {
    outline: 3px solid var(--gray100);
  }
  &:focus:checked + ${RadioIcon} {
    outline: 3px solid var(--primary100);
  }

  &:checked:disabled + ${RadioIcon} {
    background-color: var(--gray200);
  }
  &:disabled + ${RadioIcon} {
    background-color: var(--gray50);
  }
  &:checked + ${RadioIcon} {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary500);
    border: 1px solid transparent;

    &::after {
      content: "";
      width: 8px;
      height: 8px;
      background-color: var(--white);
      border-radius: 50%;
    }
  }
`;
