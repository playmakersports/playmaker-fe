import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  items: {
    value: string;
    name: string;
  }[];
};

function Tab({ items }: Props) {
  const [selected, setSelected] = useState(items[0].value);

  return (
    <Container>
      {items.map((item) => (
        <Item key={item.value} className={selected === item.value ? "active" : ""}>
          {item.name}
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  gap: 12px;
`;
const Item = styled.li`
  padding: 6px 12px;
  display: flex;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.gray3};
  color: ${({ theme }) => theme.black};
  font-size: 1.6rem;
  font-weight: 400;

  &.active {
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme.gray1};
    color: ${({ theme }) => theme.white};
    font-weight: 600;
  }
`;

export default Tab;
