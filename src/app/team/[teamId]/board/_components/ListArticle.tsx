"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import styled from "styled-components";

import { formattedDate } from "@/util/date";
import { TeamBoardItemType } from "@/types/team";
import Badge from "@/components/common/Badge";
import { fonts } from "@/styles/fonts.css";
import { colors, omittedText } from "@/styles/color.css";
import {
  flexAlignCenter,
  flexColumnGap16,
  flexColumnGap4,
  flexColumnGap8,
  flexRowGap10,
  flexRowGap4,
  flexSpaceBetween,
} from "@/styles/container.css";

import ChatIcon from "@/assets/icon/common/outlined/Chat.svg";
import EyeIcon from "@/assets/icon/common/outlined/EyeOpened.svg";
import Image from "next/image";

function ListArticle(props: TeamBoardItemType) {
  const CATEGORY_NAME: Record<string | number, string> = {
    1: "공지사항",
    2: "자유게시판",
    3: "갤러리",
  };

  return (
    <Wrapper>
      <Link href={`/team/${props.teamId}/board/${props.id}`} className={flexColumnGap16}>
        <div className={flexColumnGap8}>
          <div>
            <Badge type="gray" size="medium">
              {CATEGORY_NAME[props.boardType]}
            </Badge>
          </div>
          <div className={flexColumnGap4}>
            <p className={fonts.body3.semibold}>{props.title}</p>
            <p className={clsx(fonts.body4.regular, colors.gray500, omittedText)}>
              {props.content.replace(/<[^>]*>/g, " ").slice(0, 60)}
            </p>
          </div>
        </div>
        <div className={clsx(flexAlignCenter, flexSpaceBetween)}>
          <div className={clsx(fonts.caption1.regular, flexAlignCenter, colors.gray400)} style={{ gap: "6px" }}>
            <Image
              src={props.createBy.imageUrl}
              alt={props.createBy.memberName}
              aria-disabled="true"
              width={20}
              height={20}
              style={{ borderRadius: "50%" }}
            />
            <span className={colors.gray500}>{props.createBy.memberName}</span>
            <span className="circle" />
            {formattedDate(new Date(props.createAt), {
              displayDateType: "kr",
              displayDayName: "hide",
              displayYear: "not-this-year",
              displayTime: "12h-kr",
              displaySimpleKR: true,
            })}
          </div>
          <div className={clsx(flexRowGap10, flexAlignCenter)}>
            <p className={clsx(flexRowGap4, fonts.caption1.regular, colors.gray500, flexAlignCenter)}>
              <ChatIcon width={18} height={18} fill="var(--gray400)" />
              {props.commentCount ?? 0}
            </p>
            <p className={clsx(flexRowGap4, fonts.caption1.regular, colors.gray500, flexAlignCenter)}>
              <EyeIcon width={18} height={18} fill="var(--gray400)" />
              {props.viewCount ?? 0}
            </p>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 16px;
  background-color: var(--white);
  border-bottom: 1px solid var(--gray200);

  a {
    transition: transform 0.2s;
    &:active {
      transform: scale(0.98);
    }
  }
  span.circle {
    display: inline-block;
    width: 4px;
    height: 4px;
    background-color: var(--gray300);
    border-radius: 50%;
  }
`;

export default ListArticle;
