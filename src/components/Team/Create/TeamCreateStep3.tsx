import DateInput from "@/components/common/DateInput";
import { StepFormWrapper } from "@/components/common/global/Text";
import InputRadioWrapper from "@/components/common/InputRadioWrapper";
import { InputRadio } from "@/components/common/SelectInput";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import React from "react";
import { useForm } from "react-hook-form";

function TeamCreateStep3({ setStep }: { setStep: (prev: number) => void }) {
  const { register } = useForm();
  return (
    <StagePageContainer
      stepper={true}
      title={`팀 성별과 창단일을\n선택해주세요`}
      description="경희대학교 농구"
      button={{
        text: "다음",
        onClick: () => setStep(4),
      }}
    >
      <StepFormWrapper>
        <DateInput
          title="창단일"
          pickType="ONLY_PAST"
          information={{ text: "팀 창단이 완료되면 창단일 변경이 어려워요.", onClick: () => {} }}
        />
        <InputRadioWrapper title="팀 성별">
          <InputRadio buttonType fullWidth {...register("gender")} value="male" id="male" labelName="남성" />
          <InputRadio buttonType fullWidth {...register("gender")} value="female" id="female" labelName="여성" />
          <InputRadio buttonType fullWidth {...register("gender")} value="mixed" id="mixed" labelName="혼성" />
        </InputRadioWrapper>
      </StepFormWrapper>
    </StagePageContainer>
  );
}

export default TeamCreateStep3;
