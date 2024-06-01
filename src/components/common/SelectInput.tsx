import React from "react";
import styled from "@emotion/styled";
import { Control, Controller } from "react-hook-form";

import CheckIcon from "@/assets/icon/global/CheckIcon.svg";

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  control?: Control<any>;
};
export function InputCheckbox(props: Props) {
  const { control } = props;

  return (
    <div style={{ position: "relative", display: "inline-block", width: "24px", height: "24px" }}>
      {control ? (
        <Controller
          control={control}
          name={props.name as string}
          render={({ field }) => <Check type="checkbox" id={props.id} {...field} />}
        />
      ) : (
        <Check type="checkbox" {...props} />
      )}
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
    padding: 5px;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    fill: rgba(var(--gray-h3), 0.7);
    background-color: rgba(var(--gray-h6));
  }
  &:checked + svg {
    fill: #fff;
    background-color: var(--main);
  }
`;
