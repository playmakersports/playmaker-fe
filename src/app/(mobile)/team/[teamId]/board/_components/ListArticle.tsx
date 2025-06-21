import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { FONTS } from "@/styles/common";
import { formattedDate } from "@/util/date";
import CommentsIcon from "@/assets/icon/common/filled/Chat.svg";
import { TeamBoardItemType } from "@/types/team";

function ListArticle(props: TeamBoardItemType) {
  const CATEGORY_NAME: Record<string | number, string> = {
    1: "공지사항",
    2: "자유게시판",
    3: "갤러리",
  };

  return (
    <Wrapper>
      <Link href={`/team/${props.teamId}/board/${props.id}`}>
        <p className="title">{props.title}</p>
        <div className="card-bottom">
          <p className="article-sub">
            <strong>{CATEGORY_NAME[props.boardType]}</strong> {props.createBy.memberName} ·{" "}
            {formattedDate(new Date(props.createAt), {
              displayDateType: "kr",
              displayDayName: "hide",
              displayYear: "not-this-year",
              displayTime: "12h-kr",
              displaySimpleKR: true,
            })}
          </p>
          <CountInfo>
            <p className="comment">
              <CommentsIcon />
              {props.commentCount}
            </p>
            <p className="view">조회 {props.viewCount}</p>
          </CountInfo>
        </div>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 12px 20px;
  background-color: var(--white);
  border-radius: 10px;

  a {
    transition: transform 0.2s;
    div.card-bottom {
      display: flex;
      justify-content: space-between;
    }
    &:active {
      transform: scale(0.98);
    }
  }

  p.title {
    ${FONTS.body3("regular")};
    margin-bottom: 5px;
    color: var(--gray800);
  }
  p.article-sub {
    ${FONTS.body4("regular")};
    color: var(--gray600);
    strong {
      margin-right: 5px;
      font-weight: 500;
      color: var(--main);
      opacity: 0.9;
    }
  }
`;

const CountInfo = styled.div`
  ${FONTS.body4("regular")};
  display: flex;
  color: var(--gray600);
  gap: 8px;
  p {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  svg {
    fill: var(--gray500);
  }
`;

export default ListArticle;
