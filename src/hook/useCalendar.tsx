import {
  getDaysInMonth,
  subMonths,
  getWeeksInMonth,
  getDay,
  startOfMonth,
  endOfMonth,
  subDays,
  addDays,
  isSunday,
} from "date-fns";
import { useState } from "react";

const DAY_OF_WEEK = 7;
const DAY_LIST = ["일", "월", "화", "수", "목", "금", "토"];

export type UseCalendarType = {
  dayList: string[];
  weekCalendarList: WeekDateObject[][];
  currentDate: Date;
  currentDateHoliday: {
    isHoliday: boolean;
    holidayName: string | null;
  };
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
};

function useCalendar(defaultDate?: Date): UseCalendarType {
  const [currentDate, setCurrentDate] = useState(defaultDate ?? new Date());
  const totalMonthDays = getDaysInMonth(currentDate);
  const calendarLength = getWeeksInMonth(currentDate, { weekStartsOn: 0 }) * DAY_OF_WEEK;

  const prevMonthDayListLength = Math.max(0, getDay(startOfMonth(currentDate)));
  const prevDayList = Array.from({
    length: prevMonthDayListLength,
  }).map((_, index) => {
    const targetDate = subDays(endOfMonth(subMonths(currentDate, 1)), prevMonthDayListLength - index - 1);
    return {
      date: targetDate,
      displayValue: subDays(endOfMonth(subMonths(currentDate, 1)), prevMonthDayListLength - index - 1).getDate(),
      previousMonth: true,
      nextMonth: false,
      holiday: {
        isHoliday: isSunday(targetDate) || !!getKoreanHolidays(targetDate),
        holidayName: getKoreanHolidays(targetDate) ?? null,
      },
    };
  });
  const currentDayList = Array.from({ length: totalMonthDays }).map((_, index) => {
    const targetDate = addDays(`${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/01`, index);
    return {
      date: targetDate,
      displayValue: targetDate.getDate(),
      previousMonth: false,
      nextMonth: false,
      holiday: {
        isHoliday: isSunday(targetDate) || !!getKoreanHolidays(targetDate),
        holidayName: getKoreanHolidays(targetDate) ?? null,
      },
    };
  });
  const nextDayList = Array.from({
    length: calendarLength - currentDayList.length - prevDayList.length,
  }).map((_, index) => {
    const targetDate = addDays(
      `${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${totalMonthDays}`,
      index + 1
    );
    return {
      date: targetDate,
      displayValue: index + 1,
      previousMonth: false,
      nextMonth: true,
      holiday: {
        isHoliday: isSunday(targetDate) || !!getKoreanHolidays(targetDate),
        holidayName: getKoreanHolidays(targetDate) ?? null,
      },
    };
  });

  const currentCalendarList = prevDayList.concat(currentDayList, nextDayList);
  const weekCalendarList = currentCalendarList.reduce((acc: WeekDateObject[][], cur, idx) => {
    const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);
    return acc;
  }, []);

  return {
    dayList: DAY_LIST,
    weekCalendarList,
    currentDate,
    currentDateHoliday: {
      isHoliday: isSunday(currentDate) || !!getKoreanHolidays(currentDate),
      holidayName: getKoreanHolidays(currentDate),
    },
    setCurrentDate,
  };
}

type WeekDateObject = {
  date: Date;
  displayValue: number;
  previousMonth: boolean;
  nextMonth: boolean;
  holiday: {
    isHoliday: boolean;
    holidayName: string | null;
  };
};

function getKoreanHolidays(target: Date) {
  const MMdd = `${(target.getMonth() + 1).toString().padStart(2, "0")}-${target.getDate().toString().padStart(2, "0")}`;
  const yyyyMMdd = `${target.getFullYear()}-${MMdd}`;

  const HOLIDAYS_LIST: Record<string, string> = {
    "01-01": "신정",
    "03-01": "3·1절",
    "05-05": "어린이날",
    "06-06": "현충일",
    "08-15": "광복절",
    "10-03": "개천절",
    "10-09": "한글날",
    "12-25": "성탄절",
  };

  const SPECIAL_HOLIDAYS_LIST: Record<string, string> = {
    "2024-04-10": "국회의원 선거일",
    "2024-05-06": "어린이날 대체휴일",
    "2024-09-16": "추석 연휴",
    "2024-09-17": "추석",
    "2024-09-18": "추석 연휴",
    "2024-10-01": "국군의날 임시휴일",
    "2025-01-28": "설날 연휴",
    "2025-01-29": "설날",
    "2025-01-30": "설날 연휴",
    "2025-03-03": "3·1절 대체휴일",
    "2025-05-06": "부처님오신날 대체휴일",
    "2025-10-05": "추석 연휴",
    "2025-10-06": "추석",
    "2025-10-07": "추석 연휴",
    "2025-10-08": "추석 대체휴일",
  };

  return HOLIDAYS_LIST[MMdd] ?? SPECIAL_HOLIDAYS_LIST[yyyyMMdd];
}

export default useCalendar;
