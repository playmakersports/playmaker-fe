import React, { ReactElement, useState } from "react";
import { useRouter } from "next/router";
import useBgWhite from "@/hook/useBgWhite";

import Step0 from "./Join/Step0";
import StepStudents from "./Join/StepStudents";
import Step2 from "./Join/Step2";
import Step3 from "./Join/Step3";
import Step4 from "./Join/Step4";
import Stepper from "../common/Stepper";

function JoinStep() {
  useBgWhite();
  const router = useRouter();
  const userType = router.query.type;

  const [step, setStep] = useState(0);
  const STEP_PAGE: Record<string, ReactElement> = {
    0: <Step0 setStep={setStep} />,
    1: <StepStudents setStep={setStep} />,
    2: <Step2 setStep={setStep} />,
    3: <Step3 setStep={setStep} />,
    4: <Step4 />,
  };

  if (step === 0) {
    return <>{STEP_PAGE[step]}</>;
  }
  return (
    <Stepper length={userType === "univ" ? 4 : 3} now={userType === "univ" ? step : step - 1}>
      {STEP_PAGE[step]}
    </Stepper>
  );
}

export default JoinStep;
