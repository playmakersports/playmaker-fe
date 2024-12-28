import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import styled from "styled-components";
import { useConfirm } from "../common/global/ConfirmProvider";

import PencilIcon from "@/assets/icon/global/Pencil.svg";

type Props = {
  awardsList: Array<{
    awardedYear: number;
    competitionName: string;
    awardedRank: number;
  }>;
};

const RANK_DISPLAY: Record<string, { name: string; color: string }> = {
  1: { name: "1위", color: "#FBBC00" },
  2: { name: "2위", color: "var(--gray500)" },
  3: { name: "3위", color: "#BF7C00" },
};

function RoomAwarded({ awardsList }: Props) {
  const { register, handleSubmit, reset, setFocus } = useForm();
  const confirm = useConfirm();
  const [showForm, setShowForm] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    await confirm?.showAlert("새로운 수상 경력이 추가됐어요");
    setShowForm(false);
    reset();
  };

  const onFormFocus = () => {
    setShowForm((prev) => !prev);
    setFocus("year");
  };

  return (
    <Container>
      <Title>
        <h3>수상 경력</h3>
        <PencilButton type="button" className="open-form-button" onClick={onFormFocus} aria-label="경력 편집">
          <PencilIcon />
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
            <li key={`awarded-${idx}`}>
              <span className="award-year">{award.awardedYear}년</span>
              <span className="award-name">{award.competitionName}</span>
              <span className="award-rank" style={{ color: RANK_DISPLAY[award.awardedRank].color, fontWeight: 600 }}>
                {RANK_DISPLAY[award.awardedRank].name}
              </span>
            </li>
          ))}
        </AwardList>
        <Form onSubmit={handleSubmit(onSubmit)} $show={showForm}>
          <input type="text" className="award-year" placeholder="연도" {...register("year")} />
          <input
            type="text"
            className="award-name"
            placeholder="대회명을 입력하세요"
            {...register("competitionName")}
          />
          <input type="text" className="award-rank" placeholder="예) 동상" {...register("competitionRank")} />
          <PencilButton type="submit" className="submit-button" aria-label="경력 추가">
            <PencilIcon />
          </PencilButton>
        </Form>
      </Contents>
    </Container>
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
    padding: 20px 14px;
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

    span {
      display: inline-flex;
      align-items: center;
    }
    span.award-year {
      width: 60px;
    }
    span.award-name {
      flex: 1;
    }
    span.award-rank {
      width: 52px;
      justify-content: center;
    }
  }
`;

const Form = styled.form<{ $show: boolean }>`
  display: flex;
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  gap: 10px;
  padding: 10px 16px;
  background-color: var(--gray50);
  border-radius: 10px;

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
  align-items: center;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
  }

  width: 24px;
  height: 24px;
  &.submit-button {
    position: absolute;
    padding: 4px;
    width: 28px;
    height: 28px;
    top: 16px;
    right: 12px;
    gap: 8px;
    background-color: var(--main);
    color: #fff;
    font-size: 1.4rem;
    border-radius: 20px;
    svg {
      fill: #fff;
    }
  }
`;

export default RoomAwarded;
