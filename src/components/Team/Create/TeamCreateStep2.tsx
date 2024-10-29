import React from "react";
import { useForm } from "react-hook-form";

import StagePageContainer from "@/components/layouts/StagePageContainer";
import DateInput from "@/components/common/DateInput";
import { StepFormWrapper } from "@/components/common/global/Text";
import { InputRadio } from "@/components/common/SelectInput";
import { BasicInput } from "@/components/common/Input";
import InputRadioWrapper from "@/components/common/InputRadioWrapper";
import { TextArea } from "@/components/common/TextArea";

function TeamCreateStep2({ setStep }: { setStep: (prev: number) => void }) {
  const { register } = useForm();
  const MOCK_NAME = "아무개";

  return (
    <StagePageContainer
      stepper={true}
      title={`${MOCK_NAME} 회장님의\n팀 창단을 시작할게요`}
      description="경희대학교 농구"
      button={{
        text: "다음",
        onClick: () => setStep(3),
      }}
    >
      <StepFormWrapper>
        <BasicInput type="text" title="팀 이름" {...register("teamName")} />
        <TextArea title="팀 소개" displayLength maxLength={300} {...register("selfIntro")} />
      </StepFormWrapper>
    </StagePageContainer>
  );
}

export default TeamCreateStep2;
