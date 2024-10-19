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

import SettingsIcon from "@/assets/icon/global/Settings.svg";
import FemaleIcon from "@/assets/icon/gender/Female.svg";
import MaleIcon from "@/assets/icon/gender/Male.svg";

import MaleCharacter from "@/assets/character/character_boy_happy.png";
import FemaleCharacter from "@/assets/character/character_girl_happy.png";

function UserPage() {
  useBgWhite();
  const [weeklyDate, setWeeklyDate] = useState("");
  const router = useRouter();
  const userId = router.query.userId;
  const INTRODUCE_MOCK =
    "안녕하세요! 농구와 배드민턴을 좋아하는 김이프라고 합니다!항상 새로운 도전을 즐기며, 팀원들과 함께하는 시간을 소중히 여기고 있습니다.";

  usePageTitle({
    subIcons: [
      {
        svgIcon: <SettingsIcon />,
        linkTo: `/team/${userId}/admin`,
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
            <strong>김이프</strong> 님{" "}
            <Badges>
              <FemaleIcon />
            </Badges>
          </p>
          <p className="player-detail">
            <span className="detail-tags">2000년생</span>
            <span className="detail-tags">성신여대</span>
          </p>
        </Info>
      </Profile>
      <Introduce>{INTRODUCE_MOCK}</Introduce>
      <TopWrapper>
        <p>내가 좋아요 한 팀, 게시글 // 내가 쓴 글 팀 // 경기 참여 신청 내역</p>
        <WeeklyCalender
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
const Badges = styled.span`
  display: inline-flex;
  margin-left: -2px;
  align-items: center;
  gap: 4px;
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
