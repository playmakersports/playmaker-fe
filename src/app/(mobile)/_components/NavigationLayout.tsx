"use client";
import React from "react";
import Navigation from "@/components/layouts/Navigation";
import { usePathname } from "next/navigation";

function NavigationLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const SHOW_NAV_PAGE = ["/", "/team", "/my", "/matches", "/notification"];

  return (
    <>
      <main id="main_Container" style={{ paddingTop: " calc(env(safe-area-inset-top) + var(--header-height))" }}>
        {children}
      </main>
      <Navigation hide={!SHOW_NAV_PAGE.includes(path)} />
    </>
  );
}

export default NavigationLayout;
