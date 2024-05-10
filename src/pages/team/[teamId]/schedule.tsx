import React, { useState } from "react";
import styled from "@emotion/styled";
import { getDate, getDay, getMonth, subMonths } from "date-fns";
import useCalendar from "@/hook/useCalendar";
import useModal from "@/hook/useModal";

import { BUTTON_ACTIVE, FONTS, INNER_BUTTON_ACTIVE } from "@/styles/common";
import { BaseContainer, DividedContainer } from "@/components/common/Container";
import { BasicWhiteCardTitle } from "@/components/common/Card";
import Loading from "@/components/common/Loading";

function Schedule() {
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
        <Days>
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
          { mode: "OPTION1", name: "길찾기", onClick: () => {} },
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
  margin-top: -12px;
  flex-direction: column;
  height: 100%;
  gap: 32px;
`;
const CalendarContainer = styled.article``;
const ScheduleContainer = styled(DividedContainer)`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
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
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${FONTS.MD1W500};
  font-size: 1.8rem;
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
  ${BUTTON_ACTIVE};
  opacity: 0.7;
`;
const Day = styled.button<{ thisMonth: boolean; isHoliday: boolean }>`
  position: relative;
  flex: 1;
  padding: 16px 0 20px;
  text-align: center;
  color: ${({ isHoliday, theme }) => (isHoliday ? theme.sub2 : theme.text)};
  opacity: ${({ thisMonth }) => (thisMonth ? 1 : 0.35)};
  ${BUTTON_ACTIVE};

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
    background-color: ${({ theme }) => theme.main};
    border-radius: 100%;
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
    color: ${({ theme }) => theme.sub2};
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
    ${INNER_BUTTON_ACTIVE};
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
      background-color: ${({ theme }) => theme.main};
      border-radius: 100%;
    }
  }
`;

Schedule.getInitialProps = async () => {
  return {};
};
export default Schedule;
