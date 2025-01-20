"use client";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useStickyMoment from "@/hook/useStickyMoment";
import { usePageTitle } from "@/hook/usePageTitle";

import { FONTS } from "@/styles/common";
import { formattedDate } from "@/util/date";
import { BaseContainer } from "@/components/common/Container";
import TabList from "@/components/common/TabList";
import { DropDownBottomSheet } from "@/components/common/DropDownBottomSheet";
import PushRequest from "@/components/Methods/PushRequest";

function Notification() {
  usePageTitle({ title: "알림", scrolledShadow: false });
  const tabRef = useRef<HTMLDivElement>(null);
  const teamListRef = useRef<HTMLDivElement>(null);
  useStickyMoment(tabRef);
  useStickyMoment(teamListRef, 40);
  const MOCK_LOGO_IMG =
    "https://hillstate.hdec.kr/Files/Contents/%ED%98%84%EB%8C%80%EA%B1%B4%EC%84%A4%ED%9E%90%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%8A%B8%EB%B0%B0%EA%B5%AC%EB%8B%A8_211013_154732.png";
  const [filter, setFilter] = useState<string>("all");
  const searchParams = useSearchParams();
  const isStaffTab = searchParams.get("tab") === "staff";

  return (
    <Container>
      <PushRequest />
      <TabWrapper ref={tabRef}>
        <TabList>
          <Link className={!isStaffTab ? "active" : ""} href="/notification">
            일반
          </Link>
          <Link className={isStaffTab ? "active" : ""} href="/notification?tab=staff">
            관리자
          </Link>
        </TabList>
      </TabWrapper>
      <Filter>
        <div>
          <DropDownBottomSheet
            options={[
              {
                name: "전체보기",
                value: "all",
              },
              {
                name: "공지사항",
                value: "notice",
              },
              {
                name: "일정",
                value: "schedule",
              },
              {
                name: "댓글 및 언급",
                value: "reply",
              },
            ]}
            defaultValue="all"
            getCurrentValue={setFilter}
          />
        </div>
      </Filter>
      <Title>{isStaffTab ? "관리" : "소속"} 팀</Title>
      <TeamList ref={teamListRef}>
        <ul>
          <li>
            <Logo src={MOCK_LOGO_IMG} alt=" " />
            <span>SPABA</span>
          </li>
          <li>
            <Logo src={MOCK_LOGO_IMG} alt=" " />
            <span>SPABA</span>
          </li>
          <li>
            <Logo src={MOCK_LOGO_IMG} alt=" " />
            <span>SPABA</span>
          </li>
        </ul>
      </TeamList>
      <NotiList>
        <Group>
          <Title>읽지 않음</Title>
          <List>
            {MOCK_NOTI_LIST.map((noti) => (
              <li key={noti.notiId}>
                <Logo src={MOCK_LOGO_IMG} alt=" " />
                <p>
                  <strong className="team-name">{noti.teamName}</strong>
                  <span className="text-wrapper">
                    <span className="category">{noti.category}</span>
                    <span className="contents">{noti.contents}</span>
                  </span>
                  <span className="date">
                    {formattedDate(noti.date, {
                      displayDateType: "kr",
                      displayTime: "12h-kr",
                      displayYear: "not-this-year",
                      displayDayName: "hide",
                      displaySimpleKR: true,
                    })}
                  </span>
                </p>
              </li>
            ))}
          </List>
        </Group>
        <Group>
          <Title>최근 30일</Title>
          <List>
            {MOCK_NOTI_LIST.map((noti) => (
              <li key={noti.notiId}>
                <Logo src={MOCK_LOGO_IMG} alt=" " />
                <p>
                  <strong className="team-name">{noti.teamName}</strong>
                  <span className="text-wrapper">
                    <span className="category">{noti.category}</span>
                    <span className="contents">{noti.contents}</span>
                  </span>
                  <span className="date">
                    {formattedDate(noti.date, {
                      displayDateType: "kr",
                      displayTime: "12h-kr",
                      displayYear: "not-this-year",
                      displayDayName: "hide",
                      displaySimpleKR: true,
                    })}
                  </span>
                </p>
              </li>
            ))}
          </List>
        </Group>
      </NotiList>
    </Container>
  );
}

const Container = styled(BaseContainer)``;
const Filter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 0;

  & > div {
    width: 90px;
  }
`;
const TabWrapper = styled.div`
  position: sticky;
  margin: 0 -16px;
  background-color: var(--background-light);
  z-index: 5;
`;
const TeamList = styled.div`
  position: sticky;
  z-index: 4;
  &.stuck {
    padding: 18px 0 12px;
    background-color: var(--background-light);
    border-bottom: 1px solid var(--gray100);
    img {
      margin-top: -5px;
      height: 0;
      scale: 0.5;
      opacity: 0;
    }
    ul {
      gap: 12px;
    }
    li {
      padding: 2px 4px;
      border-radius: 15px;
      background-color: var(--gray100);
    }
  }

  ul {
    display: flex;
    gap: 20px;
    transition: gap 0.2s;
  }
  li {
    flex-shrink: 0;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: var(--gray900);
    transition: all 0.25s;
    ${FONTS.MD2};
  }
`;
const Title = styled.h3`
  ${FONTS.MD1};
`;
const NotiList = styled.div``;
const Group = styled.div`
  margin-top: 20px;
`;
const List = styled.ul`
  li {
    display: flex;
    padding: 12px 0;
    gap: 10px;
    ${FONTS.MD2};
  }
  strong.team-name {
    display: block;
    font-weight: 600;
  }
  span.text-wrapper {
    display: -webkit-box;
    white-space: pre-wrap;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--gray800);
  }
  span.category {
    display: inline-block;
    padding-right: 2px;
    font-weight: 600;
  }
  span.contents {
    font-weight: 400;
  }
  span.date {
    display: block;
    color: var(--gray500);
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

const Logo = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 10px;
  background-color: var(--sub2);
  opacity: 1;
  transition: all 0.2s;
`;

const MOCK_NOTI_LIST = [
  {
    notiId: 123,
    teamId: "1",
    articleId: "123",
    teamName: "SPABA",
    category: "공지사항",
    contents: "안녕하세요 여러분. 오늘의 공지사항을 알려드립니다.",
    date: "2025-01-20T15:54:50",
  },
  {
    notiId: 1523,
    teamId: "1",
    articleId: "1423",
    teamName: "SPABA",
    category: "일정",
    contents: "2025 전국배구대회 16강 SPABA:PABAA",
    date: "2025-01-19T22:58:40",
  },
  {
    notiId: 2123,
    teamId: "1",
    articleId: "623",
    teamName: "SPABA",
    category: "일정",
    contents: "전국배구대회 16강 대비 최종 연습 (필참)",
    date: "2025-01-18T11:09:20",
  },
  {
    notiId: 21423,
    teamId: "1",
    articleId: "623",
    teamName: "SPABA",
    category: "댓글 및 언급",
    contents: "16:40 부분에서 라인 위로 좀 더 올라가야 했어요.",
    date: "2025-01-17T21:58:20",
  },
  {
    notiId: 61423,
    teamId: "1",
    articleId: "623",
    teamName: "하이큐",
    category: "댓글 및 언급",
    contents: "35:22 @김이프 옆에서 블로킹 같이 해줬어야 했는데 너무 늦게 붙었어요",
    date: "2025-01-17T21:58:20",
  },
];

export default Notification;
