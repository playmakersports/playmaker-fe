"use client";

import { useState } from "react";
import WeeklyCalender from "@/components/common/WeeklyCalender";
import RoomAwarded from "@/components/Room/Awarded";

function MyTabHome() {
  const [weeklyDate, setWeeklyDate] = useState("");

  return (
    <>
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
      <RoomAwarded
        awardsList={[
          { awardedYear: 2024, competitionName: "경기1", awardedRank: 1 },
          { awardedYear: 2023, competitionName: "경기2", awardedRank: 3 },
          { awardedYear: 2023, competitionName: "경기3", awardedRank: 2 },
        ]}
      />
    </>
  );
}

export default MyTabHome;
