"use client";

import React from "react";
import LoadingAnimatedSvg from "@/assets/icon/global/LoadingSpinner.svg";

type Props = {
  page?: boolean;
};
function Loading(props: Props) {
  const { page = false } = props;

  if (page) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
          width: "100%",
          height: "100%",
          background: "rgba(var(--background-rgb), 0.6)",
          zIndex: 10,
        }}
      >
        <LoadingAnimatedSvg width={60} height={120} />
      </div>
    );
  }
  return (
    <div style={{ display: "block", margin: "0 auto", height: "120px" }}>
      <LoadingAnimatedSvg width={60} height={120} />
    </div>
  );
}

export default Loading;
