import React, { useState } from "react";
import styled from "styled-components";

import { secondToMinSec } from "@/util/common";
import { FONTS, TEXT_ACTIVE } from "@/styles/common";
import PaperPlaneIcon from "@/assets/icon/common/filled/Send.svg";

function VideoCommentInput({ articleId, currentTime }: any) {
  const [commentTime, setCommentTime] = useState("");

  return (
    <Container>
      <button
        type="button"
        aria-label="현재 재생시간 설정"
        className={`target-time ${commentTime !== "" ? "valid-time" : ""}`}
        onClick={() => setCommentTime(secondToMinSec(currentTime))}
      >
        {commentTime === "" ? "지 금" : commentTime}
      </button>
      <input
        type="text"
        className="target-comment"
        disabled={commentTime === ""}
        placeholder={commentTime === "" ? "지금을 눌러 코멘트 시간 설정" : "여기에 코멘트 넣기..."}
      />
      <button type="button" className="comment-submit" aria-label="댓글 등록">
        <PaperPlaneIcon width={20} height={20} />
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  ${FONTS.MD1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  button.target-time {
    min-width: 52px;
    padding: 6px 2px;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: -0.045rem;
    font-variant-numeric: tabular-nums;
    text-align: center;
    border-radius: 8px;

    color: var(--white);
    background-color: var(--gray500);
    &.valid-time {
      font-weight: 700;
      color: var(--main);
      background-color: rgba(var(--sub2-rgb), 0.7);
    }
  }

  .target-comment {
    width: calc(100% - 28px);
    padding: 6px 8px;
    font-size: 1.4rem;
    border-radius: 8px;
    border: 1px solid var(--primary300);
    ${TEXT_ACTIVE("var(--background-light)", { focus: true })};

    &:disabled {
      border: 1px solid var(--gray200);
      & + button.comment-submit > svg {
        fill: var(--gray400);
      }
    }
  }
  .comment-submit {
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: var(--main);
    }
  }
`;

export default VideoCommentInput;
