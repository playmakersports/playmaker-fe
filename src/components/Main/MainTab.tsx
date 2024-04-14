import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  items: {
    value: string;
    name: string;
  }[];
};

function MainTab({ items }: Props) {
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
`;
const Item = styled.li`
  padding: 32px 4px 12px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 68px;
  background-color: ${({ theme }) => theme.gray3};
  color: ${({ theme }) => theme.black};
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;

  &.active {
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme.gray1};
    color: ${({ theme }) => theme.white};
    font-weight: 600;
  }
`;

export default MainTab;
