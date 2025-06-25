import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import { flexColumnGap10, flexRowGap10, flexRowGap12, flexRowGap4 } from "@/styles/container.css";
import { teamMainBoardListImage } from "./team.main.css";
import { fonts } from "@/styles/fonts.css";

import { formattedDate } from "@/util/date";
import Badge from "@/components/common/Badge";
import CalendarIcon from "@/assets/icon/common/outlined/Calendar.svg";
import HeartIcon from "@/assets/icon/common/outlined/Heart.svg";
import CommentIcon from "@/assets/icon/common/outlined/Chat.svg";

function TeamMainBoardList() {
  const params = useParams();
  const teamId = params["teamId"];

  const data = BOARD_ARTICLES_MOCK;

  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={item.articleId}>
          <Link
            style={{ justifyContent: "space-between", alignItems: "flex-end" }}
            className={clsx(flexRowGap12)}
            href={`/team/${teamId}/board/${item.articleId}`}
          >
            <div className={flexColumnGap10}>
              <div>
                <Badge size="medium" type="gray" fillType="light">
                  {item.category}
                </Badge>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <p className={fonts.body4.medium} style={{ color: "var(--gray700)" }}>
                  {item.title}
                </p>
                <p className={clsx(flexRowGap10, fonts.caption1.regular)} style={{ color: "var(--gray400)" }}>
                  <span className={flexRowGap4}>
                    <CalendarIcon width={18} height={18} fill="var(--gray400)" />
                    {formattedDate(item.writtenAt, {
                      displayDateType: ".",
                      displayDayName: "hide",
                      displayYear: "always",
                      displayTime: "hide",
                    })}
                  </span>
                  <span className={flexRowGap4}>
                    <HeartIcon width={18} height={18} fill="var(--gray400)" />
                    23
                  </span>
                  <span className={flexRowGap4}>
                    <CommentIcon width={18} height={18} fill="var(--gray400)" />5
                  </span>
                </p>
              </div>
            </div>
            <div className={teamMainBoardListImage}></div>
          </Link>
          {data.length - 1 === index || (
            <div
              aria-disabled
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "var(--gray200)",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
}

const BOARD_ARTICLES_MOCK = [
  {
    articleId: "1",
    title: "게시판 제목1",
    category: "공지사항",
    writtenBy: "포이프",
    writtenAt: "2024-10-13T15:20",
  },
  { articleId: "2", title: "게시글 제목2", category: "공지사항", writtenBy: "포이프", writtenAt: "2024-10-15T08:20" },
  { articleId: "3", title: "게시글 제목3", category: "공지사항", writtenBy: "포이프", writtenAt: "2024-10-17T22:20" },
];

export default TeamMainBoardList;
