import React from "react";
import styled, { keyframes } from "styled-components";
import { useAtom } from "jotai";
import { atomToast } from "@/atom/common";
import { FONTS } from "@/styles/common";

function Toast() {
  const [toastAtom] = useAtom(atomToast);

  return (
    <FixedWrapper style={{ display: toastAtom.show ? "block" : "none" }}>
      <Container role="banner" {...toastAtom}>
        {toastAtom.text}
      </Container>
    </FixedWrapper>
  );
}

const showToastAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
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
      transform: translateY(-150%);
    }
`;

const FixedWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  justify-content: center;
  z-index: 1999;
`;
const Container = styled.div<{ animate: boolean; show: boolean; type?: "DEFAULT" | "ALERT" }>`
  ${FONTS.MD1W500};
  font-weight: 400;
  display: ${({ show }) => (show ? "block" : "none")};
  width: calc(var(--mobile-max-width) - 16px);
  background-color: ${({ type }) => (type === "ALERT" ? "var(--point-red)" : "var(--gray800)")};
  color: ${({ type }) => (type === "ALERT" ? "#fff" : "var(--gray50)")};
  padding: 16px 12px;
  margin: calc(env(safe-area-inset-top) + 10px) 8px 0;
  margin: calc(constant(safe-area-inset-top) + 10px) 8px 0;
  border-radius: 10px;
  animation: 0.25s ${({ animate }) => (animate ? showToastAnim : hideToastAnim)} forwards;
  white-space: pre-line;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.15);
`;

export default Toast;
