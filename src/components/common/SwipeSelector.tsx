"use client";
import React, { useRef } from "react";
import "@egjs/react-flicking/dist/flicking.css";
import styled from "styled-components";
import Flicking from "@egjs/react-flicking";

type ButtonsProps = { svg: React.ReactNode; bgColor: string; text: string; onClick: () => void };
type Props = {
  left: [ButtonsProps, ButtonsProps];
  children: React.ReactNode;
  right: ButtonsProps;
};
function SwipeSelector(props: Props) {
  const { children, left, right } = props;
  const flickRef = useRef<Flicking>(null);

  return (
    <Container>
      <Flicking
        ref={flickRef}
        bounce="0"
        threshold={50}
        circular={false}
        bound={true}
        defaultIndex={1}
        useFractionalSize
      >
        <SidePanel>
          {left.map((btn) => (
            <Button key={btn.bgColor} $bgColor={btn.bgColor} onClick={btn.onClick}>
              {btn.svg}
              <span>{btn.text}</span>
            </Button>
          ))}
        </SidePanel>
        <CenterPanel>{children}</CenterPanel>
        <SidePanel>
          <Button $bgColor={right.bgColor} onClick={right.onClick}>
            {right.svg}
            <span>{right.text}</span>
          </Button>
        </SidePanel>
      </Flicking>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 92px;
`;

const CenterPanel = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  width: min(var(--mobile-max-width), 100vw);
  height: 92px;
  padding: 0 16px;
  background-color: var(--background-light);
  & > div {
    flex: 1;
  }
`;
const SidePanel = styled.div`
  position: relative;
  display: flex;
  height: 92px;
  justify-content: flex-end;
  &:last-of-type {
    justify-content: flex-start;
  }
  &:first-of-type::after {
    content: "";
    position: absolute;
    right: -1px;
    width: 11px;
    height: 100%;
    background: var(--background-light);
    border-radius: 10px 0 0 10px;
  }
  &:last-of-type::before {
    content: "";
    position: absolute;
    left: -1px;
    width: 11px;
    height: 100%;
    background: var(--background-light);
    border-radius: 0 10px 10px 0;
  }
`;
const Button = styled.button<{ $bgColor: string }>`
  display: flex;
  min-width: 120px;
  padding: 0 22px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: ${({ $bgColor }) => $bgColor};
  color: var(--gray0);
  font-size: 1.4rem;
  font-weight: 500;
  word-break: keep-all;

  svg {
    width: 24px;
    height: 24px;
  }

  &:nth-of-type(1) {
    padding-left: 42px;
  }
  &:nth-of-type(2) {
    padding-right: 32px;
  }
`;

export default SwipeSelector;
