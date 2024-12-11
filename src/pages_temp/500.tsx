import React from "react";
import styled from "@emotion/styled";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { FONTS } from "@/styles/common";
import Button from "@/components/common/Button";
import { BaseContainer } from "@/components/common/Container";
import FloatButton from "@/components/common/FloatButton";

import Surprised from "@/assets/character/Surprised.svg";

function Page500() {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <Container>
      <Surprised />
      <p className="title">이런! 문제가 발생했어요</p>
      <p className="description">
        내부 서버에 문제가 발생했지만
        <br />
        곧 제대로 고쳐서 돌아올게요.
        <br />
        (ERROR 500)
      </p>
      <FloatButton gap="10px">
        <Button type="button" mode="OPTION2" fullWidth onClick={() => router.reload()}>
          새로고침
        </Button>
        <Button type="button" mode="MAIN" fullWidth onClick={() => router.push("/")}>
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

export default Page500;
