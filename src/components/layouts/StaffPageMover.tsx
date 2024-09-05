import React from "react";
import styled from "@emotion/styled";

import Link from "next/link";
import { FONTS, TEXT_ACTIVE } from "@/styles/common";
import { keyframes } from "@emotion/react";

function StaffPageMover() {
  return (
    <Container>
      <Wrapper>
        <Link href={`/staff`}>협회전용</Link>
      </Wrapper>
      <div className="description">
        대회 생성과 참가 팀 관리, 대회 운영까지 한 번에 할 수 있어요.
        <br />
        PC 화면으로만 제공되는 페이지에요.
      </div>
    </Container>
  );
}

const showAnimate = keyframes`
    from { opacity: 0.5; transform: translateX(-50%)}
    to { opacity: 1; transform: translateX(0) }
`;

const Container = styled.aside`
  position: fixed;
  padding-left: 16px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  top: 12px;
  left: calc(50% + 300px);
  overflow: hidden;

  @media (max-width: 800px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  height: 30px;
  padding: 4px 12px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  /* background-color: var(--main); */
  background-color: #ecad00;
  border-radius: 16px;
  animation: ${showAnimate} 0.3s forwards;
  animation-delay: 0.45s;
  opacity: 0;

  ${FONTS.MD2};
  color: #fff;
  word-break: keep-all;
  transition: all 0.2s;

  & + div.description {
    ${FONTS.MD3};
    visibility: hidden;
    opacity: 0;
    padding-left: 2px;
    padding-right: 2px;
    font-weight: 400;
    border-top: 1px solid var(--gray3);
    transition: all 0.2s;
    transition-delay: 0.15s;
  }
  &:hover + div.description {
    visibility: visible;
    opacity: 1;
    margin-top: 8px;
    padding: 8px 2px 0;
  }
`;
export default StaffPageMover;
