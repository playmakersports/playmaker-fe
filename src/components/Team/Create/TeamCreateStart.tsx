import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";

import CardInput from "@/components/common/CardInput";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import { FONTS } from "@/styles/common";
import { atomTeamCreate } from "@/atom/team";
import { InputCheckbox } from "@/components/common/SelectInput";

function TeamCreateStart({ setStep }: { setStep: (prev: number) => void }) {
  const [teamCreateValue, setTeamCreateValue] = useAtom(atomTeamCreate);
  const { register, watch } = useForm({
    defaultValues: {
      teamType: teamCreateValue.teamType,
    },
  });

  return (
    <StagePageContainer
      stepper={true}
      title="팀 유형을 선택해주세요"
      button={{
        text: "다음",
        onClick: () => {
          setStep(1);
          setTeamCreateValue((prev) => ({ ...prev, teamType: watch("teamType") }));
        },
        disabled: !watch("teamType"),
      }}
    >
      <Container>
        <List>
          <CardInput type="radio" id="univ" value="univ" {...register("teamType")}>
            <Item>
              <div className="title-wrapper">
                <InputCheckbox
                  size="LARGE"
                  defaultChecked={teamCreateValue.teamType === "univ"}
                  checked={watch("teamType") === "univ"}
                  onChange={() => {}}
                />
                <strong className="card-title">대학 팀</strong>
              </div>
              <p className="description">재학증명서 첨부가 필수인 팀으로 만들어져요.</p>
            </Item>
          </CardInput>
          <CardInput type="radio" id="basic" value="basic" {...register("teamType")}>
            <Item>
              <div className="title-wrapper">
                <InputCheckbox
                  size="LARGE"
                  defaultChecked={teamCreateValue.teamType === "basic"}
                  checked={watch("teamType") === "basic"}
                  onChange={() => {}}
                />
                <strong className="card-title">일반 동호회</strong>
              </div>
              <p className="description">누구나 만들고 참여 가능한 동호회로 만들어져요.</p>
            </Item>
          </CardInput>
        </List>
      </Container>
    </StagePageContainer>
  );
}

const Container = styled.div`
  display: flex;
  height: calc(100% - var(--env-sab) / 3 - 92px);
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 16px;
`;
const Item = styled.div`
  gap: 16px;
  div.title-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  strong.card-title {
    display: block;
    ${FONTS.MD1};
    font-size: 1.8rem;
    flex-shrink: 0;
    word-break: keep-all;
  }
  p.description {
    ${FONTS.MD2};
    font-weight: 400;
    color: var(--gray600);
  }
`;

export default TeamCreateStart;
