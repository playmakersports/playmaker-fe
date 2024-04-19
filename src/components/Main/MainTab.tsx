import React, { useState } from "react";
import styled from "@emotion/styled";

type Props = {
  items: {
    value: string;
    name: string;
  }[];
  nowValue: (value: string) => void;
};

function MainTab({ items, nowValue }: Props) {
  const [selected, setSelected] = useState(items[0].value);
  const [offset, setOffset] = useState(0);

  const handleClickItem = (value: string, event: React.MouseEvent<HTMLLIElement>) => {
    setSelected(value);
    setOffset(event.currentTarget.offsetLeft);
    nowValue(value);
  };

  return (
    <Container>
      <SelectedBackground offset={offset} data-value={items.find((item) => item.value === selected)?.name} />
      {items.map((item) => (
        <Item
          key={item.value}
          selected={selected === item.value}
          onClick={(event) => handleClickItem(item.value, event)}
        >
          {item.name}
        </Item>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  position: relative;
  display: flex;
  margin: 0 8px 8px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CommonItem = styled.li`
  cursor: pointer;
  z-index: 1;
  margin: 10px 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  text-align: center;
  transition: all 0.3s;
  user-select: none;
  &:last-of-type {
    border-right: none;
  }
`;
const Item = styled(CommonItem)<{ selected: boolean }>`
  color: ${({ selected, theme }) => (selected ? theme.black : theme.gray1)};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
`;

const SelectedBackground = styled(CommonItem)<{ offset: number }>`
  position: absolute;
  margin: 0;
  left: ${({ offset }) => offset}px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.gray4};
  border-radius: 16px;
  &::after {
    content: attr(data-value);
    visibility: hidden;
  }
`;

export default MainTab;
