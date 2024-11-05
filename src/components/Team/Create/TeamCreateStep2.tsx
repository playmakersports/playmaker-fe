import React from "react";
import { useForm } from "react-hook-form";

import StagePageContainer from "@/components/layouts/StagePageContainer";
import { StepFormWrapper } from "@/components/common/global/Text";
import { BasicInput } from "@/components/common/Input";
import { TextArea } from "@/components/common/TextArea";

function TeamCreateStep2({ setStep }: { setStep: (prev: number) => void }) {
  const { register } = useForm();
  const MOCK_NAME = "아무개";

  return (
    <StagePageContainer
      stepper={true}
      headerAlign="center"
      title="기본 정보"
      description="팀 이름과 소개글을 작성하세요"
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
