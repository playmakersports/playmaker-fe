"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { usePageTitle } from "@/hook/usePageTitle";

import { TEAM_INFO_MOCK } from "@/constants/mock/TEAM";
import Heart from "@/components/common/Heart";
import Notice from "@/components/Team/Notice";
import ProfileImage from "@/components/Team/ProfileImage";
import { FONTS } from "@/styles/common";

import SettingsIcon from "@/assets/icon/global/Settings.svg";

function TeamMainTop({ teamId }: { teamId: string }) {
  const [heart, setHeart] = useState(false);
  const PLAYING = true;

  usePageTitle({
    title: TEAM_INFO_MOCK.teamName,
    transparent: true,
    subIcons: [
      {
        svgIcon: <SettingsIcon />,
        linkTo: `/team/${teamId}/admin`,
        description: "팀 관리 페이지 이동",
      },
    ],
  });

  return (
    <LightWrapper>
      <Top>
        <TeamInfo>
          <ProfileImage isPlaying={PLAYING} imgSrc={TEAM_INFO_MOCK.logo} />
          <Right>
            <h2>
              {TEAM_INFO_MOCK.teamName}
              <Heart onHeart={setHeart} isHeart={heart} />
            </h2>
            <p className="team-location">{TEAM_INFO_MOCK.location}</p>
            <p className="team-detail-info">
              창단 {TEAM_INFO_MOCK.foundedAt} | 현 {TEAM_INFO_MOCK.memberCount}명
            </p>
            <p className="team-category">
              <span>{TEAM_INFO_MOCK.sports}</span>
              <span>{TEAM_INFO_MOCK.univName}</span>
            </p>
          </Right>
        </TeamInfo>
      </Top>
      <Notice
        list={[
          { title: "8월 1주차 교류전 참가 여부 투표", articleId: "5", createAt: "2024-07-21T13:00" },
          { title: "2024년 하계 단결 MT - 투표 진행중", articleId: "1", createAt: "2024-07-20T23:58" },
          { title: "2024년 6월 회비 결산", articleId: "32", createAt: "2024-07-19T22:57" },
        ]}
      />
    </LightWrapper>
  );
}

const LightWrapper = styled.section`
  background-color: var(--background-light);
`;
const Top = styled.section`
  padding: 24px 20px;
  box-shadow: 0 2px 4px 0 rgba(195, 220, 243, 0.5);
  background-color: var(--background-light);
`;
const TeamInfo = styled.article`
  display: flex;
  gap: 20px;
`;

const Right = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4px;
  flex-direction: column;
  gap: 8px;
  h2 {
    ${FONTS.HEAD1};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .team-location {
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--gray800);
  }
  .team-detail-info {
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--gray500);
  }
  .team-category {
    margin-top: 8px;
    display: inline-flex;
    gap: 6px;
    font-weight: 400;
    span {
      display: inline-block;
      font-size: 1.2rem;
      line-height: 1.6rem;
      padding: 2px 6px;
      border: 1px solid var(--gray200);
      color: var(--gray800);
      border-radius: 5px;
    }
  }
`;

export default TeamMainTop;
