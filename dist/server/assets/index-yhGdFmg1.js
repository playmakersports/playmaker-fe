import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import clsx from "clsx";
import { u as useCalendar } from "./useCalendar-DZwp9ZF5.js";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { n as flexRowGap8, l as flexAlignCenter, k as flexRowGap4, d as flexColumnGap4, f as flexColumnGap12, a as flexColumnGap20, h as baseContainer, w as flexColumnGap30, m as flexSpaceBetween, x as baseDividedLine, c as flexColumnGap16 } from "./container.css-C2ezn6CH.js";
import { a as scheduleListItemProfile, b as scheduleListItemWrapper, c as scheduleListDayTitle, d as calendarViewTypeSwitch, e as calendarViewTypeSwitchInner, w as weekDayName, f as weekDayButton, g as weekDayButtonDisplayValue, h as weekDayButtonScheduledBullets, i as weekDayButtonScheduledBullet, j as weekLineWrapper, m as monthEventSummaryItems, k as monthEventSummary } from "./calendar.css-Bk7G7yYG.js";
import { formatDate, isSameDay, subMonths } from "date-fns";
import { ko } from "date-fns/locale";
import { useRouter, useParams } from "@tanstack/react-router";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { B as Badge } from "./Badge-CVtyNCaL.js";
import { L as LocationPinIcon } from "./LocationPin-DegDBbH0.js";
import { C as ClockIcon } from "./Clock-Bj0T6dbi.js";
import styled from "styled-components";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { D as DateSwiperSelect } from "./DateSwiperSelect-Bt0W0vbk.js";
import { T as TEXT_ACTIVE } from "./common-6ceLbjxn.js";
import { P as PlusFloat } from "./PlusFloat-CUJwxAcR.js";
import { S as SearchIcon } from "./Search-DrxoJQ2v.js";
import { c as Route } from "./router-mwjOH7mt.js";
import "jotai";
import "@vanilla-extract/css";
import "swiper/react";
/* empty css                */
import "./useModal--yzWVOVY.js";
import "./Button-cLlpCM0x.js";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "./BaseInput-Bx50CJaq.js";
import "./Wrapper-DpW65hF8.js";
import "./InputWrapper-CgYCSwII.js";
import "./container.css-DZr6lpKA.js";
import "./Close20-w_89MMCP.js";
import "./Plus-CBBY8JMW.js";
import "@microsoft/clarity";
function ScheduleListArticle(props) {
  const { scheduleId, category, title, place, date, time, people } = props;
  const router = useRouter();
  const teamId = useParams({ strict: false })["teamId"];
  const categoryColor = {
    훈련: "gray",
    교류전: "primary",
    팀: "info",
    대회: "purple"
  };
  return /* @__PURE__ */ jsxs(
    "li",
    {
      className: clsx(scheduleListItemWrapper, flexColumnGap12),
      "data-type": category,
      onClick: () => {
        router.navigate({ to: `/team/${teamId}/schedule?feat=view|${scheduleId}`, replace: true });
      },
      children: [
        /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap8, flexAlignCenter), children: [
          /* @__PURE__ */ jsx(Badge, { type: categoryColor[category], fillType: "light", size: "medium", children: category }),
          /* @__PURE__ */ jsx("span", { className: fonts.body4.semibold, style: { color: "var(--gray700)" }, children: title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: clsx(flexColumnGap4, fonts.caption1.regular), style: { color: "var(--gray500)" }, children: [
          /* @__PURE__ */ jsxs("span", { className: flexRowGap4, children: [
            /* @__PURE__ */ jsx(LocationPinIcon, { width: 18, height: 18, fill: "var(--gray500)" }),
            place
          ] }),
          /* @__PURE__ */ jsxs("span", { className: flexRowGap4, children: [
            /* @__PURE__ */ jsx(ClockIcon, { width: 18, height: 18, fill: "var(--gray500)" }),
            time
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: flexAlignCenter, children: [
          people.slice(0, 5).map((person, scheduleIndex) => /* @__PURE__ */ jsx(
            "div",
            {
              className: scheduleListItemProfile,
              style: {
                backgroundImage: `url(${person.img})`,
                zIndex: people.length - scheduleIndex
              },
              children: /* @__PURE__ */ jsx("span", { className: "blind", children: person.username })
            },
            person.userId
          )),
          /* @__PURE__ */ jsx("p", { className: fonts.body4.medium, style: { color: "var(--gray500)", marginLeft: "8px" }, children: people.length > 5 ? `+${people.length - 5}` : "" })
        ] })
      ]
    },
    scheduleId
  );
}
function ScheduleList(props) {
  const { data } = props;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: clsx(baseContainer, flexColumnGap30), children: data.map((item, index) => /* @__PURE__ */ jsxs("div", { className: flexColumnGap20, children: [
    /* @__PURE__ */ jsx("p", { className: scheduleListDayTitle, children: formatDate(item.date, "d일 EEEE", { locale: ko }) }),
    /* @__PURE__ */ jsx("ul", { className: flexColumnGap20, style: { gap: "28px" }, children: item.schedule.map((schedule) => /* @__PURE__ */ jsx(
      ScheduleListArticle,
      {
        scheduleId: schedule.scheduleId,
        category: schedule.category,
        title: schedule.title,
        place: schedule.place,
        date: schedule.date,
        time: schedule.time,
        people: schedule.people
      },
      schedule.scheduleId
    )) })
  ] }, index)) }) });
}
const DownToggleArrow = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20fill='currentColor'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_407_5754'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_407_5754)'%3e%3cpath%20d='M12.4242%2014.2295C12.1899%2014.4638%2011.81%2014.4638%2011.5757%2014.2295L8.62046%2011.2743C8.24248%2010.8963%208.51018%2010.25%209.04472%2010.25H14.9552C15.4897%2010.25%2015.7574%2010.8963%2015.3794%2011.2743L12.4242%2014.2295Z'%20/%3e%3c/g%3e%3c/svg%3e";
function CalendarView({ calendar, viewWeekly }) {
  const [showWeekly, setShowWeekly] = viewWeekly;
  const { dayList, weekCalendarList, currentDate, setCurrentDate } = calendar;
  const calendarRef = useRef(null);
  const handleMonthMove = (direction) => {
    const targetDate = subMonths(currentDate, direction === "PREV" ? 1 : -1);
    setCurrentDate(targetDate);
  };
  const [swipeDirection, setSwipeDirection] = useState("");
  const [touchStartX, setTouchStartX] = useState(0);
  const handleTouchStart = (e) => {
    const startTarget = e.changedTouches[0].pageX;
    setTouchStartX(startTarget);
  };
  const handleTouchEnd = (e) => {
    const targetX = e.changedTouches[0].pageX;
    if (Math.abs(touchStartX - targetX) > 40) {
      if (touchStartX > targetX) {
        handleMonthMove("NEXT");
      } else {
        handleMonthMove("PREV");
      }
    }
    setTouchStartX(0);
    setSwipeDirection("");
  };
  const handleTouchMove = (e) => {
    const targetX = e.changedTouches[0].pageX;
    if (Math.abs(touchStartX - targetX) > 40) {
      if (touchStartX > targetX) {
        setSwipeDirection("R");
      } else {
        setSwipeDirection("L");
      }
    } else {
      setSwipeDirection("");
    }
  };
  const handleSwitchViewType = () => {
    setShowWeekly((prev) => !prev);
  };
  return /* @__PURE__ */ jsxs(CalendarContainer, { children: [
    /* @__PURE__ */ jsxs(NowDate, { className: clsx(flexAlignCenter, flexSpaceBetween), children: [
      /* @__PURE__ */ jsx(
        DateSwiperSelect,
        {
          pickType: "EVERYDAY",
          defaultValue: new Date(currentDate),
          onChange: (event) => {
            const [y, m, d] = event.target.value.split("-").map(Number);
            console.log(event.target.value);
            setCurrentDate(new Date(y, m - 1, d));
          },
          children: (showModal) => /* @__PURE__ */ jsx(NumberFlowGroup, { children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: showModal, className: clsx(fonts.body2.semibold, "date-control-button"), children: [
            /* @__PURE__ */ jsx(
              NumberFlow,
              {
                value: currentDate.getFullYear(),
                suffix: "년",
                format: {
                  useGrouping: false,
                  trailingZeroDisplay: "stripIfInteger"
                },
                style: {
                  marginRight: "5px"
                }
              }
            ),
            /* @__PURE__ */ jsx(NumberFlow, { value: currentDate.getMonth() + 1, suffix: "월" }),
            /* @__PURE__ */ jsx(DownToggleArrow, { width: 24, height: 24, fill: "var(--gray900)" })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxs("button", { type: "button", className: calendarViewTypeSwitch, onClick: handleSwitchViewType, children: [
        /* @__PURE__ */ jsx("span", { className: calendarViewTypeSwitchInner, "data-active": !showWeekly, children: "월별" }),
        /* @__PURE__ */ jsx("span", { className: calendarViewTypeSwitchInner, "data-active": showWeekly, children: "주별" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Days, { onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd, children: [
      /* @__PURE__ */ jsx(DirectionL, { className: swipeDirection, children: "이전달" }),
      /* @__PURE__ */ jsx(DirectionR, { className: swipeDirection, children: "다음달" }),
      /* @__PURE__ */ jsx("div", { style: { display: "flex" }, children: dayList.map((value) => /* @__PURE__ */ jsx("span", { className: weekDayName, children: value }, value)) }),
      /* @__PURE__ */ jsx(WeekGroup, { className: swipeDirection, ref: calendarRef, children: weekCalendarList.map((week, weekNum) => {
        const isActiveWeek = week.some((day) => isSameDay(day.date, currentDate));
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx({ "active-week": isActiveWeek }, weekLineWrapper),
            style: { display: showWeekly && !isActiveWeek ? "none" : "flex" },
            children: week.map((day) => /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: weekDayButton,
                "data-active-month": !(day.nextMonth || day.previousMonth),
                "data-holiday": day.holiday.isHoliday,
                onClick: () => {
                  setCurrentDate(day.date);
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: weekDayButtonDisplayValue,
                      "data-active": isSameDay(day.date, currentDate),
                      "data-scheduled": isSameDay(day.date, "2025-05-26"),
                      children: day.displayValue
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: weekDayButtonScheduledBullets,
                      "data-active-month": !(day.nextMonth || day.previousMonth),
                      children: [
                        Number(day.displayValue) % 3 === 0 && /* @__PURE__ */ jsx("span", { className: weekDayButtonScheduledBullet, "data-type": "훈련" }),
                        Number(day.displayValue) % 5 === 0 && /* @__PURE__ */ jsx("span", { className: weekDayButtonScheduledBullet, "data-type": "교류전" }),
                        Number(day.displayValue) % 8 === 0 && /* @__PURE__ */ jsx("span", { className: weekDayButtonScheduledBullet, "data-type": "팀" }),
                        Number(day.displayValue) % 10 === 0 && /* @__PURE__ */ jsx("span", { className: weekDayButtonScheduledBullet, "data-type": "대회" })
                      ]
                    }
                  )
                ]
              },
              day.date.toString()
            ))
          },
          weekNum
        );
      }) })
    ] })
  ] });
}
const CalendarContainer = styled.article`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 8px 16px 16px;
`;
const NowDate = styled.div`
  button.date-control-button {
    display: flex;
    padding-left: 2px;
    margin-left: -2px;
    align-items: center;
    color: var(--gray900);
    border-radius: 4px;
    ${TEXT_ACTIVE("var(--gray100)", { scalable: true, activeRange: 4 })};
  }
`;
const Days = styled.div`
  position: relative;
  margin: 0 calc(-1 * var(--global-lr-padding));
  padding: 0 var(--global-lr-padding);
  overflow-x: hidden;
  overflow-y: hidden;
`;
const WeekGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.3s cubic-bezier(0.05, 0, 0, 1);

  &.L {
    transform: translateX(5%);
  }
  &.R {
    transform: translateX(-5%);
  }
`;
const MonthDirection = styled.div`
  position: absolute;
  top: 100px;
  text-align: center;
  line-height: 7.2rem;
  width: 72px;
  height: 72px;
  background-color: var(--primary400);
  border-radius: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  opacity: 0;
  transition: transform 0.3s var(--animation-cubic), opacity 0.3s var(--animation-cubic);
  z-index: 5;
`;
const DirectionL = styled(MonthDirection)`
  left: 0;
  transform: translate3d(-100%, 0, 0);
  &.L {
    opacity: 1;
    transform: translate3d(25%, 0, 0) scale(1.2);
  }
`;
const DirectionR = styled(MonthDirection)`
  right: 0;
  transform: translate3d(100%, 0, 0);
  &.R {
    opacity: 1;
    transform: translate3d(-25%, 0, 0) scale(1.2);
  }
`;
function Schedule() {
  const {
    teamId
  } = Route.useParams();
  const calendar = useCalendar();
  const viewWeekly = useState(true);
  const isMonthly = !viewWeekly[0];
  useHeader({
    title: "다가오는 일정",
    subIcons: [{
      svgIcon: /* @__PURE__ */ jsx(SearchIcon, {}),
      onClick: `/team/${teamId}/schedule`,
      description: "일정 찾기"
    }]
  });
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(PlusFloat, { linkTo: `/team/${teamId}/schedule?feat=new`, blind: "새 일정 만들기", replace: true }),
    /* @__PURE__ */ jsx(CalendarView, { calendar, viewWeekly }),
    isMonthly && /* @__PURE__ */ jsx("div", { className: baseDividedLine }),
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, style: {
      paddingTop: isMonthly ? "0" : "8px",
      paddingBottom: "24px"
    }, children: [
      isMonthly && /* @__PURE__ */ jsxs("ul", { className: clsx(monthEventSummary, flexRowGap8), style: {
        flexWrap: "wrap"
      }, children: [
        /* @__PURE__ */ jsx("li", { className: monthEventSummaryItems, "data-type": "훈련", children: "훈련 1" }),
        /* @__PURE__ */ jsx("li", { className: monthEventSummaryItems, "data-type": "교류전", children: "교류전 1" }),
        /* @__PURE__ */ jsx("li", { className: monthEventSummaryItems, "data-type": "팀", children: "팀 이벤트 1" }),
        /* @__PURE__ */ jsx("li", { className: monthEventSummaryItems, "data-type": "대회", children: "대회 1" })
      ] }),
      /* @__PURE__ */ jsx(ScheduleList, { data: [{
        date: "2025-05-26",
        schedule: [{
          scheduleId: "1",
          category: "훈련",
          title: "훈련 1",
          place: "장소 1",
          date: "2025-05-26",
          time: "15:00",
          people: [{
            userId: "1",
            username: "홍길동",
            img: "https://picsum.photos/seed/picsum/300"
          }, {
            userId: "2",
            username: "김철수",
            img: "https://picsum.photos/seed/picsum/300"
          }]
        }, {
          scheduleId: "51",
          category: "교류전",
          title: "훈련 1",
          place: "장소 1",
          date: "2025-05-26",
          time: "15:00",
          people: [{
            userId: "1",
            username: "홍길동",
            img: "https://picsum.photos/seed/picsum/300"
          }, {
            userId: "2",
            username: "김철수",
            img: "https://picsum.photos/seed/picsum/300"
          }]
        }]
      }, {
        date: "2025-05-28",
        schedule: [{
          scheduleId: "321",
          category: "대회",
          title: "대박농구대회",
          place: "서울 실내체육관",
          date: "2025-05-26",
          time: "09:00",
          people: [{
            userId: "41",
            username: "홍길동",
            img: "https://picsum.photos/id/40/400"
          }, {
            userId: "52",
            username: "김철수",
            img: "https://picsum.photos/seed/picsum/300"
          }, {
            userId: "72",
            username: "김철수",
            img: "https://picsum.photos/id/237/400"
          }, {
            userId: "892",
            username: "김철수",
            img: "https://picsum.photos/seed/picsum/300"
          }, {
            userId: "5892",
            username: "김철수",
            img: "https://picsum.photos/seed/picsum/300"
          }, {
            userId: "6892",
            username: "김철수",
            img: "https://picsum.photos/seed/picsum/300"
          }, {
            userId: "67892",
            username: "김철수",
            img: "https://picsum.photos/seed/picsum/300"
          }, {
            userId: "12567892",
            username: "김철수",
            img: "https://picsum.photos/seed/picsum/300"
          }, {
            userId: "267892",
            username: "김철수",
            img: "https://picsum.photos/seed/picsum/300"
          }]
        }]
      }] })
    ] })
  ] });
}
export {
  Schedule as component
};
