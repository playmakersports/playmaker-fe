import React from "react";
import { useRouter } from "next/router";

import MobileView from "./Container/MobileView";
import PcView from "./Container/PcView";
import PushRequestModal from "../Methods_Temp/PushRequestModal";

function Layout({ children }: { children: JSX.Element }) {
  const router = useRouter();
  const isStaffPcView = router.pathname.split("/")[1] === "staff";

  if (isStaffPcView) {
    return <PcView>{children}</PcView>;
  }
  return (
    <MobileView>
      <>
        <PushRequestModal />
        {children}
      </>
    </MobileView>
  );
}

export default Layout;
