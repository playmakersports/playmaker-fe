import React from "react";
import styled from "@emotion/styled";

import { BasicWhiteCard } from "../common/Card";

function MyTeam() {
  const MOCK = [
    { category: "배구", teamName: "팀이름1" },
    { category: "농구", teamName: "팀이름2" },
    { category: "축구", teamName: "팀이름3" },
    { category: "배드민턴", teamName: "팀이름4" },
  ];

  return (
    <TeamList as="ul">
      {MOCK.map((item) => (
        <TeamItem key={item.teamName}>
          <i data-category={item.category}></i>
          <span>{item.teamName}</span>
        </TeamItem>
      ))}
    </TeamList>
  );
}

const TeamList = styled(BasicWhiteCard)`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overflow-y: hidden;
`;
const TeamItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  i {
    display: block;
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.gray3};
    border-radius: 100%;

    &::after {
      position: absolute;
      content: attr(data-category);
      top: -6px;
      left: 50%;
      transform: translate(-50%, 0);
      width: max-content;
      padding: 4px 6px;
      border-radius: 12px;
      background-color: ${({ theme }) => theme.main2};
      color: ${({ theme }) => theme.white};
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  span {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

export default MyTeam;
