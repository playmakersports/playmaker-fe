import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import useBgWhite from "@/hook/useBgWhite";
import { usePageTitle } from "@/hook/usePageTitle";

import { FONTS } from "@/styles/common";
import ArticleHead from "@/components/Article/Head";
import { BaseContainer } from "@/components/common/Container";
import { EDITOR_ARTICLE_STYLE } from "@/styles/editor";
import { COMMENTS_MOCK } from "@/constants/mock/COMMENTS";

import ReplyIcon from "@/assets/icon/editor/Reply.svg";
import HeartStrokeIcon from "@/assets/icon/global/HeartStroke.svg";
import HeartFillIcon from "@/assets/icon/global/HeartFill.svg";

function ArticleId() {
  useBgWhite();
  usePageTitle({ title: "공지사항" });
  const router = useRouter();
  const articleId = router.query.articleId;
  const [like, setLike] = useState(false);
  const [showFixedTitle, setShowFixedTitle] = useState(false);

  const handleLike = () => {
    setLike((prev) => !prev);
  };

  useEffect(() => {
    const mainContainer = document.getElementById("main_Container");

    const handleScroll = () => {
      if (mainContainer && mainContainer.scrollTop > 100) {
        setShowFixedTitle(true);
      } else {
        setShowFixedTitle(false);
      }
    };

    if (mainContainer) {
      mainContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainContainer) {
        mainContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Container>
      <ArticleHead
        category="공지사항"
        title="5월 정기 경기 일정 알려드립니다."
        createAt="2024-04-20"
        writer="관리자"
        viewCount={20}
      />
      <ScrollFixedTitle show={showFixedTitle}>5월 정기 경기 일정 알려드립니다.</ScrollFixedTitle>
      <Contents
        dangerouslySetInnerHTML={{
          __html: MOCK.replace(
            /<(iframe|script)[\s\S]*?<\/\1>/gi,
            `<p class="wrong-iframe">(허용되지 않는 코드 삽입)</p>`
          ),
        }}
      />
      <Like>
        <button type="button" className={like ? "active" : ""} onClick={handleLike}>
          <span className="like-button-inner">
            {like ? <HeartFillIcon width={20} height={20} /> : <HeartStrokeIcon width={20} height={20} />}
            {like ? 1 : 0}
          </span>
        </button>
      </Like>
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
        <CommentInput>
          <input type="text" />
          <button type="button">등록</button>
        </CommentInput>
      </Comments>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  padding: 12px 16px 0;
`;
const ScrollFixedTitle = styled.div<{ show: boolean }>`
  position: absolute;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-100%)")};
  padding: 8px 24px 12px;
  top: var(--safe-area-top);
  left: 0;
  width: var(--mobile-max-width);
  background-color: var(--background-light);
  font-size: 1.6rem;
  font-weight: 600;
  z-index: 5;
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Contents = styled.article`
  padding: 0 8px;
  ${EDITOR_ARTICLE_STYLE}
`;
const Like = styled.div`
  display: flex;
  justify-content: center;
  & > button {
    ${FONTS.MD2};
    padding: 8px 20px;
    border-radius: 24px;
    background-color: var(--gray100);
    color: var(--gray800);
    font-variant-numeric: tabular-nums;

    span.like-button-inner {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    &.active {
      color: var(--point-red);
      svg {
        fill: var(--point-red);
      }
    }

    svg {
      fill: var(--gray800);
      width: 18px;
      height: 18px;
    }
  }
`;
const Comments = styled.div`
  position: relative;
  margin-top: 24px;
  padding: 16px 4px 0;
`;
const CommentCount = styled.div`
  ${FONTS.HEAD2};
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 16px;
`;
const CommentList = styled.ul`
  display: flex;
  margin: 0 0 28px;
  flex-direction: column;
  gap: 12px;

  li {
    ${FONTS.MD2};
    font-weight: 400;
    .comment-info {
      display: block;
      margin-top: 6px;
      color: var(--gray600);
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
        fill: var(--gray400);
        width: 14px;
        height: 14px;
      }
      li {
        padding: 0 4px 8px;
        margin-bottom: 8px;
        border-bottom: 1px solid var(--gray100);
        &:last-of-type {
          border-bottom: none;
          margin-bottom: 0;
        }
      }
    }
  }
`;

const CommentInput = styled.div`
  position: sticky;
  margin: 0 -20px;
  padding: 12px 12px calc(var(--env-sab) / 1.5 + 16px);
  bottom: 0;
  display: flex;
  gap: 10px;
  background-color: var(--gray0);
  border-top: 1px solid var(--gray300);

  & > input {
    flex: 1;
    padding: 0 12px;
    ${FONTS.MD1W500};
    font-weight: 400;
    background-color: var(--gray0);
    border: 1px solid var(--gray300);
    border-radius: 6px;
    &:focus {
      border-color: var(--main);
    }
  }
  & > button {
    width: 64px;
    padding: 10px 0;
    background-color: var(--gray200);
    color: var(--gray900);
    border-radius: 6px;
    ${FONTS.MD2};
    font-size: 1.5rem;
    &:active {
      background-color: var(--gray300);
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
  <script>document.query</script>
  <iframe>이상한 코드</iframe>
  <p>감사합니다.</p>
  <p>손수철 드림.</p>`;

export default ArticleId;
