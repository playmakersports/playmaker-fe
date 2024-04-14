import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import Header from "./partials/Header";

function Layout({ children }: { children: JSX.Element }) {
  const container = useRef<HTMLDivElement>(null);
  const { asPath } = useRouter();

  useEffect(() => {
    container.current?.scrollTo(0, 0);
  }, [asPath]);

  if (asPath === "/")
    return (
      <Container ref={container}>
        <main className="home-container">{children}</main>
      </Container>
    );
  return (
    <Container ref={container}>
      <Header />
      <main>{children}</main>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  & > main {
    padding: 64px 16px 0;
  }
  & > .home-container {
    padding: 0 16px;
  }
`;

export default Layout;
