import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { VERCEL_BASE_URL } from "@/constants/baseUrl";
import { FONTS } from "@/styles/common";
import { KAKAO_AUTH } from "@/apis/oauth";
import Button from "@/components/common/Button";
import LoginWrapper from "@/components/User/LoginWrapper";

function Login() {
  const router = useRouter();

  const handleKakaoLogin = () => {
    const REDIRECT_URI = `${VERCEL_BASE_URL}/user/login/kakao`;
    const KAKAO_URL = `${KAKAO_AUTH}?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.open(KAKAO_URL, "_self");
  };
  const handleGoogleLogin = () => {
    const REDIRECT_URI = `${VERCEL_BASE_URL}/user/login/google`;
    const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?scope=email%20openid&response_type=code&redirect_uri=${REDIRECT_URI}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`;
    window.open(GOOGLE_URL, "_self");
  };

  const handleIntroPage = () => {
    router.push("/user/login/intro");
  };
  const handleStaffLoginPage = () => {
    router.push("/user/login/staff");
  };

  return (
    <LoginWrapper
      button={{
        text: "로그인",
        onClick: () => console.log(""),
      }}
    >
      <LoginOptions>
        <Button type="button" mode="OPTION2" borderType onClick={handleKakaoLogin}>
          카카오로 계속하기
        </Button>
        <Button type="button" mode="OPTION2" borderType onClick={handleGoogleLogin}>
          Google로 계속하기
        </Button>
        <Button type="button" mode="OPTION2" borderType onClick={handleIntroPage}>
          Intro
        </Button>
      </LoginOptions>
      <StaffLogin>
        <button type="button" onClick={handleStaffLoginPage}>
          협회 및 관계사 로그인
        </button>
      </StaffLogin>
    </LoginWrapper>
  );
}

const LoginOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StaffLogin = styled.p`
  position: fixed;
  left: 0;
  width: 100%;
  bottom: calc(var(--env-sab) + 16px);
  text-align: center;
  button {
    padding: 2px 16px;
    ${FONTS.MD2};
    color: var(--gray700);
    letter-spacing: -0.15px;
    border-radius: 4px;
  }
`;

export default Login;
