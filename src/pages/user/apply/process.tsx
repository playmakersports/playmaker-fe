import React, { useEffect } from "react";

import JoinStep from "@/components/User/JoinStep";
import { useRouter } from "next/router";

function Process() {
  const router = useRouter();
  useEffect(() => {
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, step: 0 },
    });
  }, []);

  return <JoinStep />;
}

export default Process;
