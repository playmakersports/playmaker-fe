import React from "react";
import { usePathname } from "next/navigation";
import AppOnboardingHome from "../user/_onboarding";
import { useAtomValue } from "jotai";
import { isOnboardingAtom } from "@/session/userAtom";

function OnboardingRoutes({ children }: { children: React.ReactNode }) {
  const onboarding = useAtomValue(isOnboardingAtom);
  const pathname = usePathname();
  const isOAuthStart = pathname.startsWith("/user/login");

  if (!onboarding && !isOAuthStart) return <AppOnboardingHome />;
  return children;
}

export default OnboardingRoutes;
