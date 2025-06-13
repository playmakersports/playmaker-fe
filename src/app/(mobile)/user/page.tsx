"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";

import { oAuthSignInStart } from "@/util/auth";
import LoginWrapper from "@/components/User/LoginWrapper";
import { flexColumnGap12 } from "@/styles/container.css";
import { onboardingLoginButton } from "./_components/onboarding.css";
import { fonts } from "@/styles/fonts.css";

import KakaoLogo from "@/assets/logo/external/KakaoLogo.svg";
import GoogleLogo from "@/assets/logo/external/GoogleLogo.svg";
import AppleLogo from "@/assets/logo/external/AppleLogo.svg";

function AppOnboardingHome() {
  const onClickLogin = (provider: "kakao" | "google" | "apple") => {
    oAuthSignInStart(provider);
  };

  return (
    <LoginWrapper>
      <div className={flexColumnGap12}>
        <Link
          href="/user/login/test"
          className={clsx(fonts.body3.medium, onboardingLoginButton)}
          data-provider="google"
        >
          TEST LOGIN
        </Link>
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
