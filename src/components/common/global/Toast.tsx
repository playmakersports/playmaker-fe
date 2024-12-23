import React from "react";
import styled, { keyframes } from "styled-components";
import { useAtom } from "jotai";
import { atomToast } from "@/atom/common";

import CheckIcon from "@/assets/icon/global/CheckIcon.svg";

function Toast() {
  const [toastAtom] = useAtom(atomToast);
  const containerProp = {
    $animate: toastAtom.animate,
    $show: toastAtom.show,
    text: toastAtom.text,
    type: toastAtom.type,
  };

  return (
    <FixedWrapper style={{ display: toastAtom.show ? "flex" : "none" }}>
      <Container role="banner" {...containerProp}>
        {toastAtom.type !== "ALERT" && (
          <i>
            <CheckIcon />
          </i>
        )}
        {toastAtom.text}
      </Container>
    </FixedWrapper>
  );
}

const showToastAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
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
      transform: translateY(150%);
    }
`;

const FixedWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center;
  z-index: 1999;
`;
const Container = styled.div<{ $animate: boolean; $show: boolean; type?: "DEFAULT" | "ALERT" }>`
  user-select: none;
  font-size: 1.6rem;
  font-weight: 600;
  display: ${({ $show }) => ($show ? "inline-flex" : "none")};
  align-items: center;
  gap: 8px;
  width: max-content;
  background-color: rgba(var(--gray900-rgb), 0.75);
  color: ${({ type }) => (type === "ALERT" ? "#fff" : "var(--gray50)")};
  padding: 16px 20px;
  margin: 0 0 calc(env(safe-area-inset-bottom) + 22px);
  margin: 0 0 calc(constant(safe-area-inset-bottom) + 22px);
  border-radius: 10px;
  animation: 0.25s ${({ $animate }) => ($animate ? showToastAnim : hideToastAnim)} forwards;
  white-space: pre-line;
  backdrop-filter: blur(12px);

  i {
    appearance: none;
    display: inline-flex;
    padding: 5px;
    border: 1.5px solid #fff;
    border-radius: 50%;
    svg {
      width: 12px;
      height: 12px;
      fill: #fff;
    }
  }
`;

export default Toast;
