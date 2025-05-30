import React from "react";
import styled from "styled-components";
import { useRouter, useSearchParams } from "next/navigation";

import { BasicWhiteCard } from "../common/Card";
import { CARD_ACTIVE } from "@/styles/common";
import { formattedDate } from "@/util/date";

type Props = {
  status: "PENDING" | "FINISHED" | "NOT_STARTED";
  roundName?: string;
  matchId: string;
  teamName: string;
  teamLogo: string;
  teamSubName: string;
  counterpartTeamSubName: string;
  matchTeamScore: number;
  counterpartTeamName: string;
  counterpartTeamLogo: string;
  matchCounterpartScore: number;
  matchDate?: string;
  matchTime?: string;
  mvpId?: string;
};
function MatchCard(props: Props) {
  const {
    status,
    roundName,
    matchId,
    teamName,
    teamLogo,
    matchTeamScore,
    counterpartTeamName,
    teamSubName,
    counterpartTeamSubName,
    counterpartTeamLogo,
    matchCounterpartScore,
    matchDate,
    matchTime,
    mvpId,
  } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const competitionId = searchParams.get("competitionId");

  const STATUS_NAME: Record<string, string> = {
    PENDING: "경기 중",
    FINISHED: "경기종료",
    NOT_STARTED: "경기 전",
  };

  return (
    <Container role="button" onClick={() => router.push(`/match/${matchId}`)}>
      <MatchWrapper>
        <Team>
          <img src={teamLogo} alt={teamName} />
          <span className="team-name">{teamName}</span>
          <span className="team-sub-name">{teamSubName}</span>
        </Team>
        <MatchInfo>
          {roundName && <p className="round-title">{roundName}</p>}
          {status !== "FINISHED" && <p className="match-date">{STATUS_NAME[status]}</p>}
          {matchDate && (
            <p className="match-date">
              {formattedDate(`${matchDate}T${matchTime}`, {
                displayDateType: ".",
                displayTime: "24h",
                displayYear: "not-this-year",
                displayDayName: "hide",
              })}
            </p>
          )}
          {status === "FINISHED" && (
            <div className="match-score">
              <div className={`${matchTeamScore > matchCounterpartScore ? "winner-score" : ""}`}>{matchTeamScore}</div>
              <div className="score-separator">:</div>
              <div className={`${matchTeamScore < matchCounterpartScore ? "winner-score" : ""}`}>
                {matchCounterpartScore}
              </div>
            </div>
          )}
          {status === "FINISHED" && mvpId && (
            <MVPLabel $leftWin={matchTeamScore > matchCounterpartScore}>MVP {mvpId}</MVPLabel>
          )}
        </MatchInfo>
        <Team>
          <img src={counterpartTeamLogo} alt={counterpartTeamName} />
          <span className="team-name">{counterpartTeamName}</span>
          <span className="team-sub-name">{counterpartTeamSubName}</span>
        </Team>
      </MatchWrapper>
    </Container>
  );
}

const Container = styled(BasicWhiteCard)`
  ${CARD_ACTIVE}
`;
const MatchWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Team = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  span.team-name {
    font-size: 1.6rem;
    font-weight: 600;
  }
  span.team-sub-name {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--gray600);
  }
  img {
    padding: 2px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid var(--gray200);
    background-color: var(--gray100);
  }
`;

const MatchInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  p.round-title {
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--purple300);
    background-color: var(--purple50);
  }
  div.match-score {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 5px;
    font-size: 2rem;
    font-weight: 600;
    color: var(--gray800);
    div.score-separator {
      margin-bottom: 2px;
      color: var(--gray400);
    }
    div {
      flex: 1;
    }
    div.winner-score {
      color: var(--main);
      font-size: 2.1rem;
      transform: translateY(0.5px);
    }
  }
  p.match-date {
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--gray700);
    text-align: center;
  }
`;

const MVPLabel = styled.div<{ $leftWin: boolean }>`
  position: relative;
  display: flex;
  padding: ${({ $leftWin }) => ($leftWin ? "4px 8px 4px 10px" : "4px 10px 4px 8px")};
  border-radius: ${({ $leftWin }) => ($leftWin ? "0 10px 10px 0" : "10px 0 0 10px")};
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--primary600);
  background-color: var(--primary100);

  /* &::before {
    content: "";
    position: absolute;
    top: 50%;
    display: block;
    width: ${Math.sqrt(2) * 10}px;
    height: ${Math.sqrt(2) * 10}px;
    left: 0;
    background-color: var(--primary200);
    transform-origin: top;
    transform: rotate(45deg) translateY(calc(-50% + 5px)) translateX(-5px);
  } */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    display: block;
    width: ${Math.sqrt(2) * 10}px;
    height: ${Math.sqrt(2) * 10}px;
    background-color: var(--primary100);
    transform-origin: top;
    transform: rotate(45deg) translateY(calc(-50% ${({ $leftWin }) => ($leftWin ? "+" : "-")} 5px))
      translateX(${({ $leftWin }) => ($leftWin ? "-5" : "5")}px);
    ${({ $leftWin }) => ($leftWin ? "left: 0" : "right: 0")};
  }
`;

export default MatchCard;
