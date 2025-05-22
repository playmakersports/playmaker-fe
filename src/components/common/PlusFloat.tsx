import React from "react";
import Link from "next/link";

import PlusIcon from "@/assets/icon/common/Plus.svg";

function PlusFloat({ linkTo, blind }: { linkTo: string; blind?: string }) {
  return (
    <Link
      prefetch={true}
      href={linkTo}
      style={{
        backgroundColor: "var(--primary500)",
        borderRadius: "50%",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        marginBottom: "16px",
        right: "calc(50vw - var(--mobile-max-width) / 2 + var(--global-lr-padding))",
        bottom: "var(--safe-bottom-navigation)",
        boxShadow: "var(--shadow-sm)",
        zIndex: 5,
      }}
    >
      {blind && <span className="blind">{blind}</span>}
      <PlusIcon width={24} height={24} fill="var(--white)" />
    </Link>
  );
}

export default PlusFloat;
