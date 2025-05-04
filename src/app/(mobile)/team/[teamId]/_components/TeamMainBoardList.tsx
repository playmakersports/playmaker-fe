import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import { formattedDate } from "@/util/date";
import Badge from "@/components/common/Badge";
import { fonts } from "@/styles/fonts.css";
import { baseCardContainer, flexColumnGap12, flexRowGap12 } from "@/styles/container.css";
import { teamMainBoardListImage } from "./team.main.css";

function TeamMainBoardList() {
  const params = useParams();
  const teamId = params["teamId"];

  return (
    <>
      {BOARD_ARTICLES_MOCK.map((item) => (
        <Link
          key={item.articleId}
          style={{ justifyContent: "space-between", alignItems: "center" }}
          className={clsx(baseCardContainer, flexRowGap12)}
          href={`/team/${teamId}/board/${item.articleId}`}
        >
          <div className={flexColumnGap12}>
            <div>
              <Badge size="medium" type="gray" fillType="light">
                {item.category}
              </Badge>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <p className={fonts.body4.medium}>{item.title}</p>
              <p className={fonts.caption1.regular}>
                {item.writtenBy} <span className="author-separator">|</span>{" "}
                {formattedDate(item.writtenAt, {
                  displayDateType: ".",
                  displayDayName: "hide",
                  displayYear: "always",
                  displayTime: "hide",
                })}
              </p>
            </div>
          </div>
          <div className={teamMainBoardListImage}></div>
        </Link>
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
