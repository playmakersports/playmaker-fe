"use client";
import React, { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import { usePageTitle } from "@/hook/usePageTitle";
import useStickyMoment from "@/hook/useStickyMoment";

import MyTabNav from "../_components/MyTabNav";
import MyProfile from "../_components/MyProfile";

function MyTabLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const tabRef = useRef<HTMLDivElement>(null);
  usePageTitle({
    scrolledShadow: false,
  });
  useStickyMoment(tabRef);
  const pathname = usePathname();

  const links = [
    { href: "/my", label: "마이" },
    { href: "/my/team", label: "모임" },
    { href: "/my/feed", label: "피드" },
  ];

  return (
    <>
      <header style={{ display: "flex", marginBottom: "20px", flexDirection: "column", gap: "24px" }}>
        <MyProfile />
      </header>
      <TabWrapper ref={tabRef}>
        <MyTabNav>
          {links.map((link) => (
            <li
              role="tab"
              key={link.href}
              onClick={() => router.push(link.href)}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </li>
          ))}
        </MyTabNav>
      </TabWrapper>
      <section style={{ padding: "24px 16px calc(var(--env-sab) + 100px)" }}>{children}</section>
    </>
  );
}

const TabWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  &.stuck {
    background-color: var(--background-light);
  }
`;

export default MyTabLayout;
