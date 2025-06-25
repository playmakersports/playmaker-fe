"use client";
import React from "react";
import { useHeader } from "@/hook/useHeader";
import { baseContainer, flexColumnGap24 } from "@/styles/container.css";
import { TeamRecordChartArea } from "../_components/statistics.records.css";
import styled from "styled-components";
import { FONTS } from "@/styles/common";

function TeamRecords() {
  useHeader({
    title: "전적 분석",
    options: { titleAlign: "center" },
    subIcons: [{ svgIcon: <></>, description: "", onClick: "" }],
  });

  return (
    <div className={flexColumnGap24}>
      <div className={TeamRecordChartArea}></div>
      <div className={baseContainer}>
        <Records>
          <thead>
            <tr>
              <th className="match-name">경기명</th>
              <th>득점</th>
              <th>실점</th>
              <th>결과</th>
            </tr>
          </thead>
          <tbody>
            {MOCK.map((item) => (
              <tr key={item.id}>
                <td className="match-name">{item.matchName}</td>
                <td className="goal">
                  <span>{item.goal}</span>
                </td>
                <td className="miss">
                  <span>{item.miss}</span>
                </td>
                <td
                  className="result"
                  style={{ color: item.goal > item.miss ? "var(--primary500)" : "var(--gray300)" }}
                >
                  {item.goal > item.miss ? "승" : "패"}
                </td>
              </tr>
            ))}
          </tbody>
        </Records>
      </div>
    </div>
  );
}

const MOCK = [
  {
    id: 1,
    matchName: "2023-09-01",
    goal: 35,
    miss: 13,
  },
  {
    id: 2,
    matchName: "2023-09-01",
    goal: 35,
    miss: 63,
  },
  {
    id: 52,
    matchName: "2023-09-01",
    goal: 35,
    miss: 63,
  },
  {
    id: 32,
    matchName: "2023-09-01",
    goal: 85,
    miss: 10,
  },
];
const Records = styled.table`
  width: 100%;
  & > thead {
    ${FONTS.caption1("medium")};
    text-align: left;
    color: var(--gray500);
    & > tr {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  & > tbody tr {
    ${FONTS.body4("regular")};
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 0;
    color: var(--gray700);
    border-bottom: 1px solid var(--gray100);
    &:last-of-type {
      border-bottom: none;
    }
  }
  th,
  td {
    vertical-align: middle;
    width: 32px;
  }
  th.match-name,
  td.match-name {
    flex: 1;
  }
  td.goal > span,
  td.miss > span {
    ${FONTS.body4("regular")};
    display: inline-block;
    width: 100%;
    border-radius: 6px;
    padding: 4px 0;
    color: var(--gray600);
    background-color: var(--gray50);
    border: 1px solid var(--gray100);
    text-align: center;
  }
  td.goal > span {
    background-color: var(--gray100);
  }
  td.result {
    ${FONTS.body4("semibold")};
    text-align: center;
  }
`;

export default TeamRecords;
