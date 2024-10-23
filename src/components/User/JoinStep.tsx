import React, { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import useBgWhite from "@/hook/useBgWhite";
import { useResetAtom } from "jotai/utils";

import { resetAtomServiceApply } from "@/atom/user";
import Step0 from "./Join/Step0";
import StepStudents from "./Join/StepStudents";
import Step2 from "./Join/Step2";
import Step3 from "./Join/Step3";
import Step4 from "./Join/Step4";
import Stepper from "../common/Stepper";

function JoinStep() {
  useBgWhite();
  const router = useRouter();
  const resetServiceApply = useResetAtom(resetAtomServiceApply);
  const userType = router.query.type;
  const queryStepValue = router.query.step;

  const handleStepper = (target: number) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, step: target },
    });
  };

  useEffect(() => {
    return () => {
      resetServiceApply();
    };
  }, []);

  const STEP_PAGE: Record<string, ReactElement> = {
    0: <Step0 setStep={handleStepper} />,
    1: <StepStudents setStep={handleStepper} />,
    2: <Step2 setStep={handleStepper} />,
    3: <Step3 setStep={handleStepper} />,
    4: <Step4 />,
  };

  if (queryStepValue === "0") {
    return <>{STEP_PAGE[0]}</>;
  }
  if (!queryStepValue) return null;
  return (
    <Stepper length={userType === "univ" ? 4 : 3} now={userType === "univ" ? +queryStepValue : +queryStepValue - 1}>
      {STEP_PAGE[`${router.query.step}`]}
    </Stepper>
  );
}

export default JoinStep;
