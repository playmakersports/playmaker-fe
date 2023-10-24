import React from "react";
import styled from "@emotion/styled";

import AlertList from "./AlertList";
import RankCard from "./RankCard";
import FindPlayerCard from "./FindPlayerCard";
import RankCarousel from "./RankCarousel";

function Main() {
    return (
        <>
            <AlertList />
            <Articles>
                <RankCarousel
                    type="TEAM"
                    localId="anyang"
                    localName="안양시"
                    list={[
                        { rank: 1, teamId: "1231", teamName: "불도저FC", teamImage: "", point: 230, winRate: 0.4 },
                        { rank: 2, teamId: "1232", teamName: "진짜FC", teamImage: "", point: 230, winRate: 0.4 },
                        { rank: 3, teamId: "1233", teamName: "레알FC", teamImage: "", point: 230, winRate: 0.4 },
                        { rank: 4, teamId: "1234", teamName: "맨시티FC", teamImage: "", point: 230, winRate: 0.4 },
                        { rank: 5, teamId: "1235", teamName: "블루드래곤FC", teamImage: "", point: 230, winRate: 0.4 },
                    ]}
                />

                <FindPlayerCard
                    localId="anyang"
                    localName="안양시"
                    list={[
                        { teamname: "불도저FC", playAt: "6월 12일 16:00", playground: "00풋살장", findNum: 2 },
                        { teamname: "어쩌고FC", playAt: "6월 13일 16:00", playground: "00중학교", findNum: 3 },
                        { teamname: "저쩌고FC", playAt: "6월 13일 21:00", playground: "00공원 실내풋살장", findNum: 1 },
                    ]}
                />
                <RankCard
                    type="PLAYER"
                    localId="anyang"
                    localName="안양시"
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
    margin: 32px 0 0;
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
