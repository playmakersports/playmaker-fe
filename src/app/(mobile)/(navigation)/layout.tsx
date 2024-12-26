"use client";

import React from "react";
import Navigation from "@/components/layouts/Navigation";
import { usePathname } from "next/navigation";

function NavigationLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const allowNav = ["/", "/my", "/feed", "/matches"];

  if (!allowNav.includes(path)) return <>{children}</>;
  return (
    <>
      {children}
      <Navigation />
    </>
  );
}

export default NavigationLayout;
