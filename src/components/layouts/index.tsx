import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import Header from "./Header";
import { SCROLL_HIDE } from "@/styles/common";

function Layout({ children }: { children: JSX.Element }) {
  const container = useRef<HTMLDivElement>(null);
  const [scrollActive, setScrollActive] = useState(0);
  const { asPath } = useRouter();

  useEffect(() => {
    container.current?.scrollTo(0, 0);
  }, [asPath]);

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
    <Container>
      <Header scrollActive={scrollActive} />
      <main id="main_Container" ref={container}>
        {children}
      </main>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: calc(100vh - 1px);
  overscroll-behavior: contain;

  #main_Container {
    width: 100%;
    height: calc(100vh - 1px);
    padding-top: calc(env(safe-area-inset-top) + var(--header-height));
    overflow-x: hidden;
    overflow-y: auto;
    ${SCROLL_HIDE};
  }
`;

export default Layout;
