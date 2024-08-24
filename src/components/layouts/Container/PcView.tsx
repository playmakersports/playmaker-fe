import React from "react";
import styled from "@emotion/styled";

import Logotype from "@/assets/logo/Logotype.svg";
import PersonIcon from "@/assets/icon/global/Person.svg";
import { FONTS, TEXT_ACTIVE } from "@/styles/common";

function PcView({ children }: { children: JSX.Element }) {
  return (
    <>
      <Container>
        <Header>
          <Menu>
            <li className="logo-area">
              <Logotype width={168} height="auto" fill="var(--gray1)" />
              <p>협회 및 관계사 전용</p>
            </li>
            <li className="menu-item">대회 관리</li>
            <li className="menu-item">결제 정보</li>
          </Menu>
          <Icons>
            <button type="button">
              <PersonIcon />
            </button>
          </Icons>
        </Header>
        <Children>{children}</Children>
      </Container>
      <PcAlert>현재 해상도에서 접근할 수 없는 페이지입니다.</PcAlert>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    display: none;
  }
`;
const PcAlert = styled.section`
  display: none;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  @media (max-width: 960px) {
    display: flex;
  }
`;
const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 16px 2.5vw;
  border-bottom: 1px solid var(--gray7);
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;

  li.logo-area {
    margin-right: 32px;
    p {
      padding-left: 10px;
      margin-top: 2px;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 400;
    }
  }
  li.menu-item {
    cursor: pointer;
    padding: 1px 8px;
    color: var(--gray2);
    border-radius: 4px;
    ${FONTS.MD1W500};
    ${TEXT_ACTIVE("var(--gray7)", { hover: true })};
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
      fill: var(--gray1);
    }
    border-radius: 4px;
    ${TEXT_ACTIVE("var(--gray7)", { hover: true })};
  }
`;
const Children = styled.main`
  padding: 0 2.5vw;
  height: calc(100vh - 60px);
  overflow-y: auto;
`;

export default PcView;
