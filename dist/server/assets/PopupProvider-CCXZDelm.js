import "react/jsx-runtime";
import { useContext, createContext } from "react";
import styled, { keyframes } from "styled-components";
import { F as FONTS } from "./common-6ceLbjxn.js";
import "./Button-cLlpCM0x.js";
const ShowBackdrop = keyframes`
  from{background:rgba(15, 23, 42, 0)};
  to{background:rgba(15, 23, 42, 0.35)};
`;
const ShowContainer = keyframes`
  from{transform: scale(0.9) translateY(30%); opacity: 0.4;};
  to{transform: scale(1) translateY(0);opacity: 1;};
`;
styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.35);
  z-index: 1010;
  animation: ${ShowBackdrop} 0.35s;
`;
styled.section`
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
  animation: ${ShowContainer} 0.2s;
`;
styled.div`
  position: relative;
  color: var(--gray700);

  div.modal-icon {
    display: inline-flex;
    margin-bottom: 16px;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  div.modal-contents {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  h3.modal-title {
    white-space: pre-wrap;
    ${FONTS.body2("semibold")};
  }
  p.modal-message {
    white-space: pre-wrap;
    ${FONTS.body4("regular")};
  }
`;
styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
styled.div`
  display: flex;
  gap: 8px;
`;
const PopupContext = createContext(null);
const usePopup = () => useContext(PopupContext);
export {
  usePopup as u
};
