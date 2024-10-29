import React from "react";
import { useForm } from "react-hook-form";

import StagePageContainer from "@/components/layouts/StagePageContainer";
import DateInput from "@/components/common/DateInput";
import { StepFormWrapper } from "@/components/common/global/Text";
import { InputRadio } from "@/components/common/SelectInput";
import { BasicInput } from "@/components/common/Input";
import InputRadioWrapper from "@/components/common/InputRadioWrapper";
import LocationInput from "@/components/common/LocationInput";

function TeamCreateStep4({ setStep }: { setStep: (prev: number) => void }) {
  const { register } = useForm();
  const MOCK_NAME = "아무개";

  return (
    <StagePageContainer
      stepper={true}
      title="팀 시스템을 입력해주세요"
      button={{
        text: "다음",
        onClick: () => setStep(5),
      }}
    >
      <StepFormWrapper>
        <LocationInput />
      </StepFormWrapper>
    </StagePageContainer>
  );
}

export default TeamCreateStep4;
