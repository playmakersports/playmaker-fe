import React from "react";
import { useForm } from "react-hook-form";

import DateInput from "@/components/common/DateInput";
import { StepFormWrapper } from "@/components/common/global/Text";
import LocationInput from "@/components/common/LocationInput";
import StagePageContainer from "@/components/layouts/StagePageContainer";

function TeamCreateStep3({ setStep }: { setStep: (prev: number) => void }) {
  const { register } = useForm();
  return (
    <StagePageContainer
      stepper={true}
      headerAlign="center"
      title="기본 정보"
      description="창단일과 활동 지역을 선택하세요"
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
        <LocationInput title="활동 지역" />
      </StepFormWrapper>
    </StagePageContainer>
  );
}

export default TeamCreateStep3;
