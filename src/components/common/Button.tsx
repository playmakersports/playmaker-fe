import React, { ReactNode } from "react";
import styled, { useTheme } from "styled-components";

type Props = {
  mode: "MAIN" | "OPTION1" | "OPTION2" | "SUB1" | "SNS_LOGIN";
  children: ReactNode;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  noFlex?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

function Button(props: Props) {
  const theme = useTheme();
  const { mode, children, fullWidth, type, noFlex, disabled = false, onClick } = props;
  const BUTTON_STYLE = {
    MAIN: {
      background: theme.main,
      color: theme.white,
    },
    OPTION1: {
      background: theme.gray1,
      color: theme.white,
    },
    OPTION2: {
      background: theme.gray2,
      color: theme.black,
    },
    SUB1: {
      background: theme.sub1,
      color: theme.black,
    },
    SNS_LOGIN: {
      background: "#fee500",
      color: theme.black,
    },
  };

  if (mode === "SNS_LOGIN") {
    return (
      <SnsWrapper
        type={type ?? "button"}
        mode={BUTTON_STYLE[mode]}
        onClick={onClick}
        noFlex={noFlex}
        fullWidth={fullWidth}
        disabled={disabled}
      >
        {children}
      </SnsWrapper>
    );
  }
  return (
    <Wrapper
      type={type ?? "button"}
      onClick={onClick}
      noFlex={noFlex}
      mode={BUTTON_STYLE[mode]}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {children}
    </Wrapper>
  );
}

type ButtonStyled = {
  mode: Record<string, string>;
  disabled: boolean;
  fullWidth?: boolean;
  noFlex?: boolean;
};
const Wrapper = styled.button<ButtonStyled>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  height: 56px;
  border: 0 solid transparent;
  border-radius: 16px;
  background-color: ${({ mode }) => mode.background};
  color: ${({ mode }) => mode.color};
  font-size: 1.6rem;
  font-weight: 600;
  white-space: nowrap;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.26;
    cursor: not-allowed;
  }
  &:active {
    background-color: ${({ theme }) => theme.mainDark};
  }
`;

const SnsWrapper = styled(Wrapper)`
  border-radius: 12px;
  &:active {
    background-color: #fee500;
  }
`;

export default Button;