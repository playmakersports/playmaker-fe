import React from "react";

import Stepper from "@/components/layouts/Stepper";

function StepStudents({ setStep }: { setStep: (prev: number) => void }) {
  return <Stepper>Step0</Stepper>;
}

export default StepStudents;
