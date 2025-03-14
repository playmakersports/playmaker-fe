"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import dynamic from "next/dynamic";
import useYoutube from "@/hook/useYoutube";
import { usePageTitle } from "@/hook/usePageTitle";
import { useThrottle } from "@/hook/useThrottle";

import { VIDEO_COMMENTS, VIDEO_DATA } from "@/constants/mock/VIDEO";
import { BaseContainer } from "@/components/common/Container";
import VideoInfo from "@/components/Team/Video/VideoInfo";
import VideoCommentItem from "@/components/Team/Video/VideoCommentItem";
import VideoCommentInput from "../_components/CommentInput";
import PlayerController from "../_components/PlayerController";

function VideoArticle() {
  // 게시글 ID
  const searchParams = useSearchParams();
  const articleId = searchParams.get("articleId");
  usePageTitle({ title: VIDEO_DATA.title });

  const youtubeRef = useRef<YouTube>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentActiveComment, setCurrentActiveComment] = useState("");
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const [clientWidth, setClientWidth] = useState({ ready: false, width: 500 });

  const VIDEO_SIZE = {
    width: showMiniPlayer ? clientWidth.width / 2 : clientWidth.width,
    height: showMiniPlayer ? Math.floor(clientWidth.width * (9 / 16)) / 2 : Math.floor(clientWidth.width * (9 / 16)),
  };
  const {
    playerConnect,
    currentTime,
    duration,
    handleSeekTo,
    handlePlayPause,
    playerState,
    playbackRate,
    handlePlaybackRate,
    opts,
  } = useYoutube(youtubeRef, {
    ...VIDEO_SIZE,
    controller: false,
  });

  const handleScroll = useThrottle(() => {
    if (window.scrollY > VIDEO_SIZE.height * 1.1) {
      setShowMiniPlayer(true);
    } else {
      setShowMiniPlayer(false);
    }
  }, 50);

  useLayoutEffect(() => {
    if (containerRef.current) {
      // SSR에서 Client Width값 가져오기
      setClientWidth({ ready: true, width: containerRef.current.clientWidth });
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef.current]);

  return (
    <Container ref={containerRef}>
      <Player className={showMiniPlayer ? "mini" : ""} height={VIDEO_SIZE.height}>
        {clientWidth.ready && (
          <PlayerInner className={showMiniPlayer ? "mini" : ""}>
            <YouTube ref={youtubeRef} videoId={VIDEO_DATA.youtubeId} opts={opts} {...playerConnect} />
          </PlayerInner>
        )}
      </Player>
      <Contents>
        <PlayerTop>
          <VideoInfo
            subTitle={VIDEO_DATA.subTitle}
            title={VIDEO_DATA.title}
            description={VIDEO_DATA.description}
            createdAt={VIDEO_DATA.createdAt}
            players={VIDEO_DATA.players}
          />
        </PlayerTop>
        <Comments>
          {VIDEO_COMMENTS.map((value, index) => (
            <VideoCommentItem
              key={value.time}
              handleSeekTo={handleSeekTo}
              activeComment={currentActiveComment}
              setActiveComment={setCurrentActiveComment}
              playerCurrentTime={currentTime}
              playerDuration={duration}
              nextCommentTime={VIDEO_COMMENTS[index + 1]?.time}
              commentValue={value}
            />
          ))}
        </Comments>
        <Bottom>
          <PlayerController
            duration={duration}
            currentTime={currentTime}
            playerState={playerState}
            playbackRate={playbackRate}
            handlePlaybackRate={handlePlaybackRate}
            handlePlayPause={handlePlayPause}
          />
          <VideoCommentInput articleId={articleId} currentTime={currentTime} />
        </Bottom>
      </Contents>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  padding: 0 16px 40px;
`;
const Player = styled.section<{ height: number }>`
  margin: 0 -16px;
  width: calc(var(--mobile-max-width));
  height: ${({ height }) => height}px;
  overflow: hidden;
  z-index: 10;
  &.mini {
    height: ${({ height }) => height * 2}px;
  }
`;
const PlayerInner = styled.div`
  &.mini {
    position: fixed;
    margin: 20px 16px 0;
    right: 50%;
    border-radius: 12px;
    overflow: hidden;
    transform: translateX(calc(50% + var(--mobile-max-width) / 4));
  }
`;

const Contents = styled.section`
  flex: 1;
`;

const PlayerTop = styled.div`
  display: flex;
  padding-top: 12px;
  margin-left: -16px;
  margin-right: -16px;
  flex-direction: column;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  gap: 16px;
  background: var(--background-light);
  box-shadow: var(--shadow-alpha20);
`;

const Comments = styled.ul`
  padding: 12px 16px;
  margin-left: -16px;
  margin-right: -16px;
`;

const Bottom = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 16px;
  bottom: 0;
  width: var(--mobile-max-width);
  margin: 0 -16px;
  padding: 8px 14px calc(20px + env(safe-area-inset-bottom) / 2);
  border-top: 1px solid var(--gray100);
  background: var(--white);
  z-index: 10;
`;

export default dynamic(() => Promise.resolve(VideoArticle), { ssr: false });
