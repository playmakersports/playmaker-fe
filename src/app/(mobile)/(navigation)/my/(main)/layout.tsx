"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MyTabNav from "../_components/MyTabNav";
import MyProfile from "../_components/MyProfile";

function MyTabLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const links = [
    { href: "/my", label: "마이" },
    { href: "/my/team", label: "모임" },
    { href: "/my/feed", label: "피드" },
  ];

  return (
    <>
      <header style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <MyProfile />
        <MyTabNav>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : ""}>
              {link.label}
            </Link>
          ))}
        </MyTabNav>
      </header>
      <section style={{ padding: "20px 16px calc(var(--env-sab) + 80px)" }}>{children}</section>
    </>
  );
}

export default MyTabLayout;
