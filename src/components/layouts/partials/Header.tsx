import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";

import { usePageTitle } from "@/hook/usePageTitle";
import Logotype from "@/assets/logo/Logotype.svg";
import NoticeBellIcon from "@/assets/icon/global/NoticeBell.svg";
import PersonIcon from "@/assets/icon/global/Person.svg";
import LeftArrow from "@/assets/icon/arrow/LeftArrow.svg";

function Header() {
  const ICON_SIZE = 22;
  const router = useRouter();
  const title = usePageTitle();

  if (router.asPath === "/") {
    return (
      <Wrapper>
        <Logotype width={128} height={40} />
        <Menu>
          <Icon>
            <NoticeBellIcon width={ICON_SIZE} height={ICON_SIZE} />
          </Icon>
          <Link href="/user/login">
            <Icon>
              <PersonIcon width={ICON_SIZE} height={ICON_SIZE} />
            </Icon>
          </Link>
        </Menu>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <button type="button" aria-label="뒤로가기" onClick={() => router.back()}>
        <LeftArrow width={ICON_SIZE + 8} height={ICON_SIZE + 8} />
      </button>
      <PageTitle>{title}</PageTitle>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  padding: 0 20px;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(16px);
  z-index: 999;

  svg {
    fill: ${({ theme }) => theme.gray2};
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.gray1};
`;
const PageTitle = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.gray1};
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  transition: all 0.2s;
  &:active {
    background-color: ${({ theme }) => theme.gray4};
  }
`;

export default Header;
