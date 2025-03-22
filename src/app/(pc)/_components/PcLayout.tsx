"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { FONTS, TEXT_ACTIVE } from "@/styles/common";
import Logotype from "@/assets/logo/Logotype.svg";
import PersonIcon from "@/assets/icon/common/filled/Person.svg";

function PcLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header>
        <Menu>
          <div className="logo-area">
            <Link href="/" aria-label="홈으로 이동. 협회 및 관계자 전용 화면에서 벗어납니다.">
              <Logotype width={168} height="auto" fill="var(--gray900)" />
            </Link>
            <p>협회 및 관계사 전용</p>
          </div>
          <li className="menu-item">
            <Link href="/staff/competition">대회 관리</Link>
          </li>
          <li className="menu-item">
            <Link href="/staff/payment">결제 정보</Link>
          </li>
        </Menu>
        <Icons>
          <button type="button" aria-label="내 정보 이동">
            <PersonIcon />
          </button>
        </Icons>
      </Header>
      <Children>{children}</Children>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    /* display: none; */
  }
`;

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 16px 2vw;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;

  div.logo-area {
    margin-right: 32px;
    p {
      padding-left: 10px;
      margin-top: 2px;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 400;
    }
  }
  li.menu-item > a {
    padding: 1px 8px;
    color: var(--gray800);
    border-radius: 4px;
    ${FONTS.MD1W500};
    ${TEXT_ACTIVE("var(--gray100)", { hover: true })};
  }
`;
const Icons = styled.div`
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    svg {
      width: 22px;
      height: auto;
      fill: var(--gray900);
    }
    border-radius: 4px;
    ${TEXT_ACTIVE("var(--gray100)", { hover: true })};
  }
`;
const Children = styled.main`
  padding: 0 2vw;
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

export default PcLayout;
