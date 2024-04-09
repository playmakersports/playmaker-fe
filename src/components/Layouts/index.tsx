import React, { useEffect, useRef } from "react";
import { ThemeProvider } from "@emotion/react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

import { darkMode } from "@/src/atoms/user";
import { DarkTheme, LightTheme } from "@/src/styles/theme";

import Header from "./partials/Header";
import GNB from "./partials/GNB";
import Footer from "./partials/Footer";

function Layout({ children }: { children: JSX.Element }) {
    const [darkModeState] = useAtom(darkMode);
    const container = useRef<HTMLDivElement>(null);
    const { asPath } = useRouter();

    useEffect(() => {
        container.current?.scrollTo(0, 0);
    }, [asPath]);

    return (
        <ThemeProvider theme={darkModeState ? DarkTheme : LightTheme}>
            <div ref={container} className="contents" style={{ minHeight: "100vh", paddingTop: "64px" }}>
                <Header />
                <main className="main-container">{children}</main>
                <GNB />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default Layout;
