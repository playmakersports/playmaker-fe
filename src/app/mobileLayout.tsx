"use client";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useRouter, useParams } from "@tanstack/react-router";
import { useAtomValue } from "jotai";

import Header from "@/components/layouts/Header/Header";
import AppCode from "@/components/layouts/AppCode";
import Loading from "@/components/common/Loading";
import NavigationLayout from "./_components/NavigationLayout";
import OnboardingRoutes from "./_components/OnboardingRoutes";
import { atomHeaderDisplay } from "@/atom/common";
import { layoutContainer } from "./_components/container.css";

function MobileLayout({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const [routeLoading, setRouteLoading] = useState(false);
  const isDisplayHeader = useAtomValue(atomHeaderDisplay);
  const router = useRouter();
  const location = useLocation();
  const params = useParams({ strict: false });
  const pathname = location.pathname;

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setRouteLoading(false);
  }, [pathname, params]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathname.startsWith("/pc")) {
    return (
      <>
        {routeLoading && <Loading page />}
        <OnboardingRoutes>{children}</OnboardingRoutes>
      </>
    );
  }

  return (
    <>
      {routeLoading && <Loading page />}
      <div id="root" style={{ position: "relative", zIndex: 0, width: "100%", height: "100%" }}>
        <OnboardingRoutes>
          {pathname === "/user" ? (
            <section className={layoutContainer} id="mobile_Wrapper">
              {children}
            </section>
          ) : (
            <section className={layoutContainer} id="mobile_Wrapper">
              {isDisplayHeader && <Header scrollY={scrollY} />}
              <NavigationLayout>{children}</NavigationLayout>
            </section>
          )}
        </OnboardingRoutes>
        <AppCode />
      </div>
    </>
  );
}

export default MobileLayout;
