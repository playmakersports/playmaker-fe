import { getDate, getDay, getMonth, getYear, toDate } from "date-fns";

type FormattedDateType = {
  displayYear: "always" | "not-this-year";
  displayDateType: "." | "-" | "kr";
  displayDayName: "hide" | "full" | "short-with-parenthesis";
  displayTime?: "24h" | "12h-kr" | "12h-en" | "hide";
  displaySimpleKR?: boolean;
};
const padStartNumber = (target: string | number) => String(target).padStart(2, "0");
export const DAY_NAME_KOREAN = ["일", "월", "화", "수", "목", "금", "토"];
export const formattedDate = (target: string, type: FormattedDateType) => {
  if (!target) return "";
  const [date, time] = target.split("T");
  const targetDate = new Date(date);
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

  let formattedTime;
  if (type.displayTime === "hide" || !type.displayTime) {
    formattedTime = "";
  } else if (type.displayTime === "24h") {
    formattedTime = time;
  } else {
    if (time) {
      const timeTypeLanguage = type.displayTime === "12h-kr" ? "kr" : "en";
      const [hour, minute] = time.split(":").slice(0, 2);
      const AM_PM_NAME = { kr: ["오전", "오후"], en: ["AM", "PM"] };
      formattedTime = `${+hour > 11 ? AM_PM_NAME[timeTypeLanguage][1] : AM_PM_NAME[timeTypeLanguage][0]} ${
        +hour > 12 ? +hour - 12 : hour
      }:${padStartNumber(minute)}`;
    }
  }

  if (!type.displaySimpleKR) {
    return `${formattedDate} ${formattedDayName} ${type.displayTime !== "hide" ? formattedTime : ""}`.trim();
  } else {
    const now = new Date();
    const targetDateTime = new Date(target);
    const diffInMinutes = Math.floor((now.getTime() - targetDateTime.getTime()) / (1000 * 60));

    if (diffInMinutes < 1) {
      return "방금";
    } else if (diffInMinutes < 60) {
      const minutesAgo = Math.floor(diffInMinutes / 10) * 10;
      return `${minutesAgo}분 전`;
    } else if (diffInMinutes < 360) {
      const hoursAgo = Math.floor(diffInMinutes / 60);
      return `${hoursAgo}시간 전`;
    } else {
      const diffInDays = Math.floor(diffInMinutes / (60 * 24));
      const hours = padStartNumber(targetDateTime.getHours());
      const minutes = padStartNumber(targetDateTime.getMinutes());
      if (diffInDays === 0) {
        return `오늘 오후 ${hours}:${minutes}`;
      } else if (diffInDays === 1) {
        return `어제 오후 ${hours}:${minutes}`;
      } else if (diffInDays < 4) {
        return `${diffInDays}일 전 오후 ${hours}:${minutes}`;
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
