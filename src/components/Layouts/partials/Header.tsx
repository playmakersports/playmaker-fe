import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useAtom } from "jotai";

import { darkMode } from "@/src/atoms/state";

function Header() {
    const router = useRouter();
    const nowPath = router.asPath.slice(1).split("/");
    const pathHeader: { [key: string]: string } = {
        player: "",
        team: "팀 정보",
        rank: "우리 동네 순위",
    };

    const [darkModeState, setDarkModeState] = useAtom(darkMode);
    const handleLightMode = () => {
        const body = document.querySelector("body");
        if (body?.classList.contains("dark")) {
            body?.classList.remove("dark");
            setDarkModeState((prev) => !prev);
        } else {
            body?.classList.add("dark");
            setDarkModeState((prev) => !prev);
        }
    };

    return (
        <Container>
            <Contents>
                {nowPath[0] === "" && <Logo lightModeState={darkModeState} />}
                {nowPath[0] !== "" && <PageName>{pathHeader[nowPath[0]]}</PageName>}
                <ModeHandleButton onClick={handleLightMode}>({darkModeState ? "ON" : "OFF"})</ModeHandleButton>
            </Contents>
        </Container>
    );
}

const Container = styled.header`
    position: sticky;
    top: 0;
    background-color: var(--main);
    z-index: 10;
`;

const Contents = styled.div`
    margin: 0 auto;
    display: flex;
    max-width: 1024px;
    padding: 16px 20px;
    justify-content: space-between;
    @media (min-width: 768px) {
        padding: 8px 20px;
    }
`;
const Logo = styled.div<{ lightModeState: boolean }>`
    width: 120px;
    height: 52px;
    background-size: 120px;
    background-repeat: no-repeat;
    background-position: center left;
    background-image: url("/logotype/LogoType2LinesBlack.svg");
    @media (min-width: 768px) {
        width: 228px;
        height: 60px;
        background-size: 128px;
    }
`;

const PageName = styled.p`
    display: flex;
    align-items: center;
    width: 148px;
    height: 52px;
    font-size: 1.35rem;
    font-weight: 600;
    color: #000;
`;
const ModeHandleButton = styled.p`
    display: flex;
    align-items: center;
`;

export default Header;
