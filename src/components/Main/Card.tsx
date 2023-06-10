import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useAtom } from "jotai";

import { darkMode } from "@/src/atoms/state";

interface CardPropsType {
    title: string;
    localname?: string;
    link?: string;
    children: JSX.Element;
}

function Card({ title, localname, link, children }: CardPropsType) {
    const [darkModeState] = useAtom(darkMode);
    return (
        <Container>
            <Title>
                <Name dark={darkModeState}>
                    <h3>{title}</h3>
                    {localname && <p className="location">{localname}</p>}
                </Name>
                {link && (
                    <Link href={link}>
                        <ArrowIcon />
                        <ArrowIcon />
                    </Link>
                )}
            </Title>
            <>{children}</>
        </Container>
    );
}

const Container = styled.article`
    margin: 0 4px;
    padding: 24px;
    color: var(--black);
    background-color: var(--white);
    border-radius: 20px;
    box-shadow: 0 0 8px 4px rgba(256, 256, 256, 0.1);
    @media (min-width: 768px) {
        margin: 0;
    }
`;
const Title = styled.div`
    display: flex;
    margin: 0 0 16px;
    padding: 0 0 12px;
    justify-content: space-between;
    align-items: center;
    color: var(--black);
    border-bottom: var(--gnb-border);
`;
const Name = styled.div<{ dark: boolean }>`
    display: flex;
    align-items: center;
    gap: 4px;
    h3 {
        font-size: 1.2rem;
        font-weight: 600;
    }
    .location {
        font-size: 0.85rem;
        opacity: 0.8;
        &::before {
            display: inline-block;
            vertical-align: middle;
            content: "";
            width: 19px;
            height: 16px;
            background-image: url("/assets/icons/location_icon.svg");
            background-size: 18px;
            background-position: left;
            background-repeat: no-repeat;
            opacity: 0.7;
            filter: invert(${(props) => (props.dark ? 1 : 0)});
        }
    }
`;
const ArrowIcon = styled.i`
    display: inline-block;
    margin-left: -6px;
    width: 18px;
    height: 18px;
    background-color: var(--main);
    clip-path: polygon(40% 0, 100% 50%, 40% 100%, 0% 100%, 60% 50%, 0% 0%);
`;

export default Card;
