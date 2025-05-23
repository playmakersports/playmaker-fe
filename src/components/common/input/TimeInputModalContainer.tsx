"use client";
import React from "react";
import { ModalProps } from "@/hook/useModal";
import { timeInputModalContainer } from "./container.css";

type Props =
  | {
      mode: "bottom-sheet";
      title?: string;
      bottomSheetTitle?: string;
      bottomSheetDescription?: string;
      children: React.ReactNode;
      onClickConfirm: () => void;
      BottomSheetContainer: React.ComponentType<ModalProps>;
    }
  | {
      mode: "modal";
      title?: string;
      children: React.ReactNode;
      position: { x: "left" | "right"; y: "top" | "bottom" };
      showTimeModal: boolean;
    };

function TimeInputModal(props: Props) {
  const { mode, title, children } = props;

  if (mode === "bottom-sheet") {
    const { BottomSheetContainer, onClickConfirm, bottomSheetTitle, bottomSheetDescription } = props;
    return (
      <BottomSheetContainer
        draggable="all"
        title={bottomSheetTitle ?? title}
        description={bottomSheetDescription}
        buttons={[
          {
            name: "확인",
            onClick: (close) => {
              onClickConfirm();
              close();
            },
            mode: "primary",
          },
        ]}
      >
        <div style={{ margin: "28px 0 12px" }}>{children}</div>
      </BottomSheetContainer>
    );
  } else {
    const { position, showTimeModal } = props;
    if (showTimeModal) {
      return (
        <div
          className={timeInputModalContainer}
          style={{
            left: position.x === "left" ? 0 : "auto",
            right: position.x === "right" ? 0 : "auto",
            top: position.y === "top" ? "100%" : "auto",
            bottom: position.y === "bottom" ? "100%" : "auto",
          }}
        >
          {children}
        </div>
      );
    }
  }
}

export default TimeInputModal;
