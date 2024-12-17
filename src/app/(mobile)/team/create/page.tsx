"use client";

import React, { ReactElement, useEffect } from "react";
import { useResetAtom } from "jotai/utils";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { resetAtomTeamCreate } from "@/atom/team";
import Stepper from "@/components/common/Stepper";
import TeamCreateStart from "@/components/Team/Create/TeamCreateStart";
import TeamCreateStep1 from "@/components/Team/Create/TeamCreateStep1";
import TeamCreateStep2 from "@/components/Team/Create/TeamCreateStep2";
import TeamCreateStep3 from "@/components/Team/Create/TeamCreateStep3";
import TeamCreateStep4 from "@/components/Team/Create/TeamCreateStep4";
import TeamCreateStep5 from "@/components/Team/Create/TeamCreateStep5";
import TeamCreateStep6 from "@/components/Team/Create/TeamCreateStep6";
import TeamCreateFinish from "@/components/Team/Create/TeamCreateFinish";

function TeamCreate() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryStepValue = searchParams.get("step");
  const nowParams = new URLSearchParams(useSearchParams().toString());

  const resetServiceApply = useResetAtom(resetAtomTeamCreate);

  const handleStepper = (target: number) => {
    nowParams.set("step", target.toString());
    router.push(`${pathname}?${nowParams.toString()}`);
  };

  useEffect(() => {
    if (!queryStepValue) {
      router.replace(`${pathname}?step=0`);
    }
    return () => {
      resetServiceApply();
    };
  }, []);

  const STEP_PAGE: Record<string, ReactElement> = {
    0: <TeamCreateStart setStep={handleStepper} />,
    1: <TeamCreateStep1 setStep={handleStepper} />,
    2: <TeamCreateStep2 setStep={handleStepper} />,
    3: <TeamCreateStep3 setStep={handleStepper} />,
    4: <TeamCreateStep4 setStep={handleStepper} />,
    5: <TeamCreateStep5 setStep={handleStepper} />,
    6: <TeamCreateStep6 setStep={handleStepper} />,
    7: <TeamCreateFinish />,
  };

  if (!queryStepValue) return null;
  if (queryStepValue === "0" || queryStepValue === "7") {
    return STEP_PAGE[`${queryStepValue}`];
  }
  return (
    <Stepper type="simple" length={6} now={+queryStepValue}>
      {STEP_PAGE[`${queryStepValue}`]}
    </Stepper>
  );
}

export default TeamCreate;
