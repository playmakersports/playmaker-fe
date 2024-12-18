import React, { useState } from "react";
import styled from "@emotion/styled";
import useModal from "@/hook/useModal";

import { InputStyledWrapper } from "./Wrapper";
import { BUTTON_ACTIVE, CARD_ACTIVE, FONTS, TEXT_ACTIVE } from "@/styles/common";

import ArrowBottomIcon from "@/assets/icon/arrow/BottomArrow.svg";
import CheckIcon from "@/assets/icon/global/CheckIcon.svg";

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
              <p className="dropdown-current-value">
                {options?.find((option) => option.value === selectedOption)?.name}
              </p>
            ) : (
              <p className="dropdown-placeholder">{placeholder ?? "선택"}</p>
            )}

            <i className="arrow-icon">
              <ArrowBottomIcon />
            </i>
          </SelectCard>
        )}
      </Container>
      <ModalComponents draggable>
        {(closeModal) => (
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
                <i>
                  <CheckIcon />
                </i>
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
  ${FONTS.MD2}
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
const SelectCard = styled(InputStyledWrapper)`
  ${CARD_ACTIVE}
  user-select: none;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px 0 rgba(141, 141, 141, 0.15);

  div.dropdown-current-value {
    ${FONTS.MD1W500}
  }
  div.dropdown-placeholder {
    ${FONTS.MD1W500}
    font-weight: 400;
    color: var(--gray500);
  }
  i.arrow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    svg {
      transform: rotate(180deg);
      fill: var(--gray400);
    }
  }
`;

const ModalInner = styled.div`
  ${FONTS.MD1W500};
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;

  label {
    user-select: none;
    display: flex;
    justify-content: space-between;
    padding: 16px 12px;
    color: var(--gray700);

    ${BUTTON_ACTIVE("var(--gray100)")}
  }
  i,
  input[type="radio"] {
    display: none;
  }
  label:has(input:checked) {
    color: var(--gray900);

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
