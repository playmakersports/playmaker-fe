"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

import { WhiteSectionDivider } from "@/components/common/Container";

function MyTabTeam() {
  return (
    <Teams>
      <TeamGroup
        title="운영하는 모임"
        teams={[
          {
            teamId: "33",
            teamName: "모임1",
            teamLogo:
              "https://i.namu.wiki/i/yPkRFMSrrDJvYViw33Zw-utw-P_YLfAr5iDJuoe8kgru6SFqjcf1XjKvFV61wYG3JDiBHZ2n39SB1cSxvfYL2dcV09hfSMgrUq2s-8d4z603xUQtuTuDoDD36vzUs5qVKek3TPISCZqjUU_2oqdAhA.svg",
          },
        ]}
      />
      <WhiteSectionDivider $child />
      <TeamGroup
        title="소속 모임"
        teams={[
          {
            teamId: "1",
            teamName: "모임1",
            teamLogo:
              "https://i.namu.wiki/i/yPkRFMSrrDJvYViw33Zw-utw-P_YLfAr5iDJuoe8kgru6SFqjcf1XjKvFV61wYG3JDiBHZ2n39SB1cSxvfYL2dcV09hfSMgrUq2s-8d4z603xUQtuTuDoDD36vzUs5qVKek3TPISCZqjUU_2oqdAhA.svg",
          },
        ]}
      />
      <WhiteSectionDivider $child />
      <TeamGroup
        title="신청 대기 모임"
        teams={[
          {
            teamId: "1",
            teamName: "모임1",
            teamLogo:
              "https://i.namu.wiki/i/yPkRFMSrrDJvYViw33Zw-utw-P_YLfAr5iDJuoe8kgru6SFqjcf1XjKvFV61wYG3JDiBHZ2n39SB1cSxvfYL2dcV09hfSMgrUq2s-8d4z603xUQtuTuDoDD36vzUs5qVKek3TPISCZqjUU_2oqdAhA.svg",
          },
          {
            teamId: "12",
            teamName: "모임1",
            teamLogo:
              "https://i.namu.wiki/i/yPkRFMSrrDJvYViw33Zw-utw-P_YLfAr5iDJuoe8kgru6SFqjcf1XjKvFV61wYG3JDiBHZ2n39SB1cSxvfYL2dcV09hfSMgrUq2s-8d4z603xUQtuTuDoDD36vzUs5qVKek3TPISCZqjUU_2oqdAhA.svg",
          },
          {
            teamId: "41",
            teamName: "모임1",
            teamLogo:
              "https://i.namu.wiki/i/yPkRFMSrrDJvYViw33Zw-utw-P_YLfAr5iDJuoe8kgru6SFqjcf1XjKvFV61wYG3JDiBHZ2n39SB1cSxvfYL2dcV09hfSMgrUq2s-8d4z603xUQtuTuDoDD36vzUs5qVKek3TPISCZqjUU_2oqdAhA.svg",
          },
        ]}
      />
      <WhiteSectionDivider $child />
      <TeamGroup
        title="신청 내역"
        teams={[
          {
            teamId: "15",
            teamName: "모임1",
            teamLogo:
              "https://i.namu.wiki/i/yPkRFMSrrDJvYViw33Zw-utw-P_YLfAr5iDJuoe8kgru6SFqjcf1XjKvFV61wYG3JDiBHZ2n39SB1cSxvfYL2dcV09hfSMgrUq2s-8d4z603xUQtuTuDoDD36vzUs5qVKek3TPISCZqjUU_2oqdAhA.svg",
          },
          {
            teamId: "42",
            teamName: "모임1",
            teamLogo:
              "https://i.namu.wiki/i/yPkRFMSrrDJvYViw33Zw-utw-P_YLfAr5iDJuoe8kgru6SFqjcf1XjKvFV61wYG3JDiBHZ2n39SB1cSxvfYL2dcV09hfSMgrUq2s-8d4z603xUQtuTuDoDD36vzUs5qVKek3TPISCZqjUU_2oqdAhA.svg",
          },
          {
            teamId: "22",
            teamName: "모임1",
            teamLogo:
              "https://i.namu.wiki/i/yPkRFMSrrDJvYViw33Zw-utw-P_YLfAr5iDJuoe8kgru6SFqjcf1XjKvFV61wYG3JDiBHZ2n39SB1cSxvfYL2dcV09hfSMgrUq2s-8d4z603xUQtuTuDoDD36vzUs5qVKek3TPISCZqjUU_2oqdAhA.svg",
          },
          {
            teamId: "19",
            teamName: "모임1",
            teamLogo:
              "https://i.namu.wiki/i/yPkRFMSrrDJvYViw33Zw-utw-P_YLfAr5iDJuoe8kgru6SFqjcf1XjKvFV61wYG3JDiBHZ2n39SB1cSxvfYL2dcV09hfSMgrUq2s-8d4z603xUQtuTuDoDD36vzUs5qVKek3TPISCZqjUU_2oqdAhA.svg",
          },
          {
            teamId: "935",
            teamName: "모임1",
            teamLogo:
              "https://i.namu.wiki/i/yPkRFMSrrDJvYViw33Zw-utw-P_YLfAr5iDJuoe8kgru6SFqjcf1XjKvFV61wYG3JDiBHZ2n39SB1cSxvfYL2dcV09hfSMgrUq2s-8d4z603xUQtuTuDoDD36vzUs5qVKek3TPISCZqjUU_2oqdAhA.svg",
          },
          {
            teamId: "25",
            teamName: "모임1",
            teamLogo:
              "https://i.namu.wiki/i/yPkRFMSrrDJvYViw33Zw-utw-P_YLfAr5iDJuoe8kgru6SFqjcf1XjKvFV61wYG3JDiBHZ2n39SB1cSxvfYL2dcV09hfSMgrUq2s-8d4z603xUQtuTuDoDD36vzUs5qVKek3TPISCZqjUU_2oqdAhA.svg",
          },
        ]}
      />
    </Teams>
  );
}

function TeamGroup({
  title,
  teams,
}: {
  title: string;
  teams: { teamId: string; teamName: string; teamLogo: string }[];
}) {
  const router = useRouter();
  const moveTeamPage = (teamId: string) => {
    router.push(`/team/${teamId}`);
  };
  return (
    <Group>
      <h2>{title}</h2>
      <div className="team-list">
        {teams.map((team) => (
          <Team type="button" key={team.teamId} $src={team.teamLogo} onClick={() => moveTeamPage(team.teamId)}>
            <span>{team.teamName}</span>
          </Team>
        ))}
      </div>
    </Group>
  );
}

const Teams = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Group = styled.div`
  padding: 8px 0 0;

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
  }
  div.team-list {
    display: flex;
    margin: 20px 0;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

const Team = styled.button<{ $src: string }>`
  width: 75px;
  height: 75px;
  background-color: var(--gray100);
  border-radius: 15px;
  background-image: url(${({ $src }) => $src});
  background-size: 95% auto;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
`;

export default MyTabTeam;
