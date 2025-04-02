import React, { ReactNode } from "react";
import styled from "styled-components";
import { FONTS } from "@/styles/common";

export type ButtonStyleMode = "primary" | "gray" | "success" | "info" | "warning" | "red";
export type ButtonFillType = "default" | "light" | "outline";
type ButtonStyledObject = { background: string; color: string; border: string };
type ButtonSizeType = "small" | "medium" | "large";

type Props = {
  fillType?: ButtonFillType;
  mode?: ButtonStyleMode;
  children?: ReactNode;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  flex?: number;
  disabled?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  size?: ButtonSizeType;
};

function Button(props: Props) {
  const {
    fillType = "default",
    mode = "primary",
    children,
    fullWidth,
    type,
    flex,
    disabled = false,
    onClick,
    icon,
    size = "medium",
  } = props;

  const isOnlyIcon = !children && icon;

  return (
    <Wrapper
      type={type ?? "button"}
      onClick={onClick}
      flex={flex}
      data-fill-type={fillType}
      mode={BUTTON_STYLE[mode][fillType]}
      $fullWidth={fullWidth}
      disabled={disabled}
      $fontStyle={BUTTON_SIZE_STYLED[size].font}
      style={{
        padding: isOnlyIcon ? BUTTON_SIZE_STYLED[size].onlyIconPadding : BUTTON_SIZE_STYLED[size].padding,
        height: BUTTON_SIZE_STYLED[size].height,
      }}
    >
      <span>
        {icon && (
          <i
            style={{
              padding: "2px",
              width: BUTTON_SIZE_STYLED[size].iconSize,
              height: BUTTON_SIZE_STYLED[size].iconSize,
            }}
          >
            {icon}
          </i>
        )}
        {children}
      </span>
    </Wrapper>
  );
}

type ButtonStyled = {
  mode: ButtonStyledObject;
  $fullWidth?: boolean;
  flex?: number;
  $autoHeight?: boolean;
  $borderType?: boolean;
  $fontStyle: string;
};
const Wrapper = styled.button<ButtonStyled>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ flex }) => (flex ? `flex: ${flex}` : "")};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  border: ${({ mode }) => `1px solid ${mode.border}`};
  border-radius: 10px;
  background-color: ${({ mode }) => mode.background};
  color: ${({ mode }) => mode.color};
  white-space: nowrap;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  transition: all 0.2s;
  will-change: outline;
  ${({ $fontStyle }) => $fontStyle};

  &:disabled {
    cursor: not-allowed;
    &[data-fill-type="default"] {
      background-color: var(--gray300);
      color: var(--gray50);
      border-color: transparent;
    }
    &[data-fill-type="light"] {
      background-color: var(--gray100);
      color: var(--gray300);
      border-color: transparent;
    }
    &[data-fill-type="outline"] {
      background-color: var(--white);
      color: var(--gray300);
      border-color: var(--gray200);
    }
  }
  &:active > span {
    transform: scale(0.95);
    transition: all 0.25s;
  }

  & > span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    svg {
      width: 100%;
      height: auto;
      fill: ${({ mode }) => mode.color};
    }
  }
`;

const BUTTON_SIZE_STYLED = {
  small: {
    font: FONTS.body4("medium"),
    padding: "10px 16px",
    height: "40px",
    iconSize: "20px",
    onlyIconPadding: "10px",
  },
  medium: {
    font: FONTS.body3("medium"),
    padding: "10px 18px",
    height: "44px",
    iconSize: "24px",
    onlyIconPadding: "10px",
  },
  large: {
    font: FONTS.body3("medium"),
    padding: "10px 20px",
    height: "48px",
    iconSize: "24px",
    onlyIconPadding: "12px",
  },
};

const BUTTON_STYLE: Record<ButtonStyleMode, Record<ButtonFillType, ButtonStyledObject>> = {
  primary: {
    default: {
      background: "var(--primary500)",
      color: "var(--white)",
      border: "transparent",
    },
    light: {
      background: "var(--primary50)",
      color: "var(--primary600)",
      border: "transparent",
    },
    outline: {
      background: "transparent",
      color: "var(--primary600)",
      border: "var(--primary200)",
    },
  },
  gray: {
    default: {
      background: "var(--gray500)",
      color: "var(--white)",
      border: "transparent",
    },
    light: {
      background: "var(--gray100)",
      color: "var(--gray600)",
      border: "transparent",
    },
    outline: {
      background: "transparent",
      color: "var(--gray600)",
      border: "var(--gray200)",
    },
  },
  success: {
    default: {
      background: "var(--success500)",
      color: "var(--white)",
      border: "transparent",
    },
    light: {
      background: "var(--success50)",
      color: "var(--success600)",
      border: "transparent",
    },
    outline: {
      background: "transparent",
      color: "var(--success600)",
      border: "var(--success200)",
    },
  },
  info: {
    default: {
      background: "var(--info500)",
      color: "var(--white)",
      border: "transparent",
    },
    light: {
      background: "var(--info50)",
      color: "var(--info600)",
      border: "transparent",
    },
    outline: {
      background: "transparent",
      color: "var(--info600)",
      border: "var(--info200)",
    },
  },
  warning: {
    default: {
      background: "var(--warning500)",
      color: "var(--white)",
      border: "transparent",
    },
    light: {
      background: "var(--warning50)",
      color: "var(--warning600)",
      border: "transparent",
    },
    outline: {
      background: "transparent",
      color: "var(--warning600)",
      border: "var(--warning200)",
    },
  },
  red: {
    default: {
      background: "var(--red500)",
      color: "var(--white)",
      border: "transparent",
    },
    light: {
      background: "var(--red50)",
      color: "var(--red600)",
      border: "transparent",
    },
    outline: {
      background: "transparent",
      color: "var(--red600)",
      border: "var(--red200)",
    },
  },
};

export default Button;
