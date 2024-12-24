import React from "react";

type Props = {
  children: React.ReactNode;
  underway: React.ReactNode;
  ready: React.ReactNode;
};
function CompetitionLayout({ children, underway, ready }: Props) {
  const isUnderway = false;

  return (
    <>
      {children}
      {isUnderway ? underway : ready}
    </>
  );
}

export default CompetitionLayout;
