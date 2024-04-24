import React, { useState } from "react";
import { YouTubeProps } from "react-youtube";

type Props = { width?: number; height?: number; controller?: boolean };

function useYoutube(props: Props) {
  const { width, height, controller = true } = props;
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [playerState, setPlayerState] = useState(-1);

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

  function handlePlayer(event: any) {
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

  return { handlePlayer, currentTime, playerState, opts };
}

export default useYoutube;
