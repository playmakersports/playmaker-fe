import React, { useState } from "react";
import styled from "styled-components";
import useModal from "@/hook/useModal";

import { InputStyledWrapper } from "./Wrapper";
import { BUTTON_ACTIVE, CARD_ACTIVE, FONTS, TEXT_ACTIVE } from "@/styles/common";

import ArrowBottomIcon from "@/assets/icon/arrow/DownArrow.svg";
import CheckIcon from "@/assets/icon/common/Check.svg";

type Props = {
  mode?: "card" | "default";
  title?: string;
  information?: { text: string; onClick: () => void };
  options: Array<{ name: string; value: string }>;
  placeholder?: string;
  defaultValue?: string;
  getCurrentValue: (target: string) => void;
};

export const DropDownBottomSheet = (props: Props) => {
  const { mode = "default", title, information, options, defaultValue, getCurrentValue, placeholder } = props;
  const { showModal, ModalComponents } = useModal();
  const [selectedOption, setSelectedOption] = useState(defaultValue ?? "");

  const onSelected = (target: string) => {
    getCurrentValue(target);
    setSelectedOption(target);
  };

  return (
    <>
      <Container>
        {title && <p className="input-title">{title}</p>}
        {mode === "default" ? (
          <Select onClick={showModal}>
            {!!selectedOption ? (
              <p className="dropdown-current-value">
                {options?.find((option) => option.value === selectedOption)?.name}
              </p>
            ) : (
              <p className="dropdown-placeholder">{placeholder}</p>
            )}

            <i className="arrow-icon">
              <ArrowBottomIcon />
            </i>
          </Select>
        ) : (
          <SelectCard onClick={showModal}>
            {!!selectedOption ? (
              <div className="dropdown-current-value">
                {options?.find((option) => option.value === selectedOption)?.name}
              </div>
            ) : (
              <div className="dropdown-placeholder">{placeholder ?? "선택"}</div>
            )}

            <i className="arrow-icon">
              <ArrowBottomIcon />
            </i>
          </SelectCard>
        )}
      </Container>
      <ModalComponents draggable="all">
        {({ closeModal }) => (
          <ModalInner>
            {options.map((option) => (
              <label key={option.value}>
                {option.name}
                <input
                  type="radio"
                  name="dropdown-option"
                  defaultChecked={selectedOption === option.value ? true : false}
                  value={option.value}
                  onClick={() => {
                    onSelected(option.value);
                    closeModal();
                  }}
                />
                <CheckIcon />
              </label>
            ))}
          </ModalInner>
        )}
      </ModalComponents>
    </>
  );
};

const Container = styled.div`
  .input-title {
    font-size: 1.4rem;
    margin-bottom: 4px;
    padding: 0 10px;
    font-weight: 500;
    color: var(--gray700);
    line-height: 2.4rem;
  }

  .input-information {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    padding: 0 8px;
    font-size: 1.2rem;
    color: var(--gray700);
    gap: 4px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
const Select = styled.div`
  cursor: pointer;
  ${TEXT_ACTIVE("var(--gray100)", { activeRange: 3 })}
  ${FONTS.body4("regular")};
  font-weight: 400;
  user-select: none;
  display: flex;
  padding: 0 2px 0 6px;
  align-items: center;
  justify-content: space-between;
  color: var(--gray500);
  gap: 8px;
  border-radius: 4px;

  i.arrow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 24px;
    svg {
      width: 20px;
      height: 22px;
      fill: var(--gray500);
    }
  }
`;
const SelectCard = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 10px 12px;
  border: 1px solid var(--gray200);
  user-select: none;
  display: flex;
  justify-content: space-between;

  div.dropdown-current-value {
    user-select: none;
    ${FONTS.body4("regular")}
  }
  div.dropdown-placeholder {
    user-select: none;
    ${FONTS.body4("regular")};
    font-weight: 400;
    color: var(--gray400);
  }
  i.arrow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray700);
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ModalInner = styled.div`
  display: flex;
  margin: 0 -6px;
  flex-direction: column;
  gap: 4px;

  label {
    user-select: none !important;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    color: var(--gray700);
    ${FONTS.body3("regular")};
    ${BUTTON_ACTIVE("var(--gray100)")};
    svg {
      fill: transparent;
    }
  }
  i,
  input[type="radio"] {
    display: none;
  }
  label:has(input:checked) {
    background-color: var(--gray50);
    svg {
      width: 24px;
      height: 24px;
      fill: var(--primary500);
    }
  }
`;
