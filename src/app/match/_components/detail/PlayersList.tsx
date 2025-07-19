"use client";
import React, { useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { useParams } from "next/navigation";

import { semantic } from "@/styles/color.css";
import { fonts } from "@/styles/fonts.css";
import {
  baseCardContainer,
  flexAlignCenter,
  flexColumnGap20,
  flexColumnGap4,
  flexRowGap12,
  flexRowGap4,
  flexSpaceBetween,
} from "@/styles/container.css";
import Badge from "@/components/common/Badge";
import MainTab from "@/components/Main/MainTab";
import { SCROLL_HIDE } from "@/styles/common";

import RightArrow from "@/assets/icon/arrow/RightArrow.svg";
import useModal from "@/hook/useModal";

function PlayersList() {
  const { showModal, ModalComponents } = useModal();
  const params = useParams();
  const matchId = params["matchId"];
  const [currentTeam, setCurrentTeam] = useState<"HOME" | "AWAY" | string>("HOME");
  const MOCK_PROFILE_IMG = "https://cdn.interfootball.co.kr/news/photo/202012/514959_420656_1454.jpg";

  return (
    <>
      <button type="button" onClick={showModal} className={clsx(fonts.body3.medium, baseCardContainer)}>
        선수 전체 명단
      </button>
      <ModalComponents
        title="선수 명단"
        draggable="all"
        buttons={[
          {
            name: "닫기",
            onClick: (close) => {
              close();
            },
            mode: "primary",
          },
        ]}
      >
        <Wrapper className="scrollable-container">
          <div className="tab-container">
            <MainTab
              type="line"
              color="primary"
              items={[
                { name: "홈팀", value: "HOME" },
                { name: "원정팀", value: "AWAY" },
              ]}
              initialValue={currentTeam}
              nowValue={setCurrentTeam}
              sameWidth
            />
          </div>
          <List className={flexColumnGap20}>
            {TEAM_PLAYERS_MOCK.map((player) => (
              <li key={player.id} className={clsx(flexSpaceBetween, flexAlignCenter)}>
                <div className={clsx(flexRowGap12, flexAlignCenter)}>
                  <img src={MOCK_PROFILE_IMG} alt={player.name} />
                  <div className={flexColumnGap4} style={{ gap: 0 }}>
                    <span className={clsx(fonts.body4.medium, flexAlignCenter, flexRowGap4)}>
                      <span className="back-number">NO.{player.backNumber.toString().padStart(2, "0")}</span>
                      {player.name}
                      {player.startingYn === "Y" && (
                        <Badge type="magenta" fillType="light" size="small">
                          선발
                        </Badge>
                      )}
                    </span>
                    <p className={semantic.description}>{player.position}</p>
                  </div>
                </div>
                <RightArrow fill="var(--gray700)" width={18} height={18} />
              </li>
            ))}
          </List>
        </Wrapper>
      </ModalComponents>
    </>
  );
}

const Wrapper = styled.section`
  position: relative;
  margin-top: -20px;
  max-height: 60vh;
  padding: 0 4px;
  overflow-y: auto;
  ${SCROLL_HIDE};

  div.tab-container {
    position: sticky;
    padding-bottom: 20px;
    top: 0;
    z-index: 5;
    background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 24%);
  }
`;

const List = styled.ul`
  li {
    img {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      object-fit: cover;
    }
  }
  span.back-number {
    opacity: 0.8;
    letter-spacing: -0.03rem;
    font-size: 90%;
    font-weight: 700;
  }
`;

const TEAM_PLAYERS_MOCK = [
  { id: "1", img: "", name: "김길동", backNumber: 20, position: "가드", startingYn: "Y" },
  { id: "2", img: "", name: "고길동", backNumber: 7, position: "가드", startingYn: "Y" },
  { id: "3", img: "", name: "서길동", backNumber: 88, position: "포워드", startingYn: "Y" },
  { id: "4", img: "", name: "홍길동", backNumber: 8, position: "포워드", startingYn: "Y" },
  { id: "5", img: "", name: "박길동", backNumber: 10, position: "포워드", startingYn: "N" },
  { id: "15", img: "", name: "왕길동", backNumber: 15, position: "포워드", startingYn: "N" },
  { id: "51", img: "", name: "대길동", backNumber: 19, position: "가드", startingYn: "Y" },
  { id: "45", img: "", name: "송길동", backNumber: 28, position: "센터", startingYn: "Y" },
  { id: "7", img: "", name: "송길동", backNumber: 28, position: "포워드", startingYn: "N" },
  { id: "88", img: "", name: "송길동", backNumber: 28, position: "센터", startingYn: "Y" },
];

export default PlayersList;
