"use client";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import { FONTS } from "@/styles/common";
import Button from "@/components/common/Button";
import { BaseContainer } from "@/components/common/Container";

import Surprised from "@/assets/character/Surprised.svg";

type Props = { status?: number | string; message?: string; retry?: () => void; reset?: () => void };
function ErrorFallback(props: Props) {
  const router = useRouter();
  const { status, message, retry, reset } = props;

  const onGoBack = () => {
    router.back();
  };
  const onGoHome = () => {
    router.replace("/");
  };

  return (
    <Container>
      <HideHeader />
      <div style={{ marginLeft: "-16px" }}>
        <Surprised />
      </div>
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
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "70%" }}>
        <Button type="button" mode="gray" fillType="light" size="large" fullWidth onClick={retry ?? onGoBack}>
          다시 시도
        </Button>
        <Button type="button" mode="primary" size="large" fullWidth onClick={reset ?? onGoHome}>
          홈 화면 이동
        </Button>
      </div>
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
    ${FONTS.head6("semibold")};
    margin-bottom: 4px;
    color: var(--primary500);
  }
  p.description {
    ${FONTS.body3("regular")};
    color: var(--gray700);
    text-align: center;
  }
  span.error-message {
    ${FONTS.body4("regular")};
    display: block;
    margin: 16px 0;
    word-wrap: break-word;
    color: var(--gray500);
  }
`;

export default ErrorFallback;
