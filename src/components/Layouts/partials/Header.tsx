import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useAtom } from "jotai";

import { darkMode } from "@/src/atoms/state";
import { Backdrop, Menus } from "../style";

function Header() {
    const [showLocationMenu, setShowLocationMenu] = useState(false);
    const [showListMenu, setShowListMenu] = useState(false);
    const router = useRouter();
    const nowPath = router.pathname;
    const pathHeader: { [key: string]: string } = {
        "/player/[id]/playlog": "경기 기록",
        "/team": "팀 정보",
        "/rank": "우리 동네 순위",
        "/user/join": "회원가입",
        "/user/login": "로그인",
        "/find/yongbyung": "용병 모집 현황",
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
        <Container nowPath={nowPath === "/"}>
            <Contents>
                {nowPath !== "/" && <BackBtn type="button" onClick={() => router.back()} />}
                {nowPath === "/" && (
                    <Logo>
                        <img
                            src={
                                darkModeState
                                    ? "/logotype/LogoType2LinesColor.svg"
                                    : "/logotype/LogoType2LinesBlack.svg"
                            }
                            alt="Logo"
                        />
                    </Logo>
                )}
                {nowPath !== "/" && <PageName>{pathHeader[nowPath]}</PageName>}
                <RightBtns>
                    {nowPath === "/" && (
                        <LocationBtn onClick={() => setShowLocationMenu((prev) => !prev)}>안양시</LocationBtn>
                    )}
                    <MainBtn onClick={() => setShowListMenu((prev) => !prev)}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </MainBtn>
                    {showLocationMenu && (
                        <>
                            <Menus onClick={() => setShowLocationMenu((prev) => !prev)}>
                                <ul className="change-location-menu">
                                    <li className="checked">경기도 안양시</li>
                                    <li>경기도 성남시분당구</li>
                                </ul>
                            </Menus>
                            <Backdrop onClick={() => setShowLocationMenu((prev) => !prev)} />
                        </>
                    )}
                    {showListMenu && (
                        <>
                            <Menus onClick={() => setShowListMenu((prev) => !prev)}>
                                <DarkBtn type="button" onClick={handleLightMode}>
                                    다크모드
                                </DarkBtn>
                            </Menus>
                            <Backdrop onClick={() => setShowListMenu((prev) => !prev)} />
                        </>
                    )}
                </RightBtns>
            </Contents>
        </Container>
    );
}

const Container = styled.header<{ nowPath: boolean }>`
    position: sticky;
    top: 0;
    height: 60px;
    background-color: ${({ theme }) => theme.color.background};
    z-index: 10;
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
`;

const Contents = styled.div`
    margin: 0 auto;
    display: flex;
    padding: 8px 16px;
    max-width: 1024px;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 768px) {
        padding: 8px 20px;
    }
`;

const BackBtn = styled.button`
    width: 24px;
    height: 24px;
    background-image: url("/assets/icons/arrow_left_icon_black.svg");
    filter: ${({ theme }) => theme.filter.invert};
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 88px;
    }
    @media (min-width: 768px) {
        img {
            width: 116px;
        }
    }
`;

const PageName = styled.p`
    margin: 3px 0 0;
    font-size: 1.15rem;
    font-weight: 500;
`;
const RightBtns = styled.ul`
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
`;
const MainBtn = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 36px;
    height: 36px;
    padding: 10.5px 9px;
    background-color: ${({ theme }) => theme.color.main};
    border-radius: 100%;
    i {
        width: 100%;
        height: 3px;
        right: 0;
        background-color: #333;
        border-radius: 2px;
        transition: width 0.35s;
    }
    &:hover {
        i {
            &:first-of-type {
                width: 85%;
            }
            &:nth-of-type(2) {
                width: 100%;
            }
            &:last-of-type {
                width: 60%;
            }
        }
    }
`;
const LocationBtn = styled.button`
    display: inline-flex;
    padding: 3px 8px;
    align-items: center;
    gap: 2px;
    color: ${({ theme }) => theme.color.gray4};
    font-size: 0.8rem;
    font-weight: 500;
    &::before {
        content: "";
        background-image: url("/assets/icons/location_icon.svg");
        width: 16px;
        height: 20px;
        background-size: 17px;
        background-position: center;
        background-repeat: no-repeat;
        filter: ${({ theme }) => theme.filter.invert};
        opacity: 0.65;
    }
`;

const DarkBtn = styled.button`
    color: #000;
`;

export default Header;
