import React from "react";
import clsx from "clsx";
import { formatDate } from "date-fns";

import { scheduleListDayTitle } from "./calendar.css";
import { baseContainer, flexColumnGap20, flexColumnGap30 } from "@/styles/container.css";
import ScheduleListArticle from "./ScheduleListArticle";

export type ScheduleItemType = {
  scheduleId: string;
  category: string;
  title: string;
  place: string;
  date: string;
  time: string;
  people: {
    userId: string;
    username: string;
    img: string;
  }[];
};
type Props = {
  data: Array<{
    date: string;
    schedule: ScheduleItemType[];
  }>;
};
function ScheduleList(props: Props) {
  const { data } = props;
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <>
      <section className={clsx(baseContainer, flexColumnGap30)}>
        {data.map((item, index) => (
          <div key={index} className={flexColumnGap20}>
            <p className={scheduleListDayTitle}>
              {formatDate(item.date, "d일")} {days[new Date(item.date).getDay()]}요일{" "}
            </p>
            <ul className={flexColumnGap20} style={{ gap: "28px" }}>
              {item.schedule.map((schedule) => (
                <ScheduleListArticle
                  key={schedule.scheduleId}
                  scheduleId={schedule.scheduleId}
                  category={schedule.category}
                  title={schedule.title}
                  place={schedule.place}
                  date={schedule.date}
                  time={schedule.time}
                  people={schedule.people}
                />
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}

export default ScheduleList;
