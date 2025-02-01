import React from "react";
import useModal from "@/hook/useModal";
import { FieldValues, useForm } from "react-hook-form";
import styled from "styled-components";
import { useConfirm } from "../common/global/ConfirmProvider";

import PlusIcon from "@/assets/icon/global/Plus.svg";
import AwardedItem from "./AwardedItem";

type Props = {
  awardsList: Array<{
    awardedYear: number;
    competitionName: string;
    awardedRank: number;
  }>;
};

function RoomAwarded({ awardsList }: Props) {
  const { register, handleSubmit, reset, setFocus } = useForm();
  const { ModalComponents, showModal: showFormModal } = useModal();
  const confirm = useConfirm();

  const onSubmit = async (data: FieldValues) => {
    await confirm?.showAlert("새로운 수상 경력이 추가됐어요");
    reset();
  };

  const onFormFocus = () => {
    showFormModal();
    setFocus("year");
  };

  return (
    <>
      <Container>
        <Title>
          <h3>수상 경력</h3>
          <PencilButton type="button" className="open-form-button" onClick={onFormFocus} aria-label="경력 편집">
            <PlusIcon />
          </PencilButton>
        </Title>
        <Contents>
          <AwardList>
            <li className="title-items">
              <span className="award-year">연도</span>
              <span className="award-name">대회명</span>
              <span className="award-rank">수상실적</span>
            </li>
            {awardsList.map((award, idx) => (
              <AwardedItem
                key={`awarded-${idx}`}
                year={award.awardedYear}
                competitionName={award.competitionName}
                awardedRank={award.awardedRank}
              />
            ))}
          </AwardList>
        </Contents>
      </Container>
      <ModalComponents>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            className="award-year"
            placeholder="연도"
            {...register("year")}
          />
          <input
            type="text"
            className="award-name"
            placeholder="대회명을 입력하세요"
            {...register("competitionName")}
          />
          <input type="text" className="award-rank" placeholder="예) 동상" {...register("competitionRank")} />
        </Form>
      </ModalComponents>
    </>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  padding: 0 0 32px;
  flex-direction: column;
  gap: 12px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 12px 12px;
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
const Contents = styled.div``;
const AwardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  li.title-items {
    padding: 0 14px;
    font-weight: 400;
    color: var(--gray700);
  }
  li {
    padding: 16px 14px;
    font-weight: 400;
    line-height: 1.4rem;
    font-size: 1.4rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray200);
    gap: 10px;

    &:first-of-type,
    &:last-of-type {
      border-bottom: none;
    }
  }
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  padding: 10px 16px;
  background-color: var(--gray50);
  border: 1px solid transparent;
  border-radius: 10px;

  &:has(input:focus) {
    border: 1px solid var(--gray300);
  }
  input {
    padding: 10px 0;
    font-size: 1.4rem;
    &::placeholder {
      color: var(--gray400);
    }
  }
  input.award-year {
    width: 60px;
  }
  input.award-name {
    flex: 1;
  }
  input.award-rank {
    width: 52px;
    text-align: center;
  }
`;
const PencilButton = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export default RoomAwarded;
