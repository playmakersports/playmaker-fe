import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

import Stepper from "@/components/layouts/Stepper";
import DateInput from "@/components/common/DateInput";
import { StepFormWrapper } from "@/components/common/global/Text";
import DateCalendarInput from "@/components/common/DateCalendarInput";
import { formatDate } from "date-fns";
import { InputCheckbox, InputRadio } from "@/components/common/SelectInput";
import { FONTS } from "@/styles/common";

function TeamCreateStep2({ setStep }: { setStep: (prev: number) => void }) {
  const { register } = useForm();
  const today = formatDate(new Date(), "yyyy-MM-dd");
  const MOCK_NAME = "아무개";

  return (
    <Stepper
      title={`회장 ${MOCK_NAME} 님의\n팀 창단을 시작할게요`}
      description="경희대학교 농구"
      button={{
        text: "다음",
        onClick: () => setStep(3),
      }}
    >
      <StepFormWrapper>
        <DateInput
          title="창단일"
          pickType="ONLY_PAST"
          defaultValue={today}
          information={{ text: "팀 창단이 완료되면 창단일 변경이 어려워요.", onClick: () => {} }}
        />
        {/* <DateCalendarInput title="창단일" defaultValue={today} /> */}
        <GenderOptions>
          <InputRadio buttonType {...register("gender")} value="male" id="male" labelName="남성" />
          <InputRadio buttonType {...register("gender")} value="female" id="female" labelName="여성" />
          <InputRadio buttonType {...register("gender")} value="mixed" id="mixed" labelName="혼성" />
        </GenderOptions>
        <AdultOption>
          <InputCheckbox size="LARGE" {...register("adult")} id="adult" />
          <label htmlFor="adult">만 19세 이상으로 구성된 팀입니다.</label>
        </AdultOption>
      </StepFormWrapper>
    </Stepper>
  );
}

const GenderOptions = styled.div`
  display: flex;
  gap: 12px;
`;
const AdultOption = styled.div`
  ${FONTS.MD2};
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default TeamCreateStep2;
