"use client";
import React from "react";
import styled from "styled-components";
import { useHeader } from "@/hook/useHeader";

import { SelectTeamResponse } from "@/types/team";
import TeamNotice from "@/app/(mobile)/team/[teamId]/_components/TeamNotice";

import { baseContainer } from "@/styles/container.css";
import {
  teamMainTopBanner,
  teamMainTopHeader,
  teamMainTopInfoContainer,
  teamMainTopInfoList,
  teamMainTopInfoListItem,
} from "./team.main.css";
import { fonts } from "@/styles/fonts.css";

import IdentifyIcon from "@/assets/icon/common/outlined/Identify.svg";
import PeopleIcon from "@/assets/icon/common/outlined/People.svg";
import TeamMainLogo from "./TeamMainLogo";
import TeamHeart from "./TeamHeart";

function TeamMainTop(props: SelectTeamResponse) {
  const {
    bgUrl,
    teamIntro,
    teamId,
    teamName,
    logoUrl,
    activeArea,
    createDt,
    item,
    countMember,
    masterNm,
    myTeamYn,
    university,
  } = props;
  const PLAYING = true;

  useHeader({
    title: teamName,
  });

  return (
    <>
      <section className={teamMainTopBanner} style={{ backgroundImage: `url(${bgUrl})` }}>
        <div className={teamMainTopInfoContainer}>
          <ul className={teamMainTopInfoList}>
            <li className={teamMainTopInfoListItem}>{activeArea}</li>
            <li className={teamMainTopInfoListItem}>
              <IdentifyIcon /> {masterNm}
            </li>
            <li className={teamMainTopInfoListItem}>
              <PeopleIcon /> {countMember}명
            </li>
          </ul>
          <TeamHeart teamId={teamId} />
        </div>
      </section>
      <section className={baseContainer} style={{ paddingBottom: "20px" }}>
        <Top>
          <TeamMainLogo isPlaying={PLAYING} imgSrc={logoUrl} />
          <div className={teamMainTopHeader}>
            <h2 className={fonts.body2.semibold} style={{ color: "var(--gray900)" }}>
              {teamName}
            </h2>
            <p className={fonts.body4.regular}>{teamIntro}</p>
          </div>
        </Top>
        <TeamNotice
          list={[
            { title: "8월 1주차 교류전 참가 여부 투표", articleId: "5", createAt: "2025-04-19T13:00" },
            { title: "2024년 하계 단결 MT - 투표 진행중", articleId: "1", createAt: "2025-04-19T23:58" },
            { title: "2024년 6월 회비 결산", articleId: "32", createAt: "2025-04-19T22:57" },
          ]}
        />
      </section>
    </>
  );
}

const Top = styled.section`
  display: flex;
  gap: 12px;
  padding: 28px 0 20px;
`;

export default TeamMainTop;
