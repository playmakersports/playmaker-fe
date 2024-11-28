import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import useBgWhite from "@/hook/useBgWhite";
import useStickyMoment from "@/hook/useStickyMoment";
import { usePageTitle } from "@/hook/usePageTitle";

import { FONTS, SCROLL_HIDE, SCROLL_MASKED_GRADIENT } from "@/styles/common";
import { DAY_NAME_KOREAN, formattedDate } from "@/util/date";
import { COMPETITION_LIST_MOCK } from "@/constants/mock/COMPETITION";
import { BaseContainer, WhiteSectionDivider } from "@/components/common/Container";
import { BasicInput } from "@/components/common/Input";
import FloatButton from "@/components/common/FloatButton";
import Button from "@/components/common/Button";

import RightArrowIcon from "@/assets/icon/arrow/RightArrowSmall.svg";
import LocationIcon from "@/assets/icon/global/Location.svg";
import PersonIcon from "@/assets/icon/global/Person24.svg";
import CalendarIcon from "@/assets/icon/global/Calendar.svg";
import ShareIcon from "@/assets/icon/global/Share.svg";
import MatchCard from "@/components/Team/MatchCard";
import { eachDayOfInterval, isSameDay, isToday } from "date-fns";
import { scrollMaskedHandler, scrollMaskedHandlerRef } from "@/util/display";
import Badge from "@/components/common/Badge";

function CompetitionArticle() {
  const MOCK = COMPETITION_LIST_MOCK[0];
  useBgWhite();
  usePageTitle({ title: MOCK.competitionName, transparent: true });
  const todayScrollLeft = useRef<number>(0);
  const competitionHeaderRef = useRef<HTMLDivElement>(null);
  useStickyMoment(competitionHeaderRef);
  const router = useRouter();
  const competitionId = router.query.competitionId;
  const [matchRound, setMatchRound] = useState(24);

  return (
    <>
      <FloatButton gap="12px">
        <Button type="button" mode="MAIN" onClick={() => {}} flex={3}>
          대회 영상
        </Button>
        <Button type="button" mode="OPTION2" onClick={() => {}} flex={1.3}>
          <ShareIcon /> <span style={{ marginLeft: "8px" }}>공유</span>
        </Button>
      </FloatButton>
      <CoverImage src={MOCK.posterImg} />
      <Container>
        <Header ref={competitionHeaderRef}>
          <Information>
            <h2 className="competition-name">{MOCK.competitionName}</h2>
            <Label>
              <Badge type="main">모집중</Badge>
              <Badge type="yellow">8강</Badge>
              <Badge type="subMain">남자부</Badge>
              <Badge type="subMain">단체전</Badge>
              <Badge type="gray">대학부</Badge>
            </Label>
            <ul className="competition-detail">
              <li>
                <LocationIcon />
                <span>{MOCK.matchLocation}</span>
              </li>
              <li>
                <CalendarIcon />
                <span>
                  {formattedDate(MOCK.startDate, {
                    displayDateType: "kr",
                    displayYear: "always",
                    displayDayName: "hide",
                  })}{" "}
                  ~{" "}
                  {formattedDate(MOCK.endDate, {
                    displayDateType: "kr",
                    displayYear: "not-this-year",
                    displayDayName: "hide",
                  })}
                </span>
              </li>
              <li>
                <PersonIcon />
                <span>{MOCK.competitionId}팀 참여</span>
              </li>
            </ul>
          </Information>
        </Header>
        <WhiteSectionDivider />
        <Participants>
          참가 팀
          <div className="list">
            <div className="team-logo" />
            <div className="team-logo" />
            <div className="team-logo" />
            <div className="team-logo" />
            <div className="team-logo" />
            <RightArrowIcon />
          </div>
        </Participants>
        <Schedule>
          <Weekly
            onScroll={(e) => scrollMaskedHandler(e, "horizontal")}
            ref={(ref) => {
              if (ref) {
                scrollMaskedHandlerRef(ref, "horizontal");
                const WEEKLY_WIDTH = ref.clientWidth / 2;
                const TARGET_LEFT_WIDTH = todayScrollLeft.current * (52 + 8) - WEEKLY_WIDTH;
                ref?.scrollTo({
                  left: TARGET_LEFT_WIDTH,
                  behavior: "smooth",
                });
              }
            }}
          >
            {eachDayOfInterval({
              start: new Date(MOCK.startDate),
              end: new Date(MOCK.endDate),
            }).map((date, index) => (
              <li
                key={date.toISOString()}
                ref={(element) => {
                  if (isToday(date)) {
                    if (element) {
                      todayScrollLeft.current = index + 1;
                      console.log(todayScrollLeft.current);
                    }
                  }
                }}
                className={
                  isToday(date) ? "today" : MOCK.schedule?.find((s) => isSameDay(s.date, date)) ? "has-match" : ""
                }
              >
                <span className="day-name">{DAY_NAME_KOREAN[date.getDay()]}</span>
                <span>{date.getDate()}</span>
                <p className="rounds">
                  {MOCK.schedule
                    ?.find((s) => isSameDay(s.date, date))
                    ?.rounds?.map((round) => (
                      <span key={round}>{round}</span>
                    ))}
                </p>
              </li>
            ))}
          </Weekly>
        </Schedule>
        <Search>
          <BasicInput type="text" placeholder="어떤 팀을 찾고 있나요" search />
        </Search>
        <RoundTab role="tablist">
          {[24, 16, 8, 4, 2].map((round, index) => (
            <li
              key={index}
              role="tab"
              onClick={() => setMatchRound(round)}
              className={matchRound === round ? "active" : ""}
            >
              {round === 2 ? "결승" : `${round}강`}
            </li>
          ))}
        </RoundTab>
        <Matches>
          <MatchCard
            status="NOT_STARTED"
            matchId="123"
            teamName="SPABA"
            teamSubName="서울과기대"
            counterpartTeamName="BABABA"
            counterpartTeamSubName="홍익대"
            matchTeamScore={99}
            matchCounterpartScore={98}
            matchDate="2024-11-15"
            matchTime="10:20"
            teamLogo=""
            counterpartTeamLogo=""
            mvpId="김농구"
          />
          <MatchCard
            status="PENDING"
            matchId="123"
            teamName="SPABA"
            teamSubName="서울과기대"
            counterpartTeamName="BABABA"
            counterpartTeamSubName="홍익대"
            matchTeamScore={99}
            matchCounterpartScore={98}
            matchDate="2024-11-15"
            matchTime="11:20"
            teamLogo=""
            counterpartTeamLogo=""
            mvpId="김농구"
          />
          <MatchCard
            status="FINISHED"
            matchId="123"
            teamName="4IF"
            teamSubName="서울시립대"
            counterpartTeamName="JUMP"
            counterpartTeamSubName="홍익대"
            matchTeamScore={100}
            matchCounterpartScore={112}
            matchDate="2024-11-15"
            matchTime="13:30"
            teamLogo=""
            counterpartTeamLogo=""
            mvpId="박농구"
          />
        </Matches>
      </Container>
    </>
  );
}

const Container = styled(BaseContainer)`
  padding-bottom: calc(var(--env-sab) + 100px);
`;

const CoverImage = styled.section<{ src: string }>`
  margin-top: calc(-1 * var(--safe-area-top));
  width: 100%;
  height: calc(232px + var(--env-sat));
  background-color: var(--gray600);
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Header = styled.div`
  display: flex;
  padding: 0 0 16px;
  gap: 24px;
  top: 0;
  transition: all 0.25s;
  background-color: var(--background-light);
`;
const Label = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin: 0 -16px 10px;
  padding: 12px 16px;
  width: calc(100% + 32px);
  border-top: 1px solid var(--gray200);
`;
const Participants = styled.div`
  ${FONTS.MD2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px 14px 4px;
  font-weight: 500;
  color: var(--gray800);

  div.list {
    display: flex;
    align-items: center;
    svg {
      margin-left: 6px;
      width: 20px;
      height: 20px;
      fill: var(--gray500);
    }

    div.team-logo {
      margin-left: -5px;
      width: 24px;
      height: 24px;
      background-color: rgba(var(--sub1-rgb), 0.45);
      border-radius: 50%;
    }
  }
`;
const Information = styled.div`
  flex: 1;
  display: inline-block;
  padding: 0 0 8px;

  h2.competition-name {
    padding: 6px 0 14px;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.6rem;
  }
  ul.competition-detail {
    display: flex;
    padding: 0 2px;
    flex-direction: column;
    gap: 14px;

    li {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 1.4rem;
      color: var(--gray700);
      svg {
        fill: var(--gray800);
      }
    }
  }
`;

const Schedule = styled.section`
  display: flex;
  align-items: flex-start;
  margin: 0 -16px;
  padding: 20px 0 36px;
  border-top: 1px solid var(--gray100);
  ${SCROLL_MASKED_GRADIENT("var(--background-light-rgb)")};
`;
const Weekly = styled.ul`
  display: inline-flex;
  padding: 0 12px;
  white-space: nowrap;
  gap: 8px;
  overflow-x: auto;
  ${SCROLL_HIDE}

  li {
    user-select: none;
    cursor: pointer;
    flex-shrink: 0;
    width: 52px;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    padding: 8px 0;
    font-size: 2rem;
    font-weight: 400;
    border-radius: 5px;

    span.day-name {
      font-size: 1.3rem;
      color: var(--gray600);
    }

    &.has-match {
      cursor: pointer;
      color: var(--gray900);

      p.rounds > span {
        background-color: var(--gray100);
        color: var(--gray400);
      }
    }
    &.today {
      cursor: pointer;
      color: var(--main);
      font-weight: 500;
      span.day-name {
        color: var(--main);
      }
    }
    /* 경기 없는 날 */
    cursor: default;
    color: var(--gray400);

    p.rounds {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-top: 8px;
      font-size: 1.3rem;
      font-weight: 600;

      span {
        padding: 4px 8px;
        border-radius: 10px;
        background-color: rgba(var(--sub2-rgb), 0.35);
        color: var(--main);
      }
    }
  }
`;

// const WeeklyButton = styled.button`
//   display: flex;
//   padding: 12px 0;
//   align-items: center;
//   justify-content: center;

//   &.left > svg {
//     transform: rotate(180deg);
//   }

//   svg {
//     width: 24px;
//     height: 24px;
//     fill: var(--gray500);
//   }
// `;

const Matches = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  gap: 16px;
`;

const Search = styled.div`
  margin: 0 -16px;
  padding: 12px 16px;
  background-color: var(--background);
`;

const RoundTab = styled.ul`
  display: flex;
  margin: 0px -16px 24px;
  padding: 12px 16px 0;
  border-bottom: 1px solid var(--gray50);

  li {
    cursor: pointer;
    ${FONTS.MD1W500};
    padding: 2px 0 4px;
    font-weight: 400;
    flex: 1;
    text-align: center;
    color: var(--gray500);

    &.active {
      font-weight: 600;
      color: var(--main);
      border-bottom: 2px solid var(--main);
    }
  }
`;
export default CompetitionArticle;
