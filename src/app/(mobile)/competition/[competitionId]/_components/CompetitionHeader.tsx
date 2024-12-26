import React, { useRef } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { usePageTitle } from "@/hook/usePageTitle";
import useStickyMoment from "@/hook/useStickyMoment";

import { formattedDate } from "@/util/date";
import Badge from "@/components/common/Badge";

import LocationIcon from "@/assets/icon/global/Location.svg";
import PersonIcon from "@/assets/icon/global/Person24.svg";
import CalendarIcon from "@/assets/icon/global/Calendar.svg";
import { TEXT_ACTIVE } from "@/styles/common";

type Props = {
  competitionId: string;
  competitionName: string;
  startDate: string;
  endDate: string;
  matchLocation: string;
};

function CompetitionHeader(props: Props) {
  const { competitionId, competitionName, matchLocation, startDate, endDate } = props;
  const router = useRouter();
  const competitionHeaderRef = useRef<HTMLDivElement>(null);
  usePageTitle({ title: props.competitionName, transparent: true });
  useStickyMoment(competitionHeaderRef);

  const moveToDetail = () => {
    router.push(`/competition/${competitionId}?initial=ready`);
  };

  return (
    <Header ref={competitionHeaderRef}>
      <Information>
        <h2 className="competition-name">{competitionName}</h2>
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
            <span>{matchLocation}</span>
          </li>
          <li>
            <CalendarIcon />
            <span>
              {formattedDate(startDate, {
                displayDateType: "kr",
                displayYear: "always",
                displayDayName: "hide",
              })}{" "}
              ~{" "}
              {formattedDate(endDate, {
                displayDateType: "kr",
                displayYear: "not-this-year",
                displayDayName: "hide",
              })}
            </span>
          </li>
          <li>
            <PersonIcon />
            <span>{competitionId}팀 참여</span>
          </li>
        </ul>
        <DetailButton type="button" onClick={moveToDetail}>
          자세히...
        </DetailButton>
      </Information>
    </Header>
  );
}

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
const Information = styled.div`
  position: relative;
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

const DetailButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  color: var(--gray600);
  font-size: 1.4rem;
  border-radius: 2px;
  ${TEXT_ACTIVE("var(--gray100)")};
`;

export default CompetitionHeader;
