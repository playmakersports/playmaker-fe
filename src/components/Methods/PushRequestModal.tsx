import React from "react";
import styled from "@emotion/styled";
import { handleClickToPushActive } from "./NotifyFCM";

function PushRequestModal() {
  return (
    <Container>
      <button onClick={handleClickToPushActive}>푸시 알림 허용</button>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px;
  font-size: 1.5rem;
  z-index: 999;
  button {
    padding: 12px 20px;
    background-color: var(--main);
    color: #fff;
    border-radius: 5px;
  }
`;

export default PushRequestModal;
