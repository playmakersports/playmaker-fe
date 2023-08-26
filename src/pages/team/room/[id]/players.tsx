import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import TeamLayout from "@/src/components/Team/Layout";
import Button from "@/src/components/Common/Button";
import { FilterBtn } from "@/src/components/Common/OptionalButton";

function TeamPlayers() {
    const [showFilters, setShowFilters] = useState(false);
    const [filter, setFilter] = useState("NAME");
    const router = useRouter();
    const teamId = router.query.id;
    // const page = router.query.page;
    const teamColor = "#237c50";

    const PLAYERS_DATA = [
        {
            name: "홍길동",
            nickname: "이강인어쩌고",
            id: "test1",
            birth: 1995,
            sex: "male",
            position: "mf",
            point: 120,
            rank: 20,
            goal: 11,
        },
        {
            name: "선우이름",
            nickname: "발롱도르어쩌고",
            id: "test2",
            birth: 2001,
            sex: "male",
            position: "gf",
            point: 100,
            rank: 37,
            goal: 3,
        },
    ];

    const FILTER_VALUE: { [key: string]: string } = {
        NAME: "이름순",
        DATE: "입단순",
        AGE: "나이순",
        RANK: "랭킹순",
    };

    return (
        <TeamLayout teamName="팀 이름" title="선수 명단" color={teamColor}>
            <>
                <FilterBtn
                    type="button"
                    icon="/assets/icons/moderate_icon.svg"
                    onClick={() => setShowFilters((prev) => !prev)}
                    showFilters={showFilters}
                >
                    {FILTER_VALUE[filter]}
                    <ul className="filter-selector">
                        {Object.keys(FILTER_VALUE)
                            .map((key) => ({
                                value: key,
                                name: FILTER_VALUE[key],
                            }))
                            .map((item) => (
                                <li key={item.value} onClick={() => setFilter(item.value)}>
                                    {item.name}
                                </li>
                            ))}
                    </ul>
                </FilterBtn>

                <Players>
                    {PLAYERS_DATA.map((player) => (
                        <Player key={player.id}>
                            <Photo></Photo>
                            <Info>
                                <div className="info-header">
                                    <span className="player-name">
                                        {player.name}
                                        <span className="player-subname">{player.nickname}</span>
                                    </span>
                                    <Button type="button" mode="sub1" size="xsmall" noFlex={true} text="상세" />
                                </div>
                                <div className="info-detail">
                                    <dt>출생</dt>
                                    <dd>{player.birth}</dd>
                                    <dt>성별</dt>
                                    <dd>{player.sex === "male" ? "남자" : "여자"}</dd>
                                    <dt>포지션</dt>
                                    <dd>{player.position.toUpperCase()}</dd>
                                </div>
                                <div className="info-detail">
                                    <dt>포인트</dt>
                                    <dd>{player.point}</dd>
                                    <dt>동네랭킹</dt>
                                    <dd>{player.rank}</dd>
                                    <dt>누적골</dt>
                                    <dd>{player.goal}</dd>
                                </div>
                            </Info>
                        </Player>
                    ))}
                </Players>
            </>
        </TeamLayout>
    );
}

const Players = styled.div``;
const Player = styled.div`
    display: flex;
    padding: 16px 4px;
    gap: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray1};
    &:last-of-type {
        border-bottom: none;
    }
`;

const Photo = styled.div`
    width: 52px;
    height: 52px;
    background-color: ${({ theme }) => theme.color.gray2};
    border-radius: 100%;
`;
const Info = styled.div`
    flex: 1;
    .info-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .player-name {
            display: inline-flex;
            align-items: center;
            font-weight: 600;
            font-size: 1.1rem;
        }
        .player-subname {
            display: inline-block;
            margin-left: 8px;
            font-size: 0.8rem;
            font-weight: 400;
        }
        .player-birth-sex {
            display: inline-block;
            margin-left: 8px;
            font-size: 0.8rem;
            font-weight: 400;
            opacity: 0.6;
        }
    }

    .info-detail {
        display: inline-flex;
        align-items: center;
        margin: 8px 0 0;
        gap: 4px;
        font-size: 0.9rem;
        dt {
            font-size: 0.75rem;
            font-weight: 600;
            opacity: 0.5;
        }
        dd {
            margin-right: 6px;
        }
    }
`;

export default TeamPlayers;
