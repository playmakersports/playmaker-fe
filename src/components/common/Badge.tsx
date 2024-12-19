import React from "react";
import styled from "styled-components";
import { FONTS } from "@/styles/common";

type Props = {
  type: "gray" | "main" | "green" | "subMain" | "subRed" | "purple" | "yellow";
  children: React.ReactNode;
};
type ColorType = { bg: string; text: string };
const TYPE_COLOR: Record<string, ColorType> = {
  gray: { bg: "var(--gray200)", text: "var(--gray700)" },
  main: { bg: "rgba(var(--sub2-rgb), 0.7)", text: "var(--main)" },
  subMain: { bg: "rgba(var(--sub2-rgb), 0.35)", text: "var(--primary-m100)" },
  subRed: { bg: "rgba(239, 142, 141, 0.1)", text: "#ef8e8d" },
  purple: { bg: "rgba(var(--art-purple-rgb), 0.1)", text: "var(--art-purple)" },
  green: { bg: "rgba(var(--art-cyan-rgb), 0.1)", text: "#05aca2" },
  yellow: { bg: "rgba(var(--point-rgb), 0.1)", text: "var(--point)" },
};

function Badge(props: Props) {
  const { type, children } = props;
  return <Container colors={TYPE_COLOR[type]}>{children}</Container>;
}

const Container = styled.span<{ colors: ColorType }>`
  ${FONTS.MD2};
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 1.3rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  line-height: 1.25rem;
  padding: 6px 8px 5px;
  border-radius: 6px;
  background-color: ${({ colors }) => colors.bg};
  color: ${({ colors }) => colors.text};
  svg {
    fill: ${({ colors }) => colors.text};
  }
`;

export default Badge;
