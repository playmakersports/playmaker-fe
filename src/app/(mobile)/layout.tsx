"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

import { SCROLL_HIDE } from "@/styles/common";
import Header from "@/components/layouts/Header/Header";
import StaffPageMover from "@/components/layouts/StaffPageMover";
import AppCode from "@/components/layouts/AppCode";

function MobileLayout({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const [scrollActive, setScrollActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (container.current && (container.current.scrollTop % 5 === 0 || container.current.scrollTop < 5)) {
        setScrollActive(container.current.scrollTop);
      }
    };
    container.current?.addEventListener("scroll", handleScroll);

    return () => {
      container.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header scrollActive={scrollActive} />
      <Main id="main_Container" ref={container}>
        {children}
      </Main>
      <StaffPageMover />
      <AppCode />
    </>
  );
}

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  max-width: var(--mobile-max-width);
  height: calc(100vh - 1px);
  padding-top: var(--safe-area-top);
  box-shadow: rgba(0, 0, 0, 0.125) 0px 8px 36px;
  overflow-x: hidden;
  overflow-y: auto;
  ${SCROLL_HIDE};

  @media (max-width: var(--mobile-max-width)) {
    box-shadow: none;
  }
`;

export default MobileLayout;
