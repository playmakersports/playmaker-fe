import React, { useCallback, useRef, useState } from "react";
import YouTube from "react-youtube";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import useYoutube from "@/hook/useYoutube";
import dynamic from "next/dynamic";
import useBackgroundGray from "@/hook/useBackgroundGray";

import { FONTS, SCROLL_HIDE } from "@/styles/common";
import { minSecToSecond, secondToMinSec } from "@/util/common";
import Button from "@/components/common/Button";
import { BaseContainer } from "@/components/common/Container";
import PaperPlaneIcon from "@/assets/icon/global/PaperPlane.svg";

function VideoArticle() {
  useBackgroundGray();
  const router = useRouter();
  const playerRef = useRef<YouTube>(null);
  const commentRef = useRef<HTMLUListElement>(null);
  const commentInputRef = useRef<HTMLInputElement>(null);
  const playerDuration = playerRef.current?.internalPlayer.getDuration();

  const [currentActiveComment, setCurrentActiveComment] = useState("");
  const [targetVideoTime, setTargetVideoTime] = useState("");
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isScrollBottom, setIsScrollBottom] = useState(false);

  const VIDEO_SIZE = {
    width: window.innerWidth,
    height: Math.floor(window.innerWidth * (9 / 16)),
  };
  const { handlePlayer, currentTime, playerState, opts } = useYoutube(VIDEO_SIZE);

  const matchId = router.query.matchId;

  const playerSeekTo = (time: string) => {
    const [min, sec] = time.split(":").map((v) => Number(v));
    const target = min * 60 + sec;
    playerRef.current?.internalPlayer.seekTo(target);
  };
  const playerPausePlay = () => {
    if (playerState === 1) {
      playerRef.current?.internalPlayer.pauseVideo();
    } else {
      playerRef.current?.internalPlayer.playVideo();
    }
  };

  const onCommentScroll = useCallback(() => {
    const clientHeight = commentRef.current!.clientHeight;
    const nowPosition = commentRef.current!.scrollHeight - commentRef.current!.scrollTop;
    console.log(nowPosition - clientHeight);
    if (commentRef && nowPosition - clientHeight < 20) {
      setIsScrollBottom(true);
    } else {
      setIsScrollBottom(false);
    }
  }, []);

  return (
    <Container>
      <PlayerTop showCommentInput={showCommentInput} height={VIDEO_SIZE.height}>
        <Wrapper className="video-wrapper" width={VIDEO_SIZE.width} height={VIDEO_SIZE.height}>
          <YouTube
            ref={playerRef}
            id="player_YouTube"
            videoId="yD3qRoTuHzQ"
            opts={opts}
            onReady={handlePlayer}
            onPlay={handlePlayer}
            onStateChange={handlePlayer}
            onPlaybackRateChange={(event) => setPlaybackRate(event.target.getPlaybackRate())}
          />
        </Wrapper>
        {!showCommentInput && (
          <VideoInfo>
            <h3 className="video-match">팀1 : 팀2</h3>
            <h3 className="video-title">경기제목</h3>
          </VideoInfo>
        )}
      </PlayerTop>
      <Comments
        ref={commentRef}
        showCommentInput={showCommentInput}
        height={VIDEO_SIZE.height}
        onScroll={onCommentScroll}
      >
        {COMMENTS.map((value, index) => {
          const thisTime = minSecToSecond(value.time);
          const nextTime = COMMENTS[index + 1] ? minSecToSecond(COMMENTS[index + 1].time) : playerDuration;
          return (
            <li
              key={value.time}
              onClick={() => playerSeekTo(value.time)}
              ref={(ref) => {
                if (!ref) return;
                if (thisTime <= currentTime && nextTime > currentTime && currentActiveComment !== value.time) {
                  ref.scrollIntoView({ block: "center", behavior: "smooth" });
                  setCurrentActiveComment(value.time);
                }
              }}
              className={thisTime <= currentTime && nextTime > currentTime ? "now-active" : ""}
              data-info={`${value.author} • ${value.writtenAt}`}
            >
              <span className="timeline">{value.time}</span> <span className="contents">{value.contents}</span>
            </li>
          );
        })}
      </Comments>
      <Bottom isScrollBottom={isScrollBottom} showCommentInput={showCommentInput}>
        <PlayerHandler>
          {/* <p className="yt-player-time">{secondToMinSec(currentTime)}</p> */}
          <Button
            type="button"
            mode="SUB1"
            onClick={playerPausePlay}
            flex={showCommentInput ? 1 : 2}
            disabled={playerState === 3}
            split={{
              text: `${playbackRate === 1 ? 0.5 : 1}x`,
              onClick: () => {
                if (playbackRate === 1) {
                  playerRef.current?.internalPlayer.setPlaybackRate(0.5).then(() => {
                    setPlaybackRate(0.5);
                  });
                } else {
                  playerRef.current?.internalPlayer.setPlaybackRate(1).then(() => {
                    setPlaybackRate(1);
                  });
                }
              },
            }}
          >
            {playerState === 1 ? "일시정지" : playerState === 3 ? "버퍼링" : "재생"}
          </Button>
          <Button
            type="button"
            mode="OPTION1"
            flex={1}
            onClick={() => {
              setTargetVideoTime(secondToMinSec(currentTime));
              setShowCommentInput(true);
              commentInputRef.current?.focus();
            }}
            split={
              showCommentInput
                ? {
                    text: "닫기",
                    onClick: () => setShowCommentInput(false),
                  }
                : undefined
            }
          >
            {secondToMinSec(currentTime)}에 댓글
          </Button>
        </PlayerHandler>

        <CommentBox style={{ display: showCommentInput ? "block" : "none" }}>
          <div className="comment-area">
            <p className="target-time">{targetVideoTime}</p>
            <input type="text" ref={commentInputRef} className="target-comment" />
            <button type="button">
              <PaperPlaneIcon width={20} height={20} />
            </button>
          </div>
        </CommentBox>
      </Bottom>
    </Container>
  );
}

type PlayerStyledProps = { showCommentInput: boolean; height: number };
const Container = styled(BaseContainer)`
  position: fixed;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  height: calc(100vh - var(--safe-area-top));
  padding-bottom: 0px;
`;
const PlayerTop = styled.div<PlayerStyledProps>`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  gap: 16px;
  padding: var(--safe-area-top) 0 0;
  background: linear-gradient(0deg, ${({ theme }) => theme.card} 50%, rgba(0, 0, 0, 0) 100%);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 4px 12px 8px rgba(0, 0, 0, 0.05);
  z-index: 1;

  ${({ showCommentInput }) =>
    showCommentInput &&
    ` 
    .video-wrapper {
      overflow: hidden;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  `}
`;
const VideoInfo = styled.div`
  padding: 0 20px 16px;
  .video-match {
    margin-bottom: 8px;
    ${FONTS.MD2};
    color: ${({ theme }) => theme.gray1};
  }
  .video-title {
    ${FONTS.HEAD1};
    font-size: 2.2rem;
  }
`;

const Wrapper = styled.div<{ width: number; height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: ${({ width }) => width}px;
  min-height: ${({ height }) => height}px;
  div {
    height: ${({ height }) => height}px !important;
  }
`;
const Comments = styled.ul<PlayerStyledProps>`
  flex: 1;
  display: flex;
  gap: 16px;
  margin: 0 -16px;
  padding: 16px 16px 20px;
  height: ${({ showCommentInput, height }) =>
    `calc(100vh - var(--safe-area-top) - ${height}px - 88px - env(safe-area-inset-bottom) ${
      showCommentInput ? "- 64px" : "- 80px"
    })`};
  margin-bottom: ${({ showCommentInput }) =>
    showCommentInput ? "calc(88px + env(safe-area-inset-bottom) + 64px)" : "calc(88px + env(safe-area-inset-bottom))"};
  flex-direction: column;
  overflow-y: scroll;
  ${SCROLL_HIDE};

  li {
    gap: 8px;
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.gray4};
    border-radius: 12px;
    transition: all 0.2s;
    ${FONTS.MD1W500};
    line-height: 2.4rem;
    transition: transform 0.2s;
    &::after {
      content: attr(data-info);
      display: block;
      opacity: 0.6;
      margin-top: 6px;
      ${FONTS.MD3}
    }

    &:active {
      transform: scale(0.97);
    }
    &.now-active {
      background-color: ${({ theme }) => theme.main};
      color: #fff;
    }
  }
  .timeline {
    display: inline-block;
    min-width: 34px;
    margin-right: 4px;
    font-weight: 800;
    opacity: 0.65;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.05rem;
  }
`;

const Bottom = styled.div<{ isScrollBottom: boolean; showCommentInput: boolean }>`
  position: fixed;
  bottom: 0;
  height: ${({ showCommentInput }) => (showCommentInput ? "auto" : "calc(88px + env(safe-area-inset-bottom))")};
  margin: 0 -16px;
  padding: 12px 16px calc(20px + env(safe-area-inset-bottom));
  width: 100%;
  background-color: ${({ theme }) => theme.background};

  &::before {
    content: "";
    position: absolute;
    opacity: ${({ isScrollBottom }) => (isScrollBottom ? 0 : 1)};
    width: 100%;
    height: 36px;
    top: -36px;
    left: 0;
    transition: opacity 0.2s;
    background: linear-gradient(
      0deg,
      ${({ theme }) => theme.background} 15%,
      rgba(${({ theme }) => theme.baseBackgroundRgb}, 0) 100%
    );
  }
`;

const PlayerHandler = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .yt-player-time {
    flex: 0.5;
    text-align: center;
    ${FONTS.MD1}
  }
`;
const CommentBox = styled.div`
  display: flex;
  margin-top: 20px;
  ${FONTS.MD1};

  .comment-area {
    width: 100%;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    border-radius: 32px;
    background-color: ${({ theme }) => theme.gray4};
    .target-time {
      width: 42px;
      font-size: 1.4rem;
      font-weight: 800;
      font-variant-numeric: tabular-nums;
      letter-spacing: -0.03rem;
      opacity: 0.65;
      color: ${({ theme }) => theme.text};
    }
    .target-comment {
      flex: 1;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.text};
    }
  }
  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.65;
  }
`;

const COMMENTS = [
  { author: "홍길동", writtenAt: "2024-04-24T06:40", time: "03:20", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-24T06:42", time: "04:20", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-24T06:43", time: "07:11", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-24T06:06", time: "09:55", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-24T21:34", time: "10:01", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-24T20:30", time: "12:12", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-25T12:27", time: "14:33", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-25T12:32", time: "15:41", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-25T12:37", time: "19:11", contents: "여기임" },
  {
    author: "홍길동",
    writtenAt: "2024-04-25T13:40",
    time: "20:08",
    contents: "내용입니다. 오른쪽에서 왼쪽으로 이동. 실수를 줄여야 합니다.",
  },
  { author: "홍길동", writtenAt: "2024-04-25T20:18", time: "21:48", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-25T21:32", time: "24:34", contents: "여기임" },
];

export default dynamic(() => Promise.resolve(VideoArticle), { ssr: false });
