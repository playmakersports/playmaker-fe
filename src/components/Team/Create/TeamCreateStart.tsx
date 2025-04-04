import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useAtom } from "jotai";
import { useHeader } from "@/hook/useHeader";

import { FONTS } from "@/styles/common";
import { atomTeamCreate } from "@/atom/team";
import Button from "@/components/common/Button";
import FloatButton from "@/components/common/FloatButton";
import GradientBg from "@/components/common/GradientBg";

// import GraduationIcon from "@/assets/icon/common/filled/Graduation.svg";
import GloveIcon from "@/assets/icon/common/Global.svg";

function TeamCreateStart({ setStep }: { setStep: (prev: number) => void }) {
  useHeader({ transparent: true });
  const UNIVERSITY = "인하대학교";
  const [teamCreateValue, setTeamCreateValue] = useAtom(atomTeamCreate);
  const [teamType, setTeamType] = useState<"univ" | "basic" | null>(null);
  const [hideStartCont, setHideStartCont] = useState(false);

  useEffect(() => {
    if (teamType) {
      setHideStartCont(true);
    } else {
      const timer = setTimeout(() => {
        setHideStartCont(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [teamType]);

  return (
    <>
      <Container>
        <GradientBg position="absolute" zIndex={hideStartCont ? 0 : 10} opacity={hideStartCont ? 0 : 1} />
        <CircleBg>
          <div />
          <div />
        </CircleBg>
        <UnivNameTag className={teamType === "univ" ? "show" : "hide"}>{UNIVERSITY}</UnivNameTag>
        <List $showNextPage={hideStartCont}>
          <Item className={teamType === "univ" ? "selected" : ""} type="button" onClick={() => setTeamType("univ")}>
            <div className="title-wrapper">
              {/* <GraduationIcon /> */}
              <strong className="card-title">대학 팀</strong>
            </div>
            <p className="description">
              대학 팀은 <strong>재학증명서</strong>
              <br />
              인증이 필요해요
            </p>
          </Item>
          <Item className={teamType === "basic" ? "selected" : ""} type="button" onClick={() => setTeamType("basic")}>
            <div className="title-wrapper">
              <GloveIcon />
              <strong className="card-title">일반 동호회</strong>
            </div>
            <p className="description">
              동호회는 <strong>누구나</strong> 함께
              <br />
              스포츠를 즐길 수 있어요
            </p>
          </Item>
        </List>
        {!!teamType && (
          <FloatButton>
            <Button
              type="button"
              mode="primary"
              fullWidth
              onClick={() => {
                setStep(1);
                setTeamCreateValue((prev) => ({ ...prev, university: UNIVERSITY }));
              }}
            >
              다음
            </Button>
          </FloatButton>
        )}
      </Container>
      <Start $showNextPage={hideStartCont}>
        <h3>
          팀 생성을
          <br />
          시작해볼까요?
        </h3>
      </Start>
    </>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    letter-spacing: 0;
    font-size: 2.8rem;
  }
  to {
    opacity: 1;
    letter-spacing: 1.5px;
    font-size: 3rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  margin-top: calc(var(--safe-area-top) * -1);
  height: calc(100vh - 1px);
`;

const UnivNameTag = styled.div`
  user-select: none;
  position: fixed;
  margin-bottom: 20px;
  left: 50%;
  bottom: calc(var(--env-sab) + 60px);
  padding: 8px 20px;
  width: max-content;
  ${FONTS.body3("regular")};
  color: var(--main);
  border-radius: 10px;
  border: 1px solid #e7eefd;
  box-shadow: 0 2px 4px 0 rgba(195, 220, 243, 0.5);
  background-color: #fff;
  letter-spacing: 0.2px;
  transition: transform 0.35s, opacity 0.5s, visibility 0.5s;
  transition-timing-function: cubic-bezier(0.2, 0.7, 0.3, 1);

  &.show {
    opacity: 1;
    visibility: visible;
    transform: translate3d(-50%, 0, 0);
  }
  &.hide {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(-50%, 32px, 0);
  }

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 12px;
    height: 12px;
    border-bottom-right-radius: 3px;
    left: 50%;
    bottom: -7px;
    transform: translateX(-50%) rotate(45deg);
    background-color: #fff;
    border-bottom: 1px solid #e7eefd;
    border-right: 1px solid #e7eefd;
    box-shadow: 2px 2px 2px 0 rgba(195, 220, 243, 0.25);
  }
`;
const Start = styled.div<{ $showNextPage: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 60px 0 0;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ $showNextPage }) => ($showNextPage ? "20vh" : "50vh")};
  z-index: 11;
  transition: height 1s;
  will-change: height;

  h3 {
    margin-block-start: 0.3rem;
    z-index: 1;
    text-align: center;
    font-weight: 600;
    line-height: 4.8rem;
    transform: scale(${({ $showNextPage }) => ($showNextPage ? 0.75 : 1)})
      translate3d(0, ${({ $showNextPage }) => ($showNextPage ? "calc(var(--env-sat) / 1.6 + 40px)" : "30vh")}, 0);
    transform-origin: top center;
    animation: ${fadeIn} 1.1s ease-in-out forwards;
    transition: all 1s;
    user-select: none;
  }
`;

const List = styled.div<{ $showNextPage: boolean }>`
  display: flex;
  opacity: ${({ $showNextPage }) => ($showNextPage ? 1 : 0)};
  padding: calc(var(--safe-area-top) + 140px) 16px;
  gap: 12px;
  transition: opacity 0.5s;
  transition-delay: 0.3s;
`;
const Item = styled.button`
  flex: 1;
  position: relative;
  padding: 30px 8px;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--white);
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(195, 220, 243, 0.5);
  transition: transform 0.2s;
  will-change: transform;
  word-break: keep-all;

  &.selected {
    border: 1px solid var(--main);
  }
  &:active {
    transform: translate3d(0, 2px, 0);
    box-shadow: 0 0 4px 0 rgba(195, 220, 243, 0.5);
  }

  div.title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    svg {
      width: 30px;
      height: 30px;
      fill: var(--primary300);
    }
  }
  strong.card-title {
    display: block;
    ${FONTS.body3("semibold")};
    font-size: 1.8rem;
    flex-shrink: 0;
    word-break: keep-all;
  }
  p.description {
    ${FONTS.body4("regular")};
    font-weight: 400;
    color: var(--gray700);
    text-align: center;
    line-height: 2.2rem;
    strong {
      font-weight: 500;
      color: var(--gray1000);
    }
  }
`;
const CircleBg = styled.div`
  position: absolute;
  width: 100%;
  height: 70vh;
  overflow: hidden;

  div {
    position: absolute;
    content: "";
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: block;
    background-color: rgba(48, 109, 239, 0.5);
    z-index: -10;
    filter: blur(70px);
    opacity: 0.9;

    &:first-of-type {
      top: calc(60px + 35%);
      left: -5%;
    }
    &:last-of-type {
      top: calc(60px + 10%);
      right: -5%;
    }
  }
`;

export default TeamCreateStart;
