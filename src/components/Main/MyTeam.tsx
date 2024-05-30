import React, { useRef } from "react";
import styled from "@emotion/styled";

import { BasicWhiteCard } from "../common/Card";
import PlusIcon from "@/assets/icon/global/Plus.svg";
import { SCROLL_MASKED_GRADIENT } from "@/styles/common";
import { scrollMaskedHandler, scrollMaskedHandlerRef } from "@/util/display";

function MyTeam() {
  const MOCK = [
    { category: "배구", teamName: "팀이름1" },
    { category: "농구", teamName: "팀이름2" },
    { category: "축구", teamName: "팀이름3" },
    { category: "배드민턴", teamName: "팀이름4" },
  ];

  return (
    <TeamList>
      <ul className="team-list" ref={scrollMaskedHandlerRef} onScroll={(e) => scrollMaskedHandler(e)}>
        {MOCK.map((item) => (
          <TeamItem key={item.teamName}>
            <TeamImage data-category={item.category}></TeamImage>
            <p>{item.teamName}</p>
          </TeamItem>
        ))}
        <TeamItem>
          <More>
            <PlusIcon width={28} height={28} />
          </More>
          <p>추가</p>
        </TeamItem>
      </ul>
    </TeamList>
  );
}

const TeamList = styled(BasicWhiteCard)`
  padding: 0;
  ${SCROLL_MASKED_GRADIENT("var(--card-rgb)")}

  .team-list {
    display: flex;
    gap: 12px;
    padding: 20px 16px;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;
const TeamItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

const TeamImage = styled.div`
  display: block;
  margin: 0 8px;
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
    background-color: var(--main);
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const More = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  width: 60px;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.gray3};
  border-radius: 100%;
  & + p {
    color: ${({ theme }) => theme.gray1};
  }
  svg {
    fill: ${({ theme }) => theme.gray2};
  }
`;

export default MyTeam;
