"use client";

import React from "react";
import styled from "styled-components";

import { FONTS } from "@/styles/common";
import Button from "@/components/common/Button";
import { BaseContainer } from "@/components/common/Container";
import FloatButton from "@/components/common/FloatButton";

import Surprised from "@/assets/character/Surprised.svg";

type Props = { status?: number | string; message?: string; retry: () => void; reset: () => void };
function ErrorFallback({ status, message, retry, reset }: Props) {
  return (
    <Container>
      <HideHeader />
      <Surprised />
      <p className="title">이런! 오류가 발생했어요</p>
      <p className="description">
        일시적인 문제일 수 있지만
        <br />
        지속적으로 발생한다면 문의해주세요.
        <br />
        <span className="error-message">
          {status} {message}
        </span>
      </p>
      <FloatButton gap="10px">
        <Button type="button" mode="OPTION1" fullWidth onClick={retry}>
          다시 시도
        </Button>
        <Button type="button" mode="MAIN" fullWidth onClick={reset}>
          홈 화면 이동
        </Button>
      </FloatButton>
    </Container>
  );
}

const HideHeader = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: var(--mobile-max-width);
  height: var(--safe-area-top);
  background-color: var(--background-light);
  z-index: 8999; // 9000 -1
  transform: translateX(-50%);
`;
const Container = styled(BaseContainer)`
  display: flex;
  padding-bottom: 160px;
  height: calc(100vh - var(--safe-area-top) - 10px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  svg {
    width: 140px;
    height: 140px;
  }

  p.title {
    ${FONTS.HEAD1};
    margin-bottom: 4px;
    font-size: 2.6rem;
    color: var(--main);
  }
  p.description {
    ${FONTS.MD1W500};
    line-height: 2.6rem;
    color: var(--gray700);
    text-align: center;
  }
  span.error-message {
    margin-top: 16px;
    padding: 0 32px;
    display: inline-block;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 400;
    word-wrap: break-word;
    color: var(--gray600);
  }
`;

export default ErrorFallback;
