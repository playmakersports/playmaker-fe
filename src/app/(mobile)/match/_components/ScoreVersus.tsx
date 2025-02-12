import React, { useEffect, useState } from "react";
import styled from "styled-components";

import NumberFlow from "@number-flow/react";
import { FONTS } from "@/styles/common";

type TeamMatchInfo = {
  name: string;
  univ: string;
  logo: string;
  score: number;
  color: string;
};

function ScoreVersus(props: { small?: boolean; homeInfo: TeamMatchInfo; awayInfo: TeamMatchInfo; stage: string }) {
  const { small = false, homeInfo, awayInfo, stage } = props;

  const [scores, setScores] = useState([0, 0]);
  useEffect(() => {
    setScores([awayInfo.score, homeInfo.score]);
  }, [awayInfo, homeInfo]);

  return (
    <Versus className={small ? "small" : ""}>
      <Team $backColor={awayInfo.color}>
        <div className="team-inner">
          <div className="score">
            <NumberFlow value={scores[0]} />
          </div>
          <div className="team-logo"></div>
          <div className="team-name">{awayInfo.name}</div>
          <div className="team-univ">{awayInfo.univ}</div>
        </div>
      </Team>
      <div className="center">
        <p className="stage-name">{stage}</p>
        <p className="versus">vs</p>
      </div>
      <Team $backColor={homeInfo.color}>
        <div className="team-inner">
          <div className="score">
            <NumberFlow value={scores[1]} />
          </div>
          <div className="team-logo"></div>
          <div className="team-name">{homeInfo.name}</div>
          <div className="team-univ">{homeInfo.univ}</div>
        </div>
      </Team>
    </Versus>
  );
}

const Versus = styled.div`
  display: flex;
  padding: 0 32px;
  justify-content: space-between;
  gap: 10%;
  align-items: center;

  &.small {
    margin-top: -20px;

    p.stage-name,
    div.score,
    div.team-univ {
      transition: all 0.3s;
      font-size: 0.1rem;
      line-height: 0;
      opacity: 0;
    }
    div.team-name {
      font-size: 1.4rem;
    }
    div.team-logo {
      margin: 0 auto 4px;
      width: 50px;
      height: 50px;
      transition: all 0.3s;
    }
  }

  div.center {
    user-select: none;
    font-size: 1.4rem;
    color: var(--gray600);
    text-align: center;
    p.versus {
      ${FONTS.MD1W500};
      color: var(--gray500);
    }
  }
`;
const Team = styled.div<{ $backColor: string }>`
  flex: 1;
  position: relative;

  div.team-inner {
    position: relative;
    text-align: center;
    z-index: 1;
  }

  div.score {
    margin-bottom: 20px;
    font-size: 3.5rem;
    font-weight: 600;
  }
  div.team-logo {
    margin: 0 auto 16px;
    width: 80px;
    height: 80px;
    background-color: var(--gray0);
    border-radius: 50%;
  }
  div.team-name {
    ${FONTS.MD1};
    color: var(--gray900);
  }
  div.team-univ {
    ${FONTS.MD2};
    color: var(--gray600);
  }

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 50%;
    width: 150px;
    height: 180px;
    background-color: ${({ $backColor }) => `rgb(${$backColor})`};
    z-index: 0;
    transform: translateX(-50%);
    border-radius: 50%;
    opacity: 0.2;
    filter: blur(24px);
  }
`;

export default ScoreVersus;
