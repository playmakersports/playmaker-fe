import React from "react";
import styled from "@emotion/styled";

import Stepper from "@/components/layouts/Stepper";
import { FONTS } from "@/styles/common";
import { BasicWhiteCard } from "@/components/common/Card";

function Step0({ setStep }: { setStep: (prev: number) => void }) {
  return (
    <Stepper>
      <BackPoint />
      <Title>
        반가워요! <br />
        가입 방식을 선택해주세요
      </Title>
      <Buttons>
        <Card>
          <strong>일반</strong>
          <p>
            내 주변이나 생활 지역에서
            <br />
            스포츠 팀을 찾고 참여합니다
          </p>
        </Card>
        <Card>
          <strong>대학</strong>
          <p>
            대학 동아리나 리그 소속으로
            <br />
            스포츠 팀에 참여합니다
          </p>
        </Card>
      </Buttons>
    </Stepper>
  );
}
const BackPoint = styled.div`
  position: absolute;
  left: 0;
  top: -10px;
  width: 100vw;
  height: 100vw;
  background: linear-gradient(135deg, var(--main) 0%, rgba(var(--main-rgb), 0) 50%);
  opacity: 0.25;
  z-index: -1;
`;

const Title = styled.h3`
  ${FONTS.HEAD2};
  text-align: center;
  font-size: 2.4rem;
  line-height: 3.8rem;
`;
const Buttons = styled.div`
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  gap: 24px;
`;
const Card = styled(BasicWhiteCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  strong {
    ${FONTS.MD1};
    font-size: 2rem;
    padding: 0 8px;
    flex-shrink: 0;
    word-break: keep-all;
    color: var(--main);
  }

  p {
    ${FONTS.MD2};
    text-align: center;
  }
`;
export default Step0;
