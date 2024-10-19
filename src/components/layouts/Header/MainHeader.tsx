import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { HeaderIcon, HeaderInner, HeaderWrapper } from ".";
import Logotype from "@/assets/logo/Logotype.svg";
import NoticeBellIcon from "@/assets/icon/global/NoticeBell.svg";
import NoticeBellActiveIcon from "@/assets/icon/global/NoticeBellActive.svg";
import PersonIcon from "@/assets/icon/global/Person.svg";

function MainHeader() {
  const router = useRouter();

  return (
    <Wrapper>
      <Inner>
        <Logotype className="logo" width={120} height={36} />
        <Menu>
          <HeaderIconWrapper onClick={() => router.push("/notification")} aria-label="내 알림 전체보기">
            <NoticeBellIcon />
          </HeaderIconWrapper>
          <HeaderIconWrapper onClick={() => router.push("/user/login")} aria-label="로그인 페이지 이동">
            <PersonIcon />
          </HeaderIconWrapper>
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
const HeaderIconWrapper = styled(HeaderIcon)`
  svg {
    fill: var(--gray800);
  }
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

export default MainHeader;