"use client";
import { useHeader } from "@/hook/useHeader";
import { FONTS } from "@/styles/common";
import React from "react";
import styled from "styled-components";

function ArticleReply() {
  useHeader({ title: "공지사항" });

  return <div>ArticleReply</div>;
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
    ${FONTS.MD1W500};
    margin-top: -8px;
    padding: 8px 0;
    font-weight: 400;
  }
  button#CommentUploadBtn {
    ${FONTS.MD2};
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
