import React, { useState } from "react";
import styled from "styled-components";

import ProfileTag from "../ProfileTag";
import { FONTS, SCROLL_HIDE, SCROLL_MASKED_GRADIENT } from "@/styles/common";
import { scrollMaskedHandler, scrollMaskedHandlerRef } from "@/util/display";

import BookmarkIcon from "@/assets/icon/global/Bookmark.svg";
import ShareIcon from "@/assets/icon/global/Share.svg";

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

    // setSelectedProfile({
    //   show: true,
    //   playerId,
    //   x,
    //   y,
    // });
  };

  return (
    <Container>
      <h3 className="video-match">{props.subTitle}</h3>
      <h2 className="video-title">{props.title}</h2>
      <p className="video-description">{props.description}</p>
      <div className="video-setting">
        <span>{props.createdAt}</span>
        <ul className="video-share">
          <li>
            <BookmarkIcon />
          </li>
          <li>
            <ShareIcon />
          </li>
        </ul>
      </div>
      <div className="match-players-wrapper">
        <ul
          className="match-players"
          ref={(prev) => scrollMaskedHandlerRef(prev, "horizontal")}
          onScroll={(prev) => scrollMaskedHandler(prev, "horizontal")}
        >
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
  padding: 0 20px 16px;

  .video-match {
    margin-bottom: 2px;
    ${FONTS.MD2};
    color: var(--gray600);
  }
  .video-title {
    ${FONTS.HEAD1};
    font-size: 1.8rem;
  }
  .video-description {
    margin: 12px 0 8px;
    color: var(--gray800);
    ${FONTS.MD2};
  }
  .video-setting {
    margin: 16px 0 6px;
    padding-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray300);
    color: var(--gray700);
    ${FONTS.MD2};

    .video-share {
      display: flex;
      gap: 12px;
      svg {
        width: 16px;
        height: 16px;
        fill: var(--gray700);
      }
    }
  }

  .match-players-wrapper {
    ${SCROLL_MASKED_GRADIENT("var(--background-light-rgb)")};
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
      border: 1px solid var(--gray300);
      font-size: 1.4rem;
      font-weight: 400;
      letter-spacing: -0.5px;
    }
  }
`;

export default VideoInfo;
