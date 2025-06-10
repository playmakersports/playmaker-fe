import React from "react";
import AppOnboardingHome from "../user/_onboarding";
import { useAtomValue } from "jotai";
import { isOnboardingAtom } from "@/session/userAtom";

function OnboardingRoutes({ children }: { children: React.ReactNode }) {
  const onboarding = useAtomValue(isOnboardingAtom);

  if (!onboarding) return <AppOnboardingHome />;
  return children;
}

export default OnboardingRoutes;
