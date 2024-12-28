"use client";
import React from "react";
import { usePageTitle } from "@/hook/usePageTitle";

function MyAccount() {
  usePageTitle({ title: "계정 관리" });

  return <div>MyAccount</div>;
}

export default MyAccount;
