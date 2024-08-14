import React from "react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { atomToast } from "@/atom/common";
import { keyframes } from "@emotion/react";
import { FONTS } from "@/styles/common";

function Toast() {
  const [toastAtom] = useAtom(atomToast);

  return (
    <FixedWrapper style={{ display: toastAtom.show ? "block" : "none" }}>
      <Container {...toastAtom}>{toastAtom.text}</Container>
    </FixedWrapper>
  );
}

const showToastAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-130%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const hideToastAnim = keyframes`
    0% {
      opacity: 1;
      transform:translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-130%);
    }
`;

const FixedWrapper = styled.div`
  position: fixed;
  z-index: 1999;
`;
const Container = styled.div<{ animate: boolean; show: boolean; type?: "DEFAULT" | "ALERT" }>`
  ${FONTS.MD2};
  display: ${({ show }) => (show ? "block" : "none")};
  width: calc(100vw - 32px);
  background-color: ${({ type }) => (type === "ALERT" ? "var(--point)" : "var(--gray3)")};
  color: ${({ type }) => (type === "ALERT" ? "#fff" : "var(--white)")};
  padding: 10px 16px;
  margin: calc(env(safe-area-inset-top) + 8px) 16px;
  margin: calc(constant(safe-area-inset-top) + 8px) 16px;
  border-radius: 8px;
  animation: 0.3s ${({ animate }) => (animate ? showToastAnim : hideToastAnim)};
  animation-fill-mode: forwards;
  white-space: pre-line;
`;

export default Toast;
