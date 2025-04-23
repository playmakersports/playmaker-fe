"use client";

import { useState, createContext, useContext } from "react";
import Popup from "./Popup";

export type PopupType = "confirm" | "alert" | "info";
export type PopupColorType = "gray" | "primary" | "red";
type PopupContextType = Pick<ReturnType<typeof usePopupLogic>, PopupType>;

const PopupContext = createContext<PopupContextType | null>(null);

function PopupProvider({ children }: { children: React.ReactNode }) {
  const confirmLogic = usePopupLogic();
  const { isVisible, type, title, message, buttonText, showIcon, color, handlePopup } = confirmLogic;

  return (
    <PopupContext.Provider value={confirmLogic}>
      {children}
      {isVisible && (
        <Popup
          title={title}
          message={message}
          icon={showIcon}
          type={type}
          buttonText={buttonText}
          color={color}
          handlePopup={handlePopup}
        />
      )}
    </PopupContext.Provider>
  );
}

const usePopupLogic = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<PopupType>("alert");
  const [color, setColor] = useState<PopupColorType>("primary");
  const [buttonText, setButtonText] = useState({ yes: "확인", no: "취소", sub: "" });

  const [resolveReject, setResolveReject] = useState<(value: boolean) => void>(() => {});

  const alert = (
    message: string,
    options?: {
      color?: "gray" | "primary" | "red";
      title?: string;
      showIcon?: boolean;
      buttonText?: string;
    }
  ) => {
    setType("alert");
    setColor(options?.color ?? "primary");
    setShowIcon(options?.showIcon ?? false);
    setTitle(options?.title ?? "");
    setMessage(message);
    setIsVisible(true);
    setButtonText({
      yes: "",
      no: options?.buttonText ?? "확인",
      sub: "",
    });
    return new Promise<boolean>((resolve) => {
      setResolveReject(() => resolve);
    });
  };

  const confirm = (
    message: string,
    options?: {
      color?: "gray" | "primary" | "red";
      title?: string;
      showIcon?: boolean;
      buttonText?: {
        yes: string;
        no?: string;
        sub?: string;
      };
    }
  ) => {
    setType("confirm");
    setColor(options?.color ?? "primary");
    setTitle(options?.title ?? "");
    setShowIcon(options?.showIcon ?? false);
    setMessage(message);
    setIsVisible(true);
    options?.buttonText &&
      setButtonText({
        yes: options?.buttonText.yes ?? "확인",
        no: options?.buttonText.no ?? "취소",
        sub: options?.buttonText.sub ?? "",
      });
    return new Promise<boolean>((resolve) => {
      setResolveReject(() => resolve);
    });
  };

  const info = (
    message: string,
    options: {
      color?: "gray" | "primary" | "red";
      title: string;
      showIcon?: boolean;
      showCloseButton?: boolean;
    }
  ) => {
    setType("info");
    setColor(options?.color ?? "primary");
    setTitle(options?.title ?? "");
    setShowIcon(options?.showIcon ?? false);
    setMessage(message);
    setIsVisible(true);
    options?.showCloseButton
      ? setButtonText({
          yes: "",
          no: "닫기",
          sub: "",
        })
      : setButtonText({
          yes: "",
          no: "",
          sub: "",
        });
    return new Promise<boolean>((resolve) => {
      setResolveReject(() => resolve);
    });
  };

  const handlePopup = (result: boolean) => {
    setIsVisible(false);
    resolveReject(result);
  };

  return { isVisible, message, buttonText, handlePopup, title, type, showIcon, confirm, alert, info, color };
};

export const usePopup = () => useContext(PopupContext);

export default PopupProvider;
