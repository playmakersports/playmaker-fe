"use client";
import React from "react";
import { useHeader } from "@/hook/useHeader";

function MyAccount() {
  useHeader({ title: "계정 관리" });

  return <div>MyAccount</div>;
}

export default MyAccount;
