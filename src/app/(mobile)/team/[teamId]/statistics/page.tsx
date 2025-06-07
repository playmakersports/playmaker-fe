"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
import NumberFlow from "@number-flow/react";
import { useParams } from "next/navigation";
import { useHeader } from "@/hook/useHeader";
import { useAtomValue } from "jotai";
import Link from "next/link";

import { fonts } from "@/styles/fonts.css";
import { atomPageTitle } from "@/atom/common";
import {
  baseContainer,
  flexAlignCenter,
  flexColumnGap12,
  flexColumnGap16,
  flexColumnGap20,
  flexColumnGap24,
  flexColumnGap40,
  flexRowGap10,
} from "@/styles/container.css";
import StatisticsHeader from "./_components/StatisticsHeader";
import {
  ProgressCircleTrophyWrapper,
  TeamDataRecordContainer,
  TeamDataRecordItem,
  TeamStatisticsDetailContainer,
  TeamStatisticsGroupCardItem,
  TeamStatisticsGroupHeadIconWrapper,
  TeamStatisticsGroupTitle,
} from "./_components/statistics.css";
import ProgressCircle from "./_components/ProgressCircle";

import TrophyIcon from "@/assets/icon/sports/filled/Trophy.svg";
import PlusIcon from "@/assets/icon/common/Plus.svg";
import MinusIcon from "@/assets/icon/common/Minus.svg";
import WarningIcon from "@/assets/icon/circle/WarningOutlined.svg";
import ClockIcon from "@/assets/icon/common/outlined/Clock.svg";
import ThumbUpIcon from "@/assets/icon/common/filled/ThumbUp.svg";
import ThumbDownIcon from "@/assets/icon/common/filled/ThumbDown.svg";
import CheerIcon from "@/assets/icon/common/filled/Cheer.svg";
import RightArrowIcon from "@/assets/icon/arrow/RightArrow.svg";

function Statistics() {
  const teamId = useParams()["teamId"];
  const title = useAtomValue(atomPageTitle);
  useHeader({
    title: "팀 교류전",
    customArea: <StatisticsHeader />,
    transparent: true,
  });

  const [value, setValue] = useState(0);
  const data = {
    avg: {
      score: 60,
      concede: 17,
      foul: 7,
      timeout: 3,
    },
  };
  useEffect(() => {
    if (title === "팀 교류전") setValue(87);
    else if (title === "팀 대회") setValue(51);
  }, [title]);

  return (
    <Container className={clsx(baseContainer, flexColumnGap20)}>
      <div className={flexColumnGap24}>
        <div className="progress-chart">
          <div className="circle-wrapper">
            <ProgressCircle size={186} percentage={value} rate={0.75} direction="right-to-left">
              <div className={fonts.head5.semibold} style={{ color: "#404040" }}>
                <div className={ProgressCircleTrophyWrapper}>
                  <TrophyIcon width={24} height={24} fill="var(--primary500)" />
                </div>
                <NumberFlow value={value} suffix="%" />
              </div>
            </ProgressCircle>
          </div>
          <div className="circle-back" />
        </div>
        <div className={TeamDataRecordContainer}>
          <p className={TeamDataRecordItem}>
            <ThumbUpIcon width={20} height={20} fill="var(--primary500)" />
            <span>
              <span className="title">승리</span>
              <span>
                <NumberFlow value={value} suffix="회" />
              </span>
            </span>
          </p>
          <p className={TeamDataRecordItem}>
            <ThumbDownIcon width={20} height={20} fill="var(--red500)" />
            <span>
              <span className="title">패배</span>
              <span>
                <NumberFlow value={value} suffix="회" />
              </span>
            </span>
          </p>
          <p className={TeamDataRecordItem}>
            <CheerIcon width={20} height={20} fill="var(--gray400)" />
            <span>
              <span className="title">무승부</span>
              <span>
                <NumberFlow value={value} suffix="회" />
              </span>
            </span>
          </p>
        </div>
      </div>
      <div className={clsx(flexColumnGap40, TeamStatisticsDetailContainer)}>
        <div className={flexColumnGap16}>
          <h3 className={TeamStatisticsGroupTitle}>
            전적 분석
            <Link href={`/team/${teamId}/statistics/records`}>
              <RightArrowIcon width={24} height={24} fill="var(--gray700)" />
            </Link>
          </h3>
          <ul className={flexColumnGap12}>
            <li className={TeamStatisticsGroupCardItem}>
              <div className={clsx(flexRowGap10, flexAlignCenter)}>
                <span className={TeamStatisticsGroupHeadIconWrapper} style={{ backgroundColor: "var(--success50)" }}>
                  <PlusIcon width={24} height={24} fill="var(--success500)" />
                </span>
                <span className="item-title">평균 득점</span>
              </div>
              <span>
                <NumberFlow value={data.avg.score} suffix="점" />
              </span>
            </li>
            <li className={TeamStatisticsGroupCardItem}>
              <div className={clsx(flexRowGap10, flexAlignCenter)}>
                <span className={TeamStatisticsGroupHeadIconWrapper} style={{ backgroundColor: "var(--red50)" }}>
                  <MinusIcon width={24} height={24} fill="var(--red500)" />
                </span>
                <span className="item-title">평균 실점</span>
              </div>
              <span>
                <NumberFlow value={data.avg.concede} suffix="점" />
              </span>
            </li>
            <li className={TeamStatisticsGroupCardItem}>
              <div className={clsx(flexRowGap10, flexAlignCenter)}>
                <span className={TeamStatisticsGroupHeadIconWrapper} style={{ backgroundColor: "var(--warning50)" }}>
                  <WarningIcon width={24} height={24} fill="var(--warning500)" />
                </span>
                <span className="item-title">평균 파울</span>
              </div>
              <span>
                <NumberFlow value={data.avg.foul} suffix="회" />
              </span>
            </li>
            <li className={TeamStatisticsGroupCardItem}>
              <div className={clsx(flexRowGap10, flexAlignCenter)}>
                <span className={TeamStatisticsGroupHeadIconWrapper} style={{ backgroundColor: "var(--purple50)" }}>
                  <ClockIcon width={24} height={24} fill="var(--purple500)" />
                </span>
                <span className="item-title">평균 타임아웃</span>
              </div>
              <span>
                <NumberFlow value={data.avg.timeout} suffix="회" />
              </span>
            </li>
          </ul>
        </div>
        <div className={flexColumnGap16}>
          <h3 className={TeamStatisticsGroupTitle}>
            팀 리더보드
            <Link href={`/team/${teamId}/statistics/leaderboard`}>
              <RightArrowIcon width={24} height={24} fill="var(--gray700)" />
            </Link>
          </h3>
          <ul className={flexColumnGap12}>
            <li className={TeamStatisticsGroupCardItem}>
              <span className="item-title">득점</span>
              <span className={flexRowGap10}>
                <span>홍길동</span>
                <span>20점</span>
              </span>
            </li>
            <li className={TeamStatisticsGroupCardItem}>
              <span className="item-title">어시스트</span>
              <span className={flexRowGap10}>
                <span>홍길동</span>
                <span>20점</span>
              </span>
            </li>
            <li className={TeamStatisticsGroupCardItem}>
              <span className="item-title">공격 리바운드</span>
              <span className={flexRowGap10}>
                <span>홍길동</span>
                <span>20점</span>
              </span>
            </li>
            <li className={TeamStatisticsGroupCardItem}>
              <span className="item-title">수비 리바운드</span>
              <span className={flexRowGap10}>
                <span>홍길동</span>
                <span>20점</span>
              </span>
            </li>
            <li className={TeamStatisticsGroupCardItem}>
              <span className="item-title">PER</span>
              <span className={flexRowGap10}>
                <span>홍길동</span>
                <span>20점</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--gray100);
  background: linear-gradient(to bottom, var(--background-light) 0%, var(--gray100) 8%);

  div.progress-chart {
    position: relative;
    margin: 20px auto 0;
    width: 200px;
    height: 200px;
  }

  div.circle-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;
    background: radial-gradient(rgba(256, 256, 256, 0.6), rgba(256, 256, 256, 0.9));
    background-color: rgba(256, 256, 256, 0.7);
    border-radius: 50%;
    box-shadow: 0 0 80px -5px rgba(43, 206, 138, 0.8);
    border: 1px solid #fff;
    z-index: 1;
  }
  div.circle-back {
    position: absolute;
    width: 160px;
    height: 160px;
    background-color: var(--info200);
    border-radius: 50%;
    right: -26px;
    bottom: -12px;
    filter: blur(20px);
    opacity: 0.7;
    z-index: 0;
  }
`;

export default Statistics;
