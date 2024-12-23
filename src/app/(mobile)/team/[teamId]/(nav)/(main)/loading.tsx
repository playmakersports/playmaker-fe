import React from "react";

function TeamMainLoading() {
  return (
    <>
      <div
        className="loading-ui"
        style={{
          marginTop: "calc(-1 * var(--safe-area-top))",
          width: "100%",
          height: " calc(232px + var(--env-sat))",
        }}
      />
      <div style={{ display: "flex", marginTop: "22px", padding: "24px 20px" }}>
        <div className="loading-ui" style={{ width: "74px", height: "74px", borderRadius: "50%" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "4px 0px 0px 20px" }}>
          <div className="loading-ui" style={{ width: "170px", height: "20px", borderRadius: "5px" }} />
          <div className="loading-ui" style={{ width: "170px", height: "20px", borderRadius: "5px" }} />
        </div>
      </div>
    </>
  );
}

export default TeamMainLoading;
