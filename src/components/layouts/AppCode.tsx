import React from "react";
import styled from "styled-components";
import { FONTS } from "@/styles/common";

function AppCode() {
  return (
    <Container>
      <div className="qr-area" />
      <strong>
        <span>플메</span> 앱에서
        <br />
        우리 지역•학교의 <br />
        스포츠 소식을
        <br />
        놓치지 마세요.
      </strong>
      <p>QR코드를 스캔해보세요.</p>
    </Container>
  );
}

const Container = styled.aside`
  position: fixed;
  width: 180px;
  height: 240px;
  bottom: 40px;
  left: calc(50% + var(--mobile-max-width) / 2);
  margin-left: 36px;
  padding: 20px 0;

  .qr-area {
    width: 80px;
    height: 80px;
    background-color: #fff;
  }
  strong {
    ${FONTS.HEAD2};
    display: block;
    margin-top: 10px;
    line-height: 2.2rem;
    span {
      color: var(--main);
    }
  }
  p {
    ${FONTS.MD3};
    margin-top: 6px;
    color: var(--gray600);
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

export default AppCode;
