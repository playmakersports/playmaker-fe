import React from "react";
import styled from "styled-components";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

import { BasicWhiteCard } from "../common/Card";
import GroupTitle from "../common/GroupTitle";
import MoreButton from "../common/MoreButton";

type Props = {
  matchId: string;
  teamName: string;
  teamLogo: string;
  matchTeamScore: number;
  counterpartTeamName: string;
  counterpartTeamLogo: string;
  matchCounterpartScore: number;
  matchDate: string;
};
function RecentMatch(props: Props) {
  const {
    matchId,
    teamName,
    teamLogo,
    matchTeamScore,
    counterpartTeamName,
    counterpartTeamLogo,
    matchCounterpartScore,
    matchDate,
  } = props;
  const router = useRouter();
  const params = useParams();
  const teamId = params["teamId"];

  return (
    <Wrapper>
      <GroupTitle link={`/team/${teamId}/schedule`}>최근 경기 결과</GroupTitle>
      <Container>
        <MatchWrapper>
          <Team>
            <span>{teamName}</span>
            <Image src={teamLogo} alt={teamName} width={40} height={40} />
          </Team>
          <MatchInfo>
            <p className="match-score">
              <span className={`${matchTeamScore > matchCounterpartScore ? "winner-score" : ""}`}>
                {matchTeamScore}
              </span>{" "}
              <span className="score-separator">:</span>{" "}
              <span className={`${matchTeamScore < matchCounterpartScore ? "winner-score" : ""}`}>
                {matchCounterpartScore}
              </span>
            </p>
            <p className="match-date">{matchDate}</p>
          </MatchInfo>
          <Team className="reversed-order">
            <span>{counterpartTeamName}</span>
            <Image src={counterpartTeamLogo} alt={counterpartTeamName} width={40} height={40} />
          </Team>
        </MatchWrapper>
        <MoreButton text="경기 자세히 보기" href={""} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Container = styled(BasicWhiteCard)`
  padding: 18px 20px 12px;
`;
const MatchWrapper = styled.div`
  display: flex;
  padding: 0 0 12px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid var(--gray200);
`;
const Team = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  span {
    font-size: 1.6rem;
    font-weight: 600;
  }
  img {
    padding: 2px;
    border-radius: 50%;
    border: 1px solid var(--gray200);
  }

  &.reversed-order {
    flex-direction: row-reverse;
  }
`;
const MatchInfo = styled.div`
  p.match-score {
    margin-bottom: 2px;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--gray800);
    span.score-separator {
      color: var(--gray400);
    }
    span.winner-score {
      color: var(--main);
      font-weight: 600;
    }
  }
  p.match-date {
    font-size: 1.2rem;
    color: var(--gray600);
    text-align: center;
  }
`;

export default RecentMatch;
