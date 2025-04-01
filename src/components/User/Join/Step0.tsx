import React, { useState } from "react";
import styled from "styled-components";
import { useAtom } from "jotai";
import { useHeader } from "@/hook/useHeader";

import { atomServiceApply } from "@/atom/user";
import { CARD_ACTIVE, FONTS } from "@/styles/common";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import { BasicWhiteCard } from "@/components/common/Card";

import LogoSymbol from "@/assets/logo/LogoSymbol.svg";

function Step0({ setStep }: { setStep: (prev: number) => void }) {
  useHeader({ transparent: true });
  const [applyValues, setApplyValues] = useAtom(atomServiceApply);
  const [checked, setChecked] = useState(
    applyValues.memberType !== "" ? (applyValues.memberType === "일반" ? 2 : 1) : 0
  );

  const moveNextStep = () => {
    setApplyValues((prev) => ({ ...prev, memberType: checked === 2 ? "일반" : "대학" }));
    setStep(checked);
  };

  return (
    <StagePageContainer
      button={{
        text: "다음",
        onClick: moveNextStep,
        disabled: checked === 0,
      }}
    >
      <BackPoint />
      <div style={{ position: "relative" }}>
        <Title>
          <LogoSymbol />
          반가워요! <br />
          가입 방식을 선택해주세요
        </Title>
        <Buttons>
          <Card role="button" className={checked === 2 ? "checked" : ""} tabIndex={1} onClick={() => setChecked(2)}>
            <div className="contents">
              <strong>일반</strong>
              <p>내 주변이나 생활 지역에서 스포츠 팀을 찾고 참여</p>
            </div>
          </Card>
          <Card role="button" className={checked === 1 ? "checked" : ""} tabIndex={2} onClick={() => setChecked(1)}>
            <div className="contents">
              <strong>대학</strong>
              <p>대학 동아리나 리그 소속으로 스포츠 팀에 참여</p>
            </div>
          </Card>
        </Buttons>
      </div>
    </StagePageContainer>
  );
}
const BackPoint = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: var(--mobile-max-width);
  height: 100vw;
  background: linear-gradient(155deg, var(--main) 0%, rgba(var(--main-rgb), 0) 50%);
  opacity: 0.25;
  z-index: 0;
`;

const Title = styled.h3`
  ${FONTS.head3("semibold")};
  text-align: center;
  font-size: 2rem;
  line-height: 3rem;

  svg {
    display: block;
    width: 32px;
    margin: 0 auto 20px;
  }
`;
const Buttons = styled.div`
  display: flex;
  margin-top: 70px;
  flex-direction: column;
  gap: 24px;
`;
const Card = styled(BasicWhiteCard)`
  cursor: pointer;
  display: flex;
  padding: 24px;
  align-items: center;
  gap: 16px;
  outline: 1px solid var(--gray200);
  border: 2px solid transparent;
  ${CARD_ACTIVE};

  strong {
    ${FONTS.body2("semibold")};
    display: block;
    margin-bottom: 6px;
    flex-shrink: 0;
    word-break: keep-all;
    color: var(--gray900);
  }

  p {
    ${FONTS.body4("regular")};
    color: var(--gray600);
  }

  &.checked {
    outline: transparent;
    border-color: var(--main);
  }
`;

export default Step0;
