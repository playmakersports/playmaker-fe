import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useAtom } from "jotai";

import { darkMode } from "@/src/atoms/state";

function Header() {
    const router = useRouter();
    const nowPath = router.pathname;
    const pathHeader: { [key: string]: string } = {
        "/player/[id]/playlog": "경기 기록",
        "/team": "팀 정보",
        "/rank": "우리 동네 순위",
        "/user/join": "회원가입",
        "/user/login": "로그인",
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
        <Container dark={darkModeState} nowPath={nowPath === "/"}>
            <Contents>
                {nowPath === "/" && <Logo dark={darkModeState} />}
                {nowPath !== "/" && <PageName>{pathHeader[nowPath]}</PageName>}
                <ModeHandleButton onClick={handleLightMode}>({darkModeState ? "ON" : "OFF"})</ModeHandleButton>
            </Contents>
        </Container>
    );
}

const Container = styled.header<{ dark: boolean; nowPath: boolean }>`
    position: sticky;
    top: 0;
    background-color: ${(props) => (props.dark && props.nowPath ? `var(--bg)` : `var(--main)`)};
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
const Logo = styled.div<{ dark: boolean }>`
    width: 120px;
    height: 52px;
    background-size: 120px;
    background-repeat: no-repeat;
    background-position: center left;
    background-image: url(${(props) => `/logotype/LogoType2Lines${props.dark ? "Color" : "Black"}.svg`});
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
