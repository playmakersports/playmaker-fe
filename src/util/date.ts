import { differenceInCalendarDays, differenceInMinutes, getDate, getDay, getMonth, getYear } from "date-fns";

type FormattedDateType = {
  displayYear: "always" | "not-this-year";
  displayDateType: "." | "-" | "kr";
  displayDayName: "hide" | "full" | "short-with-parenthesis";
  displayTime?: "24h" | "12h-kr" | "12h-en" | "hide";
  displaySimpleKR?: boolean;
};
const padStartNumber = (target: string | number) => String(target).padStart(2, "0");
export const DAY_NAME_KOREAN = ["일", "월", "화", "수", "목", "금", "토"];
export const formattedDateNoHyphen = (target: string) => {
  if (!target) return "";
  const year = target.slice(0, 4);
  const month = target.slice(4, 6);
  const day = target.slice(6, 8);
  return `${year}-${month}-${day}`;
};
export const formattedDate = (target: string | Date, type: FormattedDateType) => {
  if (!target) return "";
  let targetDate: Date;
  let time = "";
  if (typeof target === "string") {
    const [date, t] = target.split("T");
    targetDate = new Date(date);
    time = t;
  } else {
    targetDate = target;
  }
  const currentYear = new Date().getFullYear();
  const year = getYear(targetDate);
  const month = getMonth(targetDate) + 1;
  const day = getDate(targetDate);
  const dayName = getDay(targetDate);

  // Day name formatting
  let formattedDayName = "";
  if (type.displayDayName === "full") {
    formattedDayName = `${DAY_NAME_KOREAN[dayName]}요일`;
  } else if (type.displayDayName === "short-with-parenthesis") {
    formattedDayName = `(${DAY_NAME_KOREAN[dayName]})`;
  }

  // Date formatting based on join type
  let formattedDate;
  if (type.displayDateType === "kr") {
    formattedDate = `${month}월 ${day}일`;
  } else {
    const separator = type.displayDateType;
    formattedDate = `${padStartNumber(month)}${separator}${padStartNumber(day)}`;
  }

  // Year formatting
  if (type.displayYear === "always" || year !== currentYear) {
    formattedDate = `${year}${type.displayDateType === "kr" ? "년 " : type.displayDateType}${formattedDate}`;
  }

  const formatTime = (time: string, displayTime?: "24h" | "12h-kr" | "12h-en" | "hide") => {
    if (displayTime === "hide" || !displayTime) {
      return "";
    } else if (displayTime === "24h") {
      return time;
    } else {
      if (time) {
        const timeTypeLanguage = displayTime === "12h-kr" ? "kr" : "en";
        const [hour, minute] = time.split(":").slice(0, 2);
        const AM_PM_NAME = { kr: ["오전", "오후"], en: ["AM", "PM"] };
        return `${+hour > 11 ? AM_PM_NAME[timeTypeLanguage][1] : AM_PM_NAME[timeTypeLanguage][0]} ${
          +hour > 12 ? +hour - 12 : hour
        }:${padStartNumber(minute)}`;
      }
    }
    return "";
  };

  let formattedTime = formatTime(time, type.displayTime);

  if (!type.displaySimpleKR) {
    return `${formattedDate} ${formattedDayName} ${type.displayTime !== "hide" ? formattedTime : ""}`.trim();
  } else {
    const diffInMinutes = differenceInMinutes(new Date(), new Date(target));

    if (diffInMinutes < 1) {
      return "방금";
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    } else if (diffInMinutes < 360) {
      const hoursAgo = Math.floor(diffInMinutes / 60);
      return `${hoursAgo}시간 전`;
    } else {
      const diffInDays = differenceInCalendarDays(new Date(), new Date(target));
      if (diffInDays === 0) {
        return `오늘 ${formattedTime}`;
      } else if (diffInDays === 1) {
        return `어제 ${formattedTime}`;
      } else if (diffInDays < 4) {
        return `${diffInDays}일 전 ${formattedTime}`;
      } else {
        return `${formattedDate} ${formattedDayName} ${type.displayTime !== "hide" ? formattedTime : ""}`.trim();
      }
    }
  }
};

export const countDayDiff = (target: string) => {
  const today = new Date();
  const targetDay = new Date(target);
  const timeDiff = targetDay.getTime() - today.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
};
