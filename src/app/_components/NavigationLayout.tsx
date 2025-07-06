"use client";
import React from "react";
import Navigation from "@/components/layouts/Navigation";
import { usePathname } from "next/navigation";

function NavigationLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const SHOW_NAV_PAGE = ["/home", "/team", "/team/find", "/my", "/match", "/notification"];
  const SHOW_SUB_NAV =
    !path.startsWith("/team/") && !path.startsWith("/my/") && !path.startsWith("/p/") && !path.startsWith("/match/");
  const HIDE_SUB_NAV = /^\/team\/\d+\/board\/\d+$/.test(path);

  return (
    <>
      <main id="main_Container" style={{ paddingTop: " calc(env(safe-area-inset-top) + var(--header-height))" }}>
        {children}
      </main>
      <Navigation hide={(!SHOW_NAV_PAGE.includes(path) && SHOW_SUB_NAV) || HIDE_SUB_NAV} />
    </>
  );
}

export default NavigationLayout;
