"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useConfirm } from "../common/global/ConfirmProvider";

import MoreVerticalIcon from "@/assets/icon/common/MenuDots.svg";
import useModal from "@/hook/useModal";
import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import Button from "../common/Button";

type Props = {
  year: number;
  competitionName: string;
  awardedRank: number;
};

const RANK_DISPLAY: Record<string, { name: string; color: string }> = {
  1: { name: "1위", color: "#FBBC00" },
  2: { name: "2위", color: "var(--gray500)" },
  3: { name: "3위", color: "#BF7C00" },
};

function AwardedItem(props: Props) {
  const { year, competitionName, awardedRank } = props;
  const [showEditForm, setShowEditForm] = useState(false);
  const confirm = useConfirm();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      year,
      competitionName,
      competitionRank: awardedRank,
    },
  });
  const { ModalComponents, showModal } = useModal();

  const onClickDelete = async () => {
    const isConfirm = await confirm?.showConfirm("선택된 경력을 삭제할까요?", { yes: "네, 삭제할게요", no: "취소" });
    if (isConfirm) {
      console.log("삭제됨");
    }
  };
  const onClickCloseModal = (close: () => void) => {
    setShowEditForm(false);
    close();
  };

  return (
    <>
      <Container>
        <span className="award-year">{year}년</span>
        <span className="award-name">{competitionName}</span>
        <span className="award-rank" style={{ color: RANK_DISPLAY[awardedRank].color, fontWeight: 600 }}>
          {RANK_DISPLAY[awardedRank].name}
          <button type="button" onClick={showModal} aria-label="상세 경력 메뉴">
            <MoreVerticalIcon />
          </button>
        </span>
      </Container>
      <ModalComponents disabledDimOut={showEditForm}>
        {(close) => (
          <>
            <Menu>
              <button type="button" onClick={onClickDelete}>
                삭제
              </button>
              <button type="button" onClick={() => setShowEditForm((prev) => !prev)}>
                수정
              </button>
            </Menu>
            {showEditForm && (
              <EditForm>
                <div className="form-wrapper">
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
                </div>
                <div className="button-group">
                  <Button type="button" mode="gray" fullWidth onClick={() => onClickCloseModal(close)}>
                    취소
                  </Button>
                  <Button type="submit" mode="primary" fullWidth>
                    확인
                  </Button>
                </div>
              </EditForm>
            )}
          </>
        )}
      </ModalComponents>
    </>
  );
}

const Container = styled.li`
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
    display: flex;
    align-items: center;
    width: 52px;
    justify-content: center;
    gap: 5px;
    & > button {
      width: 18px;
      height: 18px;
      svg {
        width: 16px;
        height: 16px;
        fill: var(--gray400);
      }
    }
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  button {
    ${FONTS.MD1W500};
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
    padding: 16px 12px;
    color: var(--gray700);
    user-select: none;

    ${BUTTON_ACTIVE("var(--gray100)")}
  }
`;

const EditForm = styled.form`
  div.form-wrapper {
    display: flex;
    margin: 8px 0 20px;
    gap: 10px;
    padding: 10px 16px;
    background-color: var(--gray50);
    border: 1px solid transparent;
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
  }

  div.button-group {
    display: flex;
    gap: 10px;
  }
`;

export default AwardedItem;
