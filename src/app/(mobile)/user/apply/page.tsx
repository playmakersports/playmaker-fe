"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import useModal from "@/hook/useModal";
import { usePopup } from "@/components/common/global/PopupProvider";
import { useHeader } from "@/hook/useHeader";

import { FONTS } from "@/styles/common";
import LoginWrapper from "@/components/User/LoginWrapper";
import { TERMS_LIST } from "@/constants/mock/JOIN_AGREEMENT";
import { InputCheckbox } from "@/components/common/input/SelectInput";

import RightArrowIcon from "@/assets/icon/arrow/RightArrow.svg";
import { SERVICE_TERMS } from "@/constants/TERMS";

function Intro() {
  useHeader({ title: "회원가입" });
  const router = useRouter();
  const { ModalComponents, showModal } = useModal();
  const popup = usePopup();
  const [selectedTerm, setSelectedTerm] = useState("");

  const [allChecked, setAllChecked] = useState(false);
  const [checkedList, setCheckedList] = useState<Record<string, boolean>>({
    required1: false,
    required2: false,
    event1: false,
  });

  useEffect(() => {
    const isEveryChecked = Object.values(checkedList).every((v) => v);
    setAllChecked(isEveryChecked);
  }, [checkedList]);

  return (
    <>
      <LoginWrapper
        button={{
          text: "확인",
          onClick: async () => {
            if (checkedList.required1 && checkedList.required2) {
              router.push(`/user/apply/process?eventAgree=${checkedList.event1 ? "T" : "F"}`);
            } else {
              await popup?.alert("", { title: "필수 약관에 모두 동의해야 합니다" });
            }
          },
        }}
      >
        <Agreement>
          <AllCheck>
            <InputCheckbox
              id="allChecked"
              checked={allChecked}
              onChange={(event) => {
                const isChecked = event.target.checked;
                setAllChecked(isChecked);
                setCheckedList({
                  required1: isChecked,
                  required2: isChecked,
                  event1: isChecked,
                });
              }}
            />
            <label htmlFor="allChecked">약관 전체 동의</label>
          </AllCheck>
          <TermList>
            {TERMS_LIST.map((term) => (
              <li key={term.termId}>
                <InputCheckbox
                  size="MEDIUM"
                  id={term.termId}
                  checked={checkedList[term.termId]}
                  onChange={(event) => setCheckedList((prev) => ({ ...prev, [term.termId]: event.target.checked }))}
                  text={{
                    title: `[${term.required ? "필수" : "선택"}] ${term.termName}`,
                  }}
                />
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
      </LoginWrapper>
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
              setCheckedList((prev) => ({ ...prev, [selectedTerm]: true }));
              close();
            },
          },
        ]}
      >
        <TermContents>
          <div dangerouslySetInnerHTML={{ __html: SERVICE_TERMS }} />
        </TermContents>
      </ModalComponents>
    </>
  );
}

const Agreement = styled.div`
  margin: 0 -16px;
`;
const AllCheck = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--gray300);
  gap: 10px;

  label {
    user-select: none;
    width: 100%;
    ${FONTS.MD1W500}
  }
`;
const TermList = styled.ul`
  li {
    display: flex;
    padding: 14px 20px;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

const TermView = styled.button`
  flex-shrink: 0;
  width: 16px;
  height: 16px;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--gray500);
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

export default Intro;
