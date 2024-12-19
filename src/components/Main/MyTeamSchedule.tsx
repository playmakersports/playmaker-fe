"use client";

import React, { useRef, useState } from "react";
import styled from "styled-components";
import Flicking, { ChangedEvent, WillChangeEvent } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import { BasicWhiteCard } from "../common/Card";
import GroupTitle from "../common/GroupTitle";
import { HOME_TEAM_SCHEDULE_MOCK } from "@/constants/mock/HOME";
import { FONTS } from "@/styles/common";
import { countDayDiff, formattedDate } from "@/util/date";

function MyTeamSchedule() {
  const flickRef = useRef<Flicking>(null);
  const [activePanel, setActivePanel] = useState(0);

  const onPanelChanged = (e: ChangedEvent | WillChangeEvent) => {
    setActivePanel(e.index);
  };

  return (
    <Container>
      <GroupTitle link="">소속 팀의 경기 일정</GroupTitle>
      <Cards>
        <Flicking
          ref={flickRef}
          align="prev"
          moveType="strict"
          horizontal={true}
          circular={false}
          onWillChange={onPanelChanged}
          onChanged={onPanelChanged}
        >
          {HOME_TEAM_SCHEDULE_MOCK.map((match) => {
            const isPractice = match.matchTitle.includes("연습");
            return (
              <Panel key={match.matchId}>
                <Card>
                  <CardImg img={match.matchImage}>
                    <div className="team-name">{match.teamName}</div>
                    <div className="match-d-day">D-{countDayDiff(match.matchDate.slice(0, 10))}</div>
                  </CardImg>
                  <CardInfo>
                    <h4>{match.matchTitle}</h4>
                    <ul className="match-date-place">
                      <dl>
                        <dt>일시</dt>
                        <dd>
                          {formattedDate(match.matchDate, {
                            displayDateType: "kr",
                            displayDayName: "short-with-parenthesis",
                            displayYear: "always",
                            displayTime: "12h-kr",
                          })}
                        </dd>
                      </dl>
                      <dl>
                        <dt>장소</dt>
                        <dd>{match.matchPlace}</dd>
                      </dl>
                    </ul>
                    <ul className="match-tag">
                      <li data-kind="category">{match.category}</li>
                      {isPractice && <li data-kind="practice">연습</li>}
                      <li>{match.matchPlace.split(" ")[0]}</li>
                    </ul>
                  </CardInfo>
                </Card>
              </Panel>
            );
          })}
        </Flicking>
      </Cards>
      <Bullet>
        {HOME_TEAM_SCHEDULE_MOCK.map((_, index) => (
          <span key={`bullet-${index}`} className={activePanel === index ? "active-bullet" : ""}></span>
        ))}
      </Bullet>
    </Container>
  );
}

const Container = styled.article`
  z-index: 1;
  padding: 0;
`;
const Cards = styled.div`
  margin: 16px -16px -4px;
  padding: 0 16px 8px;
  width: calc(100% + 32px);
  overflow: hidden;

  .flicking-camera {
    gap: 10px;
    width: calc(100% - 20px);
  }
  .flicking-viewport {
    overflow: visible;
  }
`;

const Panel = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  &:first-of-type {
    margin: 0;
  }
`;
const Card = styled(BasicWhiteCard)`
  padding: 10px 10px 20px 10px;
  width: 100%;
  background-color: var(--background-light);
`;
const CardImg = styled.div<{ img: string }>`
  position: relative;
  width: 100%;
  height: 110px;
  margin-bottom: 10px;
  border-radius: 5px;
  background: ${({ img }) => `url(${img})`};
  background-color: var(--gray100);
  object-fit: cover;
  background-size: 100%;

  div.team-name {
    ${FONTS.MD2};
    position: absolute;
    margin: 5px 10px;
    padding: 5px 10px;
    left: 0;
    border-radius: 16px;
    background-color: rgba(256, 256, 256, 0.6);
    backdrop-filter: blur(4px);
  }
  div.match-d-day {
    ${FONTS.MD2};
    position: absolute;
    margin: 3px 10px 0;
    padding: 5px 0;
    right: 0;
    font-weight: 800;
    color: #fff;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
  }
`;
const CardInfo = styled.div`
  padding: 0 8px;
  h4 {
    ${FONTS.MD1};
    margin-bottom: 6px;
    color: var(--gray900);
  }
  ul.match-date-place {
    dl {
      display: flex;
      gap: 10px;
      color: var(--gray800);
      ${FONTS.MD2}
      dd {
        flex: 1;
        font-weight: 400;
        color: var(--gray700);
      }
    }
  }
  ul.match-tag {
    display: flex;
    margin-top: 12px;
    gap: 5px;

    li {
      padding: 5px 10px;
      border-radius: 7px;
      font-weight: 500;
      font-size: 1.2rem;
      background-color: var(--gray200);
      color: var(--gray700);
    }
    li[data-kind="category"] {
      background-color: rgba(160, 188, 248, 0.5);
      color: var(--main);
      font-weight: 600;
    }
    li[data-kind="practice"] {
      background-color: rgba(148, 144, 223, 0.2);
      color: var(--art-purple);
      font-weight: 600;
    }
  }
`;

const Bullet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin: 10px auto;
  width: 100%;

  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background-color: var(--gray300);
    transition: width 0.2s, background-color 0.2s;
    &.active-bullet {
      width: 24px;
      background-color: var(--art-purple);
    }
  }
`;

export default MyTeamSchedule;
