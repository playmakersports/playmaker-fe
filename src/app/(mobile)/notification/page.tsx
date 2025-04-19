"use client";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import useStickyMoment from "@/hook/useStickyMoment";
import { useHeader } from "@/hook/useHeader";

import { BaseContainer } from "@/components/common/Container";
import { DropDownBottomSheet } from "@/components/common/DropDownBottomSheet";
import PushRequest from "@/components/Methods/PushRequest";
import NotificationItem from "./_components/NotificationItem";

import SettingsIcon from "@/assets/icon/common/outlined/Settings.svg";

function Notification() {
  useHeader({
    title: "알림",
    subIcons: [{ svgIcon: <SettingsIcon />, onClick: () => {}, description: "알림 설정" }],
    options: {
      titleAlign: "center",
      hideBackButton: true,
    },
  });
  const teamListRef = useRef<HTMLDivElement>(null);
  useStickyMoment(teamListRef, 40);
  const [filter, setFilter] = useState<string>("all");

  return (
    <Container>
      <PushRequest />
      <Filter>
        <div>
          <DropDownBottomSheet
            options={[
              {
                name: "전체",
                value: "all",
              },
              {
                name: "운영 팀",
                value: "manage",
              },
            ]}
            defaultValue="all"
            getCurrentValue={setFilter}
          />
        </div>
      </Filter>
      <List>
        {MOCK_NOTI_LIST.map((noti) => (
          <NotificationItem
            key={noti.notiId}
            notiId={noti.notiId}
            teamId={noti.teamId}
            articleId={noti.articleId}
            teamName={noti.teamName}
            category={noti.category}
            contents={noti.contents}
            date={noti.date}
            isRead={noti.readYn === "Y"}
          />
        ))}
      </List>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  padding-bottom: var(--safe-bottom-navigation);
`;
const Filter = styled.div`
  display: flex;
  justify-content: flex-end;
  & > div {
    width: 90px;
  }
`;
const List = styled.div`
  margin: 0 -20px;
`;

const MOCK_NOTI_LIST = [
  {
    notiId: 123,
    teamId: "1",
    articleId: "123",
    teamName: "SPABA",
    category: "공지사항",
    contents: "안녕하세요 여러분. 오늘의 공지사항을 알려드립니다.",
    date: "2025-04-14T11:54:50",
    readYn: "N",
  },
  {
    notiId: 1523,
    teamId: "1",
    articleId: "1423",
    teamName: "SPABA",
    category: "일정",
    contents: "새로운 '이번달 회식' 일정이 올라왔어요.",
    date: "2025-04-14T07:58:40",
    readYn: "N",
  },
  {
    notiId: 15253,
    teamId: "1",
    articleId: "2423",
    teamName: "SPABA",
    category: "투표",
    contents: "새로운 '2025 전국대학농구동아리대회' 일정이 올라왔어요. 참여 여부를 팀원들에게 알려주세요.",
    date: "2025-04-13T22:58:40",
    readYn: "N",
  },
  {
    notiId: 2123,
    teamId: "1",
    articleId: "623",
    teamName: "FC고고",
    category: "해체",
    contents: "팀이 해체됐어요.",
    date: "2025-01-18T11:09:20",
    readYn: "Y",
  },
  {
    notiId: 21423,
    teamId: "1",
    articleId: "623",
    teamName: "SPABA",
    category: "댓글 및 언급",
    contents: "16:40 부분에서 라인 위로 좀 더 올라가야 했어요.",
    date: "2025-01-17T21:58:20",
    readYn: "Y",
  },
  {
    notiId: 61423,
    teamId: "1",
    articleId: "623",
    teamName: "하이큐",
    category: "탈퇴",
    contents: "팀에서 탈퇴했어요.",
    date: "2025-01-17T21:58:20",
    readYn: "Y",
  },
];

export default Notification;
