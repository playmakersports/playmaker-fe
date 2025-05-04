"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useModal from "@/hook/useModal";
import { useFormContext } from "react-hook-form";
import { usePopup } from "@/components/common/global/PopupProvider";

import { FONTS } from "@/styles/common";
import { stageFormWrapper, stageWrapper } from "./stage.css";
import { SERVICE_TERMS } from "@/constants/TERMS";
import { TERMS_LIST } from "@/constants/mock/JOIN_AGREEMENT";
import { InputCheckbox } from "@/components/common/input/SelectInput";

import RightArrowIcon from "@/assets/icon/arrow/RightArrow.svg";
import StageWrapper, { SetStepType } from "./StageWrapper";

function Stage1({ setStep }: SetStepType) {
  const { ModalComponents, showModal } = useModal();
  const { register, watch, getValues, setValue } = useFormContext();
  const popup = usePopup();
  const [selectedTerm, setSelectedTerm] = useState("");
  const [allChecked, setAllChecked] = useState(false);

  const handleAllChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setAllChecked(isChecked);
    setValue("required1", isChecked);
    setValue("required2", isChecked);
    setValue("event1", isChecked);
  };

  useEffect(() => {
    const isEveryChecked = [getValues("required1"), getValues("required2"), getValues("event1")].every((v) => v);
    setAllChecked(isEveryChecked);
  }, [watch()]);

  const handleNextStep = () => {
    const isEveryChecked = [getValues("required1"), getValues("required2")].every((v) => v);
    if (!isEveryChecked) {
      popup?.alert("필수 약관에 동의하셔야 가입할 수 있어요.", {
        showIcon: true,
        title: "약관 동의",
      });
      return;
    }
    setStep("Stage2");
  };

  return (
    <StageWrapper onClickNext={handleNextStep} start={true} length={5} current={1}>
      <div
        className={stageFormWrapper}
        style={{
          justifyContent: "space-between",
        }}
      >
        <h3 className={stageWrapper.title}>
          플메에 오신 것을 환영합니다
          <br />
          약관에 동의해 주세요
        </h3>
        <Agreement>
          <AllCheck>
            <InputCheckbox id="allChecked" size="LARGE" checked={allChecked} onChange={handleAllChecked} />
            <label htmlFor="allChecked">약관 전체 동의</label>
          </AllCheck>
          <TermList>
            {TERMS_LIST.map((term) => (
              <li key={term.termId}>
                <div>
                  <InputCheckbox size="MEDIUM" id={term.termId} {...register(term.termId)} />
                  <label htmlFor={term.termId}>
                    [{term.required ? "필수" : "선택"}] {term.termName}
                  </label>
                </div>
                <TermView
                  type="button"
                  aria-label="해당 약관 내용을 자세히"
                  onClick={() => {
                    showModal();
                    setSelectedTerm(term.termId);
                  }}
                >
                  <RightArrowIcon />
                </TermView>
              </li>
            ))}
          </TermList>
        </Agreement>
      </div>
      <ModalComponents
        draggable="bar"
        title={TERMS_LIST.find((v) => v.termId === selectedTerm)?.termName}
        buttons={[
          {
            mode: "primary",
            fillType: "light",
            name: "닫기",
            onClick: (close) => {
              close();
            },
          },
          {
            flex: 2,
            mode: "primary",
            name: "위 약관에 동의",
            onClick: (close) => {
              //   setCheckedList((prev) => ({ ...prev, [selectedTerm]: true }));
              setValue(selectedTerm, true);
              close();
            },
          },
        ]}
      >
        <TermContents>
          <div dangerouslySetInnerHTML={{ __html: SERVICE_TERMS }} />
        </TermContents>
      </ModalComponents>
    </StageWrapper>
  );
}

const Agreement = styled.div`
  display: flex;
  margin-bottom: 28px;
  flex-direction: column;
  gap: 20px;
`;
const AllCheck = styled.div`
  display: inline-flex;
  padding-bottom: 20px;
  align-items: center;
  border-bottom: 1px solid var(--gray200);
  gap: 10px;

  label {
    cursor: pointer;
    user-select: none;
    width: 100%;
    color: var(--gray900);
    ${FONTS.body3("medium")};
  }
`;
const TermList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  li {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    color: var(--gray700);
    ${FONTS.body4("regular")};

    & > div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

const TermView = styled.button`
  width: 24px;
  height: 24px;
  svg {
    width: 100%;
    height: 100%;
    fill: var(--gray400);
  }
`;
const TermContents = styled.div`
  user-select: none;
  padding: 0 12px 0 4px;
  overflow-y: auto;
  height: 60vh;
  color: var(--gray800);
  font-size: 1.3rem;

  h3 {
    font-size: 1.4rem;
    padding: 8px 0 4px;
  }
  ol {
    & > li {
      &::before {
        content: "•";
        margin-right: 4px;
      }
    }
    & > ol {
      padding-left: 8px;
    }
  }
`;

export default Stage1;
