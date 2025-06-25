import React from "react";
import { useParams, useRouter } from "next/navigation";
import clsx from "clsx";

import { fonts } from "@/styles/fonts.css";
import { flexAlignCenter, flexColumnGap12, flexColumnGap4, flexRowGap4, flexRowGap8 } from "@/styles/container.css";
import { scheduleListItemProfile, scheduleListItemWrapper } from "./calendar.css";

import Badge from "@/components/common/Badge";
import { ScheduleItemType } from "./ScheduleList";

import LocationPinIcon from "@/assets/icon/common/outlined/LocationPin.svg";
import ClockIcon from "@/assets/icon/common/outlined/Clock.svg";

function ScheduleListArticle(props: ScheduleItemType) {
  const { scheduleId, category, title, place, date, time, people } = props;
  const router = useRouter();
  const teamId = useParams()["teamId"];
  const categoryColor: Record<string, any> = {
    훈련: "gray",
    교류전: "primary",
    팀: "info",
    대회: "purple",
  };

  return (
    <li
      key={scheduleId}
      className={clsx(scheduleListItemWrapper, flexColumnGap12)}
      data-type={category}
      onClick={() => {
        router.replace(`/team/${teamId}/schedule?feat=view|${scheduleId}`);
      }}
    >
      <div className={clsx(flexRowGap8, flexAlignCenter)}>
        <Badge type={categoryColor[category]} fillType="light" size="medium">
          {category}
        </Badge>
        <span className={fonts.body4.semibold} style={{ color: "var(--gray700)" }}>
          {title}
        </span>
      </div>
      <div className={clsx(flexColumnGap4, fonts.caption1.regular)} style={{ color: "var(--gray500)" }}>
        <span className={flexRowGap4}>
          <LocationPinIcon width={18} height={18} fill="var(--gray500)" />
          {place}
        </span>
        <span className={flexRowGap4}>
          <ClockIcon width={18} height={18} fill="var(--gray500)" />
          {time}
        </span>
      </div>
      <div className={flexAlignCenter}>
        {people.slice(0, 5).map((person, scheduleIndex) => (
          <div
            key={person.userId}
            className={scheduleListItemProfile}
            style={{
              backgroundImage: `url(${person.img})`,
              zIndex: people.length - scheduleIndex,
            }}
          >
            <span className="blind">{person.username}</span>
          </div>
        ))}
        <p className={fonts.body4.medium} style={{ color: "var(--gray500)", marginLeft: "8px" }}>
          {people.length > 5 ? `+${people.length - 5}` : ""}
        </p>
      </div>
    </li>
  );
}

export default ScheduleListArticle;
