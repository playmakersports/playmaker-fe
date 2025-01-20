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
                {player.startingYn === "Y" ? <span className="starting">선발</span> : ""}
                {player.name}
              </span>
            </span>
            <ul className="right-info">
              <li>
                <p className="title">번호</p>
                <p className="contents">{player.backNumber}</p>
              </li>
              <li>
                <p className="title">포지션</p>
                <p className="contents">{player.position}</p>
              </li>
            </ul>
          </li>
        ))}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  margin-top: 20px;
  padding: 0 4px;
`;

const List = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 4px;
    font-size: 1.6rem;
    font-weight: 500;

    span.left {
      display: flex;
      align-items: center;
      gap: 20px;

      span.starting {
        display: block;
        margin-bottom: 6px;
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--gray500);
      }
      span.name {
        font-weight: 500;
        font-size: 1.6rem;
        font-weight: 700;
      }
    }

    ul.right-info {
      display: flex;
      gap: 10px;

      li {
        display: flex;
        flex-direction: column;
        gap: 6px;
        p.title {
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--gray600);
        }
        p.contents {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--gray900);
        }
      }
    }
    img {
      width: 45px;
      height: 45px;
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
