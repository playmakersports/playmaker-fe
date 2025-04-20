"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { useRouter, useSearchParams } from "next/navigation";
import { useHeader } from "@/hook/useHeader";

import Button from "@/components/common/Button";
import { BaseContainer } from "@/components/common/Container";
import GradientBg from "@/components/common/GradientBg";
import CharacterWelcome from "../stage/_components/CharacterWelcome";

function JoinComplete() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryName = searchParams.get("name") as string;
  const queryGender = searchParams.get("gender") as "male" | "female";
  useHeader({ transparent: true });

  return (
    <Container>
      <Contents>
        <Title>
          <CharacterWelcome name={queryName} gender={queryGender} />
        </Title>
        <GradientBg position="fixed" />
      </Contents>
      <ButtonWrapper>
        <Button type="button" mode="primary" onClick={() => router.push("/")} fullWidth>
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

const Title = styled.div`
  z-index: 1;
`;

export default JoinComplete;
