import React, { useState } from "react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

import { darkMode } from "@/src/atoms/state";
import { Backdrop, Menus } from "../Layouts/style";

interface ITeamLayoutType {
    teamName: string;
    title: string;
    color: string;
    children: React.ReactNode;
}

function TeamLayout({ teamName, title, color, children }: ITeamLayoutType) {
    const router = useRouter();
    const [showListMenu, setShowListMenu] = useState(false);
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
        <>
            <Header color={color}>
                <div className="header-left-wrap">
                    <BackBtn type="button" onClick={() => router.back()} />
                    <NameBox>
                        <p className="team-name">{teamName}</p>
                        <p className="board-title">{title}</p>
                    </NameBox>
                </div>
                <MainBtn onClick={() => setShowListMenu((prev) => !prev)}>
                    <i></i>
                    <i></i>
                    <i></i>
                </MainBtn>
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
            </Header>
            <Contents>{children}</Contents>
        </>
    );
}

const Header = styled.header<{ color: string }>`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    max-width: 1024px;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 16px;
    color: #fff;
    background-color: ${({ color }) => color};
    z-index: 1;
    .header-left-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;
const BackBtn = styled.button`
    display: inline-block;
    width: 32px;
    height: 32px;
    background-image: url("/assets/icons/arrow_left_icon.svg");
    background-size: 24px;
    background-position: center left;
    background-repeat: no-repeat;
`;
const NameBox = styled.div`
    .team-name {
        margin: 0 0 4px;
        font-size: 0.85rem;
        opacity: 0.9;
    }
    .board-title {
        font-size: 1rem;
        font-weight: 500;
    }
`;
const Contents = styled.section`
    margin: 64px 0 0;
    padding: 20px 16px;
`;

const MainBtn = styled.button`
    position: relative;
    display: block;
    width: 30px;
    height: 18px;
    i {
        position: absolute;
        height: 3px;
        right: 0;
        background-color: #fff;
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

const DarkBtn = styled.button``;

export default TeamLayout;
