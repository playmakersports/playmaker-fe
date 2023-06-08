import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import Link from "next/link";

import { darkMode } from "@/src/atoms/state";

interface RankCardPropsType {
    type: string;
    localId: string;
    localname: string;
    list: any;
}

function RankCard({ type, localId, localname, list }: RankCardPropsType) {
    const [darkModeState] = useAtom(darkMode);
    const [RankOrder, setRankOrder] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setRankOrder((prevRankOrder) => (prevRankOrder + 1) % 5);
        }, 1500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container>
            <Title>
                <Name dark={darkModeState}>
                    <h3>NOW {type === "TEAM" ? "팀" : "선수"} 랭킹</h3>
                    <p className="location">{localname}</p>
                </Name>
                <Link href={`/rank/${localId}/team`}>
                    <ArrowIcon />
                    <ArrowIcon />
                </Link>
            </Title>
            <RankList>
                {list.map((v: any, i: number) => (
                    <RankItem key={i} position={i === RankOrder}>
                        <span className="numbers ranking">{v.rank}</span>
                        <span className="name">{v.name}</span>
                        <span className="numbers win-percent">12%</span>
                        <span className="numbers point">{v.point}(+11)</span>
                    </RankItem>
                ))}
            </RankList>
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
    margin: 0 0 20px;
    justify-content: space-between;
    align-items: center;
    color: var(--black);
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
            background-image: url(${(props) => `/assets/icons/location_icon.svg`});
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
    margin-right: -6px;
    width: 18px;
    height: 18px;
    background-color: var(--main);
    clip-path: polygon(40% 0, 100% 50%, 40% 100%, 0% 100%, 60% 50%, 0% 0%);
`;

const RankList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;
const RankItem = styled.li<{ position: boolean }>`
    padding: 8px 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: scale(${(props) => (props.position ? 1 : 0.95)});
    opacity: ${(props) => (props.position ? 1 : 0.7)};
    transition: all 0.3s;
    span {
        flex: 1;
        text-align: center;
    }
    .ranking {
        flex: 0.4;
        font-size: ${(props) => (props.position ? "1.2rem" : "1rem")};
        font-weight: ${(props) => (props.position ? 600 : 0)};
        transition: all 0.3s;
    }
    .name {
        flex: 2;
        font-size: ${(props) => (props.position ? "1.1rem" : "1rem")};
        font-weight: ${(props) => (props.position ? 600 : 0)};
        transition: all 0.3s;
    }
    .win-percent,
    .point {
        font-size: ${(props) => (props.position ? "1.2rem" : "1rem")};
        font-weight: ${(props) => (props.position ? 600 : 0)};
        transition: all 0.3s;
    }
    &:last-of-type {
        border: none;
    }
`;

export default RankCard;
