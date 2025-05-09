"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useHeader } from "@/hook/useHeader";
import { differenceInCalendarDays } from "date-fns";

import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { TEAM_INFO_MOCK } from "@/constants/mock/TEAM";
import { BaseContainer } from "@/components/common/Container";
import ProfileImage from "@/app/(mobile)/team/[teamId]/_components/TeamMainLogo";
import AdminList from "@/components/Team/AdminList";
import Badge from "@/components/common/Badge";

import CheckIcon from "@/assets/icon/common/Check.svg";

function AdminIndex() {
  const [countFounded, setCountFounded] = useState(0);

  useHeader({
    title: "팀 관리",
  });
  const foundedDate = "2023-10-20";
  useEffect(() => {
    setCountFounded(differenceInCalendarDays(new Date(), foundedDate));
  }, []);

  return (
    <>
      <Container>
        <Header>
          <ProfileImage imgSrc={TEAM_INFO_MOCK.logo} />
          <TeamInfo>
            <h2>{TEAM_INFO_MOCK.teamName}</h2>
            <TeamInfoLabel>
              <Badge type="warning">Premium</Badge>
              <Badge type="primary" icon={<CheckIcon />}>
                {TEAM_INFO_MOCK.univName}
              </Badge>
            </TeamInfoLabel>
            <div className="team-description">
              <p>
                <span>Since {foundedDate.split("-").join(".")}</span>
                <span>우리가 달려온 {countFounded}일</span>
              </p>
            </div>
          </TeamInfo>
        </Header>
        <AdminList />
      </Container>
    </>
  );
}

const Container = styled(BaseContainer)`
  padding-bottom: calc(20px + var(--env-sab));
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const foundedAnimate = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  20% {
    transform: translate3d(0, 0, 0);
  }
  25% {
    transform: translate3d(0, -1.8rem, 0);
  }
  70% {
    transform: translate3d(0, -1.8rem, 0);
  }
  75% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const TeamInfo = styled.div`
  display: flex;
  margin-top: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  h2 {
    ${FONTS.body1("semibold")};
  }
  div.team-description {
    ${FONTS.body4("regular")};
    color: var(--gray700);
    height: 1.8rem;
    overflow: hidden;
    p {
      animation: ${foundedAnimate} 9.5s infinite;
      will-change: transform;
    }
    span {
      display: block;
      text-align: center;
    }
  }
`;
const TeamInfoLabel = styled.div`
  display: flex;
  gap: 4px;
  font-weight: 400;
  font-size: 1.4rem;
  color: var(--gray700);

  span {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    border-radius: 8px;
  }
`;
const TeamInfoSettings = styled.div`
  display: flex;
  margin: 16px -4px 0;
  padding: 0 2px;
  justify-content: center;
  align-items: center;
  background-color: var(--gray200);
  border-radius: 10px;
  & > button {
    user-select: none;
    position: relative;
    ${FONTS.body4("regular")};
    flex: 1;
    padding: 12px 0;
    font-weight: 400;
    ${BUTTON_ACTIVE("var(--gray300)")}

    &::after {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      display: block;
      margin: 12px 0;
      width: 1px;
      height: calc(100% - 24px);
      background-color: var(--gray400);
    }
    &:last-of-type {
      &::after {
        width: 0;
      }
    }
  }
`;

export default AdminIndex;
