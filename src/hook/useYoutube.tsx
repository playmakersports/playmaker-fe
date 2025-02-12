import { useState } from "react";
import { YouTubeEvent, YouTubeProps } from "react-youtube";

type Props = { width?: number; height?: number; controller?: boolean };

function useYoutube(youtubeRef: any, props?: Props) {
  const { width, height, controller = true } = props || {};
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState(0);
  const [playerState, setPlayerState] = useState(-1);
  const [playbackRate, setPlaybackRate] = useState(1);

  const [updateTimeInterval, setUpdateTimeInterval] = useState<any>();
  const playerSize = { width, height };
  const defaultOpts: YouTubeProps["opts"] = {
    playerVars: {
      start: 0,
      controls: controller ? 1 : 0,
      modestbranding: 1,
      iv_load_policy: 3,
      rel: 0, // 관련 동영상 표시 안 함
    },
  };
  const opts: YouTubeProps["opts"] = playerSize
    ? {
        ...playerSize,
        ...defaultOpts,
      }
    : defaultOpts;

  function onPlayerReady(event: YouTubeEvent) {
    setPlayerState(event.data);
    youtubeRef.current?.internalPlayer.getDuration().then((duration: number) => {
      setDuration(duration);
    });
  }
  function handlePlayer(event: YouTubeEvent) {
    setPlayerState(event.data);
    if (event.data !== 1) {
      clearInterval(updateTimeInterval);
    } else {
      const interval = setInterval(() => {
        setCurrentTime(event.target.getCurrentTime().toFixed(0));
      }, 1000);
      setUpdateTimeInterval(interval);
    }
  }
  function onPlaybackRateChange(event: YouTubeEvent) {
    setPlaybackRate(event.target.getPlaybackRate());
  }
  const handlePlaybackRate = (targetRate: number) => {
    youtubeRef.current?.internalPlayer.setPlaybackRate(targetRate).then(() => {
      setPlaybackRate(targetRate);
    });
  };

  const handlePlayPause = () => {
    if (playerState === 1) {
      youtubeRef.current?.internalPlayer.pauseVideo();
    } else {
      youtubeRef.current?.internalPlayer.playVideo();
    }
  };

  const playerConnect = {
    onReady: onPlayerReady,
    onPlay: handlePlayer,
    onStateChange: handlePlayer,
    onPlaybackRateChange: onPlaybackRateChange,
  };

  return {
    playerConnect,
    currentTime,
    duration,
    playerState,
    handlePlayPause,
    playbackRate,
    handlePlaybackRate,
    opts,
  };
}

export default useYoutube;
