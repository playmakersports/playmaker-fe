"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import { VERCEL_BASE_URL } from "@/constants/baseUrl";
import { FONTS, TEXT_ACTIVE } from "@/styles/common";
import { KAKAO_AUTH, GOOGLE_AUTH } from "@/apis/oauth";
import Button from "@/components/common/Button";
import LoginWrapper from "@/components/User/LoginWrapper";

import KakaoLogo from "@/assets/logo/external/KakaoLogo.svg";
import GoogleLogo from "@/assets/logo/external/GoogleLogo.svg";

function Login() {
  const router = useRouter();

  const handleKakaoLogin = () => {
    const REDIRECT_URI = `${VERCEL_BASE_URL}/user/login/kakao`;
    const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
    const KAKAO_URL = `${KAKAO_AUTH}?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.open(KAKAO_URL, "_self");
  };
  const handleGoogleLogin = () => {
    const REDIRECT_URI = `${VERCEL_BASE_URL}/user/login/google`;
    const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const GOOGLE_URL = `${GOOGLE_AUTH}?scope=email%20openid&response_type=code&redirect_uri=${REDIRECT_URI}&client_id=${GOOGLE_CLIENT_ID}`;
    window.open(GOOGLE_URL, "_self");
  };

  const handleIntroPage = () => {
    router.push("/user/apply");
  };
  const handleMyPage = () => {
    router.push("/my");
  };
  const handleStaffLoginPage = () => {
    router.push("/user/login/staff");
  };
  const handleTestLogin = () => {
    router.push("/user/login/test");
  };

  return (
    <LoginWrapper>
      <LoginOptions>
        <KakaoBtn type="button" onClick={handleKakaoLogin}>
          <KakaoLogo /> 카카오로 시작하기
        </KakaoBtn>
        <GoogleBtn type="button" onClick={handleGoogleLogin}>
          <GoogleLogo /> Google로 시작하기
        </GoogleBtn>
        <Button type="button" mode="OPTION2" $borderType onClick={handleIntroPage}>
          Intro
        </Button>
        <Button type="button" mode="OPTION2" $borderType onClick={handleMyPage}>
          My Page
        </Button>
        <Button type="button" mode="MAIN" onClick={handleTestLogin}>
          테스트 로그인
        </Button>
        <StaffLogin>
          <button type="button" onClick={handleStaffLoginPage}>
            협회 및 관계사 로그인
          </button>
        </StaffLogin>
      </LoginOptions>
    </LoginWrapper>
  );
}

const LoginOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px calc(var(--env-sab) + 16px);
`;

const LoginBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${FONTS.MD1W500}
  padding: 12px 0;
  border-radius: 48px;
  border: 1px solid var(--gray200);
  gap: 10px;
  transition: transform 0.2s;
  &:active {
    transform: scale(0.97);
  }
`;
const KakaoBtn = styled(LoginBtn)`
  background-color: #fee500;
  border-color: transparent;
`;
const GoogleBtn = styled(LoginBtn)``;
const StaffLogin = styled.p`
  margin-top: 32px;
  text-align: center;
  button {
    padding: 0 16px;
    ${FONTS.MD2};
    color: var(--gray500);
    letter-spacing: -0.15px;
    border-radius: 4px;
    ${TEXT_ACTIVE("var(--gray100)", { hover: true })}
  }
`;

export default Login;
