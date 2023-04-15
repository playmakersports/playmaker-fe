import React from "react";

import GNB from "./partials/GNB";
import Footer from "./partials/Footer";

function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            {children}
            <GNB />
            <Footer />
        </>
    );
}

export default Layout;
