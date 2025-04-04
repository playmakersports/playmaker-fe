import React from "react";
import styled from "styled-components";
import { FONTS } from "@/styles/common";

type Props = {
  roundName: string;
  homeTeamName: string;
  homeTeamLogo: string;
  homeTeamScore: number;
  awayTeamName: string;
  awayTeamLogo: string;
  awayTeamScore: number;
};

function MatchRoundCard(props: Props) {
  const { roundName, homeTeamName, homeTeamLogo, homeTeamScore, awayTeamName, awayTeamLogo, awayTeamScore } = props;

  return (
    <Container>
      <h3 className="round-name">{roundName}</h3>
      <div className="score-group">
        <TeamScoreItem>
          <div className="team-title">
            <div className="team-logo"></div>
            <p>{homeTeamName}</p>
          </div>
          <p className="score">{homeTeamScore}</p>
        </TeamScoreItem>
        <TeamScoreItem>
          <div className="team-title">
            <div className="team-logo"></div>
            <p>{awayTeamName}</p>
          </div>
          <p className="score">{awayTeamScore}</p>
        </TeamScoreItem>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 16px 20px 8px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--gray100);

  h3.round-name {
    width: max-content;
    margin: 0 auto;
    padding: 2px 40px;
    ${FONTS.body4("regular")};
    color: var(--gray800);
    background-color: var(--gray100);
    border-radius: 16px;
  }
  div.score-group {
    display: flex;
    margin-top: 10px;
    flex-direction: column;
  }
`;
const TeamScoreItem = styled.div`
  ${FONTS.body3("semibold")};
  display: flex;
  padding: 20px 0;
  align-items: center;
  justify-content: space-between;

  div.team-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  div.team-logo {
    width: 26px;
    height: 26px;
    background-color: var(--gray200);
    border-radius: 50%;
  }
  p.score {
    font-size: 2rem;
  }
  &:first-of-type {
    border-bottom: 1px solid var(--gray100);
  }
`;
export default MatchRoundCard;
