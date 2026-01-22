"use client";
import React, { useEffect } from "react";
import { useLocation, useRouter } from "@tanstack/react-router";
import { getAccessToken } from "@/session/authToken";

function OnboardingRoutes({ children }: { children: React.ReactNode }) {
  const pathname = useLocation().pathname;
  const router = useRouter();
  const isOAuthStart = pathname.startsWith("/user");
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    const token = getAccessToken();
    if (!token && !isOAuthStart && !isDev) {
      router.navigate({ to: "/user", replace: true });
    }
  }, []);

  return children;
}

export default OnboardingRoutes;
