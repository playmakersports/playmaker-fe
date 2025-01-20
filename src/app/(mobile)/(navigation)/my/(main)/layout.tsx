"use client";
import React, { Suspense, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import { usePageTitle } from "@/hook/usePageTitle";
import useStickyMoment from "@/hook/useStickyMoment";

import MyProfile from "../_components/MyProfile";
import MyTabLoading from "./loading";
import TabList from "@/components/common/TabList";

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
      <header style={{ display: "flex", margin: "10px 0 20px", flexDirection: "column", gap: "24px" }}>
        <MyProfile />
      </header>
      <TabWrapper ref={tabRef}>
        <TabList>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : ""}>
              {link.label}
            </Link>
          ))}
        </TabList>
      </TabWrapper>
      <section style={{ padding: "24px 16px calc(var(--env-sab) + 100px)" }}>
        <Suspense fallback={<MyTabLoading />}>{children}</Suspense>
      </section>
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
