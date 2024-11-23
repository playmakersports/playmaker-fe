import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { CARD_ACTIVE, FONTS } from "@/styles/common";
import { countDayDiff, formattedDate } from "@/util/date";
import { BasicWhiteCard, BasicWhiteCardTitle } from "../common/Card";

type Props = {
  size: "LARGE" | "MEDIUM";
  posterImg: string;
  competitionId: string;
  competitionName: string;
  startDate: string;
  endDate: string;
  matchLocation: string;
  openedBy: string;
  openedByLogo?: string;
  homeName?: string;
  awayName?: string;
  homeLogo?: string;
  awayLogo?: string;
  attendMembers?: number;
};
function MainMatchCard(props: Props) {
  const router = useRouter();
  const {
    posterImg,
    competitionId,
    competitionName,
    startDate,
    endDate,
    matchLocation,
    openedBy,
    openedByLogo,
    homeName,
    homeLogo,
    awayName,
    awayLogo,
    attendMembers,
  } = props;
  const dayCount = () => {
    if (countDayDiff(startDate) === 0) return "D-DAY";
    return `D${countDayDiff(startDate) > 0 ? -countDayDiff(startDate) : "+" + -countDayDiff(startDate)}`;
  };

  if (props.size === "LARGE") {
    return (
      <LargeCardContainer>
        <BasicWhiteCardTitle>{competitionName}</BasicWhiteCardTitle>
        <MatchBox style={{ backgroundImage: `url(${posterImg})` }}>
          <div className="home-team team-wrapper">
            <div className="team-inner">
              <img src={homeLogo} alt={homeName} aria-disabled />
              <span className="team-name">{homeName}</span>
            </div>
          </div>
          <p className="versers">vs</p>
          <div className="away-team team-wrapper">
            <div className="team-inner">
              <img src={awayLogo} alt={awayName} aria-disabled />
              <span className="team-name">{awayName}</span>
            </div>
          </div>
        </MatchBox>
        <Opened>
          <img src={openedByLogo} className="opened-by-logo" /> {openedBy}
        </Opened>
        <DetailList>
          <li>
            <dt>일시</dt>
            <dd>
              {formattedDate(startDate, {
                displayYear: "always",
                displayDateType: "kr",
                displayDayName: "hide",
                displayTime: "hide",
              })}{" "}
              ~{" "}
              {formattedDate(endDate, {
                displayYear: "not-this-year",
                displayDateType: "kr",
                displayDayName: "hide",
                displayTime: "hide",
              })}
            </dd>
          </li>
          <li>
            <dt>장소</dt>
            <dd>{matchLocation}</dd>
          </li>
        </DetailList>
      </LargeCardContainer>
    );
  }
  if (props.size === "MEDIUM") {
    return (
      <MediumCardContainer onClick={() => router.push(`/competition/${competitionId}`)}>
        <div className="match-poster" style={{ backgroundImage: `url(${posterImg})` }} data-d-day={dayCount()} />
        <MediumContents>
          <h5>{competitionName}</h5>
          <DetailList>
            <li>
              <dt>일시</dt>
              <dd>
                {formattedDate(startDate, {
                  displayYear: "not-this-year",
                  displayDateType: "kr",
                  displayDayName: "hide",
                  displayTime: "hide",
                })}{" "}
                ~{" "}
                {formattedDate(endDate, {
                  displayYear: "not-this-year",
                  displayDateType: "kr",
                  displayDayName: "hide",
                  displayTime: "hide",
                })}
              </dd>
            </li>
            <li>
              <dt>장소</dt>
              <dd>{matchLocation}</dd>
            </li>
            {!!attendMembers && <li className="attend-number">우리 팀에서 {attendMembers}명 출전</li>}
          </DetailList>
        </MediumContents>
      </MediumCardContainer>
    );
  }
  return null;
}

const LargeCardContainer = styled(BasicWhiteCard)`
  transition: transform 0.25s;
  ${CARD_ACTIVE}
`;
const MediumCardContainer = styled(BasicWhiteCard)`
  display: flex;
  padding: 0;
  overflow: hidden;

  .match-poster {
    position: relative;
    ${FONTS.MD1};
    width: 112px;
    height: 128px;
    background-size: cover;
    background-position: center;
    background-color: var(--gray300);
    &::before {
      position: absolute;
      content: attr(data-d-day);
      top: 0;
      left: 0;
      margin: 8px;
      padding: 2px 6px;
      border-radius: 16px;
      backdrop-filter: blur(12px);
      background-color: rgba(0, 0, 0, 0.1);
      color: #fff;
    }
  }
  ${CARD_ACTIVE}
`;
const MatchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 -18px;
  padding: 24px 0;
  width: calc(100% + 36px);
  background-color: var(--gray100);
  background-size: cover;
  background-position: center;

  .versers {
    font-weight: 600;
    font-size: 2.4rem;
    color: #fff;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }

  .team-wrapper {
    flex: 1;
    display: flex;
    padding: 12px 24px;
    backdrop-filter: blur(3px);
    gap: 2px;

    &.home-team {
      border-left: none;
      justify-content: flex-end;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
    }
    &.away-team {
      border-right: none;
      justify-content: flex-start;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
    }
    .team-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      padding: 2px;
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      border-radius: 100%;
      background-color: #fff;
      border: 1px solid var(--neutral-n20);
    }
    .team-name {
      ${FONTS.MD1};
      color: #fff;
      font-size: 1.4rem;
      text-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    }
  }
`;
const Opened = styled.p`
  ${FONTS.MD2};
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0 -18px;
  padding: 8px 18px;
  width: calc(100% + 36px);
  color: var(--gray900);
  border-bottom: 1px solid var(--gray300);

  .opened-by-logo {
    padding: 2px;
    width: 28px;
    height: 28px;
    background-color: #fff;
    border: 1px solid var(--gray200);
    border-radius: 100%;
  }
`;

const DetailList = styled.ul`
  ${FONTS.MD2};
  margin: 10px 0 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 400;
  li {
    display: inline-flex;
    gap: 14px;
    dt {
      color: var(--gray900);
      font-weight: 500;
      word-break: keep-all;
    }
    dd {
      color: var(--gray700);
    }
  }
`;

const MediumContents = styled.div`
  padding: 12px 18px;

  h5 {
    ${FONTS.MD1};
    color: var(--gray900);
  }
  li.attend-number {
    color: var(--main);
  }
`;

export default MainMatchCard;
