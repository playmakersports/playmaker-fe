import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

import { SUPPORT_SPORTS } from "@/constants/mock/SPORTS";
import CardInput from "@/components/common/CardInput";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import { InputCheckbox } from "@/components/common/SelectInput";

function TeamCreateStep1({ setStep }: { setStep: (prev: number) => void }) {
  const { register, watch } = useForm();

  return (
    <StagePageContainer
      stepper={true}
      title="팀의 종목을 선택해주세요"
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
        <CardWrapper show={!!watch("teamSports")}>
          <CardInput type="checkbox" id="students" value="Y" {...register("students")}>
            <CardInner>
              <InputCheckbox aria-disabled size="LARGE" checked={watch("students") === "Y"} />
              <div className="button-text">
                <strong>대학 스포츠 동아리로 만들기</strong>
                <p>재학증명서 첨부가 필수인 팀으로 만들어져요.</p>
              </div>
            </CardInner>
          </CardInput>
        </CardWrapper>
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

const CardWrapper = styled.div<{ show: boolean }>`
  width: 100%;
  padding: 0 0 8px;
  display: flex;
  transition: all 0.4s;
  transform: translateY(${({ show }) => (show ? "0" : "50%")});
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
const CardInner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  strong {
    font-size: 1.6rem;
  }
  div.button-text > p {
    font-size: 1.4rem;
    color: var(--gray700);
  }
`;

export default TeamCreateStep1;
