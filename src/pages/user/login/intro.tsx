import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import useBgWhite from "@/hook/useBgWhite";
import { useConfirm } from "@/components/common/global/ConfirmProvider";

import { FONTS } from "@/styles/common";
import JoinStep from "@/components/User/JoinStep";
import LoginWrapper from "@/components/User/LoginWrapper";
import { InputCheckbox } from "@/components/common/SelectInput";

import RightArrowThin from "@/assets/icon/arrow/RightArrowThin.svg";
import { TERMS_LIST } from "@/constants/mock/JOIN_AGREEMENT";
import useModal from "@/hook/useModal";

function Intro() {
  useBgWhite();
  const router = useRouter();
  const { ModalComponents, showModal } = useModal();
  const confirm = useConfirm();
  const allCheckInput = useRef<HTMLInputElement>(null);
  const [selectedTerm, setSelectedTerm] = useState("");
  const [checkedList, setCheckedList] = useState<Record<string, boolean>>({
    required1: false,
    required2: false,
    event1: false,
  });

  useEffect(() => {
    if (allCheckInput.current) {
      const isEveryChecked = Object.values(checkedList).every((v) => v);
      allCheckInput.current!.checked = isEveryChecked;
    }
  }, [checkedList]);

  if (router.query.agree === "T") {
    return <JoinStep />;
  }
  return (
    <LoginWrapper
      button={{
        text: "확인",
        onClick: async () => {
          if (checkedList.required1 && checkedList.required2) {
            router.push(`/user/login/intro?agree=${checkedList.event1 ? "T" : "F"}`);
          } else {
            await confirm?.showConfirm("필수 약관에 모두 동의해야 합니다");
          }
        },
      }}
    >
      <Agreement>
        <AllCheck>
          <InputCheckbox
            id="allChecked"
            ref={allCheckInput}
            onChange={(event) => {
              const isChecked = event.target.checked;
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
              <div>
                <InputCheckbox
                  id={term.termId}
                  checked={checkedList[term.termId]}
                  onChange={(event) => setCheckedList((prev) => ({ ...prev, [term.termId]: event.target.checked }))}
                />
                <label htmlFor={term.termId}>
                  [{term.required ? "필수" : "선택"}] {term.termName}
                </label>
              </div>
              <TermView
                type="button"
                onClick={() => {
                  showModal();
                  setSelectedTerm(term.termId);
                }}
              >
                <RightArrowThin />
              </TermView>
            </li>
          ))}
        </TermList>
        <ModalComponents
          title={TERMS_LIST.find((v) => v.termId === selectedTerm)?.termName}
          buttons={[
            {
              mode: "OPTION2",
              name: "닫기",
              onClick: (close) => {
                close();
              },
            },
            {
              flex: 2,
              mode: "MAIN",
              name: "위 약관에 동의",
              onClick: (close) => {
                setCheckedList((prev) => ({ ...prev, [selectedTerm]: true }));
                close();
              },
            },
          ]}
        >
          <TermContents>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum saepe perferendis nam reprehenderit!
            Necessitatibus culpa quaerat iure vitae qui odit, nihil dolorem velit sapiente perferendis rem alias est
            consequuntur praesentium.
          </TermContents>
        </ModalComponents>
      </Agreement>
    </LoginWrapper>
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
  border-bottom: 1px solid var(--gray7);
  gap: 10px;

  label {
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
      width: 100%;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      ${FONTS.MD2};
      font-weight: 400;
      color: var(--gray3);
    }
    label {
      width: 100%;
    }
  }
`;

const TermView = styled.button`
  flex-shrink: 0;
  width: 16px;
  height: 16px;

  svg {
    fill: var(--gray3);
  }
`;
const TermContents = styled.div``;

export default Intro;