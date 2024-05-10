import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import Header from "./partials/Header";
import { SCROLL_HIDE } from "@/styles/common";

function Layout({ children }: { children: JSX.Element }) {
  const container = useRef<HTMLDivElement>(null);
  const [scrollActive, setScrollActive] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => {
    container.current?.scrollTo(0, 0);
  }, [asPath]);

  useEffect(() => {
    const handleScroll = () => {
      if (container.current && container.current?.scrollTop > 12) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
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
      <main ref={container}>{children}</main>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  & > main {
    position: fixed;
    width: 100%;
    height: calc(100vh - 1px);
    padding: calc(env(safe-area-inset-top) + var(--header-height)) 0 env(safe-area-inset-bottom);
    overflow-x: hidden;
    overflow-y: auto;
    ${SCROLL_HIDE};
  }
`;

export default Layout;
