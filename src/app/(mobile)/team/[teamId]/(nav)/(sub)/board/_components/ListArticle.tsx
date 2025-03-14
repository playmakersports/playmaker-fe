import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { FONTS } from "@/styles/common";
import { formattedDate } from "@/util/date";
import CommentsIcon from "@/assets/icon/global/Comments.svg";

type Props = {
  articleId: number;
  title: string;
  member: {
    memberId: number;
    username: string;
    image: string;
  };
  category: {
    teamId: number;
    categoryNum: number;
    categoryName: string;
    isDelete: "Y" | "N";
  };
  createAt: string;
};
function ListArticle(props: Props) {
  const CATEGORY_NAME: Record<number, string> = {
    1: "공지사항",
    2: "자유",
    3: "가입인사",
    4: "경기",
    5: "운영진",
  };

  return (
    <Wrapper>
      <Link href={`/team/${props.category.teamId}/board/${props.articleId}`}>
        <p className="title">{props.title}</p>
        <div className="card-bottom">
          <p className="article-sub">
            <strong>{CATEGORY_NAME[props.category.categoryNum]}</strong> {props.member.username} ·{" "}
            {formattedDate(props.createAt, {
              displayDateType: "kr",
              displayDayName: "hide",
              displayYear: "not-this-year",
              displayTime: "12h-kr",
              displaySimpleKR: true,
            })}
          </p>
          <CountInfo>
            <p className="comment">
              <CommentsIcon />1
            </p>
            <p className="view">조회 60</p>
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
    ${FONTS.MD1W500};
    margin-bottom: 5px;
    color: var(--gray800);
  }
  p.article-sub {
    ${FONTS.MD3};
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
  ${FONTS.MD3};
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
