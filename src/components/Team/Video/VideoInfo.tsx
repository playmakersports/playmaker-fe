import React, { useState } from "react";
import styled from "@emotion/styled";
import { FONTS, SCROLL_HIDE, SCROLL_MASKED_GRADIENT } from "@/styles/common";
import { scrollMaskedHandler, scrollMaskedHandlerRef } from "@/util/display";
import ProfileTag from "../ProfileTag";

type Props = {
  subTitle: string;
  title: string;
  description: string;
  createdAt: string;
  players: Array<{ playerId: string; playerName: string }>;
};

function VideoInfo(props: Props) {
  const [selectedProfile, setSelectedProfile] = useState<{
    show: boolean;
    playerId: string;
    x?: number;
    y?: number;
  }>({ show: false, playerId: "", x: 0, y: 0 });

  const onClickProfile = (playerId: string, event: React.MouseEvent<HTMLLIElement>) => {
    const currentTarget = event.currentTarget;
    const rect = currentTarget.getBoundingClientRect();
    const x = rect.left + window.scrollX;
    const y = rect.top + window.scrollY + currentTarget.clientHeight;

    setSelectedProfile({
      show: true,
      playerId,
      x,
      y,
    });
  };

  return (
    <Container>
      <h3 className="video-match">{props.subTitle}</h3>
      <h2 className="video-title">{props.title}</h2>
      <p className="video-description">{props.description}</p>
      <p className="video-setting">
        <span>{props.createdAt}</span>
        <ul className="video-share">
          <li>bookmark</li>
          <li>share</li>
        </ul>
      </p>
      <div className="match-players-wrapper">
        <ul className="match-players" ref={scrollMaskedHandlerRef} onScroll={scrollMaskedHandler}>
          {props.players.map((player, index) => (
            <li key={`${player.playerId}${index}`} onClick={(event) => onClickProfile(player.playerId, event)}>
              {player.playerName}
            </li>
          ))}
          <ProfileTag
            showInfo={selectedProfile}
            handleClose={() => setSelectedProfile({ show: false, playerId: "" })}
          />
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  padding: 0 20px 16px;
  .video-match {
    ${FONTS.MD1};
    color: rgba(var(--gray-h2));
  }
  .video-title {
    ${FONTS.HEAD1};
    font-size: 1.8rem;
  }
  .video-description {
    margin-top: 8px;
    color: rgba(var(--gray-h2), 0.9);
    ${FONTS.MD2};
  }
  .video-setting {
    margin: 16px 0 6px;
    padding-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(var(--gray-h5));
    color: rgba(var(--gray-h2), 0.9);
    ${FONTS.MD2};

    .video-share {
      display: flex;
      gap: 12px;
    }
  }

  .match-players-wrapper {
    ${SCROLL_MASKED_GRADIENT("var(--card-rgb)")};
  }
  .match-players {
    display: flex;
    gap: 4px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    ${SCROLL_HIDE};

    li {
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 100%;
      overflow: hidden;
      border: 1px solid rgba(var(--gray-h5));
      font-size: 1.4rem;
      font-weight: 500;
      letter-spacing: -0.5px;
    }
  }
`;

export default VideoInfo;