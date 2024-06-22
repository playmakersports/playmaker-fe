import React, { useState } from "react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { atomToast } from "@/atom/common";
import { keyframes } from "@emotion/react";
import { FONTS } from "@/styles/common";

function Toast() {
  const [toastAtom, setToastAtom] = useAtom(atomToast);
  const [touch, setTouch] = useState(0);
  return (
    <FixedWrapper style={{ display: toastAtom.show ? "block" : "none" }}>
      <Container
        {...toastAtom}
        onTouchStart={(e) => setTouch(e.changedTouches[0].pageY)}
        onTouchEnd={(e) => {
          if (touch - e.changedTouches[0].pageY > 10) {
            setToastAtom((prev) => ({ ...prev, animate: false }));
          }
        }}
      >
        {toastAtom.text}
      </Container>
    </FixedWrapper>
  );
}

const showToastAnim = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(-130%);
    padding: 8px 16px;
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
    padding: 16px 24px;
  }
`;
const hideToastAnim = keyframes`
    0% {
      opacity: 1;
      transform: scale(1) translateY(0);
      padding: 16px 24px;
    }
    100% {
      opacity: 0;
      transform: scale(0.8) translateY(-130%);
      padding: 8px 16px;
    }
`;

const FixedWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: max-content;
  z-index: 1999;
`;
const Container = styled.div<{ animate: boolean; show: boolean; type?: "DEFAULT" | "ALERT" }>`
  display: ${({ show }) => (show ? "block" : "none")};
  min-width: 40vw;
  max-width: 90vw;
  width: fit-content;
  background-color: ${({ type, theme }) => (type === "ALERT" ? theme.warn : theme.white)};
  color: ${({ type, theme }) => (type === "ALERT" ? "#fff" : theme.text)};
  /* padding: 16px 24px; */
  margin: calc(env(safe-area-inset-top) + 8px) auto;
  margin: calc(constant(safe-area-inset-top) + 8px) auto;
  border-radius: 40px;
  box-shadow: 0 0 16px 12px rgba(0, 0, 0, 0.05);
  animation: 0.3s ${({ animate }) => (animate ? showToastAnim : hideToastAnim)};
  animation-fill-mode: forwards;
  white-space: pre-line;
  ${FONTS.MD2};
  font-weight: 600;
`;

export default Toast;
