import React from "react";

import Header from "./partials/Header";
import GNB from "./partials/GNB";
import Footer from "./partials/Footer";

function Layout({ children }: { children: JSX.Element }) {
    return (
        <div className="contents" style={{ minHeight: "100vh" }}>
            <Header />
            <main className="main-conatiner">{children}</main>
            <GNB />
            <Footer />
        </div>
    );
}

export default Layout;
