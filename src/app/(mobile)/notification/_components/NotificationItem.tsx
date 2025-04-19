import React, { ReactNode } from "react";
import clsx from "clsx";

import {
  notificationItemContainer,
  notificationItemContents,
  notificationItemContentsHeader,
  notificationItemIcon,
} from "./notification.css";
import { fonts } from "@/styles/fonts.css";

import CalendarIcon from "@/assets/icon/color/Calendar.svg";
import VoteIcon from "@/assets/icon/color/Vote.svg";
import AlertIcon from "@/assets/icon/color/Alert.svg";
import UngroupIcon from "@/assets/icon/color/Ungroup.svg";
import DenyIcon from "@/assets/icon/color/Deny.svg";

type Props = {
  notiId: string | number;
  teamId: string;
  articleId: string;
  teamName: string;
  category: string;
  contents: string;
  date: string;
  isRead: boolean;
};
function NotificationItem(props: Props) {
  const CATEGORY_ICON: Record<string, ReactNode> = {
    공지사항: <AlertIcon />,
    투표: <VoteIcon />,
    탈퇴: <DenyIcon />,
    추방: <DenyIcon />,
    해체: <UngroupIcon />,
    일정: <CalendarIcon />,
  };
  return (
    <div className={clsx(notificationItemContainer, { unread: !props.isRead })}>
      <div className={notificationItemIcon}>
        {CATEGORY_ICON[props.category] ? CATEGORY_ICON[props.category] : <AlertIcon />}
      </div>
      <div className={notificationItemContents}>
        <p className={notificationItemContentsHeader}>
          <span className={fonts.body4.medium} style={{ color: "var(--gray500)" }}>
            {props.category}
          </span>
          <span className={fonts.caption1.regular} style={{ color: "var(--gray400)" }}>
            1일 전
          </span>
        </p>
        <div>
          <p
            className={fonts.body4.regular}
            style={{
              marginBottom: "2px",
              color: "var(--gray500)",
            }}
          >
            {props.teamName}
          </p>
          <p className={fonts.body3.medium} style={{ color: "var(--gray700)" }}>
            {props.contents}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotificationItem;
