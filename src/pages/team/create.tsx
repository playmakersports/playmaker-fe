import React, { ReactElement, useState } from "react";

import useBgWhite from "@/hook/useBgWhite";
import TeamCreateStep1 from "@/components/Team/Create/TeamCreateStep1";
import TeamCreateStep2 from "@/components/Team/Create/TeamCreateStep2";
import TeamCreateStep3 from "@/components/Team/Create/TeamCreateStep3";
import Stepper from "@/components/common/Stepper";

function TeamCreate() {
  useBgWhite();
  const [step, setStep] = useState(1);
  const STEP_PAGE: Record<string, ReactElement> = {
    1: <TeamCreateStep1 setStep={setStep} />,
    2: <TeamCreateStep2 setStep={setStep} />,
    3: <TeamCreateStep3 setStep={setStep} />,
    // 4: <Step4 setStep={setStep} />,
    // 5: <Step5 />,
  };

  return (
    <Stepper length={4} now={step}>
      {STEP_PAGE[step]}
    </Stepper>
  );
}

export default TeamCreate;
