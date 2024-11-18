import React, { useImperativeHandle, useRef, useState } from "react";
import { FONTS } from "@/styles/common";
import styled from "@emotion/styled";

import { InputStyledWrapper } from "./Wrapper";
import QuestionIcon from "@/assets/icon/global/Question.svg";

export type Props = Partial<React.TextareaHTMLAttributes<HTMLTextAreaElement>> & {
  title?: string;
  displayLength?: boolean;
  information?: { text: string; onClick: () => void };
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { title, displayLength, information, onChange, ...rest } = props;
  const [length, setLength] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

  return (
    <Container style={{ width: "100%" }}>
      {title && <p className="input-title">{title}</p>}
      <TextAreaWrapper>
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
      {information && (
        <span className="input-information" onClick={information.onClick}>
          <QuestionIcon />
          {information.text}
        </span>
      )}
    </Container>
  );
});
TextArea.displayName = "TextArea";

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

const TextAreaWrapper = styled(InputStyledWrapper)`
  height: auto;
  &:has(textarea:disabled) {
    background-color: var(--gray200);
  }
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px 0;
  resize: none;
  ${FONTS.MD1};
  font-size: 1.6rem;
  font-weight: 400;
  transition: all 0.2s;
  color: var(--black);

  ${TextAreaWrapper}:has(&:focus) {
    border-color: var(--main);
  }
  &::placeholder {
    color: var(--gray500);
  }
  &:disabled {
    color: var(--gray600);
  }
`;

const Length = styled.div`
  position: absolute;
  padding: 2px 4px;
  margin: 4px 8px;
  right: 0;
  bottom: 0;
  ${FONTS.MD2};
  color: var(--gray400);
  backdrop-filter: blur(8px);
  background-color: rgba(256, 256, 256, 0.7);
  border-radius: 20px;
`;
