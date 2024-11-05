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
  const { register } = useForm();
  const [teamValue, setTeamValue] = useAtom(atomTeamCreate);
  const [birthYearRange, setBirthYearRange] = useState<[number, number]>([
    teamValue.birthYearMin,
    teamValue.birthYearMax,
  ]);

  return (
    <StagePageContainer
      stepper={true}
      headerAlign="center"
      title="팀 시스템 설정"
      description="팀원 조건을 선택하세요"
      button={{
        text: "다음",
        onClick: () => {
          setStep(5);
          setTeamValue((prev) => ({ ...prev, birthYearMin: birthYearRange[0], birthYearMax: birthYearRange[1] }));
        },
      }}
    >
      <StepFormWrapper>
        <RangeWrapper>
          <BirthRangeInput defaultValue={birthYearRange} getYearRange={setBirthYearRange} />
          <div className="no-range">
            <InputCheckbox id="noAgeRange" /> <label htmlFor="noAgeRange">연령 제한 없는 팀으로 만들게요</label>
          </div>
        </RangeWrapper>
        <InputRadioWrapper title="팀 성별">
          <InputRadio buttonType fullWidth {...register("gender")} value="mixed" id="mixed" labelName="다같이" />
          <InputRadio buttonType fullWidth {...register("gender")} value="male" id="male" labelName="남성" />
          <InputRadio buttonType fullWidth {...register("gender")} value="female" id="female" labelName="여성" />
        </InputRadioWrapper>
      </StepFormWrapper>
    </StagePageContainer>
  );
}

const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  div.no-range {
    ${FONTS.MD2}
    padding: 0 2px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    label {
      color: var(--gray700);
    }
  }
  div.no-range:has(input:checked) {
    label {
      color: var(--gray900);
    }
  }
`;

export default TeamCreateStep4;
