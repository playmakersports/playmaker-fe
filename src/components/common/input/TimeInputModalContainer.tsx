import React from "react";
import styled from "styled-components";
import { ModalProps } from "@/hook/useModal";

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
      <ModalContainer
        style={{
          left: position.x === "left" ? 0 : "auto",
          right: position.x === "right" ? 0 : "auto",
          top: position.y === "top" ? "100%" : "auto",
          bottom: position.y === "bottom" ? "100%" : "auto",
        }}
      >
        {children}
      </ModalContainer>
    );
  }
}

const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  margin: 8px -4px;
  width: 320px;
  min-width: 320px;
  padding: 16px;
  background-color: var(--background-light);
  border-radius: 10px;
  box-shadow: var(--shadow-lg);
  z-index: 50;
  color: var(--gray700);
`;

export default TimeInputModal;
