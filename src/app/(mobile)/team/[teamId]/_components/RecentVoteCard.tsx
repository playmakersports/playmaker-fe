import Link from "next/link";
import React from "react";
import clsx from "clsx";
import styled from "styled-components";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";

import Button from "@/components/common/Button";

import { fonts } from "@/styles/fonts.css";
import { teamMainRecentVoteCardDateHeader } from "./team.main.css";
import {
  flexAlignCenter,
  flexColumnGap16,
  flexColumnGap4,
  flexRowGap10,
  flexRowGap4,
  flexRowGap8,
} from "@/styles/container.css";

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
  const params = useParams();
  const teamId = params["teamId"] as string;

  return (
    <>
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
          <p style={{ color: "var(--gray800)" }} className={fonts.body3.medium}>
            {title}
          </p>
          <p style={{ color: "var(--gray400)" }} className={fonts.caption1.medium}>
            {content}
          </p>
        </div>
        <div className={flexColumnGap16}>
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
    </>
  );
}

export const SelectVoteOption = styled.label`
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

export default RecentVoteCard;
