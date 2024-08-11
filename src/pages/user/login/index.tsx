import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { VERCEL_BASE_URL } from "@/constants/baseUrl";
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
    </LoginWrapper>
  );
}

const LoginOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Login;
