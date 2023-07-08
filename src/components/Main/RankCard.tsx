import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Card from "./Card";

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
        <Card
            title={`${type === "TEAM" ? "팀" : "선수"} 랭킹`}
            localname={localname}
            link={`/rank/${type.toLowerCase()}?location=${localId}`}
        >
            <RankList>
                {list.map((v: any, i: number) => (
                    <RankItem key={i} position={i === RankOrder}>
                        {v.rank === 1 ? (
                            <img src="/assets/icons/crown_icon_color.svg" alt="1위" className="ranking-first" />
                        ) : (
                            <span className="ranking">{v.rank}위</span>
                        )}
                        <span className="name">{v.name}</span>
                        <span className="card-number percent">12%</span>
                        <span className="card-number point">{v.point}</span>
                    </RankItem>
                ))}
            </RankList>
        </Card>
    );
}

const RankList = styled.ul`
    display: flex;
    margin: 0 4px 0 0;
    flex-direction: column;
    gap: 2px;
`;
const RankItem = styled.li<{ position: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    height: 36px;
    .ranking {
        display: inline-block;
        padding: 3px 0;
        width: 36px;
        color: ${({ theme }) => theme.color.gray4};
        background-color: ${({ theme }) => theme.color.background};
        border-radius: 12px;
        font-size: 0.75rem;
        text-align: center;
        transition: all 0.3s;
    }
    .ranking-first {
        width: 36px;
        height: 28px;
        object-fit: contain;
    }
    .name {
        display: inline-block;
        width: 45%;
        font-size: 0.9rem;
        font-weight: ${(props) => (props.position ? 600 : 0)};
        text-align: center;
        transition: font-weight 0.25s;
    }
    .card-number {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        color: ${({ theme }) => theme.color.gray3};
        font-size: 0.85rem;
        font-weight: 500;
        text-align: center;
        transition: all 0.3s;
        letter-spacing: -0.35px;
        &::before {
            font-size: 0.6rem;
            font-weight: 400;
            color: ${({ theme }) => theme.color.gray2};
        }
    }
    .percent::before {
        content: "승률";
    }
    .point::before {
        content: "포인트";
    }
`;

export default RankCard;
