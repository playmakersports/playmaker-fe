import React from "react";

import { useFormContext } from "react-hook-form";
import { stageFormWrapper, stageWrapper } from "./stage.css";
import { BasicInput } from "@/components/common/input/BaseInput";
import StageWrapper, { SetStepType } from "./StageWrapper";
import InputWrapper from "@/components/common/input/InputWrapper";
import MainTab from "@/components/Main/MainTab";

function OptionalStage1({ setStep }: SetStepType) {
  const { register, setValue, watch } = useFormContext();

  const handleHandedness = (value: string) => {
    setValue("handedness", value);
  };
  const handleNextStep = () => {
    setStep("Option2");
  };

  return (
    <StageWrapper start={true} onClickNext={handleNextStep} current={-1} length={6} currentStageName="선택사항">
      <div className={stageFormWrapper}>
        <div>
          <h3 className={stageWrapper.title}>플레이어님의 신체 정보를 입력해 주세요.</h3>
          <p className={stageWrapper.description}>세부 정보를 입력하시면, 맞춤 팀을 추천드려요!</p>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{ flex: 1 }}>
            <BasicInput type="number" title="키" suffix="cm" {...register("height")} />
          </div>
          <div style={{ flex: 1 }}>
            <BasicInput type="number" title="체중" suffix="kg" {...register("weight")} />
          </div>
        </div>
        <InputWrapper title="성별" required>
          <MainTab
            type="filled"
            color="gray"
            size="medium"
            sameWidth
            initialValue={watch("handedness")}
            nowValue={handleHandedness}
            items={[
              { value: "left", name: "왼손잡이" },
              { value: "right", name: "오른손잡이" },
            ]}
          />
        </InputWrapper>
      </div>
    </StageWrapper>
  );
}

export default OptionalStage1;
