import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { FONTS } from "@/styles/common";
import { keyframes } from "@emotion/react";

type Props = {
  message: string;
  buttonText: { yes: string; no: string };
  handleConfirm: (props: boolean) => void;
};

function Confirm(props: Props) {
  const { message, buttonText, handleConfirm } = props;

  return (
    <Backdrop>
      <Container role="dialog" aria-modal="true">
        <Message>{message}</Message>
        <Buttons>
          <ModalButton onClick={() => handleConfirm(false)}>{buttonText.no}</ModalButton>
          <ModalButton onClick={() => handleConfirm(true)}>{buttonText.yes}</ModalButton>
        </Buttons>
      </Container>
    </Backdrop>
  );
}

const ShowContainer = keyframes`
  from{transform: scale(0.9); opacity: 0.5;};
  to{transform: scale(1); opacity: 1;};
`;
const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

const Container = styled.section`
  margin: 0 12px;
  width: 100%;
  max-width: 420px;
  min-width: 320px;
  height: max-content;
  background: var(--gray50);
  border-radius: 10px;
  overflow: hidden;
  animation: ${ShowContainer} 0.3s var(--animate-pop);
`;

const Message = styled.p`
  ${FONTS.MD1W500};
  line-height: 2.6rem;
  padding: 36px 12px;
  text-align: center;
  border-bottom: 1px solid var(--gray300);
  white-space: pre-wrap;
`;
const Buttons = styled.div`
  display: flex;
`;
const ModalButton = styled.button`
  padding: 20px 0;
  flex: 1;
  font-size: 1.4rem;
  &:last-of-type {
    background-color: var(--gray200);
  }
  &:focus {
    background-color: var(--gray300);
  }
`;

export default Confirm;
