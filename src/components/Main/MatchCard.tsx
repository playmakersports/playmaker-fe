import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { FONTS } from "@/styles/common";
import { countDayDiff } from "@/util/date";
import { BasicWhiteCard, BasicWhiteCardTitle } from "../common/Card";

type Props = {
  size: "LARGE" | "MEDIUM";
  posterImg: string;
  competitionId: string;
  competitionName: string;
  matchDate: string;
  matchTime: string;
  matchLocation: string;
  openedBy: string;
  openedByLogo?: string;
  homeName?: string;
  awayName?: string;
  homeLogo?: string;
  awayLogo?: string;
};
function MatchCard(props: Props) {
  const router = useRouter();
  const {
    posterImg,
    competitionId,
    competitionName,
    matchDate,
    matchTime,
    matchLocation,
    openedBy,
    openedByLogo,
    homeName,
    homeLogo,
    awayName,
    awayLogo,
  } = props;
  const dayCount = () => {
    if (countDayDiff(matchDate) === 0) return "D-DAY";
    return `D${countDayDiff(matchDate) > 0 ? -countDayDiff(matchDate) : "+" + -countDayDiff(matchDate)}`;
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
              {matchDate} {matchTime}
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
              <dt>주최</dt>
              <dd>{openedBy}</dd>
            </li>
            <li>
              <dt>일시</dt>
              <dd>
                {matchDate} {matchTime}
              </dd>
            </li>
            <li>
              <dt>장소</dt>
              <dd>{matchLocation}</dd>
            </li>
          </DetailList>
        </MediumContents>
      </MediumCardContainer>
    );
  }
  return null;
}

const LargeCardContainer = styled(BasicWhiteCard)`
  transition: transform 0.25s;
  &:active {
    transform: scale(0.97);
  }
`;
const MediumCardContainer = styled(BasicWhiteCard)`
  display: flex;
  padding: 0;
  overflow: hidden;

  .match-poster {
    position: relative;
    ${FONTS.MD1};
    width: 112px;
    height: 140px;
    background-size: cover;
    background-position: center;
    background-color: var(--gray300);
    &::before {
      position: absolute;
      content: attr(data-d-day);
      padding: 8px 16px;
      top: 0;
      left: 0;
      width: 100%;
      height: max-content;
      color: #fff;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
      text-shadow: 0 0 16px rgba(0, 0, 0, 0.8);
      box-sizing: border-box;
    }
  }

  transition: transform 0.25s;
  &:active {
    transform: scale(0.97);
  }
`;
const MatchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 -18px;
  padding: 24px 0;
  width: calc(100% + 36px);
  background-color: var(--neutral-n40);
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
    background-color: rgba(var(--neutral-n400-rgb), 0.4);
    backdrop-filter: blur(3px);
    /* border: 1px solid var(--gray300); */
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
    border: 1px solid var(--neutral-n20);
    border-radius: 100%;
  }
`;

const DetailList = styled.ul`
  ${FONTS.MD2};
  margin: 12px 0 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  li {
    display: inline-flex;
    gap: 20px;
    dt {
      color: var(--gray900);
      word-break: keep-all;
    }
    dd {
      font-weight: 400;
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
`;

export default MatchCard;
