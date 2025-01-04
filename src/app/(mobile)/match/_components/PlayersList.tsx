"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import TeamSwitchTab from "./TeamSwitchTab";
import styled from "styled-components";

function PlayersList() {
  const params = useParams();
  const matchId = params["matchId"];
  const [currentTeam, setCurrentTeam] = useState<"HOME" | "AWAY">("HOME");
  const MOCK_PROFILE_IMG = "https://cdn.interfootball.co.kr/news/photo/202012/514959_420656_1454.jpg";

  return (
    <Wrapper>
      <TeamSwitchTab
        homeTeamName="SPABA"
        awayTeamName="바스켓"
        currentTeam={currentTeam}
        onSwitchTeam={setCurrentTeam}
      />
      <List>
        {TEAM_PLAYERS_MOCK.map((player) => (
          <li key={player.id}>
            <span className="left">
              <img src={MOCK_PROFILE_IMG} alt={player.name} />
              <span className="name">
                <span className="back-number">{player.backNumber}</span>
                {player.name}
              </span>
            </span>
            <span className="right">
              {player.startingYn === "Y" ? <span className="starting">선발</span> : ""}
              {player.position}
            </span>
          </li>
        ))}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 20px;
  padding: 0 4px;
`;

const List = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 10px;
    font-size: 1.6rem;
    font-weight: 500;

    span.left {
      display: flex;
      align-items: center;
      gap: 20px;

      span.back-number {
        display: inline-block;
        padding: 3px 0px;
        margin-right: 4px;
        min-width: 26px;

        color: var(--gray800);
        border: 2px solid var(--gray800);
        font-weight: 700;
        /* color: var(--gray0); */
        /* background-color: var(--gray600); */

        border-radius: 4px;
        text-align: center;
        font-size: 1.4rem;
        letter-spacing: -0.3px;
      }
      span.name {
        font-weight: 500;
      }
    }

    span.right {
      color: var(--gray700);
      span.starting {
        padding-right: 6px;
        margin-right: 6px;
        border-right: 2px solid var(--gray300);
      }
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

const TEAM_PLAYERS_MOCK = [
  { id: "1", img: "", name: "김길동", backNumber: 20, position: "G", startingYn: "Y" },
  { id: "2", img: "", name: "고길동", backNumber: 7, position: "G", startingYn: "Y" },
  { id: "3", img: "", name: "서길동", backNumber: 88, position: "G", startingYn: "Y" },
  { id: "4", img: "", name: "홍길동", backNumber: 8, position: "G", startingYn: "Y" },
  { id: "5", img: "", name: "박길동", backNumber: 10, position: "G", startingYn: "Y" },
  { id: "15", img: "", name: "왕길동", backNumber: 15, position: "G", startingYn: "N" },
  { id: "51", img: "", name: "대길동", backNumber: 19, position: "G", startingYn: "N" },
  { id: "45", img: "", name: "송길동", backNumber: 28, position: "G", startingYn: "N" },
];

export default PlayersList;
