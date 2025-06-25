import React from "react";
import clsx from "clsx";
import { fonts } from "@/styles/fonts.css";
import { colors, semantic } from "@/styles/color.css";
import { matchFlowScoredQuarter, matchFlowWinRate } from "./match.css";
import {
  baseCardContainerNoTrans,
  flexCenterJA,
  flexColumnGap12,
  flexColumnGap20,
  flexColumnGap4,
  flexRowGap12,
  flexRowGap4,
} from "@/styles/container.css";
import Badge from "@/components/common/Badge";

import ChartIcon from "@/assets/icon/common/Chart.svg";
import DoubleUpArrow from "@/assets/icon/arrow/DoubleUpArrow.svg";
import UpArrowToggle from "./UpArrow.svg";

function MatchFlow() {
  const flowData = [
    { type: "up", name: "최다 득점 쿼터", value: 2, quarter: "2Q" },
    { type: "up", name: "최다 연속 득점", value: 4, quarter: "4Q" },
    { type: "down", name: "최다 실점 쿼터", value: 3, quarter: "3Q" },
    { type: "down", name: "최다 연속 실점", value: 1, quarter: "1Q" },
  ];
  return (
    <div className={clsx(baseCardContainerNoTrans, flexColumnGap20)}>
      <div className={flexColumnGap4}>
        <div className={clsx(fonts.body2.semibold, colors.gray900, flexRowGap4)}>
          <ChartIcon width={28} height={28} />
          경기 흐름
        </div>
        <p className={semantic.description}>진행된 경기의 세부 스코어 데이터를 알 수 있어요.</p>
      </div>
      <div className={matchFlowWinRate}>
        <div className={flexRowGap4}>
          <DoubleUpArrow width={20} height={20} />
          <div className={fonts.body4.medium}>경기 우위 비율</div>
        </div>
        <p className={fonts.body4.semibold}>15%</p>
      </div>
      <div className={matchFlowScoredQuarter}>
        {flowData.map((item) => (
          <div
            className={flexColumnGap12}
            key={item.name}
            style={{
              padding: "16px 0",
              backgroundColor: "var(--background-light)",
            }}
          >
            <p className={clsx(flexRowGap4, flexCenterJA)}>
              <span
                className={item.type === "up" ? colors.primary500 : colors.red500}
                style={{ transform: item.type === "down" ? "rotate(180deg)" : "none" }}
              >
                <UpArrowToggle width={16} height={16} />
              </span>
              <span className={fonts.caption1.regular}>{item.name}</span>
            </p>
            <p className={clsx(flexRowGap12, flexCenterJA)}>
              <span className={clsx([item.type === "up" ? colors.primary500 : colors.red500, fonts.body4.medium])}>
                {item.value}점
              </span>
              <Badge type={item.type === "up" ? "primary" : "red"} size="medium" fillType="light">
                {item.quarter}
              </Badge>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchFlow;
