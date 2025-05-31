"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import { FONTS, TEXT_ACTIVE } from "@/styles/common";
import Button from "@/components/common/Button";
import LoginWrapper from "@/components/User/LoginWrapper";

import KakaoLogo from "@/assets/logo/external/KakaoLogo.svg";
import GoogleLogo from "@/assets/logo/external/GoogleLogo.svg";
import { oAuthSignInStart } from "@/util/auth";

function Login() {
  const router = useRouter();

  const handleIntroPage = () => {
    router.push("/user/apply");
  };
  const handleApplyStage = () => {
    router.push("/user/apply/stage");
  };
  const handleMyPage = () => {
    router.push("/my");
  };
  const onClickTeamPage = () => {
    router.push("/team/33/board");
  };
  const handleStaffLoginPage = () => {
    router.push("/user/login/staff");
  };

  return (
    <LoginWrapper>
      <LoginOptions>
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <Button type="button" onClick={() => oAuthSignInStart("google")} mode="gray" fillType="light" flex={1}>
            <GoogleLogo />
            Google로 시작
          </Button>
          <Button type="button" onClick={() => oAuthSignInStart("kakao")} mode="gray" fillType="light" flex={1}>
            <KakaoLogo />
            카카오로 시작
          </Button>
          <Button type="button" onClick={() => oAuthSignInStart("apple")} mode="gray" fillType="light" flex={1}>
            Apple로 시작
          </Button>
        </div>

        <Button type="button" mode="red" fillType="light" size="large" onClick={onClickTeamPage}>
          팀 게시판
        </Button>
        <Button type="button" mode="gray" fillType="light" size="large" onClick={handleMyPage}>
          My 설정
        </Button>
        <Button type="button" mode="primary" size="large" onClick={handleApplyStage}>
          회원가입
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
`;

const StaffLogin = styled.p`
  margin-top: 32px;
  text-align: center;
  button {
    padding: 0 16px;
    ${FONTS.body4("regular")};
    color: var(--gray500);
    letter-spacing: -0.15px;
    border-radius: 4px;
    ${TEXT_ACTIVE("var(--gray100)", { hover: true })}
  }
`;

export default Login;
