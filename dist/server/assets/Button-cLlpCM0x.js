import { jsx, jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { F as FONTS } from "./common-6ceLbjxn.js";
function Button(props) {
  const {
    fillType = "default",
    mode = "primary",
    children,
    fullWidth,
    type,
    flex,
    disabled = false,
    onClick,
    icon,
    size = "medium"
  } = props;
  const isOnlyIcon = !children && icon;
  return /* @__PURE__ */ jsx(
    Wrapper,
    {
      type: type ?? "button",
      onClick,
      flex,
      "data-fill-type": fillType,
      mode: BUTTON_STYLE[mode][fillType],
      $fullWidth: fullWidth,
      disabled,
      $fontStyle: BUTTON_SIZE_STYLED[size].font,
      style: {
        padding: isOnlyIcon ? BUTTON_SIZE_STYLED[size].onlyIconPadding : BUTTON_SIZE_STYLED[size].padding,
        height: BUTTON_SIZE_STYLED[size].height,
        borderRadius: size === "xlarge" ? "10px" : "8px"
      },
      children: /* @__PURE__ */ jsxs("span", { children: [
        icon && /* @__PURE__ */ jsx(IconWrapper, { $iconSize: BUTTON_SIZE_STYLED[size].iconSize, children: icon }),
        children
      ] })
    }
  );
}
const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ flex }) => flex ? `flex: ${flex}` : ""};
  width: ${({ $fullWidth }) => $fullWidth ? "100%" : "auto"};
  border: ${({ mode }) => `1px solid ${mode.border}`};
  background-color: ${({ mode }) => mode.background};
  color: ${({ mode }) => mode.color};
  white-space: nowrap;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  transition: all 0.2s;
  will-change: outline;
  ${({ $fontStyle }) => $fontStyle};

  &:disabled {
    cursor: not-allowed;
    &[data-fill-type="default"] {
      background-color: var(--gray300);
      color: var(--gray50);
      border-color: transparent;
    }
    &[data-fill-type="light"] {
      background-color: var(--gray100);
      color: var(--gray300);
      border-color: transparent;
    }
    &[data-fill-type="outline"] {
      background-color: var(--white);
      color: var(--gray300);
      border-color: var(--gray200);
    }
  }
  &:active {
    &[data-fill-type="outline"] {
      background-color: ${({ mode }) => mode.border.replace(/(\d+)/, "50")};
    }
  }
  &:active > span {
    transform: scale(0.95);
    transition: all 0.25s;
  }

  & > span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    svg {
      width: 100%;
      height: auto;
      fill: ${({ mode }) => mode.color};
    }
  }
`;
const IconWrapper = styled.i`
  width: ${({ $iconSize }) => $iconSize};
  height: ${({ $iconSize }) => $iconSize};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: auto;
    fill: currentColor;
  }
`;
const BUTTON_SIZE_STYLED = {
  xsmall: {
    font: FONTS.caption1("medium"),
    padding: "8px 12px",
    height: "32px",
    iconSize: "20px",
    onlyIconPadding: "6px"
  },
  small: {
    font: FONTS.body4("medium"),
    padding: "8px 12px",
    height: "36px",
    iconSize: "20px",
    onlyIconPadding: "8px"
  },
  medium: {
    font: FONTS.body4("medium"),
    padding: "10px 16px",
    height: "40px",
    iconSize: "20px",
    onlyIconPadding: "10px"
  },
  large: {
    font: FONTS.body3("medium"),
    padding: "10px 16px",
    height: "44px",
    iconSize: "24px",
    onlyIconPadding: "10px"
  },
  xlarge: {
    font: FONTS.body3("medium"),
    padding: "12px 18px",
    height: "48px",
    iconSize: "24px",
    onlyIconPadding: "12px"
  }
};
const BUTTON_STYLE = {
  primary: {
    default: {
      background: "var(--primary500)",
      color: "var(--white)",
      border: "transparent"
    },
    light: {
      background: "var(--primary50)",
      color: "var(--primary600)",
      border: "transparent"
    },
    outline: {
      background: "transparent",
      color: "var(--primary600)",
      border: "var(--primary200)"
    }
  },
  gray: {
    default: {
      background: "var(--gray500)",
      color: "var(--white)",
      border: "transparent"
    },
    light: {
      background: "var(--gray100)",
      color: "var(--gray600)",
      border: "transparent"
    },
    outline: {
      background: "var(--white)",
      color: "var(--gray600)",
      border: "var(--gray200)"
    }
  },
  success: {
    default: {
      background: "var(--success500)",
      color: "var(--white)",
      border: "transparent"
    },
    light: {
      background: "var(--success50)",
      color: "var(--success600)",
      border: "transparent"
    },
    outline: {
      background: "var(--white)",
      color: "var(--success600)",
      border: "var(--success200)"
    }
  },
  info: {
    default: {
      background: "var(--info500)",
      color: "var(--white)",
      border: "transparent"
    },
    light: {
      background: "var(--info50)",
      color: "var(--info600)",
      border: "transparent"
    },
    outline: {
      background: "var(--white)",
      color: "var(--info600)",
      border: "var(--info200)"
    }
  },
  warning: {
    default: {
      background: "var(--warning500)",
      color: "var(--white)",
      border: "transparent"
    },
    light: {
      background: "var(--warning50)",
      color: "var(--warning600)",
      border: "transparent"
    },
    outline: {
      background: "var(--white)",
      color: "var(--warning600)",
      border: "var(--warning200)"
    }
  },
  red: {
    default: {
      background: "var(--red500)",
      color: "var(--white)",
      border: "transparent"
    },
    light: {
      background: "var(--red50)",
      color: "var(--red600)",
      border: "transparent"
    },
    outline: {
      background: "var(--white)",
      color: "var(--red600)",
      border: "var(--red200)"
    }
  }
};
export {
  Button as B
};
