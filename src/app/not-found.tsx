"use client";

import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import { FONTS } from "@/styles/common";
import Button from "@/components/common/Button";
import { BaseContainer } from "@/components/common/Container";
import FloatButton from "@/components/common/FloatButton";

import Surprised from "@/assets/character/Surprised.svg";

function Page404() {
  const router = useRouter();

  return (
    <Container>
      <Surprised />
      <p className="title">이런! 페이지가 없어요</p>
      <p className="description">
        잘못된 곳으로 찾아오셨거나
        <br />
        아직 저희가 준비하지 못한 화면일거에요.
        <br />
        (ERROR 404)
      </p>
      <FloatButton>
        <Button type="button" mode="primary" fullWidth onClick={() => router.push("/")}>
          홈 화면 이동
        </Button>
      </FloatButton>
    </Container>
  );
}

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
`;

export default Page404;
