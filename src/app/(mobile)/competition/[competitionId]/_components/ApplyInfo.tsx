"use client";
import React from "react";
import styled from "styled-components";
import { usePageTitle } from "@/hook/usePageTitle";

import { FONTS } from "@/styles/common";
import { formattedDate } from "@/util/date";
import { BaseContainer } from "@/components/common/Container";

import CalendarIcon from "@/assets/icon/global/Calendar.svg";
import LocationIcon from "@/assets/icon/global/Location.svg";

type Props = {
  title: string;
  place: string;
  startDate: string;
  endDate: string;
};
function ApplyInfo(props: Props) {
  usePageTitle({ title: "대회 신청" });
  const { title, place, startDate, endDate } = props;

  return (
    <BaseContainer>
      <Container>
        <h2>{title}</h2>
        <ul className="info-list">
          <li>
            <LocationIcon />
            {place}
          </li>
          <li>
            <CalendarIcon />
            {formattedDate(startDate, {
              displayDateType: ".",
              displayYear: "always",
              displayDayName: "short-with-parenthesis",
            })}{" "}
            -{" "}
            {formattedDate(endDate, {
              displayDateType: ".",
              displayYear: "not-this-year",
              displayDayName: "short-with-parenthesis",
            })}
          </li>
        </ul>
      </Container>
    </BaseContainer>
  );
}

const Container = styled.div`
  padding: 20px;
  background-color: var(--background);
  border-radius: 10px;

  h2 {
    ${FONTS.MD1};
  }
  ul.info-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 16px;
    ${FONTS.MD3};
    color: var(--gray600);

    li {
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export default ApplyInfo;