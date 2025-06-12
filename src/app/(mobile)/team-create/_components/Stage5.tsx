import React from "react";
import { useFormContext } from "react-hook-form";

import StageWrapper, { SetStepType } from "../../user/apply/stage/_components/StageWrapper";
import { stageFormWrapper, stageWrapper } from "../../user/apply/stage/_components/stage.css";
import { flexColumnGap16, flexColumnGap40 } from "@/styles/container.css";

import MainTab from "@/components/Main/MainTab";
import { ToggleSwitch } from "@/components/common/input/ToggleSwitch";

function TeamCreateStage5({ setStep }: SetStepType) {
  const { register, setValue, watch } = useFormContext();

  const handleGender = (value: string) => {
    setValue("gender", value);
  };

  const handlePrevStep = () => {
    setStep("Stage4");
  };
  const handleComplete = () => {
    setStep("Welcome");
  };

  return (
    <StageWrapper last={true} onClickPrev={handlePrevStep} onClickLast={handleComplete} length={5} current={5}>
      <div className={stageFormWrapper}>
        <div>
          <h3 className={stageWrapper.title}>추가 정보를 작성해주세요</h3>
          <p className={stageWrapper.description}>거의 다 왔어요!</p>
        </div>
        <div className={flexColumnGap40}>
          <div className={flexColumnGap16}>
            <ToggleSwitch
              size="large"
              text={{ title: "나이 제한", description: "팀에 가입할 수 있는 나이를 제한할 수 있어요.", first: true }}
              showIcon
            />
          </div>
          <div className={flexColumnGap16}>
            <ToggleSwitch
              size="large"
              text={{ title: "성별 제한", description: "팀에 가입할 수 있는 성별을 제한할 수 있어요.", first: true }}
              showIcon
              {...register("genderRestriction")}
            />
            <div
              style={
                watch("genderRestriction")
                  ? undefined
                  : {
                      pointerEvents: "none",
                      opacity: 0.55,
                    }
              }
            >
              <MainTab
                type="filled"
                color="gray"
                size="medium"
                sameWidth
                initialValue={watch("gender")}
                nowValue={handleGender}
                items={[
                  { value: "FEMALE", name: "여성" },
                  { value: "MALE", name: "남성" },
                ]}
              />
            </div>
          </div>
          <ToggleSwitch
            size="large"
            text={{ title: "기수제 운영", description: "팀 소속 선수를 기수로 관리할 수 있어요.", first: true }}
            showIcon
            {...register("hasGenerationSystem")}
          />
        </div>
      </div>
    </StageWrapper>
  );
}

export default TeamCreateStage5;
