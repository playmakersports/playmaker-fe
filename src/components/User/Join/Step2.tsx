import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

import Stepper from "@/components/layouts/Stepper";
import { BasicInput } from "@/components/common/Input";
import { StepFormWrapper } from "@/components/common/global/Text";
import DateInput from "@/components/common/DateInput";
import { InputRadio } from "@/components/common/SelectInput";

function Step2({ setStep }: { setStep: (prev: number) => void }) {
  const { register } = useForm();
  return (
    <Stepper
      stage={{ now: 1, length: 3 }}
      button={{
        text: "다음",
        onClick: () => setStep(3),
      }}
    >
      <StepFormWrapper>
        <BasicInput type="text" title="이름" {...register("name")} />
        <DateInput title="생년월일" pickType="ONLY_PAST" {...register("birthday")} />
        <Radios>
          <InputRadio buttonType {...register("gender")} value="male" id="male" labelName="남성" />
          <InputRadio buttonType {...register("gender")} value="female" id="female" labelName="여성" />
        </Radios>
      </StepFormWrapper>
    </Stepper>
  );
}

const Radios = styled.div`
  display: flex;
  gap: 12px;
`;

export default Step2;
