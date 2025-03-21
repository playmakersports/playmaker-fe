import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import styled from "styled-components";

import StagePageContainer from "@/components/layouts/StagePageContainer";
import { StepFormWrapper } from "@/components/common/global/Text";
import InputRadioWrapper from "@/components/common/InputRadioWrapper";
import { InputCheckbox, InputRadio } from "@/components/common/SelectInput";
import BirthRangeInput from "@/components/common/BirthRangeInput";
import { FONTS } from "@/styles/common";
import { useAtom } from "jotai";
import { atomTeamCreate } from "@/atom/team";

function TeamCreateStep4({ setStep }: { setStep: (prev: number) => void }) {
  const [teamCreateValue, setTeamCreateValue] = useAtom(atomTeamCreate);
  const { register, handleSubmit, watch } = useForm<FieldValues>({
    defaultValues: {
      gisuYn: teamCreateValue.gisuYn === "Y",
      sex: teamCreateValue.sex,
    },
  });
  const [birthYearRange, setBirthYearRange] = useState<[number, number]>([
    teamCreateValue.minBirthYear,
    teamCreateValue.maxBirthYear,
  ]);
  const onSubmit = (data: FieldValues) => {
    setStep(5);
    setTeamCreateValue({
      ...teamCreateValue,
      minBirthYear: birthYearRange[0],
      maxBirthYear: birthYearRange[1],
      sex: data.sex,
      gisuYn: data.gisuYn ? "Y" : "N",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StagePageContainer
        stepper={true}
        headerAlign="center"
        title="팀 시스템 설정"
        description="팀원 조건을 선택하세요"
        button={{
          type: "submit",
          text: "다음",
          onClick: () => {},
        }}
      >
        <StepFormWrapper>
          <RangeWrapper>
            <BirthRangeInput defaultValue={birthYearRange} getYearRange={setBirthYearRange} />
            <InputLabel>
              <InputCheckbox id="noAgeRange" /> <label htmlFor="noAgeRange">연령 제한 없는 팀으로 만들기</label>
            </InputLabel>
          </RangeWrapper>
          <InputRadioWrapper title="팀 성별">
            <InputRadio buttonType {...register("sex")} value="MIXTURE" id="MIXTURE" text={{ title: "혼성" }} />
            <InputRadio buttonType {...register("sex")} value="MALE" id="MALE" text={{ title: "남성" }} />
            <InputRadio buttonType {...register("sex")} value="FEMALE" id="FEMALE" text={{ title: "여성" }} />
          </InputRadioWrapper>
          <InputLabel>
            <InputCheckbox id="gisuYn" {...register("gisuYn")} /> <label htmlFor="gisuYn">기수제 모임으로 생성</label>
          </InputLabel>
        </StepFormWrapper>
      </StagePageContainer>
    </form>
  );
}

const InputLabel = styled.div`
  ${FONTS.MD2}
  padding: 0 2px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  label {
    color: var(--gray700);
  }
  &:has(input:checked) {
    label {
      color: var(--gray900);
    }
  }
`;
const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export default TeamCreateStep4;
