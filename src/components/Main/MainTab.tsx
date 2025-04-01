import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FONTS } from "@/styles/common";

type TabType = "filled" | "light" | "line";
type CommonTabProps = {
  color?: "gray" | "primary";
  size?: "small" | "medium" | "large";
  items: {
    value: string;
    name: string;
  }[];
  nowValue: (value: string) => void;
  initialValue?: string;
};
type Props =
  | ({
      type: "line";
      padding?: number;
    } & CommonTabProps)
  | ({
      type: "filled" | "light";
    } & CommonTabProps);

function MainTab(props: Props) {
  const { color = "gray", type, size = "medium", items, nowValue, initialValue } = props;
  const containerRef = useRef<HTMLUListElement>(null);
  const [selected, setSelected] = useState(items[0].value);
  const [offset, setOffset] = useState(0);

  const handleClickItem = (value: string, event: React.MouseEvent<HTMLLIElement>) => {
    setSelected(value);
    setOffset(event.currentTarget.offsetLeft);
    nowValue(value);
  };

  useLayoutEffect(() => {
    if (initialValue && containerRef.current) {
      const target = containerRef.current.getElementsByClassName("selected")[0];
      const scrollLeft = containerRef.current.scrollLeft;
      setSelected(initialValue);
      setOffset(target?.getBoundingClientRect().x - containerRef.current.getBoundingClientRect().x + scrollLeft);
      nowValue(initialValue);
      target?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
  }, [initialValue, offset, containerRef, nowValue]);

  const ACTIVE_TAB_COLOR = {
    gray: { color: "var(--gray700)", background: "var(--gray50)" },
    primary: { color: "var(--primary500)", background: "var(--primary50)" },
  };
  const TAB_STYLED: Record<TabType, any> = {
    line: {
      color: (colors: { color: string; background: string }) => {
        return {
          background: "transparent",
          color: colors.color,
          borderBottom: `2px solid ${colors.color}`,
        };
      },
      size: {
        large: { borderRadius: "0", padding: "10px 16px" },
        medium: { borderRadius: "0", padding: "10px 14px" },
        small: { borderRadius: "0", padding: "8px 12px" },
      },
    },
    light: {
      color: (colors: { color: string; background: string }) => {
        return {
          background: colors.background,
          color: colors.color,
        };
      },
      size: {
        large: { borderRadius: "8px", padding: "10px 16px" },
        medium: { borderRadius: "8px", padding: "10px 14px" },
        small: { borderRadius: "8px", padding: "8px 12px" },
      },
    },
    filled: {
      color: (colors: { color: string; background: string }) => {
        const isGray = colors.color.slice(0, 10) === "var(--gray";
        return {
          backgroundColor: isGray ? "var(--white)" : colors.color,
          color: isGray ? colors.color : "var(--white)",
        };
      },
      size: {
        large: { borderRadius: "8px", padding: "6px 16px" },
        medium: { borderRadius: "8px", padding: "6px 14px" },
        small: { borderRadius: "8px", padding: "5px 12px" },
      },
    },
  };

  return (
    <LineBottom
      data-size={size}
      style={{
        borderBottom: type === "line" ? `1px solid var(--gray200)` : "none",
        padding: type === "line" ? `0 ${props.padding}px` : type === "filled" ? "4px" : "0",
        backgroundColor: type === "filled" ? "var(--gray50)" : "transparent",
        borderRadius: type === "filled" ? "8px" : "0",
      }}
    >
      <Container ref={containerRef} role="tablist">
        <SelectedBackground
          style={{
            transform: `translate3d(${offset}px, 0, 0)`,
            boxShadow: type === "filled" && color === "gray" ? "var(--shadow-xs)" : "none",
            ...TAB_STYLED[type].size[size],
            ...TAB_STYLED[type].color(ACTIVE_TAB_COLOR[color]),
          }}
          data-size={size}
          data-type={type}
          data-value={items.find((item) => item.value === selected)?.name}
        />
        {items.map((item) => (
          <CommonItem
            key={item.value}
            role="tab"
            style={{
              ...TAB_STYLED[type].size[size],
              color: selected === item.value ? TAB_STYLED[type].color(ACTIVE_TAB_COLOR[color]).color : "var(--gray500)",
            }}
            data-size={size}
            data-active={selected === item.value}
            onClick={(event) => {
              handleClickItem(item.value, event);
              event.currentTarget.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
            }}
          >
            {item.name}
          </CommonItem>
        ))}
      </Container>
    </LineBottom>
  );
}

const LineBottom = styled.div`
  &[data-size="large"] {
    height: 44px;
  }
  &[data-size="medium"] {
    height: 40px;
  }
  &[data-size="small"] {
    height: 36px;
  }
`;
const Container = styled.ul`
  position: relative;
  display: flex;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CommonItem = styled.li`
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s;
  user-select: none;

  &[data-size="small"] {
    ${FONTS.body4("regular")};
    &[data-active="true"] {
      ${FONTS.body4("medium")};
    }
  }
  &[data-size="medium"] {
    ${FONTS.body4("regular")};
    &[data-active="true"] {
      ${FONTS.body4("medium")};
    }
  }
  &[data-size="large"] {
    ${FONTS.body3("regular")};
    &[data-active="true"] {
      ${FONTS.body3("medium")};
    }
  }
  transition: color 0.2s;
`;

const SelectedBackground = styled(CommonItem)`
  position: absolute;
  margin: 0;
  left: 0;
  transition: all 0.3s;
  will-change: transform;

  &[data-size="large"] {
    height: 44px;
    &[data-type="filled"] {
      height: 36px;
    }
  }
  &[data-size="medium"] {
    height: 40px;
    &[data-type="filled"] {
      height: 32px;
    }
  }
  &[data-size="small"] {
    height: 36px;
    &[data-type="filled"] {
      height: 28px;
    }
  }

  &::after {
    content: attr(data-value);
    visibility: hidden;
  }
`;

export default MainTab;
