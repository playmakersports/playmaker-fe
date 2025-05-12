"use client";
import React from "react";
import clsx from "clsx";
import { useHeader } from "@/hook/useHeader";
import { differenceInCalendarDays } from "date-fns";
import {
  baseContainerPaddingTop,
  flexColumnGap20,
  flexColumnGap24,
  flexColumnGap4,
  flexRowGap10,
} from "@/styles/container.css";
import { fonts } from "@/styles/fonts.css";
import { WhiteSectionDivider } from "@/components/common/Container";
import { settingsMyNotificationItem } from "../_components/userSetting.css";
import Badge from "@/components/common/Badge";

function ServiceNotice() {
  useHeader({
    title: "공지사항",
    options: { titleAlign: "center" },
    subIcons: [
      {
        svgIcon: <></>,
        onClick: "",
        description: "",
      },
    ],
  });

  const noticeList = [
    {
      articleId: 5123,
      title: "새로운 일정",
      date: "2025-05-12",
    },
    {
      articleId: 1323,
      title: "새로운 일정",
      date: "2025-05-10",
    },
    {
      articleId: 1123,
      title: "새로운 일정",
      date: "2025-04-22",
    },
    {
      articleId: 1003,
      title: "새로운 일정",
      date: "2025-01-09",
    },
  ];
  return (
    <div className={clsx(baseContainerPaddingTop, flexColumnGap24)}>
      <div className={flexColumnGap4}>
        <p className={fonts.body2.semibold} style={{ color: "var(--gray900)" }}>
          공지사항
        </p>
        <p className={fonts.body4.regular} style={{ color: "var(--gray700)" }}>
          플레이어메이커의 다양한 공지사항을 안내드려요.
        </p>
      </div>
      <WhiteSectionDivider $child />
      <div className={flexColumnGap20}>
        {noticeList.map((noti) => (
          <div key={noti.articleId} className={clsx(settingsMyNotificationItem, flexRowGap10)}>
            <div style={{ flex: 1 }} className={flexColumnGap4}>
              <p className={fonts.body4.semibold} style={{ color: "var(--gray700)" }}>
                {noti.title}{" "}
                {differenceInCalendarDays(new Date(), new Date(noti.date)) < 5 ? (
                  <Badge nSquare size="small" type="primary" fillType="light">
                    N
                  </Badge>
                ) : (
                  ""
                )}
              </p>
              <p className={fonts.caption1.regular} style={{ color: "var(--gray400)" }}>
                {noti.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceNotice;
