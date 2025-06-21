import React from "react";
import clsx from "clsx";
import Image from "next/image";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";

import { SUPPORT_SPORTS } from "@/constants/SPORTS";
import { fonts } from "@/styles/fonts.css";
import { stageFavSportsGrid, stageFormWrapper, stageWrapper } from "../../register/_components/stage.css";
import StageWrapper, { SetStepType } from "../../register/_components/StageWrapper";
import { FONTS } from "@/styles/common";

function TeamCreateStage1({ setStep }: SetStepType) {
  const { register, watch } = useFormContext();
  const handleNextStep = () => {
    setStep("Stage2");
  };

  return (
    <StageWrapper start={true} onClickNext={handleNextStep} length={5} current={1} disableNext={!watch("teamItem")}>
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
                value={item.nameEng.toUpperCase()}
                style={{ display: "none" }}
                {...register("teamItem", {
                  maxLength: 3,
                })}
              />
              <label htmlFor={`${item.value}+${item.name}`}>
                <div className="icon-wrapper">
                  <Image src={item.icon} alt={item.name} width={80} height={80} />
                </div>
                <span className="sports-name">{item.name}</span>
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
      ${FONTS.body3("medium")};
      padding: 10px 0;
      color: var(--gray600);
    }

    &:active div.icon-wrapper > img {
      transform: scale(0.95);
      transition: transform 0.2s ease-in-out;
    }
  }

  input:checked + label div.icon-wrapper {
    border: 2px solid var(--primary500);
  }
  input:checked + label span.sports-name {
    ${FONTS.body3("semibold")};
    color: var(--primary500);
  }
`;

export default TeamCreateStage1;
