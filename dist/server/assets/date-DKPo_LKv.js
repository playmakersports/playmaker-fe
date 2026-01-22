import { getYear, getMonth, getDate, getDay, differenceInMinutes, differenceInCalendarDays } from "date-fns";
const padStartNumber = (target) => String(target).padStart(2, "0");
const DAY_NAME_KOREAN = ["일", "월", "화", "수", "목", "금", "토"];
const formattedDateNoHyphen = (target) => {
  if (!target) return "";
  const year = target.slice(0, 4);
  const month = target.slice(4, 6);
  const day = target.slice(6, 8);
  return `${year}-${month}-${day}`;
};
const formattedDate = (target, type) => {
  if (!target) return "";
  let targetDate;
  let time = "";
  if (typeof target === "string") {
    const [date, t] = target.split("T");
    targetDate = new Date(date);
    time = t;
  } else {
    targetDate = target;
  }
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const year = getYear(targetDate);
  const month = getMonth(targetDate) + 1;
  const day = getDate(targetDate);
  const dayName = getDay(targetDate);
  let formattedDayName = "";
  if (type.displayDayName === "full") {
    formattedDayName = `${DAY_NAME_KOREAN[dayName]}요일`;
  } else if (type.displayDayName === "short-with-parenthesis") {
    formattedDayName = `(${DAY_NAME_KOREAN[dayName]})`;
  }
  let formattedDate2;
  if (type.displayDateType === "kr") {
    formattedDate2 = `${month}월 ${day}일`;
  } else {
    const separator = type.displayDateType;
    formattedDate2 = `${padStartNumber(month)}${separator}${padStartNumber(day)}`;
  }
  if (type.displayYear === "always" || year !== currentYear) {
    formattedDate2 = `${year}${type.displayDateType === "kr" ? "년 " : type.displayDateType}${formattedDate2}`;
  }
  const formatTime = (time2, displayTime) => {
    if (displayTime === "hide" || !displayTime) {
      return "";
    } else if (displayTime === "24h") {
      return time2;
    } else {
      if (time2) {
        const timeTypeLanguage = displayTime === "12h-kr" ? "kr" : "en";
        const [hour, minute] = time2.split(":").slice(0, 2);
        const AM_PM_NAME = { kr: ["오전", "오후"], en: ["AM", "PM"] };
        return `${+hour > 11 ? AM_PM_NAME[timeTypeLanguage][1] : AM_PM_NAME[timeTypeLanguage][0]} ${+hour > 12 ? +hour - 12 : hour}:${padStartNumber(minute)}`;
      }
    }
    return "";
  };
  let formattedTime = formatTime(time, type.displayTime);
  if (!type.displaySimpleKR) {
    return `${formattedDate2} ${formattedDayName} ${type.displayTime !== "hide" ? formattedTime : ""}`.trim();
  } else {
    const diffInMinutes = differenceInMinutes(/* @__PURE__ */ new Date(), new Date(target));
    if (diffInMinutes < 1) {
      return "방금";
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    } else if (diffInMinutes < 360) {
      const hoursAgo = Math.floor(diffInMinutes / 60);
      return `${hoursAgo}시간 전`;
    } else {
      const diffInDays = differenceInCalendarDays(/* @__PURE__ */ new Date(), new Date(target));
      if (diffInDays === 0) {
        return `오늘 ${formattedTime}`;
      } else if (diffInDays === 1) {
        return `어제 ${formattedTime}`;
      } else if (diffInDays < 4) {
        return `${diffInDays}일 전 ${formattedTime}`;
      } else {
        return `${formattedDate2} ${formattedDayName} ${type.displayTime !== "hide" ? formattedTime : ""}`.trim();
      }
    }
  }
};
const countDayDiff = (target) => {
  const today = /* @__PURE__ */ new Date();
  const targetDay = new Date(target);
  const timeDiff = targetDay.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1e3 * 3600 * 24));
  return daysDiff;
};
const parsedServerDateTime = (target) => {
  const [date, time] = target.split("-");
  const parsedDate = date.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
  return `${parsedDate}T${time}`;
};
export {
  formattedDate as a,
  countDayDiff as c,
  formattedDateNoHyphen as f,
  parsedServerDateTime as p
};
