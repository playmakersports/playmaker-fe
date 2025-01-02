"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useParams, usePathname, useRouter } from "next/navigation";

import Header from "@/components/layouts/Header/Header";
import AppCode from "@/components/layouts/AppCode";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Loading from "@/components/common/Loading";

function MobileLayout({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const [routeLoading, setRouteLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [scrollActive, setScrollActive] = useState(0);

  useLayoutEffect(() => {
    const cacheScrollPosition: Array<number> = [];

    // 페이지 이동시 최상단
    const routerPush = router.push;
    const newPush = (ref: string, options?: NavigateOptions): void => {
      cacheScrollPosition.push(container.current?.scrollTop || 0);
      setRouteLoading(true);
      routerPush(ref, options);
    };
    router.push = newPush;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setRouteLoading(false);
  }, [pathname, params]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY || 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {routeLoading && <Loading page />}
      <div id="root" style={{ position: "relative", zIndex: 0, width: "100%", height: "100%" }}>
        <Container id="mobile_Wrapper">
          <Header scrollActive={scrollActive} />
          <main id="main_Container">{children}</main>
        </Container>
        <AppCode />
      </div>
    </>
  );
}

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: auto;
  min-height: 100vh;
  max-width: var(--mobile-max-width);
  box-shadow: rgba(0, 0, 0, 0.125) 0px 8px 36px;

  @media (max-width: 540px) {
    box-shadow: none;
    max-width: 100%;
  }
  #main_Container {
    padding-top: calc(env(safe-area-inset-top) + var(--header-height));
  }
`;

export default MobileLayout;
