import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import { HeaderIcon, HeaderInner, HeaderWrapper } from ".";
import Logotype from "@/assets/logo/Logotype.svg";
import NoticeBellIcon from "@/assets/icon/global/NoticeBell.svg";
import NoticeBellActiveIcon from "@/assets/icon/global/NoticeBellActive.svg";
import PersonIcon from "@/assets/icon/global/Person.svg";

type Props = { scrollPositionY: number };
function MainHeader({ scrollPositionY }: Props) {
  const router = useRouter();
  const isScrolled = scrollPositionY > 160;

  return (
    <Wrapper $isScrolled={isScrolled}>
      <Inner>
        <Logotype width={140} height={32} fill={isScrolled ? "var(--gray800)" : "var(--gray100)"} />
        <Menu>
          <HeaderIconWrapper onClick={() => router.push("/notification")} aria-label="내 알림 전체보기">
            <NoticeBellIcon fill={isScrolled ? "var(--gray800)" : "var(--gray100)"} />
          </HeaderIconWrapper>
        </Menu>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled(HeaderWrapper)<{ $isScrolled: boolean }>`
  position: fixed;
  background-color: ${({ $isScrolled }) => ($isScrolled ? "var(--background-light)" : "rgba(0,0,0,0.25)")};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? "none" : "blur(6px)")};

  @media (max-width: 540px) {
    max-width: 100%;
  }
`;
const HeaderIconWrapper = styled(HeaderIcon)`
  svg {
    width: 24px;
    height: 24px;
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
