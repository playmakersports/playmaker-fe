import React from "react";
import styled, { keyframes } from "styled-components";
import { FONTS } from "@/styles/common";
import Button from "../Button";

type Props = {
  isAlert?: boolean;
  message: string;
  buttonText: { yes: string; no: string };
  alertButton: { text: string; mode: "MAIN" | "SUB" };
  handleConfirm: (props: boolean) => void;
};

function Confirm(props: Props) {
  const { isAlert = false, message, buttonText, alertButton, handleConfirm } = props;

  return (
    <Backdrop>
      <Container role="dialog" aria-modal="true">
        <Message>{message}</Message>
        <Buttons>
          {isAlert ? (
            alertButton.mode === "MAIN" ? (
              <Button type="button" size="large" mode="primary" fullWidth onClick={() => handleConfirm(false)}>
                {alertButton.text}
              </Button>
            ) : (
              <Button
                type="button"
                mode="gray"
                fillType="light"
                size="large"
                fullWidth
                onClick={() => handleConfirm(false)}
              >
                {alertButton.text}
              </Button>
            )
          ) : (
            <>
              <Button
                type="button"
                mode="gray"
                size="large"
                fillType="light"
                flex={1}
                onClick={() => handleConfirm(false)}
              >
                {buttonText.no}
              </Button>
              <Button type="button" size="large" flex={2} mode="primary" onClick={() => handleConfirm(true)}>
                {buttonText.yes}
              </Button>
            </>
          )}
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
  background: var(--white);
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
  gap: 8px;
  padding: 0 16px 16px;
`;

export default Confirm;
