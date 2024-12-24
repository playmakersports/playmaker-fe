"use client";
import React, { useState } from "react";
import styled from "styled-components";

import BottomArrow from "@/assets/icon/arrow/BottomArrowThin.svg";

type Props =
  | {
      title: string;
      hidable: false;
      list: { title: string; content: string }[] | string[];
      children?: React.ReactNode;
    }
  | {
      title: string;
      hidable: true;
      defaultOpen?: boolean;
      list: { title: string; content: string }[] | string[];
      children?: React.ReactNode;
    };
function InformationGroup(props: Props) {
  const { title, hidable, list, children } = props;
  const [showGroup, setShowGroup] = useState(hidable && !!props.defaultOpen);
  const isDiscList = list.every((item) => typeof item === "string");

  return (
    <Wrapper>
      {hidable ? (
        <Title as="button" type="button" onClick={() => hidable && setShowGroup(!showGroup)}>
          {title}
          <BottomArrow className={showGroup ? "show" : "hide"} />
        </Title>
      ) : (
        <Title>{title}</Title>
      )}
      <Contents className={hidable ? (showGroup ? "show" : "hide") : ""}>
        <ul className={isDiscList ? "disc" : ""}>
          {list.map((item, index) => {
            if (typeof item === "string") {
              return <li key={index}>{item}</li>;
            } else {
              return (
                <li key={index}>
                  <dt>{item.title}</dt>
                  <dd>{item.content}</dd>
                </li>
              );
            }
          })}
        </ul>
        {children}
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 4px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0 20px;
  font-size: 1.8rem;
  font-weight: 600;
  svg {
    width: 18px;
    height: 18px;
    fill: var(--gray600);

    &.hide {
      transform: rotate(180deg);
    }
  }
`;
const Contents = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    li {
      display: inline-flex;
      gap: 12px;
      color: var(--gray800);
      dt {
        flex: 0.2;
        color: var(--gray900);
      }
      dd {
        flex: 1;
      }
    }

    &.disc {
      li::before {
        content: "";
        flex-shrink: 0;
        display: inline-block;
        width: 5px;
        height: 5px;
        margin-top: calc((2.4rem - 5px) / 2);
        background-color: var(--sub1);
        border-radius: 50%;
      }
    }
  }

  &.show {
    height: max-content;
    transform: translateY(0);
    opacity: 1;
    transition: all 0.2s;
  }
  &.hide {
    height: 0;
    transform: translateY(-20%);
    opacity: 0;
  }
`;

export default InformationGroup;
