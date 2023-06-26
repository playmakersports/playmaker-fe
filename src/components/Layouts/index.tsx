import React from "react";
import { useRouter } from "next/router";

import Header from "./partials/Header";
import GNB from "./partials/GNB";
import Footer from "./partials/Footer";

function Layout({ children }: { children: JSX.Element }) {
    const router = useRouter();
    const place = router.pathname.split("/").slice(1);

    return (
        <div className="contents" style={{ minHeight: "100vh" }}>
            {place[0] !== "team" && <Header />}
            <main className="main-conatiner">{children}</main>
            <GNB />
            <Footer />
        </div>
    );
}

export default Layout;
