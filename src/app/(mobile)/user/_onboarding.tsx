import React from "react";
import Link from "next/link";
import { useSetAtom } from "jotai";

import { isOnboardingAtom } from "@/session/userAtom";
import LoginWrapper from "@/components/User/LoginWrapper";
import { flexColumnGap12 } from "@/styles/container.css";
import { onboardingLoginButton } from "./_components/onboarding.css";
import { oAuthSignInStart } from "@/util/auth";

import KakaoLogo from "@/assets/logo/external/KakaoLogo.svg";
import GoogleLogo from "@/assets/logo/external/GoogleLogo.svg";
import AppleLogo from "@/assets/logo/external/AppleLogo.svg";

function AppOnboardingHome() {
  const setOnboarding = useSetAtom(isOnboardingAtom);
  const onClickLogin = (provider: "kakao" | "google" | "apple") => {
    setOnboarding(true);
    oAuthSignInStart(provider);
  };

  return (
    <LoginWrapper>
      <Link
        onClick={() => setOnboarding(true)}
        href="/user/login/test"
        style={{
          position: "fixed",
          top: "calc(var(--env-sat) + 10px)",
          left: 14,
          zIndex: 50,
          fontSize: "1.4rem",
          lineHeight: "2.2rem",
          fontWeight: 500,
          color: "var(--gray400)",
        }}
      >
        TEST LOGIN
      </Link>
      <div className={flexColumnGap12}>
        <button
          type="button"
          className={onboardingLoginButton}
          data-provider="kakao"
          onClick={() => onClickLogin("kakao")}
        >
          <KakaoLogo width={20} height={20} /> 카카오 로그인
        </button>
        <button
          type="button"
          className={onboardingLoginButton}
          data-provider="google"
          onClick={() => onClickLogin("google")}
        >
          <GoogleLogo width={20} height={20} /> Google 계정으로 로그인
        </button>
        <button
          type="button"
          className={onboardingLoginButton}
          data-provider="apple"
          onClick={() => onClickLogin("apple")}
        >
          <AppleLogo width={20} height={20} /> Apple로 로그인
        </button>
      </div>
    </LoginWrapper>
  );
}

export default AppOnboardingHome;
