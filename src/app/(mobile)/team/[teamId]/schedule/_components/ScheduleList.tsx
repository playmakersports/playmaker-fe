import React from "react";
import useModal from "@/hook/useModal";

import {
  baseContainer,
  flexAlignCenter,
  flexColumnGap10,
  flexColumnGap12,
  flexColumnGap20,
  flexColumnGap30,
  flexColumnGap4,
  flexRowGap4,
  flexRowGap8,
  flexSpaceBetween,
} from "@/styles/container.css";
import clsx from "clsx";
import { fonts } from "@/styles/fonts.css";
import { formatDate } from "date-fns";
import { scheduleListDayTitle, scheduleListItemProfile, scheduleListItemWrapper } from "./calendar.css";
import Badge from "@/components/common/Badge";

import CalendarIcon from "@/assets/icon/common/outlined/Calendar.svg";
import LocationPinIcon from "@/assets/icon/common/outlined/LocationPin.svg";
import ClockIcon from "@/assets/icon/common/outlined/Clock.svg";

type ScheduleItem = {
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
    schedule: ScheduleItem[];
  }>;
};
function ScheduleList(props: Props) {
  const { data } = props;
  const { ModalComponents, showModal } = useModal();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const categoryColor: Record<string, any> = {
    훈련: "gray",
    교류전: "primary",
    팀: "info",
    대회: "purple",
  };

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
                <li
                  key={schedule.scheduleId}
                  className={clsx(scheduleListItemWrapper, flexColumnGap12)}
                  data-type={schedule.category}
                  onClick={() => showModal()}
                >
                  <div className={clsx(flexRowGap8, flexAlignCenter)}>
                    <Badge type={categoryColor[schedule.category]} fillType="light" size="medium">
                      {schedule.category}
                    </Badge>
                    <span className={fonts.body4.semibold} style={{ color: "var(--gray700)" }}>
                      {schedule.title}
                    </span>
                  </div>
                  <div className={clsx(flexColumnGap4, fonts.caption1.regular)} style={{ color: "var(--gray500)" }}>
                    <span className={flexRowGap4}>
                      <LocationPinIcon width={18} height={18} fill="var(--gray500)" />
                      {schedule.place}
                    </span>
                    <span className={flexRowGap4}>
                      <ClockIcon width={18} height={18} fill="var(--gray500)" />
                      {schedule.time}
                    </span>
                  </div>
                  <div className={flexAlignCenter}>
                    {schedule.people.slice(0, 5).map((person, scheduleIndex) => (
                      <div
                        key={person.userId}
                        className={scheduleListItemProfile}
                        style={{
                          backgroundImage: `url(${person.img})`,
                          zIndex: schedule.people.length - scheduleIndex,
                        }}
                      >
                        <span className="blind">{person.username}</span>
                      </div>
                    ))}
                    <p className={fonts.body4.medium} style={{ color: "var(--gray500)", marginLeft: "8px" }}>
                      {schedule.people.length > 5 ? `+${schedule.people.length - 5}` : ""}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <ModalComponents draggable="all">
        <div className={flexColumnGap20}>
          <div className={flexColumnGap12}>
            <div>
              <Badge size="medium" type="primary" fillType="light">
                교류전
              </Badge>
            </div>
            <div className={flexColumnGap4} style={{ gap: "8px", color: "var(--gray700)" }}>
              <div className={fonts.body2.semibold}>리그 챔피언 배구 경기관전</div>
              <div className={fonts.body4.regular}>
                부원들끼리 서초구 종합 운동장에 모여 리그 챔피언 배구 경기를 관전합니다. 어떻게 경기가 진행되는지 잘
                살펴봅시다!
              </div>
            </div>
          </div>

          <div className={flexColumnGap12}>
            <div className={clsx(flexRowGap8, fonts.body4.regular)} style={{ color: "var(--gray500)" }}>
              <CalendarIcon width={20} height={20} fill="var(--gray500)" /> 2025-05-07
            </div>
            <div className={clsx(flexRowGap8, fonts.body4.regular)} style={{ color: "var(--gray500)" }}>
              <LocationPinIcon width={20} height={20} fill="var(--gray500)" /> 서초 종합 운동장
            </div>
            <div className={clsx(flexRowGap8, fonts.body4.regular)} style={{ color: "var(--gray500)" }}>
              <ClockIcon width={20} height={20} fill="var(--gray500)" /> 오전 10:00
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "var(--gray200)",
            }}
          />
          <div className={flexColumnGap10}>
            <div className={flexSpaceBetween}>
              <p className={fonts.body4.medium} style={{ color: "var(--gray700)" }}>
                참석 여부
              </p>
              <div className="attendance">
                <span>
                  참여 <strong>18</strong>
                </span>
                <span>
                  불참 <strong>3</strong>
                </span>
              </div>
            </div>

            <div className="buttons">
              <label className="selected">
                <input type="checkbox" /> 참석
              </label>
              <label>
                <input type="checkbox" /> 불참석
              </label>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "var(--gray200)",
            }}
          />

          <div className={flexSpaceBetween}>
            <p className={fonts.body4.medium} style={{ color: "var(--gray700)" }}>
              댓글
            </p>
            <button
              type="button"
              className={fonts.body4.regular}
              style={{ color: "var(--gray700)", textDecoration: "underline" }}
            >
              펼쳐보기
            </button>
          </div>
          <div className="comments">
            <div className="comment">
              <div className="name">홍길동</div>
              <div className="meta">05-14 22:50</div>
              <div className="text">서초 종합 운동장 입구에서 만나나요? 서초역에서 만나서 같이 가실분?</div>
            </div>
            <div className="comment">
              <div className="name">김영희</div>
              <div className="meta">05-14 22:57</div>
              <div className="text">저 나중에 그 근처에서 같이 가니깐요~</div>
            </div>
          </div>
        </div>
      </ModalComponents>
    </>
  );
}

export default ScheduleList;
