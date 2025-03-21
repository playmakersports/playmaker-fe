import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useAtom, useSetAtom } from "jotai";

import { atomServiceApply } from "@/atom/user";
import { BasicInput } from "@/components/common/Input";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import { StepFormWrapper } from "@/components/common/global/Text";
import DateInput from "@/components/common/DateInput";
import { InputRadio } from "@/components/common/SelectInput";
import InputRadioWrapper from "@/components/common/InputRadioWrapper";

function Step2({ setStep }: { setStep: (prev: number) => void }) {
  const [applyValues, setApplyValues] = useAtom(atomServiceApply);
  const { register, watch } = useForm({
    defaultValues: {
      username: applyValues.username,
      contact: applyValues.contact,
      birth: applyValues.birth,
      sexKey: applyValues.sexKey,
    },
  });

  return (
    <StagePageContainer
      stepper
      title="기본 정보를 입력해 주세요"
      button={{
        text: "다음",
        onClick: () => {
          setApplyValues((prev) => ({ ...prev, ...watch() }));
          setStep(3);
        },
      }}
    >
      <StepFormWrapper>
        <BasicInput type="text" title="이름" {...register("username")} />
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
        <InputRadioWrapper title="성별">
          <InputRadio buttonType {...register("sexKey")} value="male" id="MALE" text={{ title: "남성" }} />
          <InputRadio buttonType {...register("sexKey")} value="female" id="FEMALE" text={{ title: "여성" }} />
        </InputRadioWrapper>
      </StepFormWrapper>
    </StagePageContainer>
  );
}

export default Step2;
