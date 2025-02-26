import React from "react";
import styled from "styled-components";

import { minSecToSecond } from "@/util/common";
import { FONTS } from "@/styles/common";
import { BasicWhiteCard } from "@/components/common/Card";
import { formattedDate } from "@/util/date";

type Props = {
  commentValue: any;
  activeComment: string;
  setActiveComment: (prev: string) => void;
  handleSeekTo: (seconds: number) => void;
  playerDuration: number;
  nextCommentTime: string;
  playerCurrentTime: number;
};

function VideoCommentItem(props: Props) {
  const {
    commentValue,
    activeComment,
    setActiveComment,
    handleSeekTo,
    playerDuration,
    playerCurrentTime,
    nextCommentTime,
  } = props;
  const thisTime = minSecToSecond(commentValue.time);
  const nextTime = nextCommentTime ? minSecToSecond(nextCommentTime) : playerDuration;
  const isActiveComment = thisTime <= playerCurrentTime && nextTime > playerCurrentTime;

  const onClickTimeFlag = (time: string) => {
    handleSeekTo(minSecToSecond(time));
  };

  return (
    <Container>
      <Time onClick={() => onClickTimeFlag(commentValue.time)}>
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
        data-info={`${commentValue.author} • ${formattedDate(commentValue.writtenAt, {
          displayDateType: ".",
          displayDayName: "hide",
          displayYear: "not-this-year",
          displayTime: "24h",
        })}`}
      >
        <span className="contents">{commentValue.contents}</span>
      </Contents>
    </Container>
  );
}
const Container = styled.li`
  position: relative;
  margin: 0 -16px;
  padding: 8px 16px 16px;
  display: flex;
  align-items: flex-start;
  gap: 10px;

  &::before {
    content: "";
    position: absolute;
    border-left: 1px dashed var(--gray500);
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
    background-color: var(--background-light);
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

const Contents = styled(BasicWhiteCard)`
  flex: 1;
  gap: 8px;
  padding: 12px 16px;
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
