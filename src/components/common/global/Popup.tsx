import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { FONTS } from "@/styles/common";
import Button from "../Button";
import { PopupType } from "./PopupProvider";
import AlertIcon from "@/assets/icon/circle/AlertOutlined.svg";
import Close24Icon from "@/assets/icon/common/Close24.svg";

type Props = {
  icon?: boolean;
  type: PopupType;
  title?: string;
  message: string;
  buttonText: { yes: string; no?: string; sub?: string };
  handlePopup: (props: boolean) => void;
};

function Popup(props: Props) {
  const { icon = false, type, title, message, buttonText, handlePopup } = props;
  const modalRef = useRef<HTMLDivElement>(null);
  const handlePopupReturn = (action: boolean) => {
    handlePopup(action);
  };

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  return (
    <Backdrop>
      <Container role="dialog" aria-modal="true" aria-labelledby="popup-title" ref={modalRef} tabIndex={-1}>
        <Contents>
          {icon && (
            <div className="modal-icon">
              <AlertIcon />
            </div>
          )}
          <div className="modal-contents">
            {title && (
              <h3 className="modal-title" id="popup-title">
                {title}
              </h3>
            )}
            {message && <p className="modal-message">{message}</p>}
          </div>

          {type === "info" && (
            <ModalClose>
              <button type="button" onClick={() => handlePopupReturn(false)}>
                <Close24Icon fill="var(--gray400)" width={24} height={24} />
              </button>
            </ModalClose>
          )}
        </Contents>
        {type !== "info" && (
          <Buttons>
            <Button type="button" mode="gray" fillType="outline" fullWidth onClick={() => handlePopupReturn(false)}>
              {buttonText.no}
            </Button>
            {type === "confirm" && (
              <Button type="button" mode="primary" fullWidth onClick={() => handlePopupReturn(true)}>
                {buttonText.yes}
              </Button>
            )}
          </Buttons>
        )}
        {type === "info" && buttonText.no && (
          <Buttons>
            <Button type="button" mode="gray" fillType="outline" fullWidth onClick={() => handlePopupReturn(false)}>
              {buttonText.no}
            </Button>
          </Buttons>
        )}
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
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 12px;
  width: 100%;
  padding: 24px;
  max-width: 420px;
  min-width: 320px;
  height: max-content;
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  animation: ${ShowContainer} 0.3s var(--animate-pop);
`;

const Contents = styled.div`
  position: relative;
  color: var(--gray700);

  div.modal-icon {
    display: inline-flex;
    margin-bottom: 16px;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background-color: var(--primary50);
    border-radius: 8px;
    svg {
      width: 24px;
      height: 24px;
      fill: var(--primary600);
    }
  }
  div.modal-contents {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  h3.modal-title {
    ${FONTS.body2("semibold")};
  }
  p.modal-message {
    white-space: pre-wrap;
    ${FONTS.body4("regular")};
  }
`;

const ModalClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;

export default Popup;
