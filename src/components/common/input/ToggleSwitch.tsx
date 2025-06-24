"use client";

import React from "react";
import styled from "styled-components";
import { FONTS } from "@/styles/common";

import MinusIcon from "@/assets/icon/common/Minus.svg";
import CheckIcon from "@/assets/icon/common/Check.svg";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "title "> & {
  size?: "large" | "medium";
  color?: "default" | "error";
  showIcon?: boolean;
  text?: {
    title: string;
    description?: string;
    first?: boolean;
    textOnlySize?: "large" | "medium";
  };
};

export const ToggleSwitch = React.forwardRef<HTMLInputElement, Props>(
  ({ size = "large", color = "default", showIcon = false, text, ...rest }, ref) => {
    const SIZE = size === "large" ? { width: "44px", height: "24px" } : { width: "36px", height: "20px" };
    const CIRCLE_SIZE = size === "large" ? "18px" : "14px";

    return (
      <TextContainer>
        <div style={{ position: "relative", display: "inline-block", order: text && text.first ? 2 : 1, ...SIZE }}>
          <Check type="checkbox" ref={ref} $color={color === "error"} size={size} {...rest} />
          <div className="switch-wrapper">
            <div
              className="switch-circle"
              style={{
                width: CIRCLE_SIZE,
                height: CIRCLE_SIZE,
              }}
            >
              <Icons data-show={showIcon}>
                <MinusIcon className="switch-icon minus" />
                <CheckIcon className="switch-icon check" />
              </Icons>
            </div>
          </div>
        </div>
        {text && (
          <div className="text-container" data-size={text.textOnlySize ?? size} style={{ order: text.first ? 1 : 2 }}>
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
ToggleSwitch.displayName = "ToggleSwitchCheckBox";

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  div.text-container[data-size="large"] {
    label.title {
      ${FONTS.body3("medium")};
    }
    p.description {
      ${FONTS.body4("regular")};
      white-space: pre-wrap;
    }
  }
  div.text-container[data-size="medium"] {
    label.title {
      ${FONTS.body4("medium")};
    }
    p.description {
      ${FONTS.caption1("regular")};
      white-space: pre-wrap;
    }
  }
`;
const Check = styled.input<{ size: Props["size"]; $color: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;

  & + div.switch-wrapper {
    display: flex;
    padding: 3px;
    width: 100%;
    height: 100%;
    align-items: center;
    border-radius: 999px;
    border: none;
    background-color: var(--gray200);
    transition: background-color 0.25s ease-in-out;

    div.switch-circle {
      background-color: var(--white);
      border-radius: 50%;
      box-shadow: var(--shadow-xs);
    }
    svg.switch-icon {
      width: 100%;
      height: 100%;
      fill: transparent;
    }

    svg.switch-icon.minus {
      display: block;
      fill: var(--gray400);
    }
    svg.switch-icon.check {
      display: none;
    }
  }
  &:focus:not(:checked) + div.switch-wrapper {
    outline: 2px solid var(--gray300);
  }
  &:focus + div.switch-wrapper {
    outline: 2px solid ${({ $color }) => ($color ? "var(--red300)" : "var(--primary300)")};
  }
  &:checked + div.switch-wrapper {
    justify-content: flex-end;
    background-color: ${({ $color }) => ($color ? "var(--red500)" : "var(--primary500)")};
    svg {
      fill: var(--white);
    }

    svg.switch-icon.minus {
      display: none;
    }
    svg.switch-icon.check {
      display: block;
      fill: ${({ $color }) => ($color ? "var(--red500)" : "var(--primary500)")};
    }
  }

  &:disabled + div.switch-wrapper {
    background-color: var(--gray200);
    div.switch-circle {
      background-color: var(--gray100);
    }
  }
  &:checked:disabled + div.switch-wrapper {
    svg {
      fill: var(--gray200);
    }
  }
`;

const Icons = styled.span`
  align-items: center;
  justify-content: center;

  &[data-show="false"] {
    display: none;
  }
  &[data-show="true"] {
    display: flex;
  }
`;
