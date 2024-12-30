import styled from "styled-components";
import React, { ReactNode, useEffect, useState } from "react";
import Button, { ButtonStyleMode } from "./Button";
import { FONTS } from "@/styles/common";

export type BottomSheetProps = {
  disabledDimOut?: boolean;
  setShow: (prev: boolean) => void;
  children: ReactNode | ((closeModal: () => void) => ReactNode);
  header?: ReactNode;
  expanded?: boolean;
  draggable?: "bar" | "all" | false;
  buttons?: {
    mode: ButtonStyleMode;
    disabled?: boolean;
    onClick: (close: () => void) => void;
    name: string;
    flex?: number;
  }[];
};

const ANIMATION_RUNNING_TIME = 250;
function BottomSheet(props: BottomSheetProps) {
  const { disabledDimOut = false, setShow, draggable = false, children, header, expanded, buttons } = props;
  const [showModal, setShowModal] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const closeBottomSheet = () => {
    setShowModal(false);
    setTimeout(() => {
      setShow(false);
    }, ANIMATION_RUNNING_TIME);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setShowModal(true);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!draggable) return;
    setTouchStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!draggable) return;
    if (!isDragging) return;
    const deltaY = e.touches[0].clientY - touchStartY;
    if (deltaY > 0) {
      setTranslateY(deltaY);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!draggable) return;
    setIsDragging(false);
    const touchEndY = e.changedTouches[0].clientY;
    if (touchEndY > window.innerHeight * 0.8 && touchEndY - touchStartY > 100) {
      closeBottomSheet();
      setTranslateY(-window.innerHeight / 2);
    } else {
      setTranslateY(0);
    }
  };

  const draggableEvent = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };

  return (
    <>
      <Wrapper
        // 마우스 오른쪽 방지
        onContextMenu={(e) => e.preventDefault()}
        style={{
          userSelect: isDragging && translateY ? "none" : "auto",
          scale: isDragging && translateY > 0 ? 0.95 : 1,
          borderRadius: isDragging && translateY ? "24px" : "24px 24px 0 0",
          transition: !isDragging ? `all ${ANIMATION_RUNNING_TIME}ms` : "scale 0.25s",
          transform:
            draggable && translateY > 0
              ? `translate3d(0, calc(${showModal ? 0 : "100%"}% + ${translateY}px), 0)`
              : `translate3d(0, ${showModal ? 0 : "100%"}, 0)`,
        }}
        $isShow={showModal}
        $expanded={!!expanded}
        role="dialog"
        aria-modal="true"
        aria-labelledby="BottomModalHeader"
        {...(draggable === "all" ? draggableEvent : {})}
      >
        {(expanded || !!draggable) && (
          <Bar {...(draggable === "bar" ? draggableEvent : {})} onClick={closeBottomSheet} />
        )}
        <Contents>
          {header && <Header id="BottomModalHeader">{header}</Header>}
          {typeof children === "function" ? children(closeBottomSheet) : children}
        </Contents>
        {buttons && (
          <ButtonWrapper>
            {buttons.map((button) => (
              <Button
                key={button.name}
                type="button"
                mode={button.mode}
                disabled={button.disabled}
                onClick={() => {
                  button.onClick(closeBottomSheet);
                }}
                flex={button.flex ?? 1}
              >
                {button.name}
              </Button>
            ))}
          </ButtonWrapper>
        )}
      </Wrapper>
      <Backdrop $isShow={showModal} onClick={disabledDimOut ? () => {} : closeBottomSheet} />
    </>
  );
}

const Backdrop = styled.div<{ $isShow: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
  opacity: ${({ $isShow }) => ($isShow ? 1 : 0)};
  transition: opacity 0.2s;
`;

const Bar = styled.div`
  display: flex;
  justify-content: center;
  margin: -16px 0 0;
  padding: 16px 0 12px;

  &::before {
    content: "";
    display: block;
    width: 64px;
    height: 4px;
    background-color: var(--gray300);
    border-radius: 8px;
  }
`;

const Header = styled.header``;
const Contents = styled.div`
  margin: 12px 0 20px;
  padding: 0 4px;
  ${FONTS.MD2};
  font-weight: 400;
`;

const Wrapper = styled.section<{
  $isShow: boolean;
  $expanded: boolean;
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 16px 16px calc(28px + env(safe-area-inset-bottom) / 2);
  width: 100%;
  left: 0;
  bottom: 0;
  min-height: ${({ $expanded }) => ($expanded ? "90vh" : "auto")};
  z-index: 1000;
  background: var(--background-light);
  border-radius: 24px 24px 0 0;
  opacity: ${({ $isShow }) => ($isShow ? 1 : 0)};
  transform-origin: center center;
  box-shadow: 0px 0px 12px 12px rgba(0, 0, 0, 0.05);
  will-change: transform;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export default BottomSheet;
