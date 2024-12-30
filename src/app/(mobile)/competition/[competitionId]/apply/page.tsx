import React from "react";
import ApplyInfo from "../_components/ApplyInfo";
import ApplyTeamSelect from "../_components/ApplyTeamSelect";

function CompetitionApply() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - var(--safe-area-top) - 64px - var(--env-sab))",
      }}
    >
      <ApplyInfo
        title="제 2회 한국유소년 스포츠 연맹 대학 농구 친선전 KUSE 경기"
        place="서울과학기술대학교 체육관"
        startDate="2024-12-30"
        endDate="2025-01-03"
      />
      <ApplyTeamSelect />
    </div>
  );
}

export default CompetitionApply;
