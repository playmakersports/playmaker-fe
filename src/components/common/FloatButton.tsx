import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "./Button";
import { FONTS } from "@/styles/common";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};
function FloatButton(props: Props) {
  const { children, onClick, disabled } = props;

  return (
    <Container>
      <InnerButton type="button" onClick={onClick} disabled={disabled}>
        <span>{children}</span>
      </InnerButton>
    </Container>
  );
}

const showNavAnimate = keyframes`
    0% {
        opacity: 0.3;
        width: 48px;
        transform: scale(0.2) translate3d(0, 40%, 0);
    }
    18% {
        opacity: 1;
        width: 48px;
        transform: scale(1.2) translate3d(0, 0, 0);
    }
    26% {
        opacity: 1;
        width: 48px;
        transform: scale(0.95);
    }
    36% {
        opacity: 1;
        width: 48px;
        transform: scale(1);
    }
    60% {
        opacity: 1;
        transform: scale(1.03);
    }
    74% {
        opacity: 1;
        transform: scale(0.98);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;
const showInnerMenu = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;

const Container = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  max-width: calc(600px - 2px);
  bottom: 0;
  padding: 0 16px calc(16px + var(--env-sab));
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  pointer-events: none;
  /* backdrop-filter: blur(2px); */
  /* background: linear-gradient(to top, rgba(256, 256, 256, 0.8) 0%, rgba(256, 256, 256, 0.05) 100%); */
`;
const InnerButton = styled.button`
  user-select: none;
  ${FONTS.MD1};
  font-weight: 500;
  width: 100%;
  height: 48px;
  padding: 6px 0;
  max-width: 600px;
  border-radius: 32px;
  background: var(--main);
  color: var(--gray0);
  backdrop-filter: blur(7px);
  pointer-events: auto;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  animation: ${showNavAnimate} 1.2s forwards;
  will-change: width transform;
  animation-delay: 0.1s;
  box-shadow: 0 2px 20px 2px rgba(0, 0, 0, 0.1);

  span {
    opacity: 0;
    animation: ${showInnerMenu} 0.5s forwards;
    animation-delay: 1.1s;
  }

  &:disabled {
    background-color: var(--gray300);
    color: var(--gray500);
    cursor: not-allowed;
  }
  &:active {
    filter: brightness(1.05);
    scale: 0.98;
  }
`;

export default FloatButton;
