import useBgWhite from "@/hook/useBgWhite";
import React, { ReactElement, useState } from "react";
import Step0 from "./Join/Step0";
import StepStudents from "./Join/StepStudents";
import Step2 from "./Join/Step2";
import Step3 from "./Join/Step3";
import Step4 from "./Join/Step4";
import Step5 from "./Join/Step5";
import Stepper from "../common/Stepper";

function JoinStep() {
  useBgWhite();
  const [step, setStep] = useState(0);
  const STEP_PAGE: Record<string, ReactElement> = {
    0: <Step0 setStep={setStep} />,
    1: <StepStudents setStep={setStep} />,
    2: <Step2 setStep={setStep} />,
    3: <Step3 setStep={setStep} />,
    4: <Step4 setStep={setStep} />,
    5: <Step5 />,
  };

  if (step === 0 || step === 5) {
    return <>{STEP_PAGE[step]}</>;
  }
  return (
    <Stepper length={4} now={step}>
      {STEP_PAGE[step]}
    </Stepper>
  );
}

export default JoinStep;
