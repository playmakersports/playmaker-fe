import React from "react";
import Toast from "./Toast";
import ConfirmProvider from "./ConfirmProvider";

function GlobalComponents({ children }: { children: React.ReactNode }) {
  return (
    <ConfirmProvider>
      <Toast />
      {children}
    </ConfirmProvider>
  );
}

export default GlobalComponents;
