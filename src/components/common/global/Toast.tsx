import React from "react";
import styled, { keyframes } from "styled-components";
import { useAtom } from "jotai";
import { atomToast } from "@/atom/common";

import CheckIcon from "@/assets/icon/global/CheckIcon.svg";

type ToastType = "DEFAULT" | "ALERT" | "CONFIRM";
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
        {toastAtom.text}
        {toastAtom.type === "CONFIRM" && (
          <span className="icon">
            <CheckIcon />
          </span>
        )}
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
      transform: translateY(120%);
    }
`;

const FixedWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center;
  z-index: 1999;
`;
const Container = styled.div<{ $animate: boolean; $show: boolean; type?: ToastType }>`
  user-select: none;
  font-size: 1.6rem;
  font-weight: ${({ type }) => (type === "CONFIRM" ? 500 : 600)};
  display: ${({ $show }) => ($show ? "inline-flex" : "none")};
  align-items: center;
  gap: 24px;
  width: max-content;
  background-color: ${({ type }) => (type === "CONFIRM" ? "var(--gray0)" : "rgba(var(--gray900-rgb), 0.8)")};
  color: ${({ type }) => (type === "CONFIRM" ? "var(--gray900)" : "var(--gray0)")};
  box-shadow: ${({ type }) => (type === "CONFIRM" ? "0 2px 4px rgba(141, 141, 141, 0.15)" : "none")};
  border: 1px solid ${({ type }) => (type === "CONFIRM" ? "#ededed" : "transparent")};

  padding: ${({ type }) => (type === "CONFIRM" ? "20px 22px" : "16px 20px")};
  margin: 0 0 calc(env(safe-area-inset-bottom) + 52px);
  margin: 0 0 calc(constant(safe-area-inset-bottom) + 52px);
  border-radius: ${({ type }) => (type === "CONFIRM" ? "15px" : "10px")};
  animation: 0.25s ${({ $animate }) => ($animate ? showToastAnim : hideToastAnim)} forwards;
  white-space: pre-line;
  /* backdrop-filter: blur(12px); */

  span.icon {
    appearance: none;
    display: inline-flex;
    padding: 5px;
    background-color: var(--sub1);
    /* border: 1.5px solid #fff; */
    border-radius: 50%;
    svg {
      width: 12px;
      height: 12px;
      fill: #fff;
    }
  }
`;

export default Toast;
