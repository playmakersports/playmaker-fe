import styled from "@emotion/styled";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};
function InputRadioWrapper({ title, children }: Props) {
  return (
    <Container>
      <p className="input-title">{title}</p>
      <Items>{children}</Items>
    </Container>
  );
}

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

const Items = styled.div`
  display: flex;
  gap: 10px;
`;

export default InputRadioWrapper;
