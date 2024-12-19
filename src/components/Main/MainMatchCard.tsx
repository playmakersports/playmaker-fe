import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { CARD_ACTIVE, FONTS } from "@/styles/common";
import { formattedDate } from "@/util/date";
import { BasicWhiteCard, BasicWhiteCardTitle } from "../common/Card";

type Props = {
  posterImg: string;
  competitionId: string;
  competitionName: string;
  startDate: string;
  endDate: string;
  matchLocation: string;
  openedBy: string;
  openedByLogo?: string;
  homeName: string;
  awayName: string;
  homeLogo: string;
  awayLogo: string;
  attendMembers?: number;
};

function MainMatchCard(props: Props) {
  const {
    posterImg,
    competitionName,
    startDate,
    endDate,
    matchLocation,
    homeLogo,
    homeName,
    awayLogo,
    awayName,
    openedBy,
    openedByLogo,
  } = props;

  return (
    <LargeCardContainer>
      <BasicWhiteCardTitle>{competitionName}</BasicWhiteCardTitle>
      <MatchBox style={{ backgroundImage: `url(${posterImg})` }}>
        <div className="home-team team-wrapper">
          <div className="team-inner">
            <Image src={homeLogo} alt={homeName} width={48} height={48} aria-disabled />
            <span className="team-name">{homeName}</span>
          </div>
        </div>
        <p className="versers">vs</p>
        <div className="away-team team-wrapper">
          <div className="team-inner">
            <Image src={awayLogo} alt={awayName} width={48} height={48} aria-disabled />
            <span className="team-name">{awayName}</span>
          </div>
        </div>
      </MatchBox>
      {openedBy && openedByLogo && (
        <Opened>
          <Image src={openedByLogo} width={28} height={28} alt="" className="opened-by-logo" /> {openedBy}
        </Opened>
      )}
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

const LargeCardContainer = styled(BasicWhiteCard)`
  transition: transform 0.25s;
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

export default MainMatchCard;
