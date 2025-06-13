"use client";
import React from "react";
import { redirect, usePathname } from "next/navigation";
import { useAuth } from "@/session/useAuth";

function OnboardingRoutes({ children }: { children: React.ReactNode }) {
  const { isLogin } = useAuth();
  const pathname = usePathname();
  const isOAuthStart = pathname.startsWith("/user");

  if (!isLogin && !isOAuthStart) {
    redirect("/user");
  }
  return children;
}

export default OnboardingRoutes;
