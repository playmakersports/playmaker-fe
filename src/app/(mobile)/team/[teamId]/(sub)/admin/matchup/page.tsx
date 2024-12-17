"use client";

import React, { useState } from "react";
import styled from "@emotion/styled";

import { usePageTitle } from "@/hook/usePageTitle";

import { BaseContainer } from "@/components/common/Container";
import DirectionIncomeSvg from "@/assets/icon/arrow/DirectionIncome.svg";
import { FONTS } from "@/styles/common";
import { formattedDate } from "@/util/date";
import { differenceInCalendarDays } from "date-fns";
import { DropDownBottomSheet } from "@/components/common/DropDownBottomSheet";

function TeamMatchUp() {
  const [filter, setFilter] = useState("all");
  usePageTitle({
    subTitle: "JUMP",
    title: "교류전 제안 현황",
  });

  const MOCK = [
    {
      teamLogo: "",
      teamName: "JUMP",
      teamUniv: "홍익대",
      purposeDate: "2024-10-22",
      matchDate: "2024-11-02",
      purposeType: "RECEIVED",
      isPending: true,
      isAccept: false,
    },
    {
      teamLogo: "",
      teamName: "JUMP",
      teamUniv: "홍익대",
      purposeDate: "2024-10-22",
      matchDate: "2024-11-06",
      purposeType: "REQUEST",
      isPending: true,
      isAccept: false,
    },
    {
      teamLogo: "",
      teamName: "JUMP",
      teamUniv: "홍익대",
      purposeDate: "2024-10-19",
      matchDate: "2024-11-02",
      purposeType: "RECEIVED",
      isPending: true,
      isAccept: false,
    },
    {
      teamLogo: "",
      teamName: "JUMP",
      teamUniv: "홍익대",
      purposeDate: "2024-10-21",
      matchDate: "2024-11-02",
      purposeType: "RECEIVED",
      isPending: false,
      isAccept: true,
    },
    {
      teamLogo: "",
      teamName: "JUMP",
      teamUniv: "홍익대",
      purposeDate: "2024-10-21",
      matchDate: "2024-11-02",
      purposeType: "RECEIVED",
      isPending: false,
      isAccept: false,
    },
  ];

  return (
    <Container>
      <div className="filter-dropdown">
        <div style={{ minWidth: "96px", maxWidth: "104px" }}>
          <DropDownBottomSheet
            defaultValue={filter}
            getCurrentValue={setFilter}
            options={[
              { value: "all", name: "전체" },
              { value: "receive", name: "받은 제안만" },
              { value: "request", name: "보낸 제안만" },
            ]}
          />
        </div>
      </div>
      <List>
        {MOCK.map((item, idx) => {
          const EXPIRED_DAY_INTERVAL = 7;
          const EXPIRED_DAY_COUNT = EXPIRED_DAY_INTERVAL - differenceInCalendarDays(new Date(), item.purposeDate);
          return (
            <TeamItem key={`Purpose-${idx}`}>
              <TeamLogo src={item.teamLogo} isRequest={item.purposeType === "RECEIVED"}>
                <i>
                  <DirectionIncomeSvg />
                </i>
              </TeamLogo>
              <TeamInfo>
                <div className="team-title">
                  {item.teamName}
                  <span className="team-tag">{item.teamUniv}</span>
                </div>
                <p className="match-date">
                  {formattedDate(item.matchDate, {
                    displayDateType: "kr",
                    displayYear: "always",
                    displayDayName: "short-with-parenthesis",
                  })}{" "}
                  경기
                </p>
                {item.isPending ? (
                  <p className={`purpose-date ${EXPIRED_DAY_COUNT < 1 ? "d-day-zero" : ""}`}>
                    {EXPIRED_DAY_COUNT < 1 ? "오늘 지나면 자동 거절" : `${EXPIRED_DAY_COUNT}일 뒤 자동 거절`}
                  </p>
                ) : item.isAccept ? (
                  <p className="accepted-purpose">확정된 경기</p>
                ) : (
                  <p className="denied-purpose">거절된 경기</p>
                )}
              </TeamInfo>
            </TeamItem>
          );
        })}
      </List>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  padding-bottom: calc(20px + var(--env-sab));
  div.filter-dropdown {
    margin: 0 0 24px;
  }
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
const TeamItem = styled.div`
  display: flex;
  gap: 12px;
`;
const TeamLogo = styled.div<{ src: string; isRequest: boolean }>`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid var(--gray200);
  background-image: ${({ src }) => (src ? `url(${src})` : "none")};
  background-position: center;
  object-fit: cover;

  i {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    top: -1px;
    right: -1px;
    border-radius: 50%;
    background-color: ${({ isRequest }) => (isRequest ? "var(--art-purple)" : "var(--sub1)")};
  }
  svg {
    fill: var(--gray0);
    width: 10px;
    height: 10px;
    transform: ${({ isRequest }) => (isRequest ? "none" : "rotate(180deg)")};
  }
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  div.team-title {
    ${FONTS.MD1}
    display: inline-flex;
    align-items: center;
    gap: 4px;
    span.team-tag {
      ${FONTS.MD3}
      display: inline-block;
      padding: 0 4px;
      color: var(--gray600);
      border: 1px solid var(--gray400);
      border-radius: 4px;
    }
  }

  p.match-date {
    margin-bottom: 2px;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--gray900);
  }
  p.purpose-date {
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--gray700);
    &.d-day-zero {
      color: var(--point-red);
    }
  }
  p.accepted-purpose {
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--main);
  }
  p.denied-purpose {
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--gray600);
  }
`;

export default TeamMatchUp;
