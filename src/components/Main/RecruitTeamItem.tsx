import React from "react";
import styled from "@emotion/styled";

import { FONTS } from "@/styles/common";
import { formattedDate } from "@/util/date";
import { useRouter } from "next/router";

type Props = {
  teamId: string;
  teamName: string;
  isUnivTeam: boolean;
  univName: string;
  location: string;
  date: string;
};

function RecruitTeamItem(props: Props) {
  const { teamId, teamName, univName, isUnivTeam, location, date } = props;
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
            <span className="univ-name">{univName}</span>
          </p>
          <p className="location-time">
            {univName} {location.split(" ")[1]} - {formattedDate(date, "m월 d일 hh:mm")}
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
    background-color: ${({ theme }) => theme.background};
  }
  &:active > ${ItemWrapper} {
    transform: scale(0.97);
  }
`;
const TeamImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: #7a89b2;
  border-radius: 100%;
`;
const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: ${({ theme }) => theme.text};
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
