import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

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
        </Menu>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled(HeaderWrapper)`
  position: fixed;
  background-color: var(--background-light);
  border-radius: 0 0 10px 10px;

  @media (max-width: 540px) {
    max-width: 100%;
  }
`;
const HeaderIconWrapper = styled(HeaderIcon)`
  svg {
    width: 24px;
    height: 24px;
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
