"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { FONTS } from "@/styles/fonts";
import useYoutube from "@/hook/useYoutube";
import YouTube from "react-youtube";
import { minSecToSecond, secondToMinSec } from "@/util/common";
import Button from "@/components/common/Button";
import useBackgroundGray from "@/hook/useBackgroundGray";
import dynamic from "next/dynamic";

function VideoArticle() {
  useBackgroundGray();
  const router = useRouter();
  const playerRef = useRef<any>();
  const commentsRef = useRef<HTMLUListElement>(null);
  const playerDuration = playerRef.current?.internalPlayer.getDuration();

  const { handlePlayer, currentTime, playerState, opts } = useYoutube({
    width: window.innerWidth + 32 ?? 500,
    height: (window.innerWidth + 32) * (9 / 16) ?? 280,
  });

  const matchId = router.query.matchId;

  const playerSeekTo = (time: string) => {
    const [min, sec] = time.split(":").map((v) => Number(v));
    const target = min * 60 + sec;
    playerRef.current?.internalPlayer.seekTo(target);
  };
  const playerPausePlay = () => {
    if (playerState === 1) {
      playerRef.current.internalPlayer.pauseVideo();
    } else {
      playerRef.current.internalPlayer.playVideo();
    }
  };

  const activeTarget = commentsRef.current?.querySelector("li[data-active='true']");
  useEffect(() => {
    if (activeTarget) {
      activeTarget.scrollIntoView({ behavior: "smooth" });
    } else {
      commentsRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeTarget]);

  return (
    <Container>
      <PlayerTop>
        <Wrapper>
          <YouTube
            ref={playerRef}
            id="player_YouTube"
            videoId="roWaiGLWMB0"
            opts={opts}
            onReady={handlePlayer}
            onPlay={handlePlayer}
            onStateChange={handlePlayer}
          />
        </Wrapper>
        <VideoInfo>
          <h3 className="video-match">팀1 : 팀2</h3>
          <h3 className="video-title">경기제목</h3>
        </VideoInfo>
      </PlayerTop>
      <Comments ref={commentsRef}>
        {COMMENTS.map((value, index) => {
          const thisTime = minSecToSecond(value.time);
          const nextTime = COMMENTS[index + 1] ? minSecToSecond(COMMENTS[index + 1].time) : playerDuration;
          return (
            <li
              key={value.time}
              onClick={() => playerSeekTo(value.time)}
              data-active={thisTime <= currentTime && nextTime > currentTime ? "true" : ""}
            >
              <span className="timeline">{value.time}</span> <span className="contents">{value.contents}</span>
            </li>
          );
        })}
      </Comments>
      <PlayerHandler>
        <p className="yt-player-time">{secondToMinSec(currentTime)}</p>
        <Button type="button" mode="SUB1" onClick={playerPausePlay} flex={2} disabled={playerState === 3}>
          {playerState === 1 ? "일시정지" : playerState === 3 ? "버퍼링" : "재생"}
        </Button>
        <Button type="button" mode="OPTION1" flex={1}>
          여기에 댓글
        </Button>
      </PlayerHandler>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100dvh - 64px);
`;
const PlayerTop = styled.div`
  position: sticky;
  top: -64px;
  padding-top: 64px;
  margin: -64px -16px 0;
  background: linear-gradient(${({ theme }) => theme.baseBackground} 1%, ${({ theme }) => theme.card} 6%);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 4px 12px 8px rgba(0, 0, 0, 0.05);
`;
const VideoInfo = styled.div`
  margin: 16px 0;
  padding: 0 20px 4px;
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Comments = styled.ul`
  display: flex;
  padding-top: 16px;
  padding-bottom: 20px;
  margin-bottom: 88px;
  flex-direction: column;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  li {
    gap: 8px;
    margin-top: 16px;
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.gray4};
    border-radius: 12px;
    ${FONTS.MD1};
    line-height: 2.4rem;
    transition: all 0.2s;

    &[data-active="true"] {
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

const PlayerHandler = styled.div`
  position: fixed;
  bottom: 0;
  margin: 0 -16px;
  padding: 12px 16px 20px;
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${({ theme }) => theme.background};

  .yt-player-time {
    flex: 0.5;
    text-align: center;
    ${FONTS.MD1}
  }
`;

const COMMENTS = [
  { author: "홍길동", time: "03:20", contents: "여기임" },
  { author: "홍길동", time: "04:20", contents: "여기임" },
  { author: "홍길동", time: "07:11", contents: "여기임" },
  { author: "홍길동", time: "09:55", contents: "여기임" },
  { author: "홍길동", time: "10:01", contents: "여기임" },
  { author: "홍길동", time: "12:12", contents: "여기임" },
  { author: "홍길동", time: "14:33", contents: "여기임" },
  { author: "홍길동", time: "15:41", contents: "여기임" },
  { author: "홍길동", time: "19:11", contents: "여기임" },
  { author: "홍길동", time: "20:08", contents: "내용입니다. 오른쪽에서 왼쪽으로 이동. 실수를 줄여야 합니다." },
  { author: "홍길동", time: "21:48", contents: "여기임" },
  { author: "홍길동", time: "24:34", contents: "여기임" },
];

export default dynamic(() => Promise.resolve(VideoArticle), { ssr: false });
