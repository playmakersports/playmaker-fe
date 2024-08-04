import React from "react";
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
      <Container>
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
`;

const Container = styled.section`
  width: calc(100% - 32px);
  height: max-content;
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  animation: ${ShowContainer} 0.3s var(--animate-pop);
`;

const Message = styled.p`
  ${FONTS.MD1};
  padding: 32px 16px;
  text-align: center;
  border-bottom: 1px solid var(--gray6);
`;
const Buttons = styled.div`
  display: flex;
`;
const ModalButton = styled.button`
  padding: 16px 0;
  flex: 1;
  font-size: 1.4rem;
  &:last-of-type {
    background-color: var(--gray6);
  }
`;

export default Confirm;
