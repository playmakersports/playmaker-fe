import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

import { SUPPORT_SPORTS } from "@/constants/mock/SPORTS";
import CardInput from "@/components/common/CardInput";
import StagePageContainer from "@/components/layouts/StagePageContainer";

function TeamCreateStep1({ setStep }: { setStep: (prev: number) => void }) {
  const { register } = useForm();

  return (
    <StagePageContainer
      title="팀의 종목을 선택해주세요"
      button={{
        text: "다음",
        onClick: () => setStep(2),
      }}
    >
      <List>
        {SUPPORT_SPORTS.map((item) => (
          <CardInput type="radio" key={item.value} id={item.value} value={item.value} {...register("teamSports")}>
            <Item>
              {item.iconSvg} {item.name}
            </Item>
          </CardInput>
        ))}
      </List>
    </StagePageContainer>
  );
}

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 16px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default TeamCreateStep1;
