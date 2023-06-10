import React from "react";
import styled from "@emotion/styled";

import Link from "next/link";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { darkMode } from "@/src/atoms/state";

function GNB() {
    const [darkModeState] = useAtom(darkMode);
    const router = useRouter();

    return (
        <Container>
            <Item dark={darkModeState}>
                <Link href="/team">
                    <Text icon="/assets/GNB/soccer_field_icon.svg">소속팀</Text>
                </Link>
            </Item>
            <MainBtn dark={darkModeState} onClick={() => router.push("/")}>
                <i />
            </MainBtn>
            <HideBg />
            <Item dark={darkModeState}>
                <Link href="/player">
                    <Text icon="/assets/GNB/whistle_icon.svg">플레이어</Text>
                </Link>
            </Item>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    display: flex;
    bottom: 0%;
    width: 100%;
    height: 56px;
    z-index: 10;
    gap: 40px;
    @media (max-width: 768px) {
        align-items: top;
        left: 0%;
    }
    @media (min-width: 768px) {
        margin: 0 16px 36px;
        align-items: center;
        padding: 0 24px;
        width: 420px;
        right: 0%;
    }
`;

const MainBtn = styled.div<{ icon?: string; dark: boolean }>`
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 50%;
    background-color: var(--gnb-bg);
    width: 48px;
    height: 48px;
    transform: translate(-50%, -4px);
    border-radius: 100%;
    box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.15);
    z-index: 1;
    i {
        display: inline-block;
        width: 48px;
        height: 48px;
        background-image: url("/assets/GNB/soccer_ball_icon.svg");
        background-position: center;
        background-size: 48px;
        background-repeat: no-repeat;
        filter: invert(${(props) => (props.dark ? 1 : 0)});
    }
`;
const HideBg = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 1px);
    background-color: var(--gnb-bg);
    width: 52px;
    height: 30px;
`;
const Item = styled.div<{ icon?: string; dark: boolean }>`
    padding: 6px 0;
    flex: 1;
    background-color: var(--gnb-bg);
    border-top: var(--gnb-border);
    box-shadow: 1px 0 12px 4px rgba(0, 0, 0, 0.02);
    overflow: hidden;
    border-top: var(--gnb-border);

    color: #404040;
    text-align: center;

    &:first-of-type {
        border-radius: 0 32px 0 0;
        border-right: var(--gnb-border);
    }
    &:last-of-type {
        border-radius: 32px 0 0 0;
        border-left: var(--gnb-border);
    }
    div {
        filter: invert(${(props) => (props.dark ? 1 : 0)});
    }

    @media (min-width: 768px) {
        &:first-of-type {
            border-radius: 40px 32px 0 40px;
            border-right: var(--gnb-border);
            border-left: var(--gnb-border);
        }
        &:last-of-type {
            border-radius: 32px 40px 40px 0;
            border-right: var(--gnb-border);
            border-left: var(--gnb-border);
        }
    }
`;

const Text = styled.div<{ icon: string }>`
    height: 100%;
    background-image: url(${(props) => props.icon});
    background-position: top center;
    background-size: 28px;
    background-repeat: no-repeat;
    padding: 32px 20px 0;
    font-size: 0.8rem;
`;

export default GNB;
