"use client";
import React, { useState } from "react";
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
import LogoSymbolType from "@/assets/logo/LogoSymbolGreen.svg";

function AppOnboardingHome() {
  const [logoClickCount, setLogoClickCount] = useState(0);
  const showTestLogin = logoClickCount >= 10;

  const onClickLogin = (provider: "kakao" | "google" | "apple") => {
    oAuthSignInStart(provider);
  };

  const onClickLogo = () => {
    setLogoClickCount((prev) => prev + 1);
  };

  return (
    <LoginWrapper>
      <div style={logoAreaStyle}>
        <LogoSymbolType
          className="logo-icon"
          width={132}
          height={72}
          onClick={onClickLogo}
        />
        <div className={fonts.head5.semibold} style={{ color: "var(--primary500)" ,userSelect:"none"}}>
          플메
        </div>
        {/* <LogoTextType className="logo-text" width={150} height={16} fill={logoFill ?? "var(--main)"} /> */}
      </div>

      <div className={flexColumnGap12}>
        {showTestLogin && (
          <Link
            href="/user/login/test"
            className={clsx(fonts.body3.medium, onboardingLoginButton)}
            data-provider="google"
          >
            TEST LOGIN
          </Link>
        )}
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
        {/*<button*/}
        {/*  type="button"*/}
        {/*  className={onboardingLoginButton}*/}
        {/*  data-provider="apple"*/}
        {/*  onClick={() => onClickLogin("apple")}*/}
        {/*>*/}
        {/*  <AppleLogo width={20} height={20} /> Apple로 로그인*/}
        {/*</button>*/}
      </div>
    </LoginWrapper>
  );
}
const logoAreaStyle = {
  display: "flex",
  margin: "60px 0",
  flexDirection: "column",
  alignItems: "center",
  gap: "18px",
} as const;

export default AppOnboardingHome;
