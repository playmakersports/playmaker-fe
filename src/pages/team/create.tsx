import React, { ReactElement, useEffect } from "react";
import { useResetAtom } from "jotai/utils";
import { useRouter } from "next/router";

import { resetAtomTeamCreate } from "@/atom/team";
import useBgWhite from "@/hook/useBgWhite";
import TeamCreateStart from "@/components/Team/Create/TeamCreateStart";
import TeamCreateStep1 from "@/components/Team/Create/TeamCreateStep1";
import TeamCreateStep2 from "@/components/Team/Create/TeamCreateStep2";
import TeamCreateStep3 from "@/components/Team/Create/TeamCreateStep3";
import TeamCreateStep4 from "@/components/Team/Create/TeamCreateStep4";
import TeamCreateStep5 from "@/components/Team/Create/TeamCreateStep5";
import Stepper from "@/components/common/Stepper";

function TeamCreate() {
  useBgWhite();
  const router = useRouter();
  const resetServiceApply = useResetAtom(resetAtomTeamCreate);
  const queryStepValue = router.query.step;

  const handleStepper = (target: number) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, step: target },
    });
  };

  useEffect(() => {
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, step: 0 },
    });
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
  };

  if (!queryStepValue) return null;
  if (router.query.step === "0") {
    return STEP_PAGE[`${router.query.step}`];
  }
  return (
    <Stepper type="simple" length={5} now={+queryStepValue}>
      {STEP_PAGE[`${router.query.step}`]}
    </Stepper>
  );
}

export default TeamCreate;
