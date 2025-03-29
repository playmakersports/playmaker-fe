"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import { formattedDate } from "@/util/date";
import { DropDownBottomSheet } from "@/components/common/DropDownBottomSheet";

function MyTabFeed() {
  const [filter, setFilter] = useState("all");
  const MOCK = [
    {
      image:
        "https://wonhee-bucket.s3.ap-northeast-2.amazonaws.com/users/%ED%95%9C%EC%9C%A0%EB%A6%AC/Yuri.jpg_20241112002120",
      teamId: "33",
      articleId: "24",
      date: "2024-12-24",
      title: "SPABA 2024 시즌 개막전",
      contents: "감사합니다 오늘도 행복한 시간되세요! 다음주 일정을 소개해드리겠습니다. 자세한 내용은 아래를",
      teamName: "SPABA",
    },
    {
      image:
        "https://wonhee-bucket.s3.ap-northeast-2.amazonaws.com/users/%ED%95%9C%EC%9C%A0%EB%A6%AC/Yuri.jpg_20241112002120",
      teamId: "33",
      articleId: "20",
      date: "2024-12-28",
      title: "SPABA 2024 시즌 개막전",
      contents: "감사합니다 오늘도 행복한 시간되세요!",
      teamName: "SPABA",
    },
    {
      image:
        "https://wonhee-bucket.s3.ap-northeast-2.amazonaws.com/users/%ED%95%9C%EC%9C%A0%EB%A6%AC/Yuri.jpg_20241112002120",
      teamId: "33",
      articleId: "10",
      date: "2024-11-20",
      title: "SPABA 2024 시즌 개막전",
      contents: "감사합니다 오늘도 행복한 시간되세요!",
      teamName: "SPABA",
    },
    {
      image:
        "https://wonhee-bucket.s3.ap-northeast-2.amazonaws.com/users/%ED%95%9C%EC%9C%A0%EB%A6%AC/Yuri.jpg_20241112002120",
      teamId: "33",
      articleId: "8",
      date: "2024-12-24",
      title: "SPABA 2024 시즌 개막전",
      contents: "감사합니다 오늘도 행복한 시간되세요!",
      teamName: "SPABA",
    },
  ];
  return (
    <>
      <div
        style={{
          display: "inline-flex",
          padding: "0 4px",
          minWidth: "60px",
          maxWidth: "120px",
        }}
      >
        <DropDownBottomSheet
          defaultValue="all"
          getCurrentValue={setFilter}
          options={[
            { name: "전체", value: "all" },
            { name: "게시판", value: "board" },
            { name: "영상 게시판", value: "video" },
            { name: "피드", value: "feed" },
          ]}
        />
      </div>
      {MOCK.map((item) => (
        <ArticleItem
          key={`${item.teamId}${item.articleId}`}
          image={item.image}
          title={item.title}
          contents={item.contents}
          date={item.date}
          teamId={item.teamId}
          teamName={item.teamName}
          articleId={item.articleId}
        />
      ))}
    </>
  );
}

type Props = {
  image: string;
  title: string;
  contents: string;
  date: string;
  teamId: string;
  teamName: string;
  articleId: string;
};
function ArticleItem(props: Props) {
  const { image, title, contents, date, teamId, teamName, articleId } = props;

  return (
    <Container>
      <Image src={image} alt={title} width={65} height={65} />
      <div className="contents-info">
        <p className="title">{title}</p>
        <p className="contents">{contents}</p>
        <p className="detail">
          {formattedDate(date, {
            displayDateType: "kr",
            displayYear: "not-this-year",
            displayDayName: "hide",
          })}{" "}
          | {teamName}
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px 12px;
  border-bottom: 1px solid var(--gray200);
  &:last-of-type {
    border-bottom: none;
  }

  img {
    float: right;
    border-radius: 5px;
  }

  div.contents-info {
    margin-right: 80px;
  }

  p.title {
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 1.6rem;
  }
  p.contents {
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--gray700);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p.detail {
    font-weight: 400;
    font-size: 1.2rem;
    color: var(--gray400);
  }
`;

export default MyTabFeed;
