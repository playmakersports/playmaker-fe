"use client";
import React, { useEffect } from "react";
import { redirect, usePathname } from "next/navigation";
import { getAccessToken } from "@/session/authToken";

function OnboardingRoutes({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isOAuthStart = pathname.startsWith("/user");
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    const token = getAccessToken();
    if (!token && !isOAuthStart && !isDev) {
      redirect("/user");
    }
  }, []);

  return children;
}

export default OnboardingRoutes;
