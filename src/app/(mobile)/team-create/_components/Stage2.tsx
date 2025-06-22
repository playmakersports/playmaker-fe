import React from "react";
import { useFormContext } from "react-hook-form";

import { flexColumnGap20 } from "@/styles/container.css";
import { stageFormWrapper, stageWrapper } from "../../register/_components/stage.css";
import StageWrapper, { SetStepType } from "../../register/_components/StageWrapper";

import { BasicInput } from "@/components/common/input/BaseInput";
import { TextArea } from "@/components/common/TextArea";
import DateInput from "@/components/common/DateInput";

function TeamCreateStage2({ setStep }: SetStepType) {
  const { register, watch } = useFormContext();

  const handlePrevStep = () => {
    setStep("Stage1");
  };
  const handleNextStep = () => {
    setStep("Stage3");
  };

  return (
    <StageWrapper
      onClickPrev={handlePrevStep}
      onClickNext={handleNextStep}
      length={5}
      current={2}
      disableNext={!watch("teamName")}
    >
      <div className={stageFormWrapper}>
        <div>
          <h3 className={stageWrapper.title}>팀 프로필을 작성해주세요</h3>
          <p className={stageWrapper.description}>새로 만들 팀 정보를 입력해 주세요.</p>
        </div>
        <div className={flexColumnGap20}>
          <BasicInput type="text" title="팀 이름" required {...register("teamName", { required: true })} />
          <DateInput title="창단일" required {...register("foundingDate")} />
          <TextArea
            title="팀 소개"
            placeholder={`다른 플레이어들에게 보일 팀 소개글을 작성해 주세요\n150자 이내 작성 가능합니다. (선택)`}
            required
            style={{ height: "130px", resize: "none" }}
            displayLength
            maxLength={150}
            {...register("teamIntro", { required: true })}
          />
        </div>
      </div>
    </StageWrapper>
  );
}

export default TeamCreateStage2;
