import React from "react";
import clsx from "clsx";
import Image from "next/image";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";

import { SUPPORT_SPORTS } from "@/constants/SPORTS";
import { fonts } from "@/styles/fonts.css";
import { stageFavSportsGrid, stageFormWrapper, stageWrapper } from "../../user/apply/stage/_components/stage.css";
import StageWrapper, { SetStepType } from "../../user/apply/stage/_components/StageWrapper";

function TeamCreateStage1({ setStep }: SetStepType) {
  const { register, watch } = useFormContext();
  const handleNextStep = () => {
    setStep("Stage2");
  };

  return (
    <StageWrapper start={true} onClickNext={handleNextStep} length={4} current={1} disableNext={!watch("sports")}>
      <div className={stageFormWrapper}>
        <div>
          <h3 className={stageWrapper.title}>종목을 선택해 주세요</h3>
          <p className={stageWrapper.description}>팀 생성할 스포츠 종목을 선택해주세요.</p>
        </div>
        <div className={stageFavSportsGrid}>
          {SUPPORT_SPORTS.map((item) => (
            <SportsButton key={item.value}>
              <input
                type="radio"
                id={`${item.value}+${item.name}`}
                value={item.value}
                style={{ display: "none" }}
                {...register("sports", {
                  maxLength: 3,
                })}
              />
              <label htmlFor={`${item.value}+${item.name}`}>
                <div className="icon-wrapper">
                  <Image src={item.icon} alt={item.name} width={50} height={50} />
                </div>
                <span className={clsx(fonts.body3.medium, "sports-name")}>{item.name}</span>
              </label>
            </SportsButton>
          ))}
        </div>
      </div>
    </StageWrapper>
  );
}

const SportsButton = styled.div`
  width: 100%;
  max-width: 110px;
  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 110px;
      border-radius: 10px;
      border: 1px solid var(--gray200);
      transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    }
    span.sports-name {
      padding: 10px 0;
      color: var(--gray700);
    }

    &:active div.icon-wrapper > img {
      transform: scale(0.95);
      transition: transform 0.2s ease-in-out;
    }
  }

  input:checked + label div.icon-wrapper {
    background-color: var(--primary50);
    border-color: var(--primary500);
  }
  input:checked + label span.sports-name {
    font-weight: 600;
    color: var(--primary500);
  }
`;

export default TeamCreateStage1;
