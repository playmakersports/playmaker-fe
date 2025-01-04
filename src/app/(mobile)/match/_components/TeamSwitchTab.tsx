import React from "react";
import styled from "styled-components";

type Props = {
  homeTeamName: string;
  awayTeamName: string;
  currentTeam: string;
  onSwitchTeam: (prev: "HOME" | "AWAY") => void;
};

function TeamSwitchTab(props: Props) {
  const { homeTeamName, awayTeamName, currentTeam, onSwitchTeam } = props;

  return (
    <Wrapper role="tablist">
      <TabButton
        type="button"
        role="tab"
        className={currentTeam === "AWAY" ? "active" : ""}
        onClick={() => onSwitchTeam("AWAY")}
      >
        {awayTeamName}
      </TabButton>
      <TabButton
        type="button"
        role="tab"
        className={currentTeam === "HOME" ? "active" : ""}
        onClick={() => onSwitchTeam("HOME")}
      >
        {homeTeamName}
      </TabButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding: 10px 0;
  display: flex;
  gap: 10px;
`;
const TabButton = styled.button`
  flex: 1;
  font-size: 1.4rem;
  padding: 12px 0;
  color: var(--gray500);
  background: rgba(0, 0, 0, 0.03);
  font-weight: 600;
  border-radius: 6px;

  &.active {
    color: var(--gray0);
    background: var(--gray900);
  }
`;

export default TeamSwitchTab;
