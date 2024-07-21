import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { usePageTitle } from "@/hook/usePageTitle";
import { CARD_ACTIVE, FONTS } from "@/styles/common";
import { BasicWhiteCard, BasicWhiteCardTitle } from "@/components/common/Card";
import { BaseContainer, WhiteSectionDivider, WhiteSectionWrapper } from "@/components/common/Container";
import ScheduleSection from "@/components/Team/ScheduleSection";
import MoreButton from "@/components/common/MoreButton";
import Notice from "@/components/Team/Notice";
import ProfileImage from "@/components/Team/ProfileImage";
import TeamWeekly from "@/components/Team/TeamWeekly";
import Heart from "@/components/common/Heart";
import ComingUpMatch from "@/components/Team/ComingUpMatch";

import SettingsIcon from "@/assets/icon/global/Settings.svg";

function TeamHome() {
  const router = useRouter();
  const [heart, setHeart] = useState(false);
  const teamId = router.query.teamId;

  usePageTitle({
    transparent: true,
    subIcons: [
      {
        svgIcon: <SettingsIcon />,
        linkTo: `/team/${teamId}/admin`,
      },
    ],
  });

  const PLAYING = true;
  const COVER_IMAGE = "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=1000";

  return (
    <>
      <CoverImage src={COVER_IMAGE} />
      <Description>최강 배구팀입니다. 0년 연속 전국 대회 수상한 팀입니다.</Description>
      <LightWrapper>
        <Top>
          <TeamInfo>
            <ProfileImage
              isPlaying={PLAYING}
              imgSrc="https://previews.123rf.com/images/3t0n4k/3t0n4k1605/3t0n4k160500031/57480606-%EB%86%8D%EA%B5%AC-%ED%8C%80-%EB%98%90%EB%8A%94-%EB%A6%AC%EA%B7%B8-%EB%A1%9C%EA%B3%A0.jpg"
            />
            <Right>
              <h2>
                팀 이름
                <Heart onHeart={setHeart} isHeart={heart} />
              </h2>
              <p className="team-detail-info">창단 2024.04.20 | 현 14명</p>
              <p className="team-category">
                <span>배구</span>
                <span>성균관대</span>
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
          <TeamWeekly />
          <ComingUpMatch />
          <Card onClick={() => router.push(`/team/${teamId}/video/1`)}>
            <BasicWhiteCardTitle>경기 영상</BasicWhiteCardTitle>
          </Card>
          <Card onClick={() => router.push(`/team/${teamId}/board`)}>
            <BasicWhiteCardTitle>게시판</BasicWhiteCardTitle>
          </Card>
          <Card onClick={() => router.push(`/team/${teamId}/statistics`)}>
            <BasicWhiteCardTitle>통계</BasicWhiteCardTitle>
            <ScheduleSection />
          </Card>
        </Cards>
        <WhiteSectionDivider />
        <PlayerListWrapper>
          <BasicWhiteCardTitle>팀원</BasicWhiteCardTitle>
          <MoreButton text="전체 팀원 보기" href={`/team/${teamId}/players`} />
        </PlayerListWrapper>
      </MainContainer>
    </>
  );
}

const CoverImage = styled.section<{ src: string }>`
  margin-top: calc(-1 * var(--safe-area-top));
  width: 100%;
  height: calc(245px + var(--env-sat));
  background-color: var(--gray4);
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
`;
const Description = styled.p`
  ${FONTS.MD2};
  color: var(--gray2);
  text-align: center;
  padding: 12px;
  border-bottom: 1px solid var(--gray6);
  text-wrap: pretty;
  background-color: var(--background-light);
`;
const LightWrapper = styled.section`
  background-color: var(--background-light);
`;
const Top = styled.section`
  padding: 24px 20px;
  box-shadow: 0 2px 4px 0 rgba(141, 141, 141, 0.25);
  background-color: var(--background-light);
`;
const MainContainer = styled(BaseContainer)`
  padding: 0px 16px 20px;
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
  .team-detail-info {
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--gray4);
  }
  .team-category {
    margin-top: 8px;
    display: inline-flex;
    gap: 6px;
    font-weight: 400;
    span {
      display: inline-block;
      font-size: 1.3rem;
      line-height: 1.6rem;
      padding: 2px 4px;
      border: 1px solid var(--gray5);
      color: var(--gray2);
      border-radius: 4px;
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
  padding: 20px 24px 32px;
  background-color: var(--background-light);
`;

export default TeamHome;
