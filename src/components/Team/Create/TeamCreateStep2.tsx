import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";

import { atomTeamCreate } from "@/atom/team";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import { StepFormWrapper } from "@/components/common/global/Text";
import { BasicInput } from "@/components/common/input/BaseInput";
import { TextArea } from "@/components/common/TextArea";

function TeamCreateStep2({ setStep }: { setStep: (prev: number) => void }) {
  const { register, handleSubmit, watch } = useForm();
  const [teamCreateValue, setTeamCreateValue] = useAtom(atomTeamCreate);
  const MOCK_NAME = "아무개";

  const onSubmit = (data: any) => {
    setTeamCreateValue((prev) => ({ ...prev, ...data }));
    setStep(3);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StagePageContainer
        stepper={true}
        headerAlign="center"
        title="기본 정보"
        description="팀 이름과 소개글을 작성하세요"
        button={{
          type: "submit",
          disabled: !watch("teamName") || !watch("teamIntro"),
          text: "다음",
          onClick: () => {},
        }}
      >
        <StepFormWrapper>
          <BasicInput type="text" title="팀 이름" {...register("teamName", { required: true })} />
          <TextArea title="팀 소개" displayLength maxLength={300} {...register("teamIntro", { required: true })} />
        </StepFormWrapper>
      </StagePageContainer>
    </form>
  );
}

export default TeamCreateStep2;
