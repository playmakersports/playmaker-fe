import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "팀 생성",
};
function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default layout;
