import React from "react";
import clsx from "clsx";

import ProgressCircle from "../statistics/_components/ProgressCircle";
import { fonts } from "@/styles/fonts.css";
import { ProgressCircleTrophyWrapper } from "../statistics/_components/statistics.css";
import {
  baseCardContainer,
  flexAlignCenter,
  flexColumnGap12,
  flexColumnGap4,
  flexRowGap8,
  flexSpaceEvenly,
} from "@/styles/container.css";
import { teamMainDataCardTitle, teamMainDataSummary } from "./team.main.css";

import TrophyIcon from "@/assets/icon/sports/filled/Trophy.svg";
import ThumbUpIcon from "@/assets/icon/common/filled/ThumbUp.svg";
import ThumbDownIcon from "@/assets/icon/common/filled/ThumbDown.svg";
import CheerIcon from "@/assets/icon/common/filled/Cheer.svg";

function TeamMainData() {
  return (
    <>
      <div className={clsx(baseCardContainer, flexColumnGap12)}>
        <div className={teamMainDataCardTitle}>
          <span className={fonts.body3.semibold}>교류전 전적</span>
          <span className={fonts.caption1.regular} style={{ color: "var(--gray400)" }}>
            최근 3개월 내 진행된 팀 교류전 성적 승률
          </span>
        </div>
        <div className={flexRowGap8}>
          <ProgressCircle
            size={124}
            percentage={77}
            rate={1}
            stroke={{
              track: 20,
              progress: 12,
            }}
            color={{
              track: "var(--primary50)",
            }}
            direction="right-to-left"
          >
            <div
              className={clsx(fonts.body1.semibold, flexColumnGap4, flexAlignCenter)}
              style={{ color: "var(--gray900)", gap: 0 }}
            >
              <div className={ProgressCircleTrophyWrapper} style={{ margin: 0, backgroundColor: "var(--primary50)" }}>
                <TrophyIcon width={24} height={24} fill="var(--primary500)" />
              </div>
              87%
            </div>
          </ProgressCircle>
          <div className={flexSpaceEvenly} style={{ flex: 1, padding: "0 4px" }}>
            <div className={teamMainDataSummary}>
              <ThumbUpIcon fill="var(--primary500)" />
              <p className={fonts.caption1.medium} style={{ color: "var(--gray400)" }}>
                승리
              </p>
              <p className={fonts.body3.semibold}>59</p>
            </div>
            <div className={teamMainDataSummary}>
              <ThumbDownIcon fill="var(--red500)" />
              <p className={fonts.caption1.medium} style={{ color: "var(--gray400)" }}>
                패배
              </p>
              <p className={fonts.body3.semibold}>59</p>
            </div>
            <div className={teamMainDataSummary}>
              <CheerIcon fill="var(--gray400)" />
              <p className={fonts.caption1.medium} style={{ color: "var(--gray400)" }}>
                무승부
              </p>
              <p className={fonts.body3.semibold}>59</p>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(baseCardContainer, flexColumnGap12)}>
        <div className={teamMainDataCardTitle}>
          <span className={fonts.body3.semibold}>대회 전적</span>
          <span className={fonts.caption1.regular} style={{ color: "var(--gray400)" }}>
            최근 3개월 내 진행된 팀 대회 성적 승률
          </span>
        </div>
        <div className={flexRowGap8}>
          <ProgressCircle
            size={124}
            percentage={77}
            rate={1}
            stroke={{
              track: 20,
              progress: 12,
            }}
            color={{
              track: "var(--primary50)",
            }}
            direction="right-to-left"
          >
            <div
              className={clsx(fonts.body1.semibold, flexColumnGap4, flexAlignCenter)}
              style={{ color: "var(--gray900)", gap: 0 }}
            >
              <div className={ProgressCircleTrophyWrapper} style={{ margin: 0, backgroundColor: "var(--primary50)" }}>
                <TrophyIcon width={24} height={24} fill="var(--primary500)" />
              </div>
              87%
            </div>
          </ProgressCircle>
          <div className={flexSpaceEvenly} style={{ flex: 1, padding: "0 4px" }}>
            <div className={teamMainDataSummary}>
              <ThumbUpIcon fill="var(--primary500)" />
              <p className={fonts.caption1.medium} style={{ color: "var(--gray400)" }}>
                승리
              </p>
              <p className={fonts.body3.semibold}>59</p>
            </div>
            <div className={teamMainDataSummary}>
              <ThumbDownIcon fill="var(--red500)" />
              <p className={fonts.caption1.medium} style={{ color: "var(--gray400)" }}>
                패배
              </p>
              <p className={fonts.body3.semibold}>59</p>
            </div>
            <div className={teamMainDataSummary}>
              <CheerIcon fill="var(--gray400)" />
              <p className={fonts.caption1.medium} style={{ color: "var(--gray400)" }}>
                무승부
              </p>
              <p className={fonts.body3.semibold}>59</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamMainData;
