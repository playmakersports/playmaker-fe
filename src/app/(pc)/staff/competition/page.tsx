"use client";

import React from "react";
import styled from "styled-components";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { scrollMaskedHandler, scrollMaskedHandlerRef } from "@/util/display";
import { FONTS, SCROLL_HIDE, SCROLL_MASKED_GRADIENT } from "@/styles/common";
import { countDayDiff, formattedDate } from "@/util/date";
import { BasicInput } from "@/components/common/Input";
import Button from "@/components/common/Button";

import PlusIcon from "@/assets/icon/global/Plus.svg";

function CompetitionViewPC() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const STATUS_NAME: Record<string, string> = {
    CLOSED: "종료",
    PENDING: "진행중",
    BEFORE: "진행예정",
  };

  return (
    <Container>
      <Aside>
        <Filter>
          <BasicInput type="text" placeholder="대회명으로 찾기" search />
        </Filter>
        <List>
          <ul
            className="list-inner"
            ref={(prev) => scrollMaskedHandlerRef(prev, "vertical")}
            onScroll={(prev) => scrollMaskedHandler(prev, "vertical")}
          >
            {COMPETITIONS.map((competition) => (
              <Item key={competition.competitionId}>
                <p className="competition-header">
                  <span className="competition-title">{competition.title}</span>
                  <Status className={competition.status}>
                    {competition.status === "BEFORE"
                      ? `D-${countDayDiff(competition.startDate)}`
                      : STATUS_NAME[competition.status]}
                  </Status>
                </p>
                <p className="competition-date">
                  {formattedDate(competition.startDate, {
                    displayDateType: ".",
                    displayYear: "always",
                    displayDayName: "hide",
                  })}
                </p>
              </Item>
            ))}
          </ul>
        </List>
        <AsideBottom>
          <Button
            type="button"
            mode="MAIN"
            onClick={() => {
              router.push("/staff/competition/create");
            }}
            $fullWidth
          >
            <span className="button-inner">
              <PlusIcon fill="#fff" />새 대회 만들기
            </span>
          </Button>
        </AsideBottom>
      </Aside>
      <Detail>상세정보</Detail>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  gap: 24px;
  height: 100%;
  overflow: hidden;
`;
const Aside = styled.aside`
  display: flex;
  max-width: 18vw;
  min-width: 240px;
  padding: 12px 14px 0 4px;
  flex-direction: column;
  border-right: 1px solid var(--gray300);
`;
const AsideBottom = styled.div`
  margin: 16px 0 20px;
  span.button-inner {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
`;
const Filter = styled.div`
  display: flex;
  padding: 12px 0 0 0;
  flex-direction: column;
  gap: 8px;
`;
const List = styled.div`
  flex: 1;
  margin: 16px 0 0;
  ${SCROLL_MASKED_GRADIENT("256,256,256")}
  ul.list-inner {
    display: flex;
    height: 100%;
    flex-direction: column;
    overflow-y: scroll;
    ${SCROLL_HIDE};
  }
`;
const Item = styled.li`
  cursor: pointer;
  padding: 16px 10px;
  border-bottom: 1px solid var(--gray200);
  p.competition-header {
    ${FONTS.MD1W500};
    display: flex;
    align-items: center;
    gap: 4px;
    span.competition-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  p.competition-date {
    ${FONTS.MD2};
    font-weight: 400;
    color: var(--gray600);
  }
  &:last-of-type {
    border: none;
  }
  &:hover {
    background-color: var(--gray50);
  }
`;
const Detail = styled.article`
  ${FONTS.MD2};
  flex: 1;
  padding-top: 20px;
  font-weight: 400;
`;
const Status = styled.span`
  ${FONTS.MD2};
  font-size: 1.3rem;
  line-height: 1.2rem;
  padding: 4px;
  border-radius: 4px;
  background-color: var(--sub2);
  color: var(--main);
  word-break: keep-all;
  &.BEFORE {
    font-weight: 700;
    background-color: rgba(var(--point-red-rgb), 0.09);
    color: var(--point-red);
  }
  &.CLOSED {
    background-color: var(--gray200);
    color: var(--gray700);
  }
`;

const COMPETITIONS = [
  { competitionId: 1, status: "BEFORE", title: "전국대학생농구대회", startDate: "2024-11-26" },
  { competitionId: 2, status: "PENDING", title: "홍익대학교배 대학생대회", startDate: "2024-11-09" },
  { competitionId: 3, status: "PENDING", title: "제20회 U-리그 대회", startDate: "2023-10-30" },
  { competitionId: 4, status: "CLOSED", title: "제1회 대학동아리연합농구대회", startDate: "2023-09-01" },
  { competitionId: 5, status: "CLOSED", title: "전국대학생농구대회", startDate: "2023-05-15" },
  { competitionId: 6, status: "CLOSED", title: "제19회 U-리그 대회", startDate: "2023-04-30" },
  { competitionId: 7, status: "CLOSED", title: "제14회 대학아마추어농구대회", startDate: "2023-04-01" },
  { competitionId: 8, status: "CLOSED", title: "전국대학생농구대회", startDate: "2022-06-08" },
  { competitionId: 9, status: "CLOSED", title: "전국대학생농구대회", startDate: "2022-06-09" },
  { competitionId: 10, status: "CLOSED", title: "제13회 대학아마추어농구대회", startDate: "2022-05-10" },
  { competitionId: 11, status: "CLOSED", title: "제18회 U-리그 대회", startDate: "2022-04-10" },
  { competitionId: 12, status: "CLOSED", title: "전국대학생농구대회", startDate: "2022-03-30" },
  { competitionId: 13, status: "CLOSED", title: "전국대학생농구대회", startDate: "2022-02-30" },
  { competitionId: 14, status: "CLOSED", title: "전국대학생농구대회", startDate: "2021-10-30" },
  { competitionId: 15, status: "CLOSED", title: "전국대학생농구대회", startDate: "2021-10-15" },
];

export default CompetitionViewPC;
