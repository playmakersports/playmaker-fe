import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { usePageTitle } from "@/hook/usePageTitle";

import Button from "@/components/common/Button";
import { KAKAO_AUTH } from "@/apis/oauth";

function Login() {
  usePageTitle("로그인");
  const router = useRouter();

  const handleKakaoLogin = () => {
    const REDIRECT_URI = `http://localhost:3000/user/login/kakao`;
    const KAKAO_URL = `${KAKAO_AUTH}?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.open(KAKAO_URL, "_self");
  };

  return (
    <Container>
      <LoginOptions>
        <Button type="button" mode="SNS_LOGIN" onClick={handleKakaoLogin}>
          카카오 로그인
        </Button>
        <Button type="button" mode="OPTION2" onClick={() => router.push("/user/join")}>
          회원가입
        </Button>
      </LoginOptions>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  height: 60vh;
  justify-content: center;
  flex-direction: column;
  padding: 32px 16px;
  gap: 16px;
`;

const LoginOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Login;
