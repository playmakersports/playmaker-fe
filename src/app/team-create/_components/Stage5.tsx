import React, { useState } from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

import { fonts } from "@/styles/fonts.css";
import { colors } from "@/styles/color.css";
import StageWrapper, { SetStepType } from "../../register/_components/StageWrapper";
import { stageFormWrapper, stageWrapper } from "../../register/_components/stage.css";
import { flexColumnGap16, flexColumnGap4, flexColumnGap40 } from "@/styles/container.css";

import MainTab from "@/components/Main/MainTab";
import { ToggleSwitch } from "@/components/common/input/ToggleSwitch";
import BirthRangeInput from "@/components/common/BirthRangeInput";

function TeamCreateStage5({ setStep }: SetStepType) {
  const { register, setValue, watch } = useFormContext();
  const [genderRestriction, setGenderRestriction] = useState(false);
  const [ageRestriction, setAgeRestriction] = useState(false);
  const [ageRange, setAgeRange] = useState<number[]>();

  const handleGender = (value: string) => {
    setValue("genderRestriction", value);
  };

  const handlePrevStep = () => {
    setStep("Stage4");
  };
  const handleComplete = () => {
    if (!genderRestriction) {
      setValue("genderRestriction", null);
    }
    if (ageRestriction) {
      // ageMin >= ageMax
      // ageMin의 나이 <= ageMax의 나이
      setValue("ageMin", ageRange?.[1] || 0);
      setValue("ageMax", ageRange?.[0] || 0);
    } else {
      setValue("ageMin", 0);
      setValue("ageMax", 0);
    }
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
              showIcon={true}
              checked={ageRestriction}
              onChange={(e) => {
                setAgeRestriction(e.target.checked);
                if (!e.target.checked) {
                  setValue("ageMin", 0);
                  setValue("ageMax", 0);
                }
              }}
            />
            <div
              style={
                ageRestriction
                  ? undefined
                  : {
                      pointerEvents: "none",
                      opacity: 0.55,
                    }
              }
            >
              <BirthRangeInput getYearRange={setAgeRange} />
            </div>
          </div>
          <ToggleSwitch
            size="large"
            text={{ title: "기수제 운영", description: "팀 소속 선수를 기수로 관리할 수 있어요.", first: true }}
            showIcon
            {...register("hasGenerationSystem")}
          />
          <div className={flexColumnGap16}>
            <div className={flexColumnGap4}>
              <div className={fonts.body3.medium}>성별 제한</div>
              <div className={clsx(fonts.body4.regular, colors.gray400)}>
                팀에 가입할 수 있는 성별을 제한할 수 있어요.
              </div>
            </div>
            <MainTab
              type="filled"
              color="gray"
              size="medium"
              sameWidth
              initialValue={watch("genderRestriction")}
              nowValue={handleGender}
              items={[
                { value: "MIXED", name: "혼성" },
                { value: "FEMALE", name: "여성" },
                { value: "MALE", name: "남성" },
              ]}
            />
          </div>
        </div>
      </div>
    </StageWrapper>
  );
}

export default TeamCreateStage5;
