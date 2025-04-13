import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { WhiteSectionDivider } from "@/components/common/Container";
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
    <Container>
      <WhiteSectionDivider $child />
      <div className={settingsGroupWrapper}>
        <h4 className={settingsGroupTitle}>기본 정보</h4>
        <GroupList
          list={[
            { title: "내 정보 관리", onClick: () => router.push(`/my/settings/info`) },
            { title: "활동 지역", onClick: () => router.push(`/my/settings/location`) },
            { title: "계정 관리", onClick: () => router.push(`/my/settings/account`) },
            {
              title: "학교 인증",
              onClick: () => router.push(`/my/settings/school`),
              subText: <span style={{ color: "var(--red500)" }}>인증 필요</span>,
            },
          ]}
        />
      </div>
      <WhiteSectionDivider $child />
      <div className={settingsGroupWrapper}>
        <h4 className={settingsGroupTitle}>정보 및 지원</h4>
        <GroupList
          list={[
            {
              title: "알림 설정",
              onClick: () => {},
            },
            {
              title: "공지사항",
              onClick: () => {},
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
              onClick: () => {},
            },
          ]}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  user-select: none;
  padding: 0 0 var(--safe-bottom-navigation);
`;

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
