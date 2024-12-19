import React from "react";
import styled, { keyframes } from "styled-components";
import { FONTS } from "@/styles/common";

type Props = {
  isAlert?: boolean;
  message: string;
  buttonText: { yes: string; no: string };
  handleConfirm: (props: boolean) => void;
};

function Confirm(props: Props) {
  const { isAlert = false, message, buttonText, handleConfirm } = props;

  return (
    <Backdrop>
      <Container role="dialog" aria-modal="true">
        <Message>{message}</Message>
        <Buttons>
          <ModalButton onClick={() => handleConfirm(false)}>{isAlert ? "닫기" : buttonText.no}</ModalButton>
          {!isAlert && <ConfirmButton onClick={() => handleConfirm(true)}>{buttonText.yes}</ConfirmButton>}
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
  border-radius: 12px;
  overflow: hidden;
  animation: ${ShowContainer} 0.3s var(--animate-pop);
`;

const Message = styled.p`
  ${FONTS.MD1W500};
  font-size: 1.8rem;
  line-height: 3rem;
  padding: 40px 12px 32px;
  text-align: center;
  white-space: pre-wrap;
`;
const Buttons = styled.div`
  display: flex;
  gap: 16px;
  padding: 0 16px 16px;
`;
const ModalButton = styled.button`
  flex: 1;
  ${FONTS.MD1W500};
  padding: 14px 0;
  border: 1px solid var(--gray100);
  background-color: var(--gray200);
  border-radius: 10px;
  color: var(--gray800);

  &:active {
    background-color: var(--gray300);
  }
`;
const ConfirmButton = styled(ModalButton)`
  border: 1px solid transparent;
  background-color: var(--main);
  color: var(--gray0);

  &:active {
    background-color: var(--primary-m200);
  }
`;

export default Confirm;
