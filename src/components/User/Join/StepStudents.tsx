import React, { FocusEvent, useState } from "react";
import styled from "@emotion/styled";
import { useGet } from "@/apis/hook/query";
import { useAtom } from "jotai";

import { atomServiceApply } from "@/atom/user";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import { BasicInput } from "@/components/common/Input";
import { SCROLL_HIDE } from "@/styles/common";
import Loading from "@/components/common/Loading";

import CheckIcon from "@/assets/icon/global/CheckIcon.svg";
import { ApiCodeUniversity } from "@/apis/types/user";

function StepStudents({ setStep }: { setStep: (prev: number) => void }) {
  const [applyValues, setApplyValues] = useAtom(atomServiceApply);
  const [inputValue, setInputValue] = useState("");
  const [selectedUniv, setSelectedUniv] = useState(applyValues.university ?? "");
  const { data, isLoading, isSuccess } = useGet<ApiCodeUniversity>(`/api/code/university/${inputValue}`, undefined, {
    enabled: inputValue.length > 0,
  });

  // Debounce
  const onFocusInput = (e: FocusEvent<HTMLInputElement>) => {
    const intervalId = setInterval(() => {
      setInputValue(e.target.value);
    }, 900);
    e.target.addEventListener("blur", () => clearInterval(intervalId), { once: true });
  };
  const onBlurInput = (e: FocusEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <StagePageContainer
      title="소속 대학을 선택해주세요"
      button={{
        text: "다음",
        disabled: selectedUniv === "",
        onClick: () => {
          setStep(2);
          setApplyValues((prev) => ({ ...prev, university: selectedUniv }));
        },
      }}
    >
      <BasicInput
        type="text"
        id="univNameSearch"
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        placeholder="대학명을 입력해주세요"
        delButton
      />
      <UnivList>
        {isSuccess && !(data.length > 0) && <p>검색된 대학이 없어요</p>}
        {isLoading && <Loading />}
        {data?.map((univ) => (
          <li
            key={univ.universityId}
            className={selectedUniv === univ.universityId ? "selected" : ""}
            onClick={() => setSelectedUniv(univ.universityId)}
          >
            <span className="univ-name">
              {univ.universityName} {univ.universityAlias && <span className="alias">{univ.universityAlias}</span>}
            </span>
            {selectedUniv === univ.universityId && (
              <i className="check-icon">
                <CheckIcon />
              </i>
            )}
          </li>
        ))}
      </UnivList>
    </StagePageContainer>
  );
}

const MOCK_UNIV = [
  { universityId: "1", universityName: "성신여자대학교" },
  { universityId: "2", universityName: "서울대학교" },
  { universityId: "13", universityName: "한양대학교" },
];

const UnivList = styled.ul`
  margin: 16px 0 4px;
  font-weight: 500;
  font-size: 1.6rem;
  max-height: calc(100vh - var(--header-height) - 260px);
  overflow-y: auto;
  ${SCROLL_HIDE}

  li {
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 64px;
    border-bottom: 1px solid var(--gray100);
    font-weight: 400;
    line-height: 2.4rem;
    &:last-of-type {
      border-bottom: none;
    }
    &.selected {
      font-weight: 500;
      color: var(--main);
      span.alias {
        background-color: rgba(var(--sub2-rgb), 0.5);
        color: var(--main);
      }
    }

    span.univ-name {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    span.alias {
      display: inline-block;
      padding: 3px 6px;
      font-size: 1.3rem;
      line-height: 1.4rem;
      background-color: var(--gray100);
      color: var(--gray700);
      border-radius: 4px;
    }

    i {
      display: flex;
      padding: 2px;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      background-color: var(--main);
      border-radius: 50%;
      svg {
        width: 14px;
        height: 14px;
      }
    }
  }
`;

export default StepStudents;
