import React from "react";
import styled from "styled-components";
import { FONTS } from "@/styles/common";

type BadgeFillType = "filled" | "light";
type BadgeSize = "small" | "medium" | "large";
type Props = {
  type: "gray" | "primary" | "success" | "info" | "warning" | "red" | "purple" | "magenta";
  size?: BadgeSize;
  fillType?: BadgeFillType;
  children: React.ReactNode;
  icon?: React.ReactNode;
  nSquare?: boolean;
};
type ColorType = { background: string; color: string };
type SizeType = { fonts: string; padding: string; nSquareSize: string };
function Badge(props: Props) {
  const { type, size = "medium", fillType = "light", icon, nSquare = false, children } = props;
  const nSquareSizeStyle = nSquare ? { width: BADGE_SIZE[size].nSquareSize, height: BADGE_SIZE[size].nSquareSize } : {};

  return (
    <Container
      style={{
        padding: nSquare ? `${BADGE_SIZE[size].padding.split(" ")[0]} 0` : BADGE_SIZE[size].padding,
        ...nSquareSizeStyle,
      }}
      $fonts={BADGE_SIZE[size].fonts}
      $colors={BADGE_COLORS[type][fillType]}
    >
      {icon && (
        <span
          className="icon"
          style={{ width: size === "small" ? "12px" : "14px", height: size === "small" ? "12px" : "14px" }}
        >
          {icon}
        </span>
      )}
      {children}
    </Container>
  );
}

const Container = styled.span<{ $fonts: string; $colors: ColorType }>`
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

const BADGE_SIZE: Record<BadgeSize, SizeType> = {
  small: { fonts: FONTS.caption1("medium"), padding: "1px 8px", nSquareSize: "20px" },
  medium: { fonts: FONTS.caption1("medium"), padding: "3px 8px", nSquareSize: "24px" },
  large: { fonts: FONTS.body4("medium"), padding: "4px 10px", nSquareSize: "28px" },
};
const BADGE_COLORS: Record<string, Record<BadgeFillType, ColorType>> = {
  gray: {
    filled: { background: "var(--gray700)", color: "var(--white)" },
    light: { background: "var(--gray100)", color: "var(--gray700)" },
  },
  primary: {
    filled: { background: "var(--main)", color: "var(--white)" },
    light: { background: "var(--primary50)", color: "var(--primary600)" },
  },
  success: {
    filled: { background: "var(--success500)", color: "var(--white)" },
    light: { background: "var(--success50)", color: "var(--success600)" },
  },
  info: {
    filled: { background: "var(--info500)", color: "var(--white)" },
    light: { background: "var(--info50)", color: "var(--info600)" },
  },
  warning: {
    filled: { background: "var(--warning500)", color: "var(--white)" },
    light: { background: "var(--warning50)", color: "var(--warning600)" },
  },
  red: {
    filled: { background: "var(--red500)", color: "var(--white)" },
    light: { background: "var(--red50)", color: "var(--red600)" },
  },
  purple: {
    filled: { background: "var(--purple500)", color: "var(--white)" },
    light: { background: "var(--purple50)", color: "var(--purple600)" },
  },
  magenta: {
    filled: { background: "var(--magenta500)", color: "var(--white)" },
    light: { background: "var(--magenta50)", color: "var(--magenta600)" },
  },
};

export default Badge;
