import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { InputWrapperStyledProps } from "./type";
import { FONTS, SCROLL_HIDE } from "@/styles/common";
import InputWrapper from "./InputWrapper";
import { InputStyledWrapper } from "../Wrapper";
import { DropdownAsset } from "./container";
import Chip from "../Chip";

import BottomToggleArrowIcon from "@/assets/icon/arrow/DownArrowToggle.svg";
import CheckIcon from "@/assets/icon/common/filled/CheckIcon.svg";
import CloseIcon from "@/assets/icon/common/Close20.svg";

type OptionsType = { name: string; value: string };
type Props = {
  value: string[];
  onChange: (target: string[]) => void;
  options: Array<OptionsType>;
  optionsTitle?: string;
  placeholder: string;
  disabled?: boolean;
  description?: string;
  error?: boolean;
} & InputWrapperStyledProps;
function DropdownMulti(props: Props) {
  const {
    title,
    required = false,
    information,
    value,
    onChange,
    options,
    placeholder,
    description,
    optionsTitle,
    disabled = false,
    error = false,
  } = props;
  const [showOptions, setShowOptions] = useState(false);
  const [position, setPosition] = useState("left");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    const outSideClick = (e: any) => {
      if (showOptions && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mouseup", outSideClick);
  }, [showOptions]);

  useEffect(() => {
    const checkPosition = () => {
      if (!dropdownRef.current) return;
      const rect = dropdownRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const elementCenter = rect.left + rect.width / 2;
      const viewportCenter = windowWidth / 2;

      if (elementCenter < viewportCenter) {
        setPosition("left");
      } else {
        setPosition("right");
      }
    };

    checkPosition();
    window.addEventListener("resize", checkPosition);

    return () => {
      window.removeEventListener("resize", checkPosition);
    };
  }, []);

  const onKeyupOptionsOpen = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowOptions(false);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextOption = optionsRefs.current[0];
      nextOption.focus();
      console.log(nextOption);
    }
  };
  const onKeyupOptionSelect = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Escape") {
      setShowOptions(false);
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextOption = optionsRefs.current[index + 1];
      nextOption?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevOption = optionsRefs.current[index - 1];
      prevOption?.focus();
    }
  };

  const onClickOptionItem = (option: OptionsType) => {
    if (value.includes(option.value)) {
      onChange(value.filter((item) => item !== option.value));
    } else {
      onChange([...value, option.value]);
    }
  };

  const onClickOpenOptions = () => {
    if (disabled) return;
    setShowOptions((prev) => !prev);
  };

  return (
    <InputWrapper title={title} required={required} information={information}>
      <div ref={dropdownRef}>
        <ValueContainer
          type="button"
          role="menu"
          data-error={error}
          aria-disabled={disabled}
          data-state={value.length === 0 ? "placeholder" : ""}
          onClick={onClickOpenOptions}
          onKeyUp={onKeyupOptionsOpen}
        >
          <span className="current-value">
            {value.length > 0
              ? value.map((v) => (
                  <Chip
                    key={v}
                    fillType="outline"
                    type="gray"
                    size="small"
                    closeAction={() => onChange(value.filter((item) => item !== v))}
                  >
                    {options.find((option) => option.value === v)?.name}
                  </Chip>
                ))
              : placeholder}
          </span>
          <div className="dropdown-icons">
            {value.length > 0 && (
              <>
                <DropdownIcon
                  onClick={(event) => {
                    event.stopPropagation();
                    onChange([]);
                  }}
                  aria-label="모두 지우기"
                >
                  <CloseIcon />
                </DropdownIcon>
                <div style={{ width: "1px", height: "16px", backgroundColor: "var(--gray200)" }} />
              </>
            )}
            <DropdownIcon>
              <BottomToggleArrowIcon />
            </DropdownIcon>
          </div>
        </ValueContainer>
        {description && <Description data-error={error}>{description}</Description>}

        <DropdownAsset.Box $isShow={showOptions} style={{ [position]: 0 }}>
          {optionsTitle && <OptionsTitle>{optionsTitle}</OptionsTitle>}
          <DropdownAsset.MultiList>
            {options.map((option, index) => (
              <button
                key={option.value}
                aria-label={option.name}
                role="option"
                type="button"
                onClick={() => onClickOptionItem(option)}
                data-active={value.includes(option.value)}
                ref={(element) => {
                  if (element) {
                    optionsRefs.current[index] = element as HTMLButtonElement;
                  }
                }}
                onKeyUp={(e) => onKeyupOptionSelect(e, index)}
              >
                <span className="icon">
                  <CheckIcon />
                </span>
                <span className="option-name">{option.name}</span>
              </button>
            ))}
          </DropdownAsset.MultiList>
        </DropdownAsset.Box>
      </div>
    </InputWrapper>
  );
}
const ValueContainer = styled(InputStyledWrapper).attrs({ as: "button" })`
  cursor: pointer;
  justify-content: space-between;
  color: var(--gray700);
  background-color: var(--white);
  ${FONTS.body4("regular")};

  span.current-value {
    user-select: none;
    display: flex;
    gap: 4px;
    flex: 1;
    overflow: auto;
    font-variant-numeric: tabular-nums;
    ${SCROLL_HIDE}
  }
  div.dropdown-icons {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
  & svg {
    fill: var(--gray700);
  }
  &[data-state="placeholder"] {
    color: var(--gray400);
  }
  &[aria-disabled="true"] {
    cursor: not-allowed;
    color: var(--gray300);
    border-color: var(--gray200);
    background-color: var(--gray50);
    & svg {
      fill: var(--gray300);
    }
  }
  &[data-error="true"] {
    border-color: var(--red500);
  }
`;

const Description = styled.p`
  margin-top: 8px;
  ${FONTS.caption1("regular")};
  color: var(--gray400);

  &[data-error="true"] {
    color: var(--red500);
  }
`;

const OptionsTitle = styled.div`
  margin: 0 -4px;
  padding: 10px 14px;
  width: calc(100% + 8px);
  border-bottom: 1px solid var(--gray200);
  text-align: left;
  ${FONTS.body4("semibold")}
`;
const DropdownIcon = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  & > svg {
    width: 100%;
    height: auto;
    fill: var(--gray700);
  }
`;

export default DropdownMulti;
