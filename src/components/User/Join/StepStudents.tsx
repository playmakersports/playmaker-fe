import React, { FocusEvent, useState } from "react";
import styled from "@emotion/styled";

import StagePageContainer from "@/components/layouts/StagePageContainer";
import { BasicInput } from "@/components/common/Input";

import CheckIcon from "@/assets/icon/global/CheckIcon.svg";

function StepStudents({ setStep }: { setStep: (prev: number) => void }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedUniv, setSelectedUniv] = useState("");

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
        },
      }}
    >
      <BasicInput
        type="text"
        id="univNameSearch"
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        placeholder="대학명을 입력해주세요"
      />
      <UnivList>
        {MOCK_UNIV.map((univ) => (
          <li
            key={univ.universityId}
            className={selectedUniv === univ.universityId ? "selected" : ""}
            onClick={() => setSelectedUniv(univ.universityId)}
          >
            {univ.universityName}
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
  li {
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    line-height: 2.4rem;
    padding: 20px 10px;
    border-bottom: 1px solid var(--gray100);
    &:last-of-type {
      border-bottom: none;
    }
    &.selected {
      font-weight: 500;
      color: var(--main);
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
