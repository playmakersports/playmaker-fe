import React from "react";
import { ThemeProvider } from "@emotion/react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

import { darkMode } from "@/src/atoms/state";
import { DarkTheme, LightTheme } from "@/src/styles/theme";

import Header from "./partials/Header";
import GNB from "./partials/GNB";
import Footer from "./partials/Footer";

function Layout({ children }: { children: JSX.Element }) {
    const [darkModeState] = useAtom(darkMode);
    const router = useRouter();
    const place = router.pathname.split("/").slice(1);

    return (
        <ThemeProvider theme={darkModeState ? DarkTheme : LightTheme}>
            <div className="contents" style={{ minHeight: "100vh" }}>
                {(place[0] !== "team" || place[1] === "create") && <Header />}
                <main className="main-conatiner">{children}</main>
                <GNB />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default Layout;
