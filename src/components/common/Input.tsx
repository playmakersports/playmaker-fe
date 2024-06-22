import React, { useEffect, useState } from "react";
import { Control, Controller } from "react-hook-form";
import { FONTS } from "@/styles/common";
import styled from "@emotion/styled";

import DeleteAllIcon from "@/assets/icon/global/DeleteAll.svg";
import SearchIcon from "@/assets/icon/global/Search.svg";

type Props = Partial<React.InputHTMLAttributes<HTMLInputElement>> & {
  control?: Control<any>;
  search?: boolean;
  delButton?: () => void;
  styleType?: "BASIC" | "BORDER";
  medium?: boolean;
};
export function BasicInput(props: Props) {
  const { control, search, delButton, styleType = "BASIC", medium = false } = props;

  return (
    <Wrapper className={`${medium ? "medium-size" : ""} ${styleType === "BORDER" ? "border-type-input" : ""}`}>
      {search && <SearchIcon />}
      {control ? (
        <Controller
          control={control}
          name={props.name as string}
          render={({ field }) => (
            <Basic type={props.type} placeholder={props.placeholder ?? " "} {...props} {...field} />
          )}
        />
      ) : (
        <Basic placeholder={props.placeholder ?? " "} {...props} />
      )}
      {delButton && <DeleteAllIcon role="button" className="clear-input-button" onClick={delButton} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 12px;
  gap: 10px;
  align-items: center;
  background-color: rgba(var(--gray-h5), 0.9);
  border-radius: 8px;

  & > svg {
    fill: rgba(var(--gray-h3));
    width: 20px;
    height: 20px;
  }

  &.border-type-input {
    background-color: transparent;
    border: 1px solid rgba(var(--gray-h3), 1);
    border-radius: 6px;
  }
  &.medium-size {
    padding: 6px 8px;
    input {
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }

  &:has(input:disabled) {
    &.border-type-input {
      background-color: rgba(var(--gray-h6), 0.9);
      border: 1px solid rgba(var(--gray-h3), 1);
      input {
        color: rgba(var(--gray-h2), 0.8);
      }
    }
  }
`;

const Basic = styled.input`
  &[type="text"],
  &[type="date"],
  &[type="time"] {
    width: 100%;
    ${FONTS.MD1};
    font-size: 1.8rem;
    font-weight: 500;
    transition: all 0.2s;
    color: var(--black);

    &::placeholder {
      color: rgba(var(--gray-h2), 0.6);
    }

    & + .clear-input-button {
      display: none;
    }

    &:not(:placeholder-shown) + .clear-input-button {
      display: block;
    }
  }

  &[type="date"]::-webkit-calendar-picker-indicator {
    visibility: hidden;
    margin-left: -36px;
  }
  &[type="time"]::-webkit-calendar-picker-indicator,
  &[type="month"]::-webkit-calendar-picker-indicator,
  &[type="week"]::-webkit-calendar-picker-indicator,
  &[type="datetime-local"]::-webkit-calendar-picker-indicator {
    visibility: hidden;
    margin-left: -32px;
    padding-left: 10px;
  }
`;
