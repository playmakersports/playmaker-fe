import React from "react";
import styled from "@emotion/styled";

import CheckIcon from "@/assets/icon/global/CheckIcon.svg";

export function InputCheckbox(props: Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">) {
  return (
    <div style={{ position: "relative", display: "inline-block", width: "24px", height: "24px" }}>
      <Check type="checkbox" {...props} />
      <CheckIcon />
    </div>
  );
}
export function InputRadio() {
  return <input type="radio" />;
}

const Check = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  & + svg {
    padding: 4px;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    fill: rgba(var(--gray-h3));
    background-color: rgba(var(--gray-h6));
  }
  &:checked + svg {
    fill: #fff;
    background-color: var(--main);
  }
`;
