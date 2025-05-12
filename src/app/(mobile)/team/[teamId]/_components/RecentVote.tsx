import React from "react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import styled from "styled-components";
import Link from "next/link";

import { fonts } from "@/styles/fonts.css";
import {
  flexAlignCenter,
  flexColumnGap10,
  flexColumnGap16,
  flexColumnGap4,
  flexRowGap10,
  flexRowGap4,
  flexRowGap8,
} from "@/styles/container.css";
import {
  teamMainRecentVoteCard,
  teamMainRecentVoteCardDateHeader,
  teamMainRecentVoteContainer,
  teamMainRecentVoteList,
} from "./team.main.css";
import Button from "@/components/common/Button";

import CheckIcon from "@/assets/icon/common/Check.svg";
import CalendarIcon from "@/assets/icon/common/outlined/Calendar.svg";
import ClockIcon from "@/assets/icon/common/outlined/Clock.svg";
import RightDirectionArrow from "@/assets/icon/arrow/RightDirection.svg";

type Props = {
  voteId: string;
  scheduleId: string;
  title: string;
  content: string;
  date: string;
};
function RecentVoteCard({ voteId, scheduleId, title, content, date }: Props) {
  const { register } = useForm();
  const teamId = useParams()["teamId"];

  return (
    <li className={clsx(teamMainRecentVoteCard, flexColumnGap10)}>
      <Link
        href={`/team/${teamId}/schedule/${scheduleId}`}
        className={clsx(flexRowGap10, teamMainRecentVoteCardDateHeader, flexAlignCenter)}
        style={{ justifyContent: "space-between" }}
      >
        <div className={flexRowGap10}>
          <span
            style={{ color: "var(--gray600)" }}
            className={clsx(fonts.caption1.medium, flexRowGap4, flexAlignCenter)}
          >
            <CalendarIcon width={18} height={18} fill="var(--gray600)" /> {date}
          </span>
          <span
            style={{ color: "var(--gray600)" }}
            className={clsx(fonts.caption1.medium, flexRowGap4, flexAlignCenter)}
          >
            <ClockIcon width={18} height={18} fill="var(--gray600)" /> {date}
          </span>
        </div>
        <RightDirectionArrow width={20} height={20} fill="var(--gray400)" />
      </Link>
      <div className={flexColumnGap16}>
        <div className={flexColumnGap4}>
          <p style={{ color: "var(--gray800)" }} className={fonts.body3.semibold}>
            {title}
          </p>
          <p style={{ color: "var(--gray500)" }} className={fonts.caption1.medium}>
            {content}
          </p>
        </div>
        <div className={flexColumnGap10}>
          <div className={flexRowGap8}>
            <SelectVoteOption>
              <input
                style={{ visibility: "hidden" }}
                type="radio"
                id={`${voteId}-attend`}
                {...register(`${voteId}-Vote`)}
              />
              <div className="checkbox">
                <CheckIcon width={20} height={20} />
              </div>
              <span className={fonts.body4.medium}>참석</span>
            </SelectVoteOption>

            <SelectVoteOption>
              <input
                style={{ visibility: "hidden" }}
                type="radio"
                id={`${voteId}-no-attend`}
                {...register(`${voteId}-Vote`)}
              />
              <div className="checkbox">
                <CheckIcon width={20} height={20} />
              </div>
              <span className={fonts.body4.medium}>불참석</span>
            </SelectVoteOption>
          </div>
          <Button type="button" mode="primary" size="small">
            확인
          </Button>
        </div>
      </div>
    </li>
  );
}

function RecentVote() {
  return (
    <div className={clsx(teamMainRecentVoteContainer, flexColumnGap16)}>
      <p className={fonts.body3.medium} style={{ color: "var(--gray900)", padding: "0 20px" }}>
        사용자 님의 <span style={{ color: "var(--primary500)" }}>참여 의사</span>를 기다리고 있어요!
      </p>
      <ul className={teamMainRecentVoteList}>
        {MOCK.map((item) => (
          <RecentVoteCard
            key={item.voteId}
            title={item.title}
            scheduleId={item.scheduleId}
            content={item.content}
            date={item.date}
            voteId={item.voteId}
          />
        ))}
      </ul>
    </div>
  );
}
const MOCK = [
  {
    voteId: "123",
    scheduleId: "123",
    title: "저녁 번개 참석자 모집",
    date: "2025.04.18",
    content: "과기대 앞 돼지고기집",
  },
  { voteId: "1423", scheduleId: "5123", title: "하계 훈련 참가자", date: "2025.05.31", content: "필참" },
];

const SelectVoteOption = styled.label`
  cursor: pointer;
  flex: 1;
  display: flex;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  color: var(--gray400);

  & > input {
    position: absolute;
    width: 1;
    height: 1;
    margin: -1px;
    overflow: hidden;
  }

  &:active {
    background-color: var(--gray50);
  }

  &:has(input:checked) {
    background-color: rgba(231, 253, 235, 0.5);
    color: var(--gray700);

    div.checkbox {
      background-color: var(--primary500);
      border: transparent;
      & > svg {
        display: block;
        fill: var(--white);
      }
    }
  }
  div.checkbox {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border: 1px solid var(--gray200);
    & > svg {
      display: none;
    }
  }
`;

export default RecentVote;
