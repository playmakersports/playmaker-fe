import React from "react";
import styled from "styled-components";

import NumberFlow, { NumberFlowGroup } from "@number-flow/react";

type Props = {
  currentTime: number;
  duration: number;
  playerState: number;
  playbackRate: number;
  handlePlaybackRate: (target: number) => void;
  handlePlayPause: () => void;
};

function PlayerController({
  currentTime,
  duration,
  playbackRate,
  handlePlaybackRate,
  playerState,
  handlePlayPause,
}: Props) {
  const handleTimeMS = (seconds: number) => {
    const hh = Math.floor(seconds / 3600);
    const mm = Math.floor((seconds % 3600) / 60) + hh * 60;
    const ss = seconds % 60;
    return { mm, ss };
  };

  const { mm: curMM, ss: curSS } = handleTimeMS(currentTime);
  const { mm: durMM, ss: durSS } = handleTimeMS(duration);

  return (
    <Container>
      <p>
        <NumberFlowGroup>
          <NumberFlow trend={0} value={curMM} format={{ minimumIntegerDigits: 2, maximumFractionDigits: 3 }} />
          <NumberFlow
            prefix=":"
            trend={1}
            value={curSS}
            digits={{ 1: { max: 5 } }}
            format={{ minimumIntegerDigits: 2 }}
            willChange={true}
          />
        </NumberFlowGroup>
        /
        <NumberFlowGroup>
          <NumberFlow trend={0} value={durMM} format={{ minimumIntegerDigits: 2, maximumFractionDigits: 3 }} />
          <NumberFlow
            prefix=":"
            trend={1}
            value={durSS}
            digits={{ 1: { max: 5 } }}
            format={{ minimumIntegerDigits: 2 }}
          />
        </NumberFlowGroup>
      </p>
      <button
        type="button"
        className="playback-rate"
        onClick={() => {
          if (playbackRate === 1) {
            handlePlaybackRate(2);
          } else {
            handlePlaybackRate(1);
          }
        }}
      >
        x{playbackRate}
      </button>
      <button
        type="button"
        className={`play-pause-btn ${playerState === 1 && "playing"}`}
        onClick={handlePlayPause}
        disabled={playerState === 3}
      >
        {playerState === 1 ? "일시정지" : playerState === 3 ? "버퍼링" : "재생"}
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0 2px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  p {
    user-select: none;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: -0.045rem;
    font-variant-numeric: tabular-nums;
  }
  button {
    padding: 6px 12px;
    font-size: 1.6rem;
    border-radius: 10px;
  }
  button.play-pause-btn {
    width: 82px;
    color: var(--white);
    background-color: var(--main);

    &:disabled {
      color: var(--gray500);
      background-color: var(--gray200);
    }
    &.playing {
      background-color: var(--warning500);
    }
  }

  button.playback-rate {
    flex: 1;
    margin: 0 8px;
    background-color: var(--gray200);
  }
`;

export default PlayerController;
