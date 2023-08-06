import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import Score from "@/src/components/Match/Score";
import Card from "@/src/components/Main/Card";
import MatchPlayers from "@/src/components/Match/MatchPlayers";

function MatchDetail() {
    const router = useRouter();
    const matchId = router.query.id;

    const PLAYERS_LIST = [
        { id: 32, name: "선수명", gk: true, mom: false, goal: 0 },
        { id: 43, name: "선수명", gk: false, mom: false, goal: 0 },
        { id: 233, name: "선수명", gk: false, mom: true, goal: 2 },
        { id: 993, name: "선수명", gk: false, mom: false, goal: 1 },
    ];

    return (
        <>
            <Score
                home={{ teamName: "FC 1", score: 3, teamColor: "#ffcd2a" }}
                away={{ teamName: "FC 2", score: 2, teamColor: "#2bf385" }}
                status="경기종료"
            />
            <Cards>
                <Card title="경기 정보">
                    <Info>
                        <li>
                            <dt>일시</dt>
                            <dd>2023년 7월 31일 17:30</dd>
                        </li>
                        <li>
                            <dt>장소</dt>
                            <dd>광명 풋폴장</dd>
                        </li>
                    </Info>
                </Card>
                <Card title="선수 정보">
                    <PlayerBox>
                        <MatchPlayers teamColor="#ffcd2a" list={PLAYERS_LIST} />
                        <MatchPlayers teamColor="#2bf385" list={PLAYERS_LIST} />
                    </PlayerBox>
                </Card>
            </Cards>
        </>
    );
}

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0 0;
    padding: 0 16px;
    gap: 20px;
`;
const Info = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        dd {
            font-size: 0.95rem;
            opacity: 0.9;
        }
    }
`;
const PlayerBox = styled.div`
    display: flex;
    gap: 12px;
`;

export default MatchDetail;
