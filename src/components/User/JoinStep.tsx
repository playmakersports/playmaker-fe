import useBgWhite from "@/hook/useBgWhite";
import React, { ReactElement, useState } from "react";
import Step0 from "./Join/Step0";
import StepStudents from "./Join/StepStudents";

function JoinStep() {
  useBgWhite();
  const [step, setStep] = useState(0);
  const STEP_PAGE: Record<string, ReactElement> = {
    0: <Step0 setStep={setStep} />,
    1: <StepStudents setStep={setStep} />,
  };

  return <div>{STEP_PAGE[step]}</div>;
}

export default JoinStep;
