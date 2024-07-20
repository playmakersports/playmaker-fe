import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { SCROLL_MASKED_GRADIENT } from "@/styles/common";
import { scrollMaskedHandler, scrollMaskedHandlerRef } from "@/util/display";
import { BasicWhiteCard } from "../common/Card";
import PlusIcon from "@/assets/icon/global/Plus.svg";

function MyTeam() {
  const router = useRouter();
  const MOCK = [
    { teamId: "10", teamName: "팀이름1" },
    { teamId: "11", teamName: "팀이름2" },
    { teamId: "12", teamName: "팀이름3" },
  ];

  return (
    <TeamList>
      <ul className="team-list" ref={scrollMaskedHandlerRef} onScroll={(e) => scrollMaskedHandler(e)}>
        {MOCK.map((item) => (
          <TeamItem key={item.teamName} onClick={() => router.push(`/team/${item.teamId}`)}>
            <TeamImage />
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
    padding: 12px 16px;
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
  color: var(--gray1);

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

const TeamImage = styled.div`
  display: block;
  margin: 0 8px;
  width: 50px;
  height: 50px;
  background-color: var(--gray5);
  border-radius: 100%;
`;

const More = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  width: 50px;
  height: 50px;
  border: 1px solid var(--gray5);
  border-radius: 100%;
  & + p {
    color: var(--gray1);
  }
  svg {
    fill: var(--gray4);
  }
`;

export default MyTeam;
