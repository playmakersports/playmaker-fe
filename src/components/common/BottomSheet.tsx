import styled, { keyframes } from "styled-components";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Button, { ButtonFillType, ButtonStyleMode } from "./Button";
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
    fillType?: ButtonFillType;
    disabled?: boolean;
    onClick: (close: () => void) => void;
    name: string;
    flex?: number;
  }[];
};

const ANIMATION_RUNNING_TIME = 250;
function BottomSheet(props: BottomSheetProps) {
  const { disabledDimOut = false, setShow, draggable = false, children, header, expanded, buttons } = props;
  const modalRef = useRef<HTMLDivElement>(null);
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
    document.body.style.touchAction = "none";
    setShowModal(true);
    return () => {
      document.body.style.touchAction = "auto";
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

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  return (
    <>
      <Wrapper
        // 마우스 오른쪽 방지
        onContextMenu={(e) => e.preventDefault()}
        style={{
          userSelect: isDragging && translateY ? "none" : "auto",
          transition: !isDragging ? `all ${ANIMATION_RUNNING_TIME}ms` : "none",
          transform:
            draggable && translateY > 0
              ? `translate3d(-50%, calc(${showModal ? 0 : "100%"}% + ${Math.ceil(translateY)}px), 0)`
              : `translate3d(-50%, ${showModal ? 0 : "100%"}, 0)`,
        }}
        $isShow={showModal}
        $expanded={!!expanded}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        aria-labelledby="BottomModalHeader"
        {...(draggable === "all" ? draggableEvent : {})}
      >
        {(expanded || !!draggable) && <Bar {...(draggable === "bar" ? draggableEvent : {})} />}
        <Contents>
          {header && <Header id="BottomModalHeader">{header}</Header>}
          <div>{typeof children === "function" ? children(closeBottomSheet) : children}</div>
        </Contents>
        {buttons && (
          <ButtonWrapper>
            {buttons.map((button) => (
              <Button
                key={button.name}
                type="button"
                size="large"
                mode={button.mode}
                fillType={button.fillType}
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

const fadeIn = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
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
  padding: 12px 0 20px;

  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 6px;
    background-color: var(--gray200);
    border-radius: 999px;
  }
`;

const Header = styled.header`
  color: var(--gray700);
  ${FONTS.body3("semibold")};
  opacity: 0.5;
  transform: translateY(20px);
  animation: ${fadeIn} 0.2s ease-in-out forwards;
  animation-delay: 0.165s;
`;
const Contents = styled.div`
  margin: 0 0 20px;
  color: var(--gray400);
  ${FONTS.caption1("regular")};

  & > div {
    opacity: 0.5;
    transform: translateY(max(5%, 16px));
    animation: ${fadeIn} 0.2s ease-in-out forwards;
    animation-delay: 0.15s;
  }
`;

const Wrapper = styled.section<{
  $isShow: boolean;
  $expanded: boolean;
}>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 20px calc(28px + env(safe-area-inset-bottom) / 2);
  width: var(--mobile-max-width);
  left: 50%;
  bottom: 0;
  min-height: ${({ $expanded }) => ($expanded ? "90vh" : "auto")};
  max-height: 90vh;
  z-index: 1000;
  background: var(--background-light);
  border-radius: 16px 16px 0 0;
  opacity: ${({ $isShow }) => ($isShow ? 1 : 0)};
  transform-origin: center left;
  box-shadow: var(--shadow-md);
  will-change: transform;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export default BottomSheet;
