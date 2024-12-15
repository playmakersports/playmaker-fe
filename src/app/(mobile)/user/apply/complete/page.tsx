"use client";

import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { usePageTitle } from "@/hook/usePageTitle";

import Button from "@/components/common/Button";
import { BaseContainer } from "@/components/common/Container";
import CharacterWelcome from "../../../../../components/User/Join/CharacterWelcome";
import GradientBg from "@/components/common/GradientBg";

function JoinComplete() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryName = searchParams.get("name") as string;
  const queryGender = searchParams.get("gender") as "male" | "female";
  usePageTitle({ transparent: true });

  return (
    <Container>
      <Contents>
        <Title>
          <CharacterWelcome name={queryName} gender={queryGender} />
        </Title>
        <GradientBg position="fixed" />
      </Contents>
      <ButtonWrapper>
        <Button type="button" mode="MAIN" onClick={() => router.push("/")} fullWidth>
          홈 화면
        </Button>
      </ButtonWrapper>
    </Container>
  );
}

const ButtonShowAnimate = keyframes`
    from {
        opacity: 0;
        transform: translateY(35%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - var(--safe-area-top) - 1px);
`;
const ButtonWrapper = styled.div`
  opacity: 0;
  padding-bottom: calc(var(--env-sab) + 48px - 20px);
  animation: ${ButtonShowAnimate} 0.5s forwards;
  animation-delay: 0.75s;
`;
const Contents = styled.article`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  top: 0;

  svg {
    position: absolute;
  }
  .blue-large {
    margin-top: 23%;
    left: -5%;
  }
  .green {
    left: 50%;
    margin-top: 20%;
    transform: translateX(-50%);
  }
  .blue-small {
    position: absolute;
    width: min(55vw, 600px);
    max-width: 300px;
    height: 55vw;
    max-height: 300px;
    background-color: #92c5ff;
    margin-top: 35%;
    right: -5%;
    border-radius: 50%;
    box-shadow: 0 0 40px 32px #92c5ff;
    filter: blur(20px);
    opacity: 0.3;
  }
`;

const Title = styled.div`
  z-index: 1;
`;

export default JoinComplete;
