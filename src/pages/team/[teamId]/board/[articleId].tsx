import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import { FONTS } from "@/styles/common";
import ArticleHead from "@/components/Article/Head";
import { BaseContainer } from "@/components/common/Container";
import { EDITOR_ARTICLE_STYLE } from "@/styles/editor";
import { COMMENTS_MOCK } from "@/constants/mock/COMMENTS";

import ReplyIcon from "@/assets/icon/editor/Reply.svg";
import Button from "@/components/common/Button";

function ArticleId() {
  const router = useRouter();
  const articleId = router.query.articleId;
  const [isRead, setIsRead] = useState(false);

  return (
    <Container>
      <ArticleHead
        category="공지사항"
        title="5월 정기 경기 일정 알려드립니다."
        createAt="2024-04-20"
        writer="관리자"
        viewCount={20}
      />
      <Contents
        dangerouslySetInnerHTML={{
          __html: MOCK.replace(
            /<iframe[\s\S]*?<\/iframe>/gi,
            `<p class="wrong-iframe">[부적절한 코드가 감지되어 삭제되었습니다.]</p>`
          ),
        }}
      />
      <Button type="button" mode={isRead ? "MAIN" : "OPTION2"} fullWidth onClick={() => setIsRead((prev) => !prev)}>
        {isRead ? "이 글을 읽었습니다" : "이 글을 읽었다면 눌러주세요"}
      </Button>
      <Comments>
        <CommentCount>댓글 {COMMENTS_MOCK.length}개</CommentCount>
        <CommentList>
          {COMMENTS_MOCK.map((comment, index) => (
            <li key={index}>
              <p>{comment.contents}</p>
              <p>
                <span className="comment-info">
                  {comment.name} {comment.writtenAt}
                </span>
              </p>

              {comment.reply.length > 0 && (
                <ul className="reply-comment-wrapper">
                  <ReplyIcon className="reply-icon" />
                  {comment.reply.map((reply, reIndex) => (
                    <li key={`${index}+${reIndex}`}>
                      <p>{reply.contents}</p>
                      <p>
                        <span className="comment-info">
                          {reply.name} {reply.writtenAt}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </CommentList>
      </Comments>
    </Container>
  );
}

const Container = styled(BaseContainer)``;
const Contents = styled.article`
  padding: 0 8px;
  ${EDITOR_ARTICLE_STYLE}
`;
const Comments = styled.div`
  margin-top: 24px;
  padding: 16px 8px 20px;
  border-top: 1px solid rgb(var(--gray-h4));
`;
const CommentCount = styled.div`
  ${FONTS.HEAD2};
  font-weight: 800;
  font-size: 1.8rem;
  margin-bottom: 16px;
`;
const CommentList = styled.ul`
  display: flex;
  margin: 0 -8px;
  flex-direction: column;
  gap: 12px;
  ${FONTS.MD1W500};

  li {
    padding: 12px 16px;
    border-radius: 12px;
    background-color: var(--card);
    line-height: 2.4rem;

    .comment-info {
      display: block;
      opacity: 0.6;
      margin-top: 6px;
      ${FONTS.MD3};
    }
    .reply-comment-wrapper {
      position: relative;
      display: flex;
      margin-top: 12px;
      margin-left: 20px;
      flex-direction: column;
      gap: 0;
      .reply-icon {
        position: absolute;
        left: 0;
        top: 4px;
        margin-left: -20px;
        fill: rgb(var(--gray-h3));
        width: 14px;
        height: 14px;
      }
      li {
        padding: 0 4px 8px;
        margin-bottom: 8px;
        ${FONTS.MD1W500};
        font-size: 1.4rem;
        line-height: 2.2rem;
        border-radius: 0;
        border-bottom: 1px solid rgb(var(--gray-h6));
        &:last-of-type {
          border-bottom: none;
          margin-bottom: 0;
        }
      }
    }
  }
`;

const MOCK = ` <p>안녕하세요 손수철입니다.</p>
  <p>이번주 경기 일정을 알려드리겠습니다.</p>
  <p></p>
  <blockquote>
    <h3>
      <strong>일정</strong>
    </h3>
  </blockquote>
  <p>
    2024년
    <strong>
      <mark>5월 15일</mark>
    </strong>
    16:00
  </p>
  <p>2024년 5월 25일 21:00</p>
  <p></p>
  <ul>
    <li>
      <p>하나</p>
    </li>
  </ul>
  <p>늦지 말고 모두 참석해주세요.</p>
  <p></p>
  <iframe>이상한 코드</iframe>
  <p>감사합니다.</p>
  <p>손수철 드림.</p>`;

export default ArticleId;
