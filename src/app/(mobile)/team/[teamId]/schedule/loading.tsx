import React from "react";

function ScheduleLoading() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "12px",
          marginBottom: "16px",
          padding: "0 16px",
        }}
      >
        <div className="skeleton-loading-ui" style={{ width: "120px", height: "32px", borderRadius: "12px" }} />
        <div className="skeleton-loading-ui" style={{ width: "100px", height: "32px", borderRadius: "12px" }} />
      </div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "56px", padding: "0 16px" }}>
        <div className="skeleton-loading-ui" style={{ flex: 1, height: "76px", borderRadius: "12px" }} />
        <div className="skeleton-loading-ui" style={{ flex: 1, height: "76px", borderRadius: "12px" }} />
        <div className="skeleton-loading-ui" style={{ flex: 1, height: "76px", borderRadius: "12px" }} />
        <div className="skeleton-loading-ui" style={{ flex: 1, height: "76px", borderRadius: "12px" }} />
        <div className="skeleton-loading-ui" style={{ flex: 1, height: "76px", borderRadius: "12px" }} />
        <div className="skeleton-loading-ui" style={{ flex: 1, height: "76px", borderRadius: "12px" }} />
        <div className="skeleton-loading-ui" style={{ flex: 1, height: "76px", borderRadius: "12px" }} />
      </div>
      <div style={{ padding: "0 16px" }}>
        <div
          className="skeleton-loading-ui"
          style={{ width: "100%", height: "120px", marginBottom: "28px", borderRadius: "12px" }}
        />
        <div className="skeleton-loading-ui" style={{ width: "100%", height: "120px", borderRadius: "12px" }} />
      </div>
    </>
  );
}

export default ScheduleLoading;
