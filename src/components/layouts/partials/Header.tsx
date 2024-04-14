import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { usePageTitle } from "@/hook/usePageTitle";
import Logotype from "@/assets/logo/Logotype.svg";
import LeftArrow from "@/assets/icon/arrow/LeftArrow.svg";

function Header() {
  const router = useRouter();
  const title = usePageTitle();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  if (router.asPath === "/") {
    return (
      <Wrapper scroll={scroll}>
        <Logotype width={128} height={40} />
        <Menu>
          <li>알림</li>
          <li>
            <Link href="/user/login">내정보</Link>
          </li>
        </Menu>
      </Wrapper>
    );
  }
  return (
    <Wrapper scroll={scroll}>
      <button type="button" aria-label="뒤로가기" onClick={() => router.back()}>
        <LeftArrow />
      </button>
      <PageTitle>{title}</PageTitle>
    </Wrapper>
  );
}

const Wrapper = styled.header<{ scroll: boolean }>`
  position: fixed;
  top: 0;
  padding: 0 20px;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
  box-shadow: ${({ scroll }) => scroll && "0 0 10px 4px rgba(0, 0, 0, 0.2)"};
  transition: box-shadow 0.3s;
`;

const Menu = styled.ul`
  display: flex;
  gap: 12px;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.gray1};
`;
const PageTitle = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.gray1};
`;

export default Header;
