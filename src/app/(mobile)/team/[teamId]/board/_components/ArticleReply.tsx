"use client";
import { colors } from "@/styles/color.css";
import { FONTS } from "@/styles/common";
import { flexRowGap12, flexRowGap4 } from "@/styles/container.css";
import { fonts } from "@/styles/fonts.css";
import clsx from "clsx";
import React from "react";
import styled from "styled-components";

type Props = {
  teamId: string | number;
  articleId: string | number;
  viewCount: number;
};
function ArticleReply(props: Props) {
  const { teamId, articleId, viewCount = 0 } = props;

  return (
    <div>
      <div className={clsx(flexRowGap12, fonts.body4.medium)}>
        <span className={clsx(flexRowGap4, colors.gray500)}>
          댓글<span className={colors.gray600}>0</span>
        </span>
        <span className={clsx(flexRowGap4, colors.gray500)}>
          조회<span className={colors.gray600}>{viewCount}</span>
        </span>
      </div>
    </div>
  );
}

const CommentInput = styled.div`
  position: sticky;
  margin: 0 -20px -64px;
  padding-top: 20px;
  bottom: 0;
  display: flex;
  gap: 10px;
  overflow: hidden;

  div.comment-shadow {
    width: 100%;
    border-radius: 12px 12px 0 0;
    padding: 24px 16px calc(var(--env-sab) + 16px);
    background-color: var(--white);
    box-shadow: 0 -2px 10px 6px rgba(0, 0, 0, 0.05);
  }
  div.comment-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 14px 16px;
    border-radius: 10px;
    background: var(--gray100);
    gap: 8px;
  }
  div.comment-handler {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    ${FONTS.body3("regular")};
    margin-top: -8px;
    padding: 8px 0;
    font-weight: 400;
  }
  button#CommentUploadBtn {
    ${FONTS.body4("regular")};
    padding: 6px 20px;
    background-color: var(--gray500);
    color: var(--white);
    border-radius: 20px;
    font-size: 1.4rem;
    &:active {
      background-color: var(--gray400);
    }
  }
`;

export default ArticleReply;
