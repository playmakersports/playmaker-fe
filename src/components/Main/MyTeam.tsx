import React from "react";
import styled from "styled-components";

import { BasicWhiteCard } from "../common/Card";

function MyTeam() {
  const MOCK = [
    { category: "배구", teamName: "팀이름1" },
    { category: "농구", teamName: "팀이름2" },
    { category: "축구", teamName: "팀이름3" },
    { category: "배드민턴", teamName: "팀이름4" },
  ];

  return (
    <TeamList>
      {MOCK.map((item) => (
        <TeamItem key={item.teamName}>
          <i data-category={item.category}></i>
          <span>{item.teamName}</span>
        </TeamItem>
      ))}
    </TeamList>
  );
}

const TeamList = styled(BasicWhiteCard).attrs({ as: "ul" })`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overflow-y: hidden;
`;
const TeamItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  i {
    display: block;
    width: 64px;
    height: 64px;
    background-color: ${({ theme }) => theme.gray2};
    border-radius: 100%;

    &::after {
      content: attr(data-category);
      padding: 3px 6px;
      border-radius: 12px;
      background-color: ${({ theme }) => theme.main2};
      color: ${({ theme }) => theme.white};
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  span {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

export default MyTeam;
