import React from "react";

function ScheduleLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

export default ScheduleLayout;
