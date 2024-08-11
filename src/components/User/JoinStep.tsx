import useBgWhite from "@/hook/useBgWhite";
import React, { ReactElement, useState } from "react";
import Step0 from "./Join/Step0";
import StepStudents from "./Join/StepStudents";
import Step2 from "./Join/Step2";
import Step3 from "./Join/Step3";

function JoinStep() {
  useBgWhite();
  const [step, setStep] = useState(0);
  const STEP_PAGE: Record<string, ReactElement> = {
    0: <Step0 setStep={setStep} />,
    1: <StepStudents setStep={setStep} />,
    2: <Step2 setStep={setStep} />,
    3: <Step3 setStep={setStep} />,
  };

  return <div>{STEP_PAGE[step]}</div>;
}

export default JoinStep;
