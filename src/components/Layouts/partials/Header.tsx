import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import PageBar from "./components/PageBar";
import MainBar from "./components/MainBar";

function Header() {
    const { pathname } = useRouter();

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
        };
    }, []);

    if (pathname === "/") {
        return (
            <HeaderContainer scroll={scroll}>
                <MainBar />
            </HeaderContainer>
        );
    }
    if (pathname === "/player/[id]") {
        return (
            <HeaderContainer scroll={scroll} transparent={!scroll}>
                <PageBar transparent={!scroll} />
            </HeaderContainer>
        );
    }

    return (
        <HeaderContainer scroll={scroll}>
            <PageBar />
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header<{ scroll: boolean; transparent?: boolean }>`
    position: fixed;
    width: 100vw;
    height: 64px;
    top: 0;
    background-color: ${({ transparent, theme }) => (transparent ? "transparent" : theme.color.background)};
    box-shadow: ${({ scroll }) => scroll && "0 0 10px 4px rgba(0, 0, 0, 0.2)"};
    z-index: 10;
    transition: box-shadow 0.3s, background-color 0.3s;
`;

export default Header;
