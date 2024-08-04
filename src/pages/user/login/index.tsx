import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import useBgWhite from "@/hook/useBgWhite";

import Button from "@/components/common/Button";
import { KAKAO_AUTH } from "@/apis/oauth";
import { VERCEL_BASE_URL } from "@/constants/baseUrl";
import { BaseContainer } from "@/components/common/Container";

import LogoIconType from "@/assets/logo/LogoIconType.svg";
import LogoTextType from "@/assets/logo/LogoTextType.svg";

function Login() {
  useBgWhite();
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

  return (
    <Container>
      <LogoArea>
        <LogoIconType className="logo-icon" />
        <LogoTextType className="logo-text" />
      </LogoArea>
      <LoginOptions>
        <Button type="button" mode="OPTION1" borderType onClick={handleKakaoLogin}>
          카카오로 계속하기
        </Button>
        <Button type="button" mode="OPTION1" borderType onClick={handleGoogleLogin}>
          Google로 계속하기
        </Button>
        <Button type="button" mode="MAIN" onClick={() => router.push("/user/join")}>
          이메일 로그인
        </Button>
      </LoginOptions>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  display: flex;
  height: calc(100vh - var(--safe-area-top) - 2px);
  padding-bottom: calc(var(--env-sab) + 48px);
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;

const LogoArea = styled.div`
  display: flex;
  margin: 60px 0;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  svg.logo-icon {
    width: 100px;
    height: 100px;
    border-radius: 20px;
  }
  svg.logo-text {
    width: 190px;
    height: 29px;
  }
`;
const LoginOptions = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  gap: 8px;
`;

export default Login;
