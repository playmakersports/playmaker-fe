import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import { SCROLL_HIDE } from "@/styles/common";
import Header from "../Header";
import AppCode from "../AppCode";
import StaffPageMover from "../StaffPageMover";

function MobileView({ children }: { children: JSX.Element }) {
  const router = useRouter();
  const container = useRef<HTMLDivElement>(null);
  const [scrollActive, setScrollActive] = useState(0);
  // const isLoginIntro = router.pathname === "/user/login" || router.pathname === "/user/login/intro";

  useEffect(() => {
    container.current?.scrollTo(0, 0);
  }, [router.asPath]);

  useEffect(() => {
    const handleScroll = () => {
      if (container.current && (container.current.scrollTop % 10 === 0 || container.current.scrollTop < 5)) {
        setScrollActive(container.current.scrollTop);
      }
    };
    container.current?.addEventListener("scroll", handleScroll);

    return () => {
      container.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container id="mobile_Wrapper">
      <Header scrollActive={scrollActive} />
      <main id="main_Container" ref={container}>
        {children}
      </main>
      <StaffPageMover />
      <AppCode />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  max-width: 600px;
  height: calc(100vh - 1px);
  overscroll-behavior: contain;
  border-left: 1px solid var(--gray300);
  border-right: 1px solid var(--gray300);

  @media (max-width: 600px) {
    border: none;
  }

  #main_Container {
    width: 100%;
    height: calc(100vh - 1px);
    padding-top: calc(env(safe-area-inset-top) + var(--header-height));
    overflow-x: hidden;
    overflow-y: auto;
    ${SCROLL_HIDE};
  }
`;

export default MobileView;
