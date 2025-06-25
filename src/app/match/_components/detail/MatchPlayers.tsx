import React from "react";
import clsx from "clsx";
import { colors, semantic } from "@/styles/color.css";
import {
  baseCardContainerNoTrans,
  flexColumnGap20,
  flexColumnGap4,
  flexColumnGap8,
  flexRowGap4,
  flexRowGap8,
} from "@/styles/container.css";
import { fonts } from "@/styles/fonts.css";

import GroupIcon from "@/assets/icon/common/filled/Group.svg";
import { matchPlayerDataMVPDetail, matchPlayerMvpInfo, matchPlayerMvpPhoto, matchPlayersDataCard } from "./match.css";

function MatchPlayers() {
  const mvpPhoto =
    "https://thumb.zumst.com/530x0/https://static.news.zumst.com/images/2/2023/03/30/0d96b666658043f7994f61ce280fb06e.jpg";

  return (
    <div className={clsx(baseCardContainerNoTrans, flexColumnGap20)}>
      <div className={flexColumnGap4}>
        <div className={clsx(fonts.body2.semibold, colors.gray900, flexRowGap4)}>
          <GroupIcon width={28} height={28} />
          선수 데이터
        </div>
        <p className={semantic.description}>경기에서 맹활약한 플레이어들을 확인해 보세요.</p>
      </div>

      <div className={matchPlayersDataCard}>
        <h5 className={fonts.body4.semibold}>MVP</h5>
        <div className={matchPlayerMvpPhoto} style={{ backgroundImage: `url(${mvpPhoto})` }}>
          <p className={matchPlayerMvpInfo}>NO.19 홍길동</p>
        </div>
        <div className={flexColumnGap8}>
          <div className={flexRowGap8}>
            <div className={matchPlayerDataMVPDetail}>
              <span className={clsx(fonts.caption1.medium, colors.gray500)}>득점</span>
              <span className={clsx(fonts.caption1.semibold, colors.primary500)}>5점</span>
            </div>
            <div className={matchPlayerDataMVPDetail}>
              <span className={clsx(fonts.caption1.medium, colors.gray500)}>어시스트</span>
              <span className={clsx(fonts.caption1.semibold, colors.primary500)}>13회</span>
            </div>
          </div>
          <div className={matchPlayerDataMVPDetail}>
            <span className={clsx(fonts.caption1.medium, colors.gray500)}>리바운드</span>
            <span className={clsx(fonts.caption1.semibold, colors.primary500)}>13회</span>
          </div>
        </div>
      </div>

      <div className={matchPlayersDataCard}>
        <h5 className={fonts.body4.semibold}>쿼터별 주요 선수</h5>
        <div style={{ backgroundImage: `url(${mvpPhoto})` }}></div>
      </div>

      <div className={flexColumnGap8}>
        <div className={matchPlayersDataCard}>
          <h5 className={fonts.body4.semibold}>득점왕</h5>
          <div className={matchPlayerDataMVPDetail}>
            <span className={clsx(fonts.caption1.medium, colors.gray500)}>득점</span>
            <span className={clsx(fonts.caption1.semibold, colors.primary500)}>13점</span>
          </div>
        </div>
        <div className={flexRowGap8}>
          <div className={matchPlayersDataCard}>
            <h5 className={fonts.body4.semibold}>어시스트왕</h5>
            <div className={matchPlayerDataMVPDetail}>
              <span className={clsx(fonts.caption1.medium, colors.gray500)}>어시스트</span>
              <span className={clsx(fonts.caption1.semibold, colors.primary500)}>13회</span>
            </div>
          </div>
          <div className={matchPlayersDataCard}>
            <h5 className={fonts.body4.semibold}>리바운드왕</h5>
            <div className={matchPlayerDataMVPDetail}>
              <span className={clsx(fonts.caption1.medium, colors.gray500)}>리바운드</span>
              <span className={clsx(fonts.caption1.semibold, colors.primary500)}>13회</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchPlayers;
