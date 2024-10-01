import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { HeaderIcon, HeaderInner, HeaderWrapper } from ".";
import Logotype from "@/assets/logo/Logotype.svg";
import NoticeBellIcon from "@/assets/icon/global/NoticeBell.svg";
import PersonIcon from "@/assets/icon/global/Person.svg";

function MainHeader() {
  const router = useRouter();

  return (
    <Wrapper>
      <Inner>
        <Logotype className="logo" width={120} height={36} />
        <Menu>
          <HeaderIcon onClick={() => router.push("/notification")} aria-label="내 알림 전체보기">
            <Count>3</Count>
            <NoticeBellIcon />
          </HeaderIcon>
          <HeaderIcon onClick={() => router.push("/user/login")} aria-label="로그인 페이지 이동">
            <PersonIcon />
          </HeaderIcon>
        </Menu>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled(HeaderWrapper)`
  position: fixed;
  margin: 0 -16px;
  max-width: calc(600px - 2px);
  background-color: var(--background-light);
  border-radius: 0 0 10px 10px;
`;

const Inner = styled(HeaderInner)`
  padding-left: 12px;
  padding-right: 12px;
`;
const Menu = styled.div`
  display: flex;
  gap: 12px;
  font-weight: 400;
  font-size: 1.6rem;
  color: var(--gray900);
`;

const Count = styled.div`
  position: absolute;
  padding: 2px 4px;
  left: 50%;
  top: -2px;
  background-color: var(--point);
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: 700;
  border-radius: 9px;
  min-width: 18px;
  text-align: center;
`;

export default MainHeader;
