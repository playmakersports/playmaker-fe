import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

function GNB() {
    const router = useRouter();

    return (
        <Container>
            <Item>
                <Link href="/team">
                    <Text icon="/assets/GNB/soccer_field_icon.svg">소속팀</Text>
                </Link>
            </Item>
            <MainBtn onClick={() => router.push("/")}>
                <i />
            </MainBtn>
            <HideBg />
            <Item>
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
    }
    @media (min-width: 768px) {
        left: 50%;
        align-items: center;
        width: 1024px;
        transform: translateX(-50%);
    }
`;

const MainBtn = styled.div<{ icon?: string }>`
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 50%;
    background-color: ${({ theme }) => theme.color.background};
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
        filter: ${({ theme }) => theme.filter.invert};
    }
`;
const HideBg = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 1px);
    background-color: ${({ theme }) => theme.color.background};
    width: 52px;
    height: 30px;
`;
const Item = styled.div<{ icon?: string }>`
    flex: 1;
    padding: 6px 0;
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.background};
    border-top: 1px solid ${({ theme }) => theme.color.gray1};
    box-shadow: 1px 0 12px 4px rgba(0, 0, 0, 0.02);
    color: #404040;
    text-align: center;

    &:first-of-type {
        border-radius: 0 32px 0 0;
        border-right: 1px solid ${({ theme }) => theme.color.gray1};
    }
    &:last-of-type {
        border-radius: 32px 0 0 0;
        border-left: 1px solid ${({ theme }) => theme.color.gray1};
    }
    div {
        filter: ${({ theme }) => theme.filter.invert};
    }

    @media (min-width: 768px) {
        &:first-of-type {
            border-radius: 40px 32px 0 40px;
            border-right: 1px solid ${({ theme }) => theme.color.gray1};
            border-left: 1px solid ${({ theme }) => theme.color.gray1};
        }
        &:last-of-type {
            border-radius: 32px 40px 40px 0;
            border-right: 1px solid ${({ theme }) => theme.color.gray1};
            border-left: 1px solid ${({ theme }) => theme.color.gray1};
        }
    }
`;

const Text = styled.div<{ icon: string }>`
    height: 100%;
    background-image: url(${({ icon }) => icon});
    background-position: top center;
    background-size: 28px;
    background-repeat: no-repeat;
    padding: 32px 20px 0;
    font-size: 1.3rem;
`;

export default GNB;
