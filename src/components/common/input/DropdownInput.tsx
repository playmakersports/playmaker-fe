import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { flip, hide, offset, useDismiss, useFloating, useInteractions } from "@floating-ui/react";

import { InputWrapperStyledProps } from "./type";
import { FONTS } from "@/styles/common";
import InputWrapper from "./InputWrapper";
import { InputStyledWrapper } from "../Wrapper";
import { DropdownAsset } from "./container";

import CheckIcon from "@/assets/icon/common/Check.svg";
import DownArrow from "@/assets/icon/arrow/DownArrow.svg";

type OptionsType = { name: string; value: string };
type Props = {
  value: string;
  onChange: (target: string) => void;
  options: Array<OptionsType>;
  optionsTitle?: string;
  placeholder: string;
  disabled?: boolean;
  description?: string;
  error?: boolean;
  size?: "small" | "medium";
} & InputWrapperStyledProps;
function DropdownInput(props: Props) {
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
    size = "medium",
  } = props;
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const optionsRefs = useRef<HTMLButtonElement[]>([]);

  const { refs, floatingStyles, middlewareData, context } = useFloating({
    placement: "bottom-start",
    open: showOptions,
    onOpenChange: setShowOptions,
    middleware: [hide(), flip(), offset(8)],
  });
  const dismiss = useDismiss(context);
  const { getFloatingProps } = useInteractions([dismiss]);

  useEffect(() => {
    const outSideClick = (e: any) => {
      if (showOptions && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mouseup", outSideClick);
  }, [showOptions]);

  const onKeyupOptionsOpen = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowOptions(false);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextOption = optionsRefs.current[0];
      nextOption.focus();
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

  const onClickOpenOptions = () => {
    if (disabled) return;
    setShowOptions((prev) => !prev);
  };

  return (
    <InputWrapper title={title} required={required} information={information}>
      <ValueContainer
        type="button"
        aria-label={`,${title ?? ""} ${placeholder} 옵션 열기. 현재 선택된 항목 - ${
          options.find((v) => v.value === value)?.name ?? "없음"
        }`}
        role="menu"
        // ref={dropdownRef}
        ref={refs.setReference}
        data-error={error}
        aria-disabled={disabled}
        data-state={value === "" ? "placeholder" : ""}
        data-size={size}
        onClick={onClickOpenOptions}
        onKeyUp={onKeyupOptionsOpen}
      >
        <span className="current-value">
          {value === "" ? placeholder : options.find((v) => v.value === value)?.name}
        </span>
        <DropdownIcon>
          <DownArrow />
        </DropdownIcon>
      </ValueContainer>
      {description && <Description data-error={error}>{description}</Description>}

      {showOptions && (
        <DropdownAsset.Box
          ref={refs.setFloating}
          data-size={size}
          style={{
            ...floatingStyles,
            visibility: middlewareData.hide?.referenceHidden ? "hidden" : "visible",
          }}
          {...getFloatingProps()}
        >
          {optionsTitle && <OptionsTitle>{optionsTitle}</OptionsTitle>}
          <DropdownAsset.List>
            {options.map((option, index) => (
              <button
                key={option.value}
                aria-label={option.name}
                role="option"
                aria-selected={option.value === value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setShowOptions(false);
                }}
                data-active={option.value === value}
                ref={(element) => {
                  if (element) {
                    optionsRefs.current[index] = element as HTMLButtonElement;
                  }
                }}
                onKeyUp={(e) => onKeyupOptionSelect(e, index)}
              >
                <span className="option-name">{option.name}</span>
                <span className="icon">
                  <CheckIcon />
                </span>
              </button>
            ))}
          </DropdownAsset.List>
        </DropdownAsset.Box>
      )}
    </InputWrapper>
  );
}
const ValueContainer = styled(InputStyledWrapper).attrs({ as: "button" })`
  cursor: pointer;
  min-width: max-content;
  color: var(--gray700);
  background-color: var(--white);
  ${FONTS.body4("regular")};

  span.current-value {
    user-select: none;
    flex: 1;
    font-variant-numeric: tabular-nums;
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
  &[data-size="small"] {
    ${FONTS.body4("medium")};
    width: fit-content;
    height: 32px;
    padding: 0 8px 0 12px;
    gap: 4px;
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

export default DropdownInput;
