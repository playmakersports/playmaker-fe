import React, { useState } from "react";
import styled from "styled-components";
import useModal from "@/hook/useModal";

import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import CheckIcon from "@/assets/icon/common/Check.svg";

type Props = {
  title?: string;
  description?: string;
  options: Array<{ name: string; value: string }>;
  value?: string;
  onChange: (target: string) => void;
  children: React.ReactNode;
};

export const BottomSheetSelect = (props: Props) => {
  const { title, description, options, value, onChange, children } = props;
  const { showModal, ModalComponents } = useModal();
  const [selectedOption, setSelectedOption] = useState(value);

  const onSelected = (target: string) => {
    onChange(target);
    setSelectedOption(target);
  };

  return (
    <>
      <div onClick={showModal} role="button">
        {children}
      </div>
      <ModalComponents draggable="all" title={title} description={description}>
        {(closeModal) => (
          <ModalInner>
            <div className="dropdown-options">
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
            </div>
          </ModalInner>
        )}
      </ModalComponents>
    </>
  );
};

const ModalInner = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--gray200);

  div.dropdown-options {
    display: flex;
    margin: -8px -8px 0;
    flex-direction: column;
    gap: 8px;
  }

  label {
    user-select: none !important;
    display: flex;
    padding: 8px;
    align-items: center;
    justify-content: space-between;
    color: var(--gray700);
    ${FONTS.body4("regular")};
    ${BUTTON_ACTIVE("var(--gray50)")};

    input + svg {
      display: none;
      width: 24px;
      height: 24px;
      fill: var(--primary500);
    }
    input:checked + svg {
      display: block;
    }
  }
  i,
  input[type="radio"] {
    display: none;
  }
`;
