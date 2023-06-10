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
            title={`NOW ${type === "TEAM" ? "팀" : "선수"} 랭킹`}
            localname={localname}
            link={`/rank/${type.toLowerCase()}?location=${localId}`}
        >
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
        </Card>
    );
}

const RankList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;
const RankItem = styled.li<{ position: boolean }>`
    padding: 4px 4px 12px;
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
