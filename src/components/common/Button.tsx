import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { FONTS } from "@/styles/common";

export type ButtonStyleMode = "MAIN" | "OPTION1" | "OPTION2" | "SUB1" | "WARN";
type Props = {
  borderType?: boolean;
  mode: ButtonStyleMode;
  children: ReactNode;
  fullWidth?: boolean;
  autoHeight?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  flex?: number;
  disabled?: boolean;
  onClick: () => void;
  split?: {
    text: string;
    onClick: () => void;
  };
};

function Button(props: Props) {
  const {
    borderType,
    split,
    mode,
    children,
    fullWidth,
    autoHeight = false,
    type,
    flex,
    disabled = false,
    onClick,
  } = props;
  const BUTTON_STYLE = {
    MAIN: {
      background: "var(--main)",
      color: "#fff",
    },
    OPTION1: {
      background: "var(--gray2)",
      color: "var(--white)",
    },
    OPTION2: {
      background: "var(--gray5)",
      color: "#fff",
      borderTypeColor: "var(--gray3)",
    },
    SUB1: {
      background: "var(--sub1)",
      color: "#000",
    },
    WARN: {
      background: "var(--point)",
      color: "#fff",
    },
  };

  if (!split) {
    return (
      <Wrapper
        type={type ?? "button"}
        onClick={onClick}
        flex={flex}
        borderType={borderType}
        mode={BUTTON_STYLE[mode]}
        fullWidth={fullWidth}
        disabled={disabled}
        autoHeight={autoHeight}
      >
        {children}
      </Wrapper>
    );
  }
  if (split) {
    return (
      <SplitWrapper as="div" mode={BUTTON_STYLE[mode]} flex={flex} fullWidth={fullWidth} autoHeight={autoHeight}>
        <SplitButton disabled={disabled} type={type ?? "button"} onClick={onClick}>
          {children}
        </SplitButton>
        <SplitButton type={type ?? "button"} onClick={split.onClick}>
          {split.text}
        </SplitButton>
      </SplitWrapper>
    );
  }
}

type ButtonStyled = {
  mode: Record<string, string>;
  fullWidth?: boolean;
  flex?: number;
  autoHeight?: boolean;
  borderType?: boolean;
};
const Wrapper = styled.button<ButtonStyled>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 0;
  ${({ flex }) => (flex ? `flex: ${flex}` : "")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  height: ${({ autoHeight }) => (autoHeight ? "auto" : "48px")};
  border: ${({ borderType, mode }) => (borderType ? `1px solid ${mode.background}` : "0 solid transparent")};
  border-radius: ${({ autoHeight }) => (autoHeight ? "6px" : "48px")};
  background-color: ${({ borderType, mode }) => (borderType ? "transparent" : mode.background)};
  color: ${({ borderType, mode }) => (borderType ? mode.borderTypeColor ?? mode.background : mode.color)};
  white-space: nowrap;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  transition: all 0.2s;
  will-change: outline;
  ${FONTS.MD1};
  &:focus {
    box-shadow: 0 0 0 2px ${({ borderType, mode }) => (borderType ? "transparent" : mode.background)};
  }
  &:disabled {
    background-color: var(--gray7);
    color: var(--gray5);
    cursor: not-allowed;
  }
  &:active {
    filter: brightness(1.05);
    transform: scale(0.98);
  }
`;

const SplitWrapper = styled(Wrapper)`
  padding: 0;
  background: none;
  gap: 2px;
  overflow: hidden;
  button {
    background-color: ${({ mode }) => mode.background};
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 1;
    cursor: default;
  }
  &:active {
    filter: none;
    transform: none;
  }
`;
const SplitButton = styled.button`
  padding: 6px 0;
  height: 100%;
  ${FONTS.MD1};
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:active {
    filter: brightness(1.05);
    transform: none;
  }

  &:first-of-type {
    flex: 2;
  }
  &:last-of-type {
    flex: 1;
  }
`;

export default Button;
