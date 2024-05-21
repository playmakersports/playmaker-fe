import React, { useState } from "react";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";

type Props = {
  id: string;
  items: {
    value: string;
    name: string;
  }[];
};

function RadioTab({ id, items }: Props) {
  const { register } = useFormContext();
  const [selected, setSelected] = useState(items[0].name);
  const [offset, setOffset] = useState(3);

  return (
    <Container>
      <SelectedBackground offset={offset} data-value={selected} />
      {items.map((item) => (
        <ItemWrapper
          style={{ zIndex: 1 }}
          key={item.value}
          onClick={(event) => {
            setSelected(item.name);
            setOffset(event.currentTarget.offsetLeft);
          }}
        >
          <input type="radio" id={item.value} value={item.value} {...register(id)} />
          <Item htmlFor={item.value}>{item.name}</Item>
        </ItemWrapper>
      ))}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  background-color: rgba(var(--main-rgb), 0.15);
  border-radius: 12px;
  padding: 3px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ItemWrapper = styled.div`
  input {
    display: none;
  }

  input:checked + label {
    color: #fff;
    font-weight: 700;
  }
`;
const Item = styled.label`
  cursor: pointer;
  z-index: 1;
  margin: 3px 0;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  text-align: center;
  transition: all 0.3s;
  user-select: none;
  color: var(--main-white);
`;

const SelectedBackground = styled(Item)<{ offset: number }>`
  position: absolute;
  margin: 0;
  left: ${({ offset }) => offset}px;
  padding: 3px 10px;
  background-color: var(--main);
  border-radius: 10px;
  &::after {
    content: attr(data-value);
    visibility: hidden;
  }
`;

export default RadioTab;
