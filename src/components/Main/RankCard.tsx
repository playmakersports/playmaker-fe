import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

interface RankCardPropsType {
    type: string;
    localId: string;
    localname: string;
    list: any;
}

function RankCard({ type, localId, localname, list }: RankCardPropsType) {
    const [RankOrder, setRankOrder] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setRankOrder((prevRankOrder) => (prevRankOrder + 1) % 5);
        }, 1500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container>
            <Wrap>
                <Title>
                    <Name>
                        <i className="direction-icon"></i>
                        <i className="direction-icon"></i>
                        <h3>
                            NOW
                            <br />
                            {type === "TEAM" ? "팀" : "선수"} 랭킹
                        </h3>
                        <p className="location">{localname}</p>
                    </Name>
                    <Link href={`/rank/${localId}/team`}>
                        <span>더보기</span>
                    </Link>
                </Title>
                <RankList>
                    {list.map((v: any, i: number) => (
                        <RankItem key={i} position={i === RankOrder}>
                            <span className="numbers ranking">{v.rank}</span>
                            <span className="name">{v.name}</span>
                            <span className="numbers win-percent">12%</span>
                            <span className="numbers point">{v.point}</span>
                        </RankItem>
                    ))}
                </RankList>
            </Wrap>
        </Container>
    );
}

const Container = styled.article`
    color: var(--black);
    margin: 0 -16px;
    @media (min-width: 768px) {
        margin: 0;
    }
`;
const Wrap = styled.div`
    display: flex;
    padding: 0 24px;
    @media (min-width: 768px) {
        padding: 0;
    }
`;

const Title = styled.div`
    float: left;
    width: 112px;
    margin: 0 0 16px;
    color: var(--black);
    span {
        font-size: 0.95rem;
        opacity: 0.65;
    }
`;

const Name = styled.div`
    .direction-icon {
        display: inline-block;
        margin-right: -12px;
        width: 24px;
        height: 24px;
        background-color: var(--main);
        clip-path: polygon(40% 0, 100% 50%, 40% 100%, 0% 100%, 60% 50%, 0% 0%);
    }
    h3 {
        margin: 4px 0 0 0;
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 1.85rem;
    }
    .location {
        margin: 8px 0;
        font-size: 1.15rem;
    }
`;

const RankList = styled.ul`
    flex: 1;
`;
const RankItem = styled.li<{ position: boolean }>`
    margin: 0 0 8px;
    padding: 20px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--alert-bg);
    color: #000;
    border-radius: 8px;
    box-shadow: ${(props) =>
        props.position ? "0 0 8px 12px rgba(0, 0, 0, 0.02)" : "none"};
    transform: scale(${(props) => (props.position ? 1 : 0.9)});
    transform-origin: right;
    transition: all 0.3s;
    span {
        flex: 1;
        text-align: center;
    }
    .ranking {
        flex: 0.4;
        font-size: ${(props) => (props.position ? "1.3rem" : "1.15rem")};
        font-weight: ${(props) => (props.position ? 600 : 0)};
    }
    .name {
        flex: 2;
        font-size: 1.2rem;
        font-weight: ${(props) => (props.position ? 600 : 0)};
    }
    .win-percent,
    .point {
        font-size: ${(props) => (props.position ? "1.3rem" : "1.15rem")};
        font-weight: ${(props) => (props.position ? 600 : 0)};
    }
    &:last-of-type {
        border: none;
    }
`;

export default RankCard;
