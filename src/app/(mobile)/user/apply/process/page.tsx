"use client";

import React, { useEffect } from "react";

import JoinStep from "@/components/User/JoinStep";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

function Process() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = new URLSearchParams(useSearchParams().toString());

  useEffect(() => {
    searchParams.set("step", "0");
    router.replace(`${pathname}?${searchParams.toString()}`);
  }, []);

  return <JoinStep />;
}

export default Process;
