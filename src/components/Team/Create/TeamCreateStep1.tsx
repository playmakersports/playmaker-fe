import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

import { SUPPORT_SPORTS } from "@/constants/mock/SPORTS";
import CardInput from "@/components/common/CardInput";
import StagePageContainer from "@/components/layouts/StagePageContainer";

function TeamCreateStep1({ setStep }: { setStep: (prev: number) => void }) {
  const { register, watch } = useForm();

  return (
    <StagePageContainer
      stepper={true}
      headerAlign="center"
      title="종목 선택"
      description="생성할 팀의 종목을 선택하세요"
      button={{
        text: "다음",
        onClick: () => setStep(2),
        disabled: !watch("teamSports"),
      }}
    >
      <Container>
        <List>
          {SUPPORT_SPORTS.map((item) => (
            <CardInput type="radio" key={item.value} id={item.value} value={item.value} {...register("teamSports")}>
              <Item>
                <Image src={item.icon} alt={item.name} width={36} /> {item.name}
              </Item>
            </CardInput>
          ))}
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 16px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default TeamCreateStep1;
