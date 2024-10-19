import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

import { BasicInput } from "@/components/common/Input";
import { StepFormWrapper } from "@/components/common/global/Text";
import DateInput from "@/components/common/DateInput";
import { InputRadio } from "@/components/common/SelectInput";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import { useAtom } from "jotai";
import { atomServiceApply } from "@/atom/user";

function Step2({ setStep }: { setStep: (prev: number) => void }) {
  const { register, watch } = useForm();
  const [getter, setter] = useAtom(atomServiceApply);

  return (
    <StagePageContainer
      stepper
      title="기본 정보를 입력해 주세요"
      button={{
        text: "다음",
        onClick: () => {
          setter((prev) => ({ ...prev, ...watch() }));
          setStep(3);
        },
      }}
    >
      <StepFormWrapper>
        <BasicInput type="text" title="이름" {...register("name")} />
        <BasicInput
          type="tel"
          title="휴대전화 번호"
          {...register("contact", {
            onChange: (event) =>
              (event.target.value = event.target.value
                .replace(/[^0-9]/g, "")
                .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)),
          })}
        />
        <DateInput title="생년월일" pickType="ONLY_PAST" {...register("birth")} />
        <Radios>
          <InputRadio buttonType {...register("sexKey")} value="MALE" id="MALE" labelName="남성" />
          <InputRadio buttonType {...register("sexKey")} value="FEMALE" id="FEMALE" labelName="여성" />
        </Radios>
      </StepFormWrapper>
    </StagePageContainer>
  );
}

const Radios = styled.div`
  display: flex;
  gap: 12px;
`;

export default Step2;
