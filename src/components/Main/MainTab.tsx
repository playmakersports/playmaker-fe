import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

type Props = {
  items: {
    value: string;
    name: string;
  }[];
  nowValue: (value: string) => void;
  initialValue?: string;
};

function MainTab({ items, nowValue, initialValue }: Props) {
  const containerRef = useRef<HTMLUListElement>(null);
  const [selected, setSelected] = useState(items[0].value);
  const [offset, setOffset] = useState(0);

  const handleClickItem = (value: string, event: React.MouseEvent<HTMLLIElement>) => {
    setSelected(value);
    setOffset(event.currentTarget.offsetLeft);
    nowValue(value);
  };

  useEffect(() => {
    if (initialValue && containerRef.current) {
      const target = containerRef.current.getElementsByClassName("selected")[0];
      const scrollLeft = containerRef.current.scrollLeft;
      setSelected(initialValue);
      setOffset(target.getBoundingClientRect().x - 24 + scrollLeft);
      nowValue(initialValue);
      target.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
  }, [initialValue, offset, containerRef, nowValue]);

  return (
    <Container ref={containerRef}>
      <SelectedBackground offset={offset} data-value={items.find((item) => item.value === selected)?.name} />
      {items.map((item) => (
        <Item
          key={item.value}
          className={selected === item.value ? "selected" : ""}
          onClick={(event) => {
            handleClickItem(item.value, event);
            event.currentTarget.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
          }}
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
const Item = styled(CommonItem)`
  color: rgb(var(--gray-h2));
  font-weight: 400;
  &.selected {
    color: var(--black);
    font-weight: 700;
  }
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
