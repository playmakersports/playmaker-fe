import styled from "@emotion/styled";
import React, { ReactNode, useEffect, useState } from "react";
import Button, { ButtonStyleMode } from "./Button";
import { FONTS } from "@/styles/common";

export type BottomSheetProps = {
  setShow: (prev: boolean) => void;
  children: ReactNode;
  header?: ReactNode;
  expanded?: boolean;
  buttons: {
    mode: ButtonStyleMode;
    onClick: () => void;
    name: string;
  }[];
};

const ANIMATION_RUNNING_TIME = 250;
function BottomSheet(props: BottomSheetProps) {
  const { setShow, children, header, expanded, buttons } = props;
  const [showModal, setShowModal] = useState(false);

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

  return (
    <>
      <Wrapper isShow={showModal} expanded={!!expanded}>
        {expanded && <Bar onClick={closeBottomSheet} />}
        <Contents>
          <Header>{header}</Header>
          {children}
        </Contents>
        <ButtonWrapper>
          {buttons.map((button) => (
            <Button
              key={button.name}
              type="button"
              mode={button.mode}
              onClick={() => {
                closeBottomSheet();
                button.onClick();
              }}
              fullWidth
            >
              {button.name}
            </Button>
          ))}
        </ButtonWrapper>
      </Wrapper>
      <Backdrop isShow={showModal} onClick={closeBottomSheet} />
    </>
  );
}

const Backdrop = styled.div<{ isShow: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transition: opacity 0.2s;
`;

const Bar = styled.div`
  margin: 0 auto 8px;
  width: 64px;
  height: 4px;
  background-color: #d9d9d9;
  border-radius: 8px;
`;

const Header = styled.header``;
const Contents = styled.div`
  margin: 12px 0 20px;
  padding: 0 4px;
  ${FONTS.MD1W500}
`;

const Wrapper = styled.div<{ isShow: boolean; expanded: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 16px 16px calc(28px + env(safe-area-inset-bottom) / 2);
  width: 100%;
  left: 0;
  bottom: 0;
  min-height: ${({ expanded }) => (expanded ? "90vh" : "auto")};
  z-index: 1000;
  background: var(--background-light);
  border-radius: 24px;
  transform: translate3d(0, ${({ isShow }) => (isShow ? 0 : "100%")}, 0);
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transform-origin: center center;
  transition: all ${ANIMATION_RUNNING_TIME}ms;
  box-shadow: 0px 0px 12px 12px rgba(0, 0, 0, 0.05);
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export default BottomSheet;
