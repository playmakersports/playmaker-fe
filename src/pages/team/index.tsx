import React from "react";
import { usePageTitle } from "@/hook/usePageTitle";

import Stepper from "@/components/layouts/Stepper";

function Team() {
  usePageTitle();

  return (
    <Stepper
      title="팀의 종목을 선택해주세요"
      button={{
        text: "다음",
        onClick: () => console.log(""),
      }}
    >
      Team
    </Stepper>
  );
}

export default Team;
