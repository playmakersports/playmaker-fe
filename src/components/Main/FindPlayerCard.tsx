import React from "react";
import Card from "./Card";
import styled from "@emotion/styled";

interface Props {
    localId: string;
    localName: string;
    list: any;
}

function FindPlayerCard({ localId, localName, list }: Props) {
    return (
        <Card title="용병 급구" localName={localName} link={`/find/yongbyung?location=${localId}`}>
            <RankList>
                {list.map((item: any, index: number) => (
                    <RankItem key={index}>
                        <p className="find-team-name">{item.teamname}</p>
                        <p className="find-play-info">
                            <span className="play-at">{item.playAt}</span>
                            <br />
                            <span className="play-place">{item.playground}</span>
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
    margin: 0 4px 0 0;
    flex-direction: column;
    gap: 2px;
`;
const RankItem = styled.li`
    padding: 0 2px 12px;
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
        .play-at {
            font-size: 0.85rem;
            opacity: 0.85;
        }
        .play-place {
            color: ${({ theme }) => theme.color.gray3};
            font-size: 0.75rem;
            font-weight: 500;
        }
    }
    .find-player-number {
        flex: 0.6;
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
        gap: 3px;
        color: ${({ theme }) => theme.color.gray3};
        font-size: 0.85rem;
        font-weight: 500;
        &::before {
            content: "모집";
            font-size: 0.6rem;
            font-weight: 400;
            color: ${({ theme }) => theme.color.gray2};
        }
    }
    &:last-of-type {
        padding-bottom: 0;
    }
`;

export default FindPlayerCard;
