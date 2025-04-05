import React from "react";
import { ModalProps } from "@/hook/useModal";
import { timeInputModalContainer } from "./container.css";

type Props =
  | {
      mode: "bottom-sheet";
      title?: string;
      children: React.ReactNode;
      onClickConfirm: () => void;
      BottomSheetContainer: React.ComponentType<ModalProps>;
    }
  | {
      mode: "modal";
      title?: string;
      children: React.ReactNode;
      position: { x: "left" | "right"; y: "top" | "bottom" };
    };

function TimeInputModal(props: Props) {
  const { mode, title, children } = props;

  if (mode === "bottom-sheet") {
    const { BottomSheetContainer, onClickConfirm } = props;
    return (
      <BottomSheetContainer
        draggable="all"
        title={title}
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
    const { position } = props;
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

export default TimeInputModal;
