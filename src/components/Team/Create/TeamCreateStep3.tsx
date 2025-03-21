import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";

import { atomTeamCreate } from "@/atom/team";
import DateInput from "@/components/common/DateInput";
import { StepFormWrapper } from "@/components/common/global/Text";
import LocationInput from "@/components/common/LocationInput";
import StagePageContainer from "@/components/layouts/StagePageContainer";

function TeamCreateStep3({ setStep }: { setStep: (prev: number) => void }) {
  const { register, handleSubmit } = useForm();
  const [LocationKey, setLocationKey] = useState(0);
  const [teamCreateValue, setTeamCreateValue] = useAtom(atomTeamCreate);

  const onSubmit = (data: any) => {
    setTeamCreateValue((prev) => ({ ...prev, ...data, activeArea: LocationKey }));
    setStep(4);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StagePageContainer
        stepper={true}
        headerAlign="center"
        title="기본 정보"
        description="창단일과 활동 지역을 선택하세요"
        button={{
          type: "submit",
          text: "다음",
          onClick: () => {},
        }}
      >
        <StepFormWrapper>
          <DateInput
            title="창단일"
            pickType="ONLY_PAST"
            information="팀 창단이 완료되면 창단일 변경이 어려워요."
            {...register("createDt", { required: true })}
          />
          <LocationInput title="활동 지역" defaultValue={teamCreateValue.activeArea} setLocationKey={setLocationKey} />
        </StepFormWrapper>
      </StagePageContainer>
    </form>
  );
}

export default TeamCreateStep3;
