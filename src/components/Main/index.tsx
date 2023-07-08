import React from "react";
import styled from "@emotion/styled";

import AlertCards from "./AlertCards";
import RankCard from "./RankCard";
import FindPlayerCard from "./FindPlayerCard";

function Main() {
    const ALERT_CARD_MOCK = [
        { code: "UPCOMING_MATCH", contents: "5월 1일 20:00, CS풋살클럽에서의 경기", redirect: "" },
        { code: "JOIN_PURPOSE", contents: "FC달린다 등 2개 팀에게 온 제안", redirect: "" },
        { code: "MATCH_PURPOSE", contents: "FC불도저가 보낸 5월 5일 16:30 매치 제안", redirect: "" },
    ];

    return (
        <>
            <AlertCards data={ALERT_CARD_MOCK} />
            <Articles>
                <RankCard
                    type="TEAM"
                    localId="anyang"
                    localname="안양시"
                    list={[
                        { rank: 1, name: "불도저FC", point: 230 },
                        { rank: 2, name: "불도저FC", point: 230 },
                        { rank: 3, name: "불도저FC", point: 230 },
                        { rank: 4, name: "불도저FC", point: 230 },
                        { rank: 5, name: "불도저FC", point: 230 },
                    ]}
                />
                <FindPlayerCard
                    localId="anyang"
                    localname="안양시"
                    list={[
                        { teamname: "불도저FC", playAt: "6월 12일 16:00", playground: "00풋살장", findNum: 2 },
                        { teamname: "어쩌고FC", playAt: "6월 13일 16:00", playground: "00중학교", findNum: 3 },
                        { teamname: "저쩌고FC", playAt: "6월 13일 21:00", playground: "00공원 실내풋살장", findNum: 1 },
                    ]}
                />
                <RankCard
                    type="PLAYER"
                    localId="anyang"
                    localname="안양시"
                    list={[
                        { rank: 1, name: "안양의메시", point: 230 },
                        { rank: 2, name: "안양의메시", point: 230 },
                        { rank: 3, name: "안양의메시", point: 230 },
                        { rank: 4, name: "안양의메시", point: 230 },
                        { rank: 5, name: "안양의메시", point: 230 },
                    ]}
                />
            </Articles>
        </>
    );
}

const Articles = styled.section`
    display: flex;
    padding: 0 16px;
    flex-direction: column;
    gap: 24px;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 36px;
    }
`;

export default Main;
