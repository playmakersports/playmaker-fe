"use client";
import { useState } from "react";
import styled from "styled-components";

import WeeklyCalender from "@/components/common/WeeklyCalender";

function MyTabHome() {
  const [weeklyDate, setWeeklyDate] = useState("");

  return (
    <Container>
      <WeeklyCalender
        clickable={false}
        grouping={true}
        activeDate={weeklyDate}
        setActiveDate={setWeeklyDate}
        schedulesList={[
          {
            teamName: "SPABA",
            schedules: [
              { scheduleId: "", startTime: "09:30", scheduleTitle: "팀 훈련" },
              { scheduleId: "", startTime: "16:30", scheduleTitle: "교류전 (VS 성균관대)" },
            ],
          },
          {
            teamName: "SPABA",
            schedules: [
              { scheduleId: "", startTime: "09:30", scheduleTitle: "팀 훈련" },
              { scheduleId: "", startTime: "16:30", scheduleTitle: "교류전 (VS 성균관대)" },
            ],
          },
        ]}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default MyTabHome;
