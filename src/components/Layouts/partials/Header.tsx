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
        <Container dark={darkModeState} nowPath={nowPath === "/"}>
            <Contents>
                {nowPath === "/" && <Logo dark={darkModeState} />}
                {nowPath !== "/" && <PageName>{pathHeader[nowPath]}</PageName>}
                <RightBtns>
                    <LocationBtn
                        path={nowPath === "/"}
                        dark={darkModeState}
                        onClick={() => setShowLocationMenu((prev) => !prev)}
                    >
                        안양시
                    </LocationBtn>
                    <MainBtn
                        path={nowPath === "/"}
                        dark={darkModeState}
                        onClick={() => setShowListMenu((prev) => !prev)}
                    >
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
const RightBtns = styled.ul`
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    color: var(--black);
`;
const MainBtn = styled.button<{ path: boolean; dark: boolean }>`
    position: relative;
    display: block;
    width: 30px;
    height: 18px;
    i {
        position: absolute;
        height: 3px;
        right: 0;
        background-color: ${(props) => (props.dark && props.path ? "var(--black)" : "#000")};
        transition: width 0.35s;
        &:first-of-type {
            width: 100%;
            top: 0;
        }
        &:nth-of-type(2) {
            width: 60%;
            top: 50%;
            transform: translateY(-50%);
        }
        &:last-of-type {
            width: 85%;
            bottom: 0;
        }
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
const LocationBtn = styled.button<{ path: boolean; dark: boolean }>`
    display: flex;
    padding: 3px 8px;
    align-items: center;
    gap: 2px;
    color: ${(props) => (props.dark && props.path ? "var(--black)" : "#000")};
    border: 1px solid ${(props) => (props.dark && props.path ? "var(--black)" : "#000")};
    border-radius: 20px;
    font-size: 0.8rem;
    &::before {
        content: "";
        background-image: url("/assets/icons/location_icon.svg");
        width: 16px;
        height: 20px;
        background-size: 17px;
        background-position: center;
        background-repeat: no-repeat;
        filter: invert(${(props) => (props.dark && props.path ? 1 : 0)});
    }
`;

const DarkBtn = styled.button``;

export default Header;
