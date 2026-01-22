import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { F as FONTS } from "./common-6ceLbjxn.js";
function MainTab(props) {
  const { color = "gray", type, size = "medium", items, nowValue, initialValue, sameWidth = false } = props;
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(initialValue ?? items[0].value);
  const [selectedWidth, setSelectedWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const handleClickItem = (value, event) => {
    setSelected(value);
    setOffset(event.currentTarget.offsetLeft);
    nowValue(value);
    setSelectedWidth(event.currentTarget.clientWidth);
    event.currentTarget.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  };
  useLayoutEffect(() => {
    setIsReady(true);
    if (containerRef.current) {
      const selectedItem = containerRef.current.querySelector(`[data-active="true"]`);
      if (selectedItem) {
        setOffset(selectedItem.getBoundingClientRect().left - containerRef.current.getBoundingClientRect().left);
        setSelectedWidth(selectedItem.clientWidth);
      }
    }
  }, [items, selected]);
  const ACTIVE_TAB_COLOR = {
    gray: { color: "var(--gray700)", background: "var(--gray50)" },
    primary: { color: "var(--primary500)", background: "var(--primary50)" }
  };
  const TAB_STYLED = {
    line: {
      color: (colors) => {
        return {
          background: "transparent",
          color: colors.color,
          borderBottom: `2px solid ${colors.color}`
        };
      },
      size: {
        large: { borderRadius: "0", padding: "10px 16px" },
        medium: { borderRadius: "0", padding: "10px 14px" },
        small: { borderRadius: "0", padding: "8px 12px" }
      }
    },
    light: {
      color: (colors) => {
        return {
          background: colors.background,
          color: colors.color
        };
      },
      size: {
        large: { borderRadius: "8px", padding: "10px 16px" },
        medium: { borderRadius: "8px", padding: "10px 14px" },
        small: { borderRadius: "8px", padding: "8px 12px" }
      }
    },
    filled: {
      color: (colors) => {
        const isGray = colors.color.slice(0, 10) === "var(--gray";
        return {
          backgroundColor: isGray ? "var(--white)" : colors.color,
          color: isGray ? colors.color : "var(--white)"
        };
      },
      size: {
        large: { borderRadius: "8px", padding: "6px 16px" },
        medium: { borderRadius: "8px", padding: "6px 14px" },
        small: { borderRadius: "8px", padding: "5px 12px" }
      }
    }
  };
  return /* @__PURE__ */ jsx(
    LineBottom,
    {
      "data-size": size,
      style: {
        borderBottom: type === "line" ? `1px solid var(--gray200)` : "none",
        padding: type === "line" ? `0 ${props.padding}px` : type === "filled" ? "4px" : "0",
        backgroundColor: type === "filled" ? "var(--gray50)" : "transparent",
        borderRadius: type === "filled" ? "8px" : "0"
      },
      children: /* @__PURE__ */ jsxs(Container, { ref: containerRef, role: "tablist", children: [
        /* @__PURE__ */ jsx(
          SelectedBackground,
          {
            style: {
              opacity: isReady ? 1 : 0,
              width: `${selectedWidth}px`,
              transform: `translate3d(${offset}px, 0, 0)`,
              boxShadow: type === "filled" && color === "gray" ? "var(--shadow-xs)" : "none",
              flex: sameWidth ? 1 : "",
              ...TAB_STYLED[type].size[size],
              ...TAB_STYLED[type].color(ACTIVE_TAB_COLOR[color])
            },
            "aria-disabled": "true",
            "aria-hidden": "true",
            "data-size": size,
            "data-type": type
          }
        ),
        items.map((item) => /* @__PURE__ */ jsx(
          CommonItem,
          {
            role: "tab",
            style: {
              ...TAB_STYLED[type].size[size],
              color: selected === item.value ? TAB_STYLED[type].color(ACTIVE_TAB_COLOR[color]).color : "var(--gray500)",
              flex: sameWidth ? 1 : ""
            },
            "data-size": size,
            "data-active": selected === item.value,
            "data-disabled": item.disabled,
            onClick: (event) => {
              handleClickItem(item.value, event);
            },
            children: item.name
          },
          item.value
        ))
      ] })
    }
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
  &[data-disabled="true"] {
    pointer-events: none;
    opacity: 0.45;
  }
  transition: color 0.2s;
`;
const SelectedBackground = styled(CommonItem).attrs({ as: "div" })`
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
`;
export {
  MainTab as M
};
