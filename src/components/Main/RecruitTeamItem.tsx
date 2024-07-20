import React from "react";
import styled from "@emotion/styled";

import { FONTS } from "@/styles/common";
import { useRouter } from "next/router";

type Props = {
  teamId: string;
  teamName: string;
  univName?: string;
  location: string;
};

function RecruitTeamItem(props: Props) {
  const { teamId, teamName, univName, location } = props;
  const router = useRouter();

  return (
    <Container
      type="button"
      onClick={() => {
        router.push(`/team/${teamId}`);
      }}
    >
      <ItemWrapper>
        <TeamImage />
        <TeamInfo>
          <p className="name">
            <span className="team-name">{teamName}</span>
            <span className="univ-name">{univName ?? location}</span>
          </p>
        </TeamInfo>
      </ItemWrapper>
    </Container>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  transition: transform 0.2s;
  gap: 12px;
`;
const Container = styled.button`
  margin: 0 -12px;
  padding: 12px;
  border-radius: 12px;
  transition: all 0.2s;

  &:active {
    background-color: var(--background);
  }
  &:active > ${ItemWrapper} {
    transform: scale(0.97);
  }
`;
const TeamImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--gray5);
  border-radius: 100%;
`;
const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: var(--gray1);
  .name {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .univ-name {
    opacity: 0.8;
    ${FONTS.MD3};
    &::before {
      content: "• ";
    }
  }
  .location-time {
    ${FONTS.MD3};
  }
  .team-name {
    ${FONTS.HEAD2};
  }
`;

export default RecruitTeamItem;
