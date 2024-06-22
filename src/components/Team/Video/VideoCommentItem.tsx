import React from "react";
import styled from "@emotion/styled";

import { minSecToSecond } from "@/util/common";
import { FONTS } from "@/styles/common";

type Props = {
  commentValue: any;
  activeComment: string;
  setActiveComment: (prev: string) => void;
  onClickSeekTo: () => void;
  playerDuration: number;
  nextCommentTime: string;
  playerCurrentTime: number;
};

function VideoCommentItem(props: Props) {
  const {
    commentValue,
    activeComment,
    setActiveComment,
    onClickSeekTo,
    playerDuration,
    playerCurrentTime,
    nextCommentTime,
  } = props;
  const thisTime = minSecToSecond(commentValue.time);
  const nextTime = nextCommentTime ? minSecToSecond(nextCommentTime) : playerDuration;
  const isActiveComment = thisTime <= playerCurrentTime && nextTime > playerCurrentTime;

  return (
    <Container className={isActiveComment ? "now-active" : ""}>
      <Time onClick={onClickSeekTo}>
        <div className={isActiveComment ? "now-active" : ""}>{commentValue.time}</div>
      </Time>
      <Contents
        ref={(ref) => {
          if (!ref) return;
          if (isActiveComment && activeComment !== commentValue.time) {
            ref.scrollIntoView({ block: "center", behavior: "smooth" });
            setActiveComment(commentValue.time);
          }
        }}
        data-info={`${commentValue.author} • ${commentValue.writtenAt}`}
      >
        <span className="contents">{commentValue.contents}</span>
      </Contents>
    </Container>
  );
}
const Container = styled.li`
  position: relative;
  margin: 0 -16px;
  padding: 8px 16px;
  display: flex;
  align-items: flex-start;
  gap: 6px;

  &.now-active {
    background-color: rgba(var(--main-rgb), 0.1);
  }

  &::before {
    content: "";
    position: absolute;
    border-left: 1px dashed rgba(var(--gray-h3), 0.6);
    width: 1px;
    height: calc(100% - 2px);
    left: calc(27px + 16px);
    top: 0;
  }

  &:first-of-type::before {
    top: 16px;
    height: calc(100% - 16px);
  }
  &:last-of-type::before {
    height: 16px;
  }
`;

const Time = styled.div`
  ${FONTS.MD2};
  margin: 8px 0;
  height: 100%;
  z-index: 1;

  div {
    padding: 3px 0;
    width: 54px;
    text-align: center;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.05rem;
    font-weight: 800;
    border-radius: 24px;
    background-color: var(--white);
    border: 1px solid rgba(var(--gray-h5));
    user-select: none;
    word-break: keep-all;
    transition: transform 0.2s;
  }
  div.now-active {
    border: 1px solid transparent;
    background-color: var(--main);
    color: #fff;
  }
  &:active > div {
    transform: scale(0.95);
  }
`;

const Contents = styled.div`
  flex: 1;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 12px;
  transition: all 0.2s;
  ${FONTS.MD1W500};
  line-height: 2.4rem;
  &::after {
    content: attr(data-info);
    display: block;
    opacity: 0.6;
    margin-top: 6px;
    ${FONTS.MD3}
  }
`;

export default VideoCommentItem;
