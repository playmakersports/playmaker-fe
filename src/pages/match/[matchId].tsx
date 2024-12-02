import React from "react";
import styled from "@emotion/styled";
import { usePageTitle } from "@/hook/usePageTitle";

import { FONTS } from "@/styles/common";
import GradientBg from "@/components/common/GradientBg";
import { BaseContainer } from "@/components/common/Container";
import MatchRoundCard from "@/components/Match/MatchRoundCard";

function MatchPage() {
  usePageTitle({ title: "16강", scrollBgColor: [30, "transparent", "var(--background)"] });

  return (
    <>
      <GradientBg position="fixed" opacity={0.35} />
      <Container>
        <Versus>
          <div className="team">
            <div className="score">59</div>
            <div className="team-logo"></div>
            <div className="team-name">SPABA</div>
            <div className="team-univ">서울과학기술대</div>
          </div>
          <p className="center">vs</p>
          <div className="team">
            <div className="score">89</div>
            <div className="team-logo"></div>
            <div className="team-name">SPABA</div>
            <div className="team-univ">서울과학기술대</div>
          </div>
        </Versus>
        <RoundBottom>
          <MatchRoundCard
            roundName="1Q"
            homeTeamName="SPABA"
            homeTeamLogo=""
            homeTeamScore={18}
            awayTeamName="SPABA"
            awayTeamLogo=""
            awayTeamScore={25}
          />
          <MatchRoundCard
            roundName="1Q"
            homeTeamName="SPABA"
            homeTeamLogo=""
            homeTeamScore={18}
            awayTeamName="SPABA"
            awayTeamLogo=""
            awayTeamScore={25}
          />
          <MatchRoundCard
            roundName="1Q"
            homeTeamName="SPABA"
            homeTeamLogo=""
            homeTeamScore={18}
            awayTeamName="SPABA"
            awayTeamLogo=""
            awayTeamScore={25}
          />
        </RoundBottom>
      </Container>
    </>
  );
}

const Container = styled(BaseContainer)`
  position: relative;
  padding: 12px 16px 0;
`;
const Versus = styled.div`
  display: flex;
  padding: 0 32px;
  justify-content: space-between;
  align-items: center;

  div.team {
    text-align: center;
  }
  div.score {
    margin-bottom: 20px;
    font-size: 3.5rem;
    font-weight: 600;
  }
  div.team-logo {
    margin-bottom: 16px;
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
`;

const RoundBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px -16px 0;
  padding: 20px 16px calc(var(--env-sab) + 20px);
  min-height: 50vh;
  height: max-content;
  background-color: rgba(var(--gray0-rgb), 0.8);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0 -2px 20px 0px rgba(var(--gray300-rgb), 0.2);
`;

export default MatchPage;
