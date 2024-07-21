import React, { useState } from "react";
import styled from "@emotion/styled";
import { getDate, getDay, getMonth, isSameDay, subMonths } from "date-fns";
import useCalendar from "@/hook/useCalendar";
import useModal from "@/hook/useModal";

import { BUTTON_ACTIVE, FONTS, INNER_BUTTON_ACTIVE } from "@/styles/common";
import { BaseContainer, WhiteSectionDivider } from "@/components/common/Container";
import { BasicWhiteCardTitle } from "@/components/common/Card";
import Loading from "@/components/common/Loading";
import useBgWhite from "@/hook/useBgWhite";

function Schedule() {
  useBgWhite();
  const { dayList, weekCalendarList, currentDate, currentDateHoliday, setCurrentDate } = useCalendar();
  const { ModalComponents, showModal } = useModal();
  const [nowDateValue, setNowDateValue] = useState<{ year: number | string; month: number | string }>({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
  });

  const handleMonthMove = (direction: "PREV" | "NEXT") => {
    const targetDate = subMonths(currentDate, direction === "PREV" ? +1 : -1);
    setCurrentDate(targetDate);
    setNowDateValue({
      year: targetDate.getFullYear(),
      month: targetDate.getMonth() + 1,
    });
  };

  const setTargetDate = (target?: string) => {
    if (target) {
      const [year, month] = target?.split("/");
      setCurrentDate(new Date(`${year}/${month}/01`));
      setNowDateValue({ year, month });
    } else {
      // 빈 값이면 오늘로 이동
      setCurrentDate(new Date());
      setNowDateValue({ year: new Date().getFullYear(), month: new Date().getMonth() + 1 });
    }
  };

  // 캘린더 이동
  const [swipeDirection, setSwipeDirection] = useState("");
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    const startTarget = e.changedTouches[0].pageX;
    setTouchStartX(startTarget);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
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

  const handleTouchMove = (e: React.TouchEvent) => {
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

  return (
    <Container>
      <CalendarContainer>
        <Header>
          <Control onClick={() => handleMonthMove("PREV")}>이전달</Control>
          <NowDate>
            <DateInput
              type="number"
              pattern="[0-9]*"
              inputMode="numeric"
              style={{ width: "64px" }}
              value={nowDateValue.year}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setNowDateValue((prev) => ({ ...prev, year: e.target.value }))}
              onBlur={(e) => {
                if (e.target.value !== "" && Number(e.target.value) > 1900 && Number(e.target.value) < 2999) {
                  setTargetDate(`${nowDateValue.year}/${nowDateValue.month}/01`);
                } else {
                  setTargetDate();
                }
              }}
            />
            .
            <DateInput
              type="number"
              pattern="[0-9]*"
              inputMode="numeric"
              style={{ width: "32px" }}
              value={nowDateValue.month}
              onFocus={(e) => e.target.select()}
              onChange={(e) => setNowDateValue((prev) => ({ ...prev, month: e.target.value }))}
              onBlur={(e) => {
                if (e.target.value !== "" && Number(e.target.value) > 0 && Number(e.target.value) < 13) {
                  setTargetDate(`${nowDateValue.year}/${nowDateValue.month}/01`);
                } else {
                  setTargetDate();
                }
              }}
            />
            .
          </NowDate>
          <Control onClick={() => handleMonthMove("NEXT")}>다음달</Control>
        </Header>
        <Days
          className={swipeDirection}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <DirectionL className={swipeDirection}>이전달</DirectionL>
          <DirectionR className={swipeDirection}>다음달</DirectionR>
          <Week>
            {dayList.map((value) => (
              <DayName key={value}>{value}</DayName>
            ))}
          </Week>
          {weekCalendarList.map((week, weekNum) => (
            <Week key={weekNum}>
              {week.map((day) => (
                <Day
                  key={day.date.toString()}
                  data-active={true}
                  thisMonth={!(day.nextMonth || day.previousMonth)}
                  isHoliday={day.holiday.isHoliday}
                  className={isSameDay(day.date, currentDate) ? "current-date" : ""}
                  onClick={() => {
                    setCurrentDate(day.date);
                    setNowDateValue({ year: day.date.getFullYear(), month: day.date.getMonth() + 1 });
                  }}
                >
                  {day.displayValue}
                </Day>
              ))}
            </Week>
          ))}
        </Days>
      </CalendarContainer>
      <WhiteSectionDivider />
      <ScheduleContainer>
        <ScheduleAreaTitle>
          {getMonth(currentDate) + 1}월 {getDate(currentDate)}일 {dayList[getDay(currentDate)]}요일{" "}
          <span className="holiday-name">{currentDateHoliday.holidayName}</span>
        </ScheduleAreaTitle>
        {/* <Loading /> */}
        <ScheduleList>
          {SCHEDULE_DUMMY.map((item, index) => (
            <li key={`${item.date}+${index}`}>
              <button type="button" onClick={() => showModal()}>
                <div className="inner-button">
                  <div className="schedule-info">
                    {item.startTime} - {item.endTime} / {item.schedulePlace}
                  </div>
                  <p className="schedule-name">{item.scheduleName}</p>
                </div>
              </button>
            </li>
          ))}
        </ScheduleList>
      </ScheduleContainer>
      <ModalComponents
        title="일정 정보"
        buttons={[
          { mode: "OPTION2", name: "편집", onClick: () => {} },
          { mode: "MAIN", name: "확인", onClick: () => {} },
        ]}
      >
        <p>2024년 5월 10일</p>
        <p>성균관대학교 경기장</p>
        <p>연습게임 1</p>
      </ModalComponents>
    </Container>
  );
}

const SCHEDULE_DUMMY = [
  {
    scheduleType: "A",
    startTime: "16:30",
    endTime: "23:00",
    date: "2024-05-10",
    scheduleName: "연습게임 1",
    schedulePlace: "성균관대학교 경기장",
  },
  {
    scheduleType: "B",
    startTime: "16:30",
    endTime: "23:00",
    date: "2024-05-10",
    scheduleName: "연습게임 2",
    schedulePlace: "한양대학교 경기장",
  },
  {
    scheduleType: "A",
    startTime: "16:30",
    endTime: "23:00",
    date: "2024-05-10",
    scheduleName: "연습게임 3",
    schedulePlace: "성균관대학교 경기장",
  },
];

const Container = styled(BaseContainer)`
  display: flex;
  padding-bottom: 32px;
  flex-direction: column;
`;
const CalendarContainer = styled.article`
  padding-bottom: 20px;
`;
const ScheduleContainer = styled.div`
  margin: 0 -16px -24px;
  padding: 4px 20px var(--env-sab);
  background-color: var(--background);
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;
const NowDate = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  line-height: 3rem;
  font-size: 2.4rem;
  font-weight: 900;
  input {
    font-size: 2.4rem;
    font-weight: 900;
  }
`;
const Days = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${FONTS.MD1W500};
  font-size: 1.8rem;
  transform: translateX(0);
  transition: transform 0.3s cubic-bezier(0.05, 0, 0, 1);

  &.L {
    transform: translateX(5%);
  }
  &.R {
    transform: translateX(-5%);
  }
`;

const Week = styled.div`
  display: flex;
`;
const DayName = styled.div`
  flex: 1;
  margin-bottom: -8px;
  text-align: center;
  font-size: 1.4rem;
`;
const Control = styled.button`
  padding: 12px 20px;
  font-size: 1.4rem;
  ${BUTTON_ACTIVE()};
  opacity: 0.7;
`;

const MonthDirection = styled.div`
  position: absolute;
  top: calc(50% - 32px);
  text-align: center;
  line-height: 7.2rem;
  width: 72px;
  height: 72px;
  background-color: var(--main);
  border-radius: 100%;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  opacity: 0;
  transform: scale(0.1);
  transition: transform 0.3s var(--animation-cubic), opacity 0.3s var(--animation-cubic);
  z-index: 2;
`;
const DirectionL = styled(MonthDirection)`
  left: 0;
  transform: translate3d(-100%, 0, 0);
  &.L {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;
const DirectionR = styled(MonthDirection)`
  right: 0;
  transform: translate3d(100%, 0, 0);
  &.R {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const Day = styled.button<{ thisMonth: boolean; isHoliday: boolean }>`
  position: relative;
  flex: 1;
  padding: 16px 0 20px;
  text-align: center;
  border: 1px solid transparent;
  color: ${({ isHoliday }) => (isHoliday ? "var(--point)" : "var(--text)")};
  opacity: ${({ thisMonth }) => (thisMonth ? 1 : 0.35)};
  ${BUTTON_ACTIVE()};

  &[aria-invalid] {
    visibility: hidden;
  }
  &[data-active]::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    margin: 4px auto 0;
    width: 6px;
    height: 6px;
    background-color: var(--main);
    border-radius: 100%;
  }
  &.current-date {
    border: 1px solid var(--gray6);
    box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.1);
    transform: scale(1.03);
  }
`;

const ScheduleAreaTitle = styled(BasicWhiteCardTitle)`
  margin: 4px 0 8px;
  padding: 0;
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 1.8rem;
  .holiday-name {
    color: var(--point);
    ${FONTS.MD2}
  }
`;

const DateInput = styled.input`
  width: max-content;
  color: var(--text);
  text-align: right;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  padding: 1px;
  &:focus {
    padding: 0px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid var(--main);
  }
`;

const ScheduleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  li {
    margin: 0 -12px;
  }
  li > button {
    padding: 12px;
    width: 100%;
    ${INNER_BUTTON_ACTIVE("var(--background-light)")};
    .inner-button {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
  }
  .schedule-info {
    opacity: 0.8;
    ${FONTS.MD2}
  }
  .schedule-name {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    ${FONTS.MD1}
    &::before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: var(--main);
      border-radius: 100%;
    }
  }
`;

Schedule.getInitialProps = async () => {
  return {};
};
export default Schedule;
