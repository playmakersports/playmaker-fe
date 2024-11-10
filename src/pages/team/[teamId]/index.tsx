import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { usePageTitle } from "@/hook/usePageTitle";
import { CARD_ACTIVE, FONTS } from "@/styles/common";
import { BasicWhiteCard, BasicWhiteCardTitle } from "@/components/common/Card";
import { BaseContainer, WhiteSectionDivider, WhiteSectionWrapper } from "@/components/common/Container";
import ScheduleSection from "@/components/Team/ScheduleSection";
import Notice from "@/components/Team/Notice";
import ProfileImage from "@/components/Team/ProfileImage";
import WeeklyCalender from "@/components/common/WeeklyCalender";
import Heart from "@/components/common/Heart";
import ComingUpMatch from "@/components/Team/ComingUpMatch";

import SettingsIcon from "@/assets/icon/global/Settings.svg";
import { TEAM_INFO_MOCK } from "@/constants/mock/TEAM";
import MetaTitle from "@/components/layouts/MetaTitle";
import RecentMatch from "@/components/Team/RecentMatch";
import BoardList from "@/components/Team/BoardList";
import GroupTitle from "@/components/common/GroupTitle";
import HomeTeamList from "@/components/Team/HomeTeamList";
import FloatButton from "@/components/common/FloatButton";
import Button from "@/components/common/Button";

function TeamHome() {
  const router = useRouter();
  const [heart, setHeart] = useState(false);
  const [weeklyDate, setWeeklyDate] = useState("");
  const teamId = router.query.teamId;

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

  const PLAYING = true;

  return (
    <>
      <MetaTitle title={TEAM_INFO_MOCK.teamName} />
      <FloatButton>
        <Button type="button" mode="MAIN" fullWidth onClick={() => {}}>
          가입 신청
        </Button>
      </FloatButton>
      <CoverImage src={TEAM_INFO_MOCK.cover} />
      <Description>{TEAM_INFO_MOCK.introduce}</Description>
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
      <MainContainer>
        <Cards>
          <WeeklyCalender
            grouping={false}
            activeDate={weeklyDate}
            setActiveDate={setWeeklyDate}
            schedulesList={[
              {
                teamName: "",
                schedules: [
                  { scheduleId: "", startTime: "09:30", scheduleTitle: "팀 훈련" },
                  { scheduleId: "", startTime: "16:30", scheduleTitle: "교류전 (VS 성균관대)" },
                ],
              },
            ]}
          />
          <ComingUpMatch />
          <RecentMatch
            matchId={"123"}
            teamName={TEAM_INFO_MOCK.teamName}
            teamLogo={TEAM_INFO_MOCK.logo}
            matchTeamScore={20}
            counterpartTeamName="SPABA"
            counterpartTeamLogo=""
            matchCounterpartScore={10}
            matchDate="2024.10.12"
          />
          <BoardList />
          <Card onClick={() => router.push(`/team/${teamId}/video/1`)}>
            <BasicWhiteCardTitle>경기 영상</BasicWhiteCardTitle>
          </Card>
          <Card onClick={() => router.push(`/team/${teamId}/statistics`)}>
            <BasicWhiteCardTitle>통계</BasicWhiteCardTitle>
            <ScheduleSection />
          </Card>
        </Cards>
        <WhiteSectionDivider />
        <PlayerListWrapper>
          <GroupTitle link={`/team/${teamId}/players`}>팀원</GroupTitle>
          <HomeTeamList />
        </PlayerListWrapper>
      </MainContainer>
    </>
  );
}

const CoverImage = styled.section<{ src: string }>`
  margin-top: calc(-1 * var(--safe-area-top));
  width: 100%;
  height: calc(232px + var(--env-sat));
  background-color: var(--gray600);
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
`;
const Description = styled.p`
  ${FONTS.MD2};
  color: var(--gray800);
  text-align: center;
  padding: 12px;
  border-bottom: 1px solid var(--gray300);
  text-wrap: pretty;
  background-color: var(--background-light);
`;
const LightWrapper = styled.section`
  background-color: var(--background-light);
`;
const Top = styled.section`
  padding: 24px 20px;
  box-shadow: 0 2px 4px 0 rgba(195, 220, 243, 0.5);
  background-color: var(--background-light);
`;
const MainContainer = styled(BaseContainer)`
  padding: 16px;
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
const Cards = styled.section`
  display: flex;
  padding: 4px 0 24px;
  flex-direction: column;
  gap: 36px;
`;

const Card = styled(BasicWhiteCard.withComponent("button"))`
  position: relative;
  text-align: left;
  ${CARD_ACTIVE};
`;
const PlayerListWrapper = styled(WhiteSectionWrapper)`
  padding: 20px 24px calc(var(--env-sab) + 100px);
  background-color: var(--background-light);
`;

export default TeamHome;
