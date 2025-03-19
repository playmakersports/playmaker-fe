import React from "react";
import { FONTS } from "@/styles/common";
import styled from "styled-components";

import CloseIcon from "@/assets/icon/global/Close.svg";

type ChipFillType = "filled" | "light" | "outline";
type BadgeSize = "small" | "medium" | "large";
type ColorType = { background: string; color: string; border: string };
type SizeType = { fonts: string; paddingTB: number; paddingLR: number; iconSize: string };
type BadgeColor = "gray" | "primary" | "success" | "info" | "warning" | "red" | "purple" | "magenta";
type Props = {
  children: React.ReactNode;
  type?: BadgeColor;
  size?: BadgeSize;
  fillType?: ChipFillType;
  closeAction?: () => void;
};
function Chip(props: Props) {
  const { children, type = "primary", size = "medium", fillType = "filled", closeAction } = props;
  return (
    <Container data-close={!!closeAction} $colors={CHIP_COLORS[type][fillType]} $size={CHIP_SIZE[size]}>
      {children}
      {closeAction && <CloseIcon onClick={closeAction} />}
    </Container>
  );
}

const Container = styled.span<{ $colors: ColorType; $size: SizeType }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 6px;
  background-color: ${({ $colors }) => $colors.background};
  color: ${({ $colors }) => $colors.color};
  border: 1px solid ${({ $colors }) => $colors.border};
  padding: ${({ $size }) => `${$size.paddingTB}px ${$size.paddingLR}px`};
  ${({ $size }) => $size.fonts};

  &[data-close="true"] {
    padding-right: ${({ $size }) => $size.paddingLR - 2}px;
  }

  & > svg {
    cursor: pointer;
    width: ${({ $size }) => $size.iconSize};
    height: ${({ $size }) => $size.iconSize};
    fill: ${({ $colors }) => $colors.color};
  }
`;

const CHIP_SIZE: Record<BadgeSize, SizeType> = {
  small: { fonts: FONTS.caption1("medium"), paddingTB: 1, paddingLR: 6, iconSize: "14px" },
  medium: { fonts: FONTS.caption1("medium"), paddingTB: 3, paddingLR: 8, iconSize: "16px" },
  large: { fonts: FONTS.body4("medium"), paddingTB: 4, paddingLR: 8, iconSize: "20px" },
};
const CHIP_COLORS: Record<string, Record<ChipFillType, ColorType>> = {
  gray: {
    filled: { background: "var(--gray700)", color: "var(--white)", border: "transparent" },
    light: { background: "var(--gray100)", color: "var(--gray700)", border: "transparent" },
    outline: { background: "var(--white)", color: "var(--gray700)", border: "var(--gray200)" },
  },
  primary: {
    filled: { background: "var(--main)", color: "var(--white)", border: "transparent" },
    light: { background: "var(--primary50)", color: "var(--primary600)", border: "transparent" },
    outline: { background: "var(--white)", color: "var(--primary600)", border: "var(--primary300)" },
  },
  success: {
    filled: { background: "var(--success500)", color: "var(--white)", border: "transparent" },
    light: { background: "var(--success50)", color: "var(--success600)", border: "transparent" },
    outline: { background: "var(--white)", color: "var(--success600)", border: "var(--success300)" },
  },
  info: {
    filled: { background: "var(--info500)", color: "var(--white)", border: "transparent" },
    light: { background: "var(--info50)", color: "var(--info600)", border: "transparent" },
    outline: { background: "var(--white)", color: "var(--info600)", border: "var(--info200)" },
  },
  warning: {
    filled: { background: "var(--warning500)", color: "var(--white)", border: "transparent" },
    light: { background: "var(--warning50)", color: "var(--warning600)", border: "transparent" },
    outline: { background: "var(--white)", color: "var(--warning600)", border: "var(--warning300)" },
  },
  red: {
    filled: { background: "var(--red500)", color: "var(--white)", border: "transparent" },
    light: { background: "var(--red50)", color: "var(--red600)", border: "transparent" },
    outline: { background: "var(--white)", color: "var(--red600)", border: "var(--red200)" },
  },
  purple: {
    filled: { background: "var(--purple500)", color: "var(--white)", border: "transparent" },
    light: { background: "var(--purple50)", color: "var(--purple600)", border: "transparent" },
    outline: { background: "var(--white)", color: "var(--purple600)", border: "var(--purple200)" },
  },
  magenta: {
    filled: { background: "var(--magenta500)", color: "var(--white)", border: "transparent" },
    light: { background: "var(--magenta50)", color: "var(--magenta600)", border: "transparent" },
    outline: { background: "var(--white)", color: "var(--magenta600)", border: "var(--magenta200)" },
  },
};

export default Chip;
