import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import PageBar from "./components/PageBar";
import MainBar from "./components/MainBar";

function Header() {
    const router = useRouter();
    const nowPath = router.pathname;

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
        };
    }, []);

    if (nowPath === "/") {
        return (
            <HeaderContainer nowScrollY={scrollY}>
                <MainBar />
            </HeaderContainer>
        );
    }

    return (
        <HeaderContainer nowScrollY={scrollY} transparent={nowPath === "/player/[id]"}>
            <PageBar />
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header<{ nowScrollY: number; transparent?: boolean }>`
    position: fixed;
    width: 100vw;
    height: 64px;
    top: 0;
    background-color: ${({ transparent, theme }) => (transparent ? "transparent" : theme.color.background)};
    box-shadow: ${({ nowScrollY }) => nowScrollY > 10 && "0 0 10px 4px rgba(0, 0, 0, 0.2)"};
    z-index: 10;
    transition: box-shadow 0.3s;
`;

export default Header;
