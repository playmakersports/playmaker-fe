import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import useBgWhite from "@/hook/useBgWhite";
import useStickyMoment from "@/hook/useStickyMoment";
import { usePageTitle } from "@/hook/usePageTitle";

import { FONTS } from "@/styles/common";
import { formattedDate } from "@/util/date";
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

function CompetitionArticle() {
  const MOCK = COMPETITION_LIST_MOCK[1];
  useBgWhite();
  usePageTitle({ title: MOCK.competitionName, transparent: true });
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
              <span>모집중</span>
              <span>8강</span>
              <span>남자</span>
              <span>대학팀</span>
            </Label>
            <ul className="competition-detail">
              <li>
                <LocationIcon />
                <span>{MOCK.matchLocation}</span>
              </li>
              <li>
                <CalendarIcon />
                <span>
                  {formattedDate(MOCK.matchDate, {
                    displayDateType: "kr",
                    displayYear: "always",
                    displayDayName: "hide",
                  })}{" "}
                  ~{" "}
                  {formattedDate(MOCK.matchDate, {
                    displayDateType: "kr",
                    displayYear: "not-this-year",
                    displayDayName: "hide",
                  })}
                </span>
              </li>
              <li>
                <PersonIcon />
                <span>{MOCK.matchTime}명</span>
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
          <Weekly>
            <li>
              <span className="day-name">화</span>
              <span>3</span>
              <p>예선</p>
            </li>
            <li>
              <span className="day-name">수</span>
              <span>4</span>
            </li>
            <li>
              <span className="day-name">목</span>
              <span>5</span>
            </li>
            <li>
              <span className="day-name">금</span>
              <span>6</span>
            </li>
            <li className="no-match">
              <span className="day-name">토</span>
              <span>7</span>
            </li>
            <li className="today">
              <span className="day-name">오늘</span>
              <span>8</span>
            </li>
            <li className="no-match">
              <span className="day-name">월</span>
              <span>9</span>
            </li>
            <li>
              <span className="day-name">화</span>
              <span>10</span>
              <p>결승</p>
            </li>
            <WeeklyButton type="button">
              <RightArrowIcon />
            </WeeklyButton>
          </Weekly>
          <Matches>
            <MatchCard
              status="FINISHED"
              roundName="예선1"
              matchId="123"
              teamName="SPABA"
              teamSubName="서울시립대"
              counterpartTeamName="BABABA"
              counterpartTeamSubName="홍익대"
              matchTeamScore={93}
              matchCounterpartScore={53}
              teamLogo=""
              counterpartTeamLogo=""
              mvpId="김농구"
            />
            <MatchCard
              status="PENDING"
              matchId="123"
              teamName="SPABA"
              teamSubName="서울시립대"
              counterpartTeamName="BABABA"
              counterpartTeamSubName="홍익대"
              matchTeamScore={113}
              matchCounterpartScore={129}
              teamLogo=""
              counterpartTeamLogo=""
            />
            <MatchCard
              status="NOT_STARTED"
              roundName="예선1"
              matchId="123"
              teamName="SPABA"
              teamSubName="서울시립대"
              counterpartTeamName="BABABA"
              counterpartTeamSubName="홍익대"
              matchTeamScore={0}
              matchCounterpartScore={0}
              teamLogo=""
              counterpartTeamLogo=""
            />
          </Matches>
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
            status="FINISHED"
            matchId="123"
            teamName="SPABA"
            teamSubName="서울과기대"
            counterpartTeamName="BABABA"
            counterpartTeamSubName="홍익대"
            matchTeamScore={99}
            matchCounterpartScore={98}
            matchDate="2024-11-15"
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
  span {
    ${FONTS.MD2};
    font-size: 1.3rem;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    line-height: 1.25rem;
    padding: 6px 10px 5px;
    border-radius: 7px;
    background-color: rgba(160, 188, 248, 0.3);
    color: var(--main);
  }
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
  margin: 0 -16px;
  padding: 20px 16px 36px;
  border-top: 1px solid var(--gray100);
`;
const Weekly = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  li {
    user-select: none;
    cursor: pointer;
    flex-shrink: 0;
    width: 40px;
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
    }
    &.no-match {
      cursor: default;
      color: var(--gray400);
    }
    &.today {
      color: var(--main);
      font-weight: 700;
    }

    p {
      padding: 4px 8px;
      font-size: 1.3rem;
      border-radius: 10px;
      font-weight: 600;
      background-color: rgba(var(--sub2-rgb), 0.35);
      color: var(--main);
    }
  }
`;

const WeeklyButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 12px;
  padding: 6px;
  right: 0;
  border-radius: 50%;
  background-color: var(--gray0);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
  transition: all 0.2s;

  &:active {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05), 0 0 8px rgba(0, 0, 0, 0.05);
    transform: translateY(2px);
  }

  svg {
    width: 26px;
    height: 26px;
    fill: var(--gray800);
  }
`;

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
