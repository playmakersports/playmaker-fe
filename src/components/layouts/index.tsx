import React, { useEffect } from "react";
import { useRouter } from "next/router";

import MobileView from "./Container/MobileView";
import PcView from "./Container/PcView";

function Layout({ children }: { children: JSX.Element }) {
  const router = useRouter();
  const isStaffPcView = router.pathname.split("/")[1] === "staff";
  // useEffect(() => {
  //   container.current?.scrollTo(0, 0);
  // }, [router.asPath]);

  if (isStaffPcView) {
    return <PcView>{children}</PcView>;
  }
  return <MobileView>{children}</MobileView>;
}

export default Layout;
