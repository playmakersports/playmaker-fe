"use client";
import { toast } from "sonner";
import styled from "styled-components";
import { FONTS } from "@/styles/common";

import InfoCircleIcon from "@/assets/icon/circle/InfoCircle.svg";
import CheckCircleIcon from "@/assets/icon/circle/CheckCircle.svg";
import QuestionCircleIcon from "@/assets/icon/circle/QuestionCircle.svg";
import WarningCircleIcon from "@/assets/icon/circle/WarningCircle.svg";
import AlertCircleIcon from "@/assets/icon/circle/AlertCircle.svg";
import CloseIcon from "@/assets/icon/common/Close.svg";

type ToastProps = {
  type?: "default" | "primary" | "success" | "info" | "warning" | "error";
  outline?: boolean;
  closeButton?: boolean;
  action?: { name: string; onClick: () => void };
};

export const useToast = () => {
  const trigger = (message: string, props: ToastProps = {}) => {
    const { type = "default", outline = false, closeButton = false, action } = props;
    toast.custom((id) => (
      <ToastContainer
        id={id}
        type={type}
        message={message}
        outline={outline}
        closeButton={closeButton}
        action={action}
      />
    ));
  };

  return { trigger };
};

const ToastContainer = (props: ToastProps & { id: string | number; message: string }) => {
  const { id, message, type = "default", outline = false, closeButton = false, action } = props;
  const onClickCloseToast = () => {
    toast.dismiss(id);
  };

  return (
    <div style={{ minWidth: "var(--width)", display: "flex", justifyContent: "center" }}>
      <Container type={type} $filled={!outline}>
        <span className="toast-icon">{TOAST_STYLED[type].icon}</span>
        <span className="toast-message">{message}</span>
        {action && (
          <button type="button" className="toast-action" onClick={action.onClick}>
            {action.name}
          </button>
        )}
        {closeButton && (
          <button type="button" className="toast-icon" onClick={onClickCloseToast}>
            <CloseIcon />
          </button>
        )}
      </Container>
    </div>
  );
};

const Container = styled.div<{ type: ToastProps["type"]; $filled?: boolean }>`
  display: flex;
  width: 100%;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 10px;
  background-color: ${({ type, $filled }) =>
    TOAST_STYLED[type ?? "default"].backgroundColor[$filled ? "filled" : "outlined"]};
  border: 1px solid ${({ type, $filled }) => TOAST_STYLED[type ?? "default"].border[$filled ? "filled" : "outlined"]};
  color: ${({ type, $filled }) => TOAST_STYLED[type ?? "default"].color[$filled ? "filled" : "outlined"]};
  box-shadow: var(--shadow-lg);

  .toast-icon {
    user-select: none;
    width: 20px;
    height: 20px;
    & > svg {
      width: 100%;
      height: 100%;
      fill: ${({ type, $filled }) => TOAST_STYLED[type ?? "default"].color[$filled ? "filled" : "outlined"]};
    }
  }
  span.toast-message {
    user-select: none;
    padding-right: 6px;
    flex: 1;
    word-break: keep-all;
    overflow-wrap: break-word;
    ${FONTS.body4("regular")}
  }
  button.toast-action {
    ${FONTS.body4("medium")}
  }
`;

const TOAST_STYLED = {
  default: {
    icon: <InfoCircleIcon />,
    backgroundColor: { filled: "var(--gray700)", outlined: "var(--gray50)" },
    color: { filled: "var(--white)", outlined: "var(--gray700)" },
    border: { filled: "transparent", outlined: "var(--gray200)" },
  },
  primary: {
    icon: <InfoCircleIcon />,
    backgroundColor: { filled: "var(--primary500)", outlined: "var(--primary50)" },
    color: { filled: "var(--white)", outlined: "var(--primary600)" },
    border: { filled: "transparent", outlined: "var(--primary200)" },
  },
  success: {
    icon: <CheckCircleIcon />,
    backgroundColor: { filled: "var(--success500)", outlined: "var(--success50)" },
    color: { filled: "var(--white)", outlined: "var(--success600)" },
    border: { filled: "transparent", outlined: "var(--success200)" },
  },
  info: {
    icon: <QuestionCircleIcon />,
    backgroundColor: { filled: "var(--info500)", outlined: "var(--info50)" },
    color: { filled: "var(--white)", outlined: "var(--info500)" },
    border: { filled: "transparent", outlined: "var(--info200)" },
  },
  warning: {
    icon: <WarningCircleIcon />,
    backgroundColor: { filled: "var(--warning500)", outlined: "var(--warning50)" },
    color: { filled: "var(--white)", outlined: "var(--warning600)" },
    border: { filled: "transparent", outlined: "var(--warning200)" },
  },
  error: {
    icon: <AlertCircleIcon />,
    backgroundColor: { filled: "var(--red500)", outlined: "var(--red50)" },
    color: { filled: "var(--white)", outlined: "var(--red500)" },
    border: { filled: "transparent", outlined: "var(--red200)" },
  },
};
