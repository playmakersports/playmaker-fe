import React from "react";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";

import { InputProps } from "../common/Input";
import { FONTS } from "@/styles/fonts";

function JoinInput(props: InputProps) {
  const { type, flex, id, label, readOnly = false } = props;
  const { register } = useFormContext();

  return (
    <InputWrapper flex={flex} data-label={label}>
      <InputArea placeholder=" " readOnly={readOnly} {...register(id)} />
    </InputWrapper>
  );
}

const InputWrapper = styled.div<{ flex?: number }>`
  position: relative;
  ${({ flex }) => (flex ? `flex: ${flex}` : "")};
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 16px;
  transition: all 0.3s;
  &:focus-within,
  &:has(:not(input:placeholder-shown)) {
    padding-top: 32px;
    &::before {
      content: attr(data-label);
      position: absolute;
      top: 12px;
      transform: translateY(0);
      color: ${({ theme }) => theme.black};
      ${FONTS.MD1};
      font-size: 1.4rem;
      font-weight: 700;
    }
  }

  &::before {
    content: attr(data-label);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.placeholder};
    transition: all 0.3s;
    ${FONTS.MD1};
  }
`;

const InputArea = styled.input`
  padding: 8px 0;
  width: 100%;
  color: ${({ theme }) => theme.text};
  ${FONTS.MD1};

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;

export default JoinInput;
