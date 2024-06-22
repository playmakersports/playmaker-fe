import React, { useCallback, useRef, useState } from "react";
import YouTube from "react-youtube";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import useYoutube from "@/hook/useYoutube";
import dynamic from "next/dynamic";

import { VIDEO_COMMENTS, VIDEO_DATA } from "@/constants/mock/VIDEO";
import { FONTS, SCROLL_HIDE } from "@/styles/common";
import Button from "@/components/common/Button";
import { BaseContainer } from "@/components/common/Container";
import VideoCommentItem from "@/components/Team/Video/VideoCommentItem";
import { secondToMinSec } from "@/util/common";
import PaperPlaneIcon from "@/assets/icon/global/PaperPlane.svg";
import VideoPlayTime from "@/components/Team/Video/VideoPlayTime";
import VideoInfo from "@/components/Team/Video/VideoInfo";

function VideoArticle() {
  const router = useRouter();
  const playerRef = useRef<YouTube>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const commentRef = useRef<HTMLUListElement>(null);
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
  const { playerConnect, currentTime, playerState, opts } = useYoutube(VIDEO_SIZE);

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

    if (commentRef && nowPosition - clientHeight < 20) {
      setIsScrollBottom(true);
    } else {
      setIsScrollBottom(false);
    }
  }, []);

  return (
    <Container>
      <VideoPlayTime />
      <PlayerTop ref={topRef} showCommentInput={showCommentInput}>
        <Wrapper className="video-wrapper" width={VIDEO_SIZE.width} height={VIDEO_SIZE.height}>
          <YouTube
            ref={playerRef}
            id="player_YouTube"
            videoId={VIDEO_DATA.youtubeId}
            opts={opts}
            onPlaybackRateChange={(event) => setPlaybackRate(event.target.getPlaybackRate())}
            {...playerConnect}
          />
        </Wrapper>
        {!showCommentInput && (
          <VideoInfo
            subTitle={VIDEO_DATA.subTitle}
            title={VIDEO_DATA.title}
            description={VIDEO_DATA.description}
            createdAt={VIDEO_DATA.createdAt}
            players={VIDEO_DATA.players}
          />
        )}
      </PlayerTop>
      <Comments
        ref={commentRef}
        showCommentInput={showCommentInput}
        videoHeight={VIDEO_SIZE.height}
        height={topRef.current?.clientHeight}
        onScroll={onCommentScroll}
      >
        {VIDEO_COMMENTS.map((value, index) => (
          <VideoCommentItem
            key={value.time}
            onClickSeekTo={() => playerSeekTo(value.time)}
            activeComment={currentActiveComment}
            setActiveComment={setCurrentActiveComment}
            playerCurrentTime={currentTime}
            playerDuration={playerDuration}
            nextCommentTime={VIDEO_COMMENTS[index + 1]?.time}
            commentValue={value}
          />
        ))}
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
            코멘트
          </Button>
        </PlayerHandler>

        <CommentBox style={{ display: showCommentInput ? "block" : "none" }}>
          <div className="comment-area">
            <p className="target-time">{targetVideoTime}</p>
            <input type="text" className="target-comment" />
            <button type="button">
              <PaperPlaneIcon width={20} height={20} />
            </button>
          </div>
        </CommentBox>
      </Bottom>
    </Container>
  );
}

type PlayerStyledProps = { showCommentInput: boolean; height?: number; videoHeight?: number };
const Container = styled(BaseContainer)`
  position: fixed;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  height: calc(100vh - var(--safe-area-top));
  padding-bottom: 0px;
  width: 100%;
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 4px 12px 8px rgba(0, 0, 0, 0.05);
  z-index: 2;

  ${({ showCommentInput }) =>
    showCommentInput &&
    ` 
    .video-wrapper {
      overflow: hidden;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  `}
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
  padding: 8px 16px 20px;
  height: ${({ showCommentInput, videoHeight, height }) =>
    showCommentInput
      ? `calc(100vh - ${videoHeight}px - 140px - var(--safe-area-top))`
      : `calc(100vh - ${height}px - 80px)`};
  margin-top: ${({ showCommentInput, height }) => (showCommentInput ? 0 : `${height}px`)};
  margin-bottom: ${({ showCommentInput }) => (showCommentInput ? "140px" : "80px")};
  margin-left: -16px;
  margin-right: -16px;
  overflow-x: hidden;
  overflow-y: scroll;
  ${SCROLL_HIDE};
`;

const Bottom = styled.div<{ isScrollBottom: boolean; showCommentInput: boolean }>`
  position: fixed;
  bottom: 0;
  margin: 0 -16px;
  padding: 12px 16px calc(20px + env(safe-area-inset-bottom) / 2);
  width: 100%;
  background: rgb(var(--background-rgb));
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    opacity: ${({ isScrollBottom }) => (isScrollBottom ? 0 : 1)};
    width: 100%;
    height: 36px;
    top: -36px;
    left: 0;
    transition: opacity 0.2s;
    background: linear-gradient(to top, rgb(var(--background-rgb)) 0%, rgba(var(--background-rgb), 0) 90%);
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
  margin-top: 16px;
  ${FONTS.MD1};

  .comment-area {
    width: 100%;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    border-radius: 12px;
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
      width: calc(100% - 28px);
      font-size: 1.6rem;
      color: ${({ theme }) => theme.text};
    }
  }
  button {
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    svg {
      fill: var(--black);
    }
  }
`;

export default dynamic(() => Promise.resolve(VideoArticle), { ssr: false });
