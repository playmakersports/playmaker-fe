import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useCalendar from "@/hook/useCalendar";
import { FONTS } from "@/styles/common";

function ScheduleSection() {
  const { weekCalendarList } = useCalendar();
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    setShowCalendar(true);
  }, []);

  return (
    <Container>
      {showCalendar && (
        <Days>
          <DaysInner>
            {weekCalendarList.map((week, weekNum) => (
              <Week key={weekNum}>
                {week.map((day) => (
                  <Day key={day.date.toString()} data-active={true}>
                    {day.displayValue}
                  </Day>
                ))}
              </Week>
            ))}
          </DaysInner>
        </Days>
      )}
    </Container>
  );
}

const Container = styled.div``;

const Days = styled.button`
  width: 100%;
  padding-bottom: 12px;
`;
const DaysInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${FONTS.MD1W500};
`;
const Week = styled.div`
  display: flex;
`;
const Day = styled.div`
  position: relative;
  flex: 1;
  padding: 6px 0;
  text-align: center;
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

export default ScheduleSection;
