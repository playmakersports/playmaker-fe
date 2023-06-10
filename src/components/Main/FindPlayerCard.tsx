import React from "react";
import Card from "./Card";
import styled from "@emotion/styled";

interface FindPlayerCardPropsType {
    localId: string;
    localname: string;
    list: any;
}

function FindPlayerCard({ localId, localname, list }: FindPlayerCardPropsType) {
    return (
        <Card title="용병 급구" localname={localname} link={`/find/yongbyung?location=${localId}`}>
            <RankList>
                {list.map((item: any, index: number) => (
                    <RankItem key={index}>
                        <p className="find-team-name">{item.teamname}</p>
                        <p className="find-play-info">
                            {item.playAt}
                            <br />
                            {item.playground}
                        </p>
                        <p className="find-player-number">{item.findNum}명</p>
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
const RankItem = styled.li`
    padding: 0 6px 12px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    p {
        font-size: 0.9rem;
        line-height: 1.2rem;
    }
    .find-team-name {
        flex: 1.2;
        font-weight: 500;
    }
    .find-play-info {
        flex: 2;
        font-size: 0.9rem;
        opacity: 0.8;
    }
    .find-player-number {
        flex: 0.5;
        opacity: 0.8;
        text-align: right;
    }
    &:last-of-type {
        padding-bottom: 0;
    }
`;

export default FindPlayerCard;
