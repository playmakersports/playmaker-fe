"use client";

import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import { usePageTitle } from "@/hook/usePageTitle";
import { useParams } from "next/navigation";
import { useGet } from "@/apis/hook/query";

import { FONTS } from "@/styles/common";
import { BaseContainer, WhiteSectionDivider } from "@/components/common/Container";
import RoomAwarded from "@/components/Room/Awarded";
import UserSetting from "@/app/(mobile)/(navigation)/my/settings/_components/UserSetting";
import { BasicWhiteCard } from "@/components/common/Card";
import { ApiSelectMember } from "@/apis/types/user";

import PencilIcon from "@/assets/icon/common/filled/Pencil.svg";
import MaleCharacter from "@/assets/character/character_boy_happy.png";
import FemaleCharacter from "@/assets/character/character_girl_happy.png";
import Loading from "@/components/common/Loading";

function UserPage() {
  const params = useParams();
  const userId = params["userId"];
  const [weeklyDate, setWeeklyDate] = useState("");

  const { data, isLoading } = useGet<ApiSelectMember>("/api/test/login/selectmyprofile");

  usePageTitle({
    subIcons: [
      {
        svgIcon: <PencilIcon />,
        linkTo: `/room/${userId}/edit`,
        description: "내 정보 수정",
      },
    ],
  });

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Profile>
        <Info>
          <p className="player-name">{data?.username}</p>
          <p className="introduce">{data?.selfIntro}</p>
          <p className="tag-list">
            <span className="tag">{data?.birth.slice(0, 4)}년생</span>
            <span className="tag">{data?.university}</span>
          </p>
        </Info>
        <div className="profile-image">
          {data?.imageUrl ? (
            <Image src={data?.imageUrl} alt="" width={92} height={92} />
          ) : (
            <Image src={data?.sexKey === "남성" ? MaleCharacter : FemaleCharacter} alt="" width={92} height={92} />
          )}
        </div>
      </Profile>
      <MyPageButtons>
        <button type="button">나의 좋아요</button>
        <button type="button">내가 쓴 글</button>
        <button type="button">출전 경기</button>
      </MyPageButtons>
      <TopWrapper>
        {/* <WeeklyCalender
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
        /> */}
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
  padding: 0 6px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
  div.profile-image {
    border-radius: 50%;
    overflow: hidden;
    background-color: #eef8fe;
    img {
      object-fit: cover;
    }
  }
`;
const Info = styled.div`
  flex: 1;
  display: flex;
  padding-top: 8px;
  flex-direction: column;
  gap: 10px;
  p.player-name {
    font-weight: 600;
    font-size: 2.4rem;
    strong {
      color: var(--main);
    }
  }
  p.introduce {
    ${FONTS.MD2}
    font-weight: 400;
    color: var(--gray800);
    white-space: pre-line;
  }

  p.tag-list {
    display: inline-flex;
    gap: 6px;
    span.tag {
      padding: 4px 6px;
      font-size: 1.3rem;
      border-radius: 5px;
      background-color: rgba(var(--sub2-rgb), 0.4);
      color: var(--main);
    }
  }
`;

const MyPageButtons = styled(BasicWhiteCard)`
  display: flex;
  margin: 16px 0 32px;
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

const TopWrapper = styled.div`
  padding: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default UserPage;
