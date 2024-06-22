import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";
import useToast from "@/hook/useToast";

import { usePageTitle } from "@/hook/usePageTitle";
import { CARD_ACTIVE, FONTS } from "@/styles/common";
import { BasicWhiteCard, BasicWhiteCardTitle, CardAreaTitle } from "@/components/common/Card";
import { BaseContainer, WhiteSectionDivider, WhiteSectionWrapper } from "@/components/common/Container";
import ScheduleSection from "@/components/Team/ScheduleSection";
import Button from "@/components/common/Button";
import MoreButton from "@/components/common/MoreButton";

function TeamHome() {
  usePageTitle("", true);
  const PLAYING = true;
  const { trigger } = useToast();
  const router = useRouter();
  const teamId = router.query.teamId;

  const COVER_IMAGE = "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=1000";
  const requestTeamJoin = () => {};
  const addFavoriteTeam = () => {
    trigger("관심 팀에 추가했어요.");
  };
  const moveAdminPage = () => {};

  return (
    <>
      <CoverImage src={COVER_IMAGE} />
      <Description>최강 배구팀입니다. 0년 연속 전국 대회 수상한 팀입니다.</Description>
      <Top>
        <TeamInfo>
          <ProfileImgContainer>
            {PLAYING && <Playing />}
            <ProfileImg playing={PLAYING}>
              <img
                className="image"
                src="https://www.yonexmall.com/shop/data/skin_mobileV2/godobaby_C/mobileShopLogo.gif"
                alt="팀 프로필 이미지"
              />
            </ProfileImg>
          </ProfileImgContainer>
          <Right>
            <h2>팀 이름</h2>
            <p>창단 2024.04.20 | 현 14명</p>
            <p className="team-category">
              <span>배구</span>
              <span>성균관대</span>
            </p>
          </Right>
        </TeamInfo>
        <TeamButtons>
          <Button type="button" mode="MAIN" flex={2} autoHeight onClick={requestTeamJoin}>
            가입 요청
          </Button>
          <Button type="button" mode="OPTION1" flex={2} autoHeight onClick={addFavoriteTeam}>
            관심 팀 추가
          </Button>
          <Button type="button" mode="OPTION2" flex={1} autoHeight onClick={moveAdminPage}>
            관리
          </Button>
        </TeamButtons>
      </Top>
      <BaseContainer>
        <Cards>
          <Card onClick={() => router.push(`/team/${teamId}/board`)}>
            <BasicWhiteCardTitle>게시판</BasicWhiteCardTitle>
          </Card>
          <Card onClick={() => router.push(`/team/${teamId}/schedule`)}>
            <BasicWhiteCardTitle>일정</BasicWhiteCardTitle>
            <ScheduleSection />
          </Card>
          <Card onClick={() => router.push(`/team/${teamId}/video/1`)}>
            <BasicWhiteCardTitle>경기 영상</BasicWhiteCardTitle>
          </Card>
          <Card>
            <BasicWhiteCardTitle>수상 이력</BasicWhiteCardTitle>
          </Card>
          <WhiteSectionDivider />
          <PlayerListWrapper>
            <CardAreaTitle>팀원</CardAreaTitle>
            <MoreButton text="전체 팀원 보기" href={`/team/${teamId}/players`} />
          </PlayerListWrapper>
        </Cards>
      </BaseContainer>
    </>
  );
}

const rotateCircle = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
`;

const CoverImage = styled.section<{ src: string }>`
  margin-top: calc(-1 * var(--safe-area-top));
  width: 100%;
  height: calc(245px + var(--env-sat));
  background-color: rgb(var(--gray-h3));
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
`;
const Description = styled.p`
  ${FONTS.MD2};
  text-align: center;
  padding: 12px;
  border-bottom: 1px solid rgb(var(--gray-h5));
  text-wrap: pretty;
`;
const Top = styled.section`
  margin-bottom: 16px;
  padding: 24px 20px;
  box-shadow: 0 2px 4px 0 rgba(141, 141, 141, 0.25);
`;
const TeamInfo = styled.article`
  display: flex;
  gap: 20px;
  h2 {
    ${FONTS.HEAD1}
  }
`;
const TeamButtons = styled.article`
  display: flex;
  margin-top: 12px;
  gap: 8px;
  justify-content: space-between;
  button {
    font-size: 1.4rem;
  }
`;

const ProfileImgContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;
const ProfileImg = styled.div<{ playing: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  overflow: hidden;

  .image {
    margin: ${({ playing }) => (playing ? "3px" : "0")};
    border: 5px solid ${({ theme }) => theme.background};
    border: ${({ playing }) => (playing ? "" : "none")};
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    z-index: 1;
    border-radius: 100%;
    object-fit: cover;
  }
  &::before {
    content: "";
    position: absolute;
    display: ${({ playing }) => (playing ? "block" : "none")};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.main};
    background: linear-gradient(${({ theme }) => theme.main2} 0%, #10bfff 45%, #90d621 95%);
    animation: ${rotateCircle} 2s linear infinite;
  }
`;
const Playing = styled.p`
  position: absolute;
  padding: 4px 10px;
  border-radius: 12px;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.main2};
  border-top: 3px solid ${({ theme }) => theme.background};
  border-left: 3px solid ${({ theme }) => theme.background};
  border-right: 3px solid ${({ theme }) => theme.background};
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
  z-index: 2;
  word-break: keep-all;
  &::before {
    content: "경기중";
  }
`;
const Right = styled.div`
  display: flex;
  margin-top: 4px;
  flex-direction: column;
  gap: 8px;
  p {
    ${FONTS.MD2};
  }
  .team-category {
    display: inline-flex;
    gap: 4px;
    line-height: 2rem;
    font-weight: 400;

    span {
      display: inline-block;
      font-size: 1.3rem;
      line-height: 1.6rem;
      padding: 2px 4px;
      border: 1px solid rgb(var(--gray-h3));
      color: var(--text);
      border-radius: 6px;
    }
  }
`;
const Cards = styled.section`
  display: flex;
  flex-direction: column;
  /* gap: 16px; */
`;

const Card = styled(BasicWhiteCard.withComponent("button"))`
  position: relative;
  text-align: left;
  ${CARD_ACTIVE};
`;
const PlayerListWrapper = styled(WhiteSectionWrapper)`
  padding: 20px 24px 0;
`;

export default TeamHome;
