import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Image from "next/image";

import { CARD_ACTIVE, FONTS } from "@/styles/common";
import { countDayDiff, formattedDate } from "@/util/date";
import { BasicWhiteCard } from "../common/Card";

type Props = {
  posterImg: string;
  competitionId: string;
  competitionName: string;
  startDate: string;
  endDate: string;
  matchLocation: string;
  attendMembers?: number;
};
function CompetitionCard(props: Props) {
  const router = useRouter();
  const { posterImg, competitionId, competitionName, startDate, endDate, matchLocation, attendMembers } = props;
  const dayCount = () => {
    if (countDayDiff(startDate) === 0) return "D-DAY";
    return `D${countDayDiff(startDate) > 0 ? -countDayDiff(startDate) : "+" + -countDayDiff(startDate)}`;
  };

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

export default CompetitionCard;
