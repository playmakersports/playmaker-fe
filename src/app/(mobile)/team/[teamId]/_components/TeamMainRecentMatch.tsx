import React from "react";
import styled from "styled-components";
import clsx from "clsx";

import { fonts } from "@/styles/fonts.css";
import {
  teamMainCardContainer,
  teamMainMatchResultBox,
  teamMainMatchResultBoxLose,
  teamMainMatchResultBoxWin,
  teamMainMatchTeamContainer,
  teamMainMatchTeamName,
  teamMainMatchTeamScoreBox,
  teamMainMatchTeamScoreContainer,
  teamMainMatchTeamScoreContainerLose,
  teamMainMatchTeamScoreContainerWin,
  teamMainTextWithIcon,
  teamMainTopHeader,
} from "./team.main.css";
import CalendarIcon from "@/assets/icon/common/outlined/Calendar.svg";
import Link from "next/link";

interface TeamInfo {
  name: string;
  imgUrl: string;
  score: number;
}
type Props = {
  matchId: string;
  competitionName: string;
  matchDate: string;
  homeInfo: TeamInfo;
  awayInfo: TeamInfo;
};
function TeamMainRecentMatch(props: Props) {
  const { matchId, competitionName, matchDate, homeInfo, awayInfo } = props;

  const isHomeWin = homeInfo.score > awayInfo.score;
  const isAwayWin = homeInfo.score < awayInfo.score;
  const isDraw = homeInfo.score === awayInfo.score;

  return (
    <Link href={`/match/${matchId}`}>
      <div className={teamMainCardContainer}>
        <div className={teamMainTopHeader}>
          <p className={fonts.body4.medium}>{competitionName}</p>
          <p className={clsx(teamMainTextWithIcon, fonts.caption1.regular)}>
            <CalendarIcon fill="var(--gray400)" width={18} height={18} /> {matchDate}
          </p>
        </div>
        <div className={teamMainMatchTeamContainer}>
          <Team>
            <img src={homeInfo.imgUrl} alt={homeInfo.name} width={40} height={40} />
            <span className={teamMainMatchTeamName}>{homeInfo.name}</span>
          </Team>
          <div
            className={clsx(teamMainMatchTeamScoreContainer, {
              [teamMainMatchTeamScoreContainerWin]: isHomeWin,
              [teamMainMatchTeamScoreContainerLose]: isAwayWin,
            })}
          >
            <span
              className={teamMainMatchTeamScoreBox}
              style={{
                color: isHomeWin ? "var(--primary500)" : undefined,
                fontWeight: isHomeWin ? 600 : undefined,
                opacity: isHomeWin || isDraw ? 1 : 0.3,
              }}
            >
              {homeInfo.score}
            </span>
            <span
              className={clsx(teamMainMatchResultBox, {
                [teamMainMatchResultBoxWin]: isHomeWin,
                [teamMainMatchResultBoxLose]: isAwayWin,
              })}
            >
              {isHomeWin ? "WIN" : isAwayWin ? "LOSE" : "DRAW"}!
            </span>
            <span
              className={teamMainMatchTeamScoreBox}
              style={{
                color: isAwayWin ? "var(--red500)" : undefined,
                fontWeight: isAwayWin ? 600 : undefined,
                opacity: isAwayWin || isDraw ? 1 : 0.3,
              }}
            >
              {awayInfo.score}
            </span>
          </div>
          <Team>
            <img src={awayInfo.imgUrl} alt={awayInfo.name} width={40} height={40} />
            <span className={teamMainMatchTeamName}>{awayInfo.name}</span>
          </Team>
        </div>
      </div>
    </Link>
  );
}

const Team = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  & > img {
    border-radius: 100%;
    object-fit: cover;
    border: 1px solid var(--gray200);
  }
`;

export default TeamMainRecentMatch;
