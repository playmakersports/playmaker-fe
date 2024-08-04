import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { usePageTitle } from "@/hook/usePageTitle";

import Button from "@/components/common/Button";
import { KAKAO_AUTH } from "@/apis/oauth";
import { VERCEL_BASE_URL } from "@/constants/baseUrl";
import { BaseContainer } from "@/components/common/Container";

function Login() {
  usePageTitle({ title: "로그인" });

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
      <LoginOptions>
        <Button type="button" mode="SNS_LOGIN" onClick={handleKakaoLogin}>
          카카오 로그인
        </Button>
        <Button type="button" mode="SNS_LOGIN" onClick={handleGoogleLogin}>
          구글 로그인
        </Button>
        <Button type="button" mode="OPTION2" onClick={() => router.push("/user/join")}>
          이메일 로그인
        </Button>
      </LoginOptions>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  display: flex;
  height: 60vh;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

const LoginOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Login;
