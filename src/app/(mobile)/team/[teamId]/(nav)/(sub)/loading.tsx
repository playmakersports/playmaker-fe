import React from "react";

function TeamLoading() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "28px 16px 0" }}>
        <div className="skeleton-loading-ui" style={{ width: "320px", height: "20px", borderRadius: "5px" }} />
        <div className="skeleton-loading-ui" style={{ width: "150px", height: "20px", borderRadius: "5px" }} />
        <div className="skeleton-loading-ui" style={{ width: "220px", height: "20px", borderRadius: "5px" }} />
      </div>
    </>
  );
}

export default TeamLoading;
