"use client";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { baseDividedLineChild } from "@/styles/container.css";
import { settingsGroupTitle, settingsGroupWrapper } from "./userSetting.css";
import RightArrowIcon from "@/assets/icon/arrow/RightArrow.svg";

type GroupListProps = {
  list: {
    title: string;
    onClick: () => void;
    subText?: string | React.ReactNode;
  }[];
};
function GroupList({ list }: GroupListProps) {
  return (
    <Group>
      {list.map((item, idx) => (
        <li key={idx} onClick={item.onClick}>
          <span className="title-wrapper">{item.title}</span>
          {item.subText ? (
            <span className="status-wrapper">
              {item.subText}
              <RightArrowIcon width={24} height={24} fill="var(--gray700)" />
            </span>
          ) : (
            <span className="status-wrapper">
              <RightArrowIcon width={24} height={24} fill="var(--gray700)" />
            </span>
          )}
        </li>
      ))}
    </Group>
  );
}
function UserSetting() {
  const router = useRouter();

  return (
    <>
      <div className={baseDividedLineChild} />
      <div className={settingsGroupWrapper}>
        <h4 className={settingsGroupTitle}>기본 정보</h4>
        <GroupList
          list={[
            { title: "내 프로필 수정", onClick: () => router.push(`/my/info`) },
            { title: "활동 지역", onClick: () => router.push(`/my/location`) },
            // NOTE: 초기 버전에서는 학교 인증 및 계정 관리 제외
            // {
            //   title: "학교 인증",
            //   onClick: () => router.push(`/my/school`),
            //   subText: <span style={{ color: "var(--red500)" }}>인증 필요</span>,
            // },
            // { title: "계정 관리", onClick: () => router.push(`/my/account`) },
          ]}
        />
      </div>
      <div className={baseDividedLineChild} />
      <div className={settingsGroupWrapper}>
        <h4 className={settingsGroupTitle}>소속 팀</h4>
        <GroupList list={[{ title: "소속 팀 관리", onClick: () => router.push(`/my/team-list`) }]} />
      </div>
      <div className={baseDividedLineChild} />
      <div className={settingsGroupWrapper}>
        <h4 className={settingsGroupTitle}>내 운동 정보</h4>
        <GroupList
          list={[
            { title: "신체 정보 관리", onClick: () => router.push(`/my/physical`) },
            { title: "운동 종목별 정보 관리", onClick: () => router.push(`/my/sports`) },
          ]}
        />
      </div>
      <div className={baseDividedLineChild} />
      <div className={settingsGroupWrapper}>
        <GroupList
          list={[
            {
              title: "알림 설정",
              onClick: () => router.push(`/my/notification`),
            },
            {
              title: "공지사항",
              onClick: () => router.push(`/my/notice`),
            },
            {
              title: "약관 정보",
              onClick: () => {},
            },

            {
              title: "앱 버전 확인",
              onClick: () => {},
            },
            {
              title: "로그아웃",
              onClick: () => {
                router.replace("/user/logout");
              },
            },
          ]}
        />
      </div>
    </>
  );
}

const Group = styled.ul`
  display: flex;
  flex-direction: column;
  margin: -4px -10px 0;
  gap: calc(20px - 4px - 4px);
  li {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;

    display: flex;
    padding: 4px 10px;
    align-items: center;
    justify-content: space-between;
    ${BUTTON_ACTIVE("var(--gray50)")}
  }
  span.title-wrapper {
    ${FONTS.body3("medium")};
    color: var(--gray700);
  }
  span.status-wrapper {
    ${FONTS.body4("regular")};
    display: inline-flex;
    align-items: center;
    color: var(--gray500);
    gap: 4px;
  }
`;

export default UserSetting;
