import { jsxs, jsx } from "react/jsx-runtime";
import styled from "styled-components";
import { F as FONTS } from "./common-6ceLbjxn.js";
function Badge(props) {
  const { type, size = "medium", fillType = "light", icon, nSquare = false, children } = props;
  const nSquareSizeStyle = nSquare ? { width: BADGE_SIZE[size].nSquareSize, height: BADGE_SIZE[size].nSquareSize } : {};
  return /* @__PURE__ */ jsxs(
    Container,
    {
      style: {
        padding: nSquare ? `${BADGE_SIZE[size].padding.split(" ")[0]} 0` : BADGE_SIZE[size].padding,
        ...nSquareSizeStyle
      },
      $fonts: BADGE_SIZE[size].fonts,
      $colors: BADGE_COLORS[type][fillType],
      children: [
        icon && /* @__PURE__ */ jsx(
          "span",
          {
            className: "icon",
            style: { width: size === "small" ? "12px" : "14px", height: size === "small" ? "12px" : "14px" },
            children: icon
          }
        ),
        children
      ]
    }
  );
}
const Container = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${({ $colors }) => $colors.background};
  color: ${({ $colors }) => $colors.color};
  border-radius: 6px;
  ${({ $fonts }) => $fonts};

  span.icon {
    display: inline-flex;
    align-items: center;
    & > svg {
      width: 100%;
      height: auto;
    }
  }
  svg {
    fill: ${({ $colors }) => $colors.color} !important;
  }
`;
const BADGE_SIZE = {
  small: { fonts: FONTS.caption1("medium"), padding: "1px 8px", nSquareSize: "20px" },
  medium: { fonts: FONTS.caption1("medium"), padding: "3px 8px", nSquareSize: "24px" },
  large: { fonts: FONTS.body4("medium"), padding: "4px 10px", nSquareSize: "28px" }
};
const BADGE_COLORS = {
  gray: {
    filled: { background: "var(--gray700)", color: "var(--white)" },
    light: { background: "var(--gray100)", color: "var(--gray700)" }
  },
  primary: {
    filled: { background: "var(--main)", color: "var(--white)" },
    light: { background: "var(--primary50)", color: "var(--primary600)" }
  },
  success: {
    filled: { background: "var(--success500)", color: "var(--white)" },
    light: { background: "var(--success50)", color: "var(--success600)" }
  },
  info: {
    filled: { background: "var(--info500)", color: "var(--white)" },
    light: { background: "var(--info50)", color: "var(--info600)" }
  },
  warning: {
    filled: { background: "var(--warning500)", color: "var(--white)" },
    light: { background: "var(--warning50)", color: "var(--warning600)" }
  },
  red: {
    filled: { background: "var(--red500)", color: "var(--white)" },
    light: { background: "var(--red50)", color: "var(--red600)" }
  },
  purple: {
    filled: { background: "var(--purple500)", color: "var(--white)" },
    light: { background: "var(--purple50)", color: "var(--purple600)" }
  },
  magenta: {
    filled: { background: "var(--magenta500)", color: "var(--white)" },
    light: { background: "var(--magenta50)", color: "var(--magenta600)" }
  }
};
export {
  Badge as B
};
