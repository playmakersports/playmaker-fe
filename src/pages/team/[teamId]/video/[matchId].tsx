import React, { useCallback, useRef, useState } from "react";
import YouTube from "react-youtube";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import useYoutube from "@/hook/useYoutube";
import dynamic from "next/dynamic";

import { VIDEO_COMMENTS, VIDEO_DATA } from "@/constants/mock/VIDEO";
import { FONTS, SCROLL_HIDE, TEXT_ACTIVE } from "@/styles/common";
import { BaseContainer } from "@/components/common/Container";
import VideoCommentItem from "@/components/Team/Video/VideoCommentItem";
import { secondToMinSec } from "@/util/common";
import PaperPlaneIcon from "@/assets/icon/global/PaperPlane.svg";
import VideoInfo from "@/components/Team/Video/VideoInfo";
import { usePageTitle } from "@/hook/usePageTitle";

function VideoArticle() {
  const router = useRouter();
  const playerRef = useRef<YouTube>(null);
  const commentRef = useRef<HTMLUListElement>(null);
  const playerDuration = playerRef.current?.internalPlayer.getDuration();

  const [currentActiveComment, setCurrentActiveComment] = useState("");
  const [targetVideoTime, setTargetVideoTime] = useState("");
  // const [playbackRate, setPlaybackRate] = useState(1);

  const VIDEO_SIZE = {
    width: window.innerWidth,
    height: Math.floor(window.innerWidth * (9 / 16)),
  };
  const { playerConnect, currentTime, playerState, opts } = useYoutube(VIDEO_SIZE);
  usePageTitle(VIDEO_DATA.title, secondToMinSec(currentTime));

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

  return (
    <Container videoHeight={VIDEO_SIZE.height}>
      <Video>
        <YouTube
          ref={playerRef}
          id="player_YouTube"
          videoId={VIDEO_DATA.youtubeId}
          opts={opts}
          // onPlaybackRateChange={(event) => setPlaybackRate(event.target.getPlaybackRate())}
          {...playerConnect}
        />
      </Video>
      <PlayerTop>
        <VideoInfo
          subTitle={VIDEO_DATA.subTitle}
          title={VIDEO_DATA.title}
          description={VIDEO_DATA.description}
          createdAt={VIDEO_DATA.createdAt}
          players={VIDEO_DATA.players}
        />
      </PlayerTop>
      <Comments ref={commentRef}>
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
      <Bottom>
        {/* <Button
            type="button"
            mode="SUB1"
            onClick={playerPausePlay}
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
          </Button> */}
        <CommentBox>
          <button
            type="button"
            aria-label="현재 재생시간 설정"
            className="target-time"
            onClick={() => setTargetVideoTime(secondToMinSec(currentTime))}
          >
            {targetVideoTime === "" ? "SET" : targetVideoTime}
          </button>
          <input type="text" className="target-comment" placeholder="댓글 입력..." />
          <button type="button" className="comment-submit" aria-label="댓글 등록">
            <PaperPlaneIcon width={20} height={20} />
          </button>
        </CommentBox>
      </Bottom>
    </Container>
  );
}

const Container = styled(BaseContainer)<{ videoHeight: number }>`
  margin-top: ${({ videoHeight }) => videoHeight}px;
  margin-bottom: calc(56px + env(safe-area-inset-bottom) * 1.2);
`;
const Video = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  padding: var(--safe-area-top) 0 0;
  z-index: 2;
  overflow: hidden;
`;

const PlayerTop = styled.div`
  display: flex;
  margin-left: -16px;
  margin-right: -16px;
  flex-direction: column;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  gap: 16px;
  background: linear-gradient(0deg, ${({ theme }) => theme.card} 50%, rgba(0, 0, 0, 0) 100%);
`;

const Comments = styled.ul`
  padding: 8px 16px;
  margin-left: -16px;
  margin-right: -16px;
  overflow-x: hidden;
  overflow-y: scroll;
  ${SCROLL_HIDE};
`;

const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0 -16px;
  padding: 0 0 calc(20px + env(safe-area-inset-bottom) / 2);
  background: rgb(var(--background-rgb));
  z-index: 10;
`;

const CommentBox = styled.div`
  display: flex;
  ${FONTS.MD1};
  margin: 0 16px;
  padding: 12px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-top: 1px solid rgb(var(--gray-h4));

  .target-time {
    width: 52px;
    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: -0.03rem;
    color: rgba(var(--gray-h1));
    text-align: center;
    border-radius: 8px;
    ${TEXT_ACTIVE("rgb(var(--gray-h5))")}
  }
  .target-comment {
    width: calc(100% - 28px);
    font-size: 1.6rem;
    color: rgba(var(--gray--h2));
    border-radius: 2px;
    ${TEXT_ACTIVE("rgb(var(--gray-h5))", { focus: true })};
  }
  .comment-submit {
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    border-radius: 100%;
    ${TEXT_ACTIVE("rgb(var(--gray-h5))")}
    svg {
      fill: var(--black);
    }
  }
`;

export default dynamic(() => Promise.resolve(VideoArticle), { ssr: false });
