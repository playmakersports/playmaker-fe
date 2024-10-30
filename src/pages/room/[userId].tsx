import React, { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import useBgWhite from "@/hook/useBgWhite";
import { usePageTitle } from "@/hook/usePageTitle";

import { FONTS } from "@/styles/common";
import { BaseContainer, WhiteSectionDivider } from "@/components/common/Container";
import WeeklyCalender from "@/components/common/WeeklyCalender";
import RoomAwarded from "@/components/Room/Awarded";
import UserSetting from "@/components/Room/UserSetting";

import GenderIcon from "@/components/common/GenderIcon";
import PencilIcon from "@/assets/icon/global/Pencil.svg";

import MaleCharacter from "@/assets/character/character_boy_happy.png";
import FemaleCharacter from "@/assets/character/character_girl_happy.png";
import { BasicWhiteCard } from "@/components/common/Card";

function UserPage() {
  useBgWhite();
  const [weeklyDate, setWeeklyDate] = useState("");
  const router = useRouter();
  const userId = router.query.userId;
  const INTRODUCE_MOCK =
    "안녕하세요! 농구와 배드민턴을 좋아하는 김이프라고 합니다!항상 새로운 도전을 즐기며, 팀원들과 함께하는 시간을 소중히 여기고 있습니다.";

  usePageTitle({
    title: "마이 페이지",
    subIcons: [
      {
        svgIcon: <PencilIcon />,
        linkTo: `/room/${userId}/edit`,
        description: "내 정보 수정",
      },
    ],
  });
  return (
    <Container>
      <Profile>
        <div className="profile-image">
          <Image src={MaleCharacter} alt="" width={80} height={80} />
        </div>
        <Info>
          <p className="player-name">
            <strong>김이프</strong> 님 <GenderIcon type="FEMALE" />
          </p>
          <p className="player-detail">
            <span className="detail-tags">2000년생</span>
            <span className="detail-tags">성신여대</span>
          </p>
        </Info>
      </Profile>
      <Introduce>{INTRODUCE_MOCK}</Introduce>
      <MyPageButtons>
        <button type="button">나의 좋아요</button>
        <button type="button">내가 쓴 글</button>
        <button type="button">출전 경기</button>
      </MyPageButtons>
      <TopWrapper>
        <WeeklyCalender
          clickable={false}
          grouping={true}
          activeDate={weeklyDate}
          setActiveDate={setWeeklyDate}
          schedulesList={[
            {
              teamName: "SPABA",
              schedules: [
                { scheduleId: "", startTime: "09:30", scheduleTitle: "팀 훈련" },
                { scheduleId: "", startTime: "16:30", scheduleTitle: "교류전 (VS 성균관대)" },
              ],
            },
            {
              teamName: "SPABA",
              schedules: [
                { scheduleId: "", startTime: "09:30", scheduleTitle: "팀 훈련" },
                { scheduleId: "", startTime: "16:30", scheduleTitle: "교류전 (VS 성균관대)" },
              ],
            },
          ]}
        />
        <RoomAwarded
          awardsList={[
            { awardedYear: 2024, competitionName: "경기1", awardedRank: 1 },
            { awardedYear: 2023, competitionName: "경기2", awardedRank: 3 },
            { awardedYear: 2023, competitionName: "경기3", awardedRank: 2 },
          ]}
        />
      </TopWrapper>
      <WhiteSectionDivider />
      <UserSetting />
    </Container>
  );
}

const Container = styled(BaseContainer)``;
const Profile = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  gap: 12px;
  div.profile-image {
    border-radius: 10px;
    overflow: hidden;
    background-color: #eef8fe;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p.player-name {
    font-weight: 600;
    font-size: 2.4rem;
    strong {
      color: var(--main);
    }
  }

  p.player-detail {
    display: inline-flex;
    gap: 6px;
    span.detail-tags {
      padding: 4px 6px;
      font-size: 1.3rem;
      border-radius: 5px;
      border: 1px solid var(--sub1);
      color: var(--gray800);
    }
  }
`;

const MyPageButtons = styled(BasicWhiteCard)`
  display: flex;
  margin: 16px 0 20px;
  padding: 0 2px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  & > button {
    user-select: none;
    position: relative;
    ${FONTS.MD2};
    flex: 1;
    padding: 12px 0;
    font-weight: 400;

    &::after {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      display: block;
      margin: 12px 0;
      width: 1px;
      height: calc(100% - 24px);
      background-color: var(--gray100);
    }
    &:last-of-type {
      &::after {
        width: 0;
      }
    }
  }
`;

const Introduce = styled.p`
  ${FONTS.MD2}
  margin: 20px 0;
  padding: 16px 20px;
  width: 100%;
  background-color: var(--background);
  border-radius: 5px;
  font-weight: 400;
  color: var(--gray800);
`;

const TopWrapper = styled.div`
  padding: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default UserPage;
