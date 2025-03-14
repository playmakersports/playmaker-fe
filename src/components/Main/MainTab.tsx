import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = {
  type?: "fill" | "line";
  padding?: number;
  items: {
    value: string;
    name: string;
  }[];
  nowValue: (value: string) => void;
  initialValue?: string;
};

function MainTab({ type = "fill", padding = 0, items, nowValue, initialValue }: Props) {
  const containerRef = useRef<HTMLUListElement>(null);
  const [selected, setSelected] = useState(items[0].value);
  const [offset, setOffset] = useState(padding ?? 0);

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
      setOffset(target.getBoundingClientRect().x - containerRef.current.getBoundingClientRect().x + scrollLeft);
      nowValue(initialValue);
      target.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
  }, [initialValue, offset, containerRef, nowValue]);

  return (
    <LineBottom type={type}>
      <Container ref={containerRef} role="tablist" padding={padding} type={type}>
        <SelectedBackground
          type={type}
          offset={offset}
          data-value={items.find((item) => item.value === selected)?.name}
        />
        {items.map((item) => (
          <Item
            key={item.value}
            type={type}
            role="tab"
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
    </LineBottom>
  );
}

const LineBottom = styled.div<{ type: Props["type"] }>`
  width: ${({ type }) => (type === "line" ? "calc(100% + 32px)" : "100%")};
  margin: 0 -16px;
  padding: 1px 16px 0;
  border-bottom: ${({ type }) => (type === "line" ? "1px solid var(--gray200)" : "none")};
`;
const Container = styled.ul<{ padding: number; type: Props["type"] }>`
  position: relative;
  padding: ${({ type, padding }) => `0 ${type === "line" ? "20px 1" : padding}px`};
  display: flex;
  width: ${({ type }) => (type === "line" ? "calc(100% + 32px)" : "100%")};
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  margin: ${({ type }) => (type === "line" ? "0 -16px -1px" : "")};
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CommonItem = styled.li<{ type: Props["type"] }>`
  cursor: pointer;
  z-index: 1;
  flex: ${({ type }) => (type === "line" ? "1" : "none")};
  margin: ${({ type }) => (type === "line" ? "0 0 -1px" : "8px 0")};
  padding: ${({ type }) => (type === "line" ? "10px 20px" : "0 20px")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  text-align: center;
  transition: all 0.3s;
  user-select: none;
  border-bottom: 1px solid transparent;
  &:last-of-type {
    border-right: none;
  }
`;
const Item = styled(CommonItem)`
  color: var(--gray1);
  font-weight: 400;
  color: var(--gray600);
  transition: border-bottom 0.3s, font-weight 0.3s, color 0.2s;
  transition-delay: ${({ type }) => (type === "line" ? "0.05s" : "")};

  &.selected {
    border-bottom: ${({ type }) => (type === "line" ? "1px solid var(--main)" : "transparent")};
    color: ${({ type }) => (type === "line" ? "var(--main)" : "var(--white)")};
    font-weight: ${({ type }) => (type === "line" ? 600 : 700)};
  }
`;

const SelectedBackground = styled(CommonItem)<{ offset: number }>`
  position: absolute;
  margin: 0;
  left: 0;
  transform: translate3d(${({ offset }) => offset}px, 0, 0);
  padding: ${({ type }) => (type === "line" ? "10px" : "8px")} 20px;
  background-color: ${({ type }) => (type === "line" ? "transparent" : "var(--main)")};
  border-bottom: ${({ type }) => (type === "line" ? "1px solid var(--main)" : "none")};
  border-radius: ${({ type }) => (type === "line" ? "0" : "16px")};
  will-change: transform;

  &::after {
    content: attr(data-value);
    visibility: hidden;
  }
`;

export default MainTab;
