import React from "react";

function TeamMainLoading() {
  return (
    <>
      <div
        className="skeleton-loading-ui"
        style={{
          marginTop: "calc(-1 * var(--safe-area-top))",
          width: "100%",
          height: " calc(200px + var(--env-sat))",
        }}
      />
      <div style={{ display: "flex", marginTop: "28px", padding: "24px 20px" }}>
        <div className="skeleton-loading-ui" style={{ width: "58px", height: "58px", borderRadius: "50%" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "4px 0px 0px 20px" }}>
          <div className="skeleton-loading-ui" style={{ width: "100px", height: "20px", borderRadius: "5px" }} />
          <div className="skeleton-loading-ui" style={{ width: "220px", height: "20px", borderRadius: "5px" }} />
          <div className="skeleton-loading-ui" style={{ width: "140px", height: "20px", borderRadius: "5px" }} />
        </div>
      </div>
    </>
  );
}

export default TeamMainLoading;
