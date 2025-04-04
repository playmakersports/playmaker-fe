"use client";

import React, { useImperativeHandle, useRef, useState } from "react";
import { FONTS } from "@/styles/common";
import styled from "styled-components";

import { InputStyledWrapper } from "./Wrapper";
import InputWrapper from "./input/InputWrapper";
import { InputProps } from "./input/BaseInput";

type Props = Partial<React.TextareaHTMLAttributes<HTMLTextAreaElement>> & {
  displayLength?: boolean;
} & Omit<InputProps, "suffix" | "onButtonWrapClick" | "type" | "iconType" | "delButton">;

export const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { title, required, error, displayLength, description, information, onChange, ...rest } = props;
  const [length, setLength] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

  return (
    <InputWrapper title={title} required={required} information={information}>
      <TextAreaWrapper $isError={error}>
        {displayLength && (
          <Length>
            {length}
            {rest.maxLength && `/${rest.maxLength}`}
          </Length>
        )}
        <StyledTextArea
          ref={textareaRef}
          placeholder={props.placeholder ?? " "}
          onChange={(event) => {
            onChange && onChange(event);
            displayLength && setLength(event.target.value.length);
          }}
          {...rest}
        />
      </TextAreaWrapper>
      {description && <Description data-error={error}>{description}</Description>}
    </InputWrapper>
  );
});
TextArea.displayName = "TextArea";

const TextAreaWrapper = styled(InputStyledWrapper)`
  height: auto;
  &:has(textarea:disabled) {
    background-color: var(--gray50);
    border-color: var(--gray200);
  }
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px 0;

  ${FONTS.body4("regular")};
  color: var(--gray700);

  ${TextAreaWrapper}:has(&:focus) {
    border-color: var(--gray300);
  }
  &::placeholder {
    color: var(--gray400);
  }
  &:disabled {
    color: var(--gray300);
  }
`;

const Length = styled.div`
  position: absolute;
  padding: 2px 4px;
  margin: 4px 8px;
  right: 0;
  bottom: 0;
  ${FONTS.body4("regular")};
  color: var(--gray400);
  backdrop-filter: blur(8px);
  background-color: rgba(256, 256, 256, 0.7);
  border-radius: 20px;
`;

const Description = styled.p`
  margin-top: 8px;
  ${FONTS.caption1("regular")};
  color: var(--gray400);

  &[data-error="true"] {
    color: var(--red500);
  }
`;
