import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";

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
  const { register, handleSubmit } = useForm({
    defaultValues: {
      generationYn: teamCreateValue.generationYn === "1" ? "on" : "off",
      sex: teamCreateValue.sex,
    },
  });
  const [birthYearRange, setBirthYearRange] = useState<[number, number]>([
    teamCreateValue.minBirthYear,
    teamCreateValue.maxBirthYear,
  ]);
  console.log(teamCreateValue);
  const onSubmit = (data: any) => {
    setStep(5);
    setTeamCreateValue({
      ...teamCreateValue,
      minBirthYear: birthYearRange[0],
      maxBirthYear: birthYearRange[1],
      sex: data.sex,
      generationYn: data.generationYn === "on" ? "1" : "0",
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
            <InputRadio buttonType fullWidth {...register("sex")} value="MIXTURE" id="MIXTURE" labelName="혼성" />
            <InputRadio buttonType fullWidth {...register("sex")} value="MALE" id="MALE" labelName="남성" />
            <InputRadio buttonType fullWidth {...register("sex")} value="FEMALE" id="FEMALE" labelName="여성" />
          </InputRadioWrapper>
          <InputLabel>
            <InputCheckbox id="generationYn" {...register("generationYn")} />{" "}
            <label htmlFor="generationYn">기수제 모임으로 만들기</label>
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
