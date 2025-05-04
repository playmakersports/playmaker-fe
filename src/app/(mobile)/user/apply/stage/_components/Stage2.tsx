import React from "react";
import { useFormContext } from "react-hook-form";

import { stageFormWrapper, stageWrapper } from "./stage.css";
import { BasicInput } from "@/components/common/input/BaseInput";
import DateInput from "@/components/common/DateInput";
import InputWrapper from "@/components/common/input/InputWrapper";
import MainTab from "@/components/Main/MainTab";
import StageWrapper, { SetStepType } from "./StageWrapper";

function Stage2({ setStep }: SetStepType) {
  const {
    register,
    setValue,
    watch,
    formState: { isValid },
  } = useFormContext();

  const handleSexKey = (value: string) => {
    setValue("sexKey", value);
  };

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
      disableNext={!isValid}
    >
      <div className={stageFormWrapper}>
        <div>
          <h3 className={stageWrapper.title}>플레이어님의 정보를 확인할게요</h3>
          <p className={stageWrapper.description}>필수 정보를 입력해 주세요</p>
        </div>
        <BasicInput type="text" title="이름" required {...register("name", { required: true })} />
        <DateInput title="생년월일" required {...register("birth", { required: true })} />
        <BasicInput
          type="tel"
          required
          title="휴대전화 번호"
          {...register("contact", {
            required: true,
            onChange: (event) =>
              (event.target.value = event.target.value
                .replace(/[^0-9]/g, "")
                .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)),
          })}
        />
        <InputWrapper title="성별" required>
          <MainTab
            type="filled"
            color="gray"
            size="medium"
            sameWidth
            initialValue={watch("sexKey")}
            nowValue={handleSexKey}
            items={[
              { value: "MALE", name: "남성" },
              { value: "FEMALE", name: "여성" },
            ]}
          />
        </InputWrapper>
      </div>
    </StageWrapper>
  );
}

export default Stage2;
