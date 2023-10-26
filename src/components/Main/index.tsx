import React from "react";
import styled from "@emotion/styled";

import AlertList from "./AlertList";
import RankCard from "./RankCard";
import RankCarousel from "./RankCarousel";
import YBFindList from "./YBFindList";

function Main() {
    return (
        <>
            <AlertList />
            <Articles>
                <RankCarousel
                    type="TEAM"
                    localId="anyang"
                    list={[
                        { rank: 1, teamId: "1231", teamName: "불도저FC", teamImage: "", point: 230, winRate: 0.4 },
                        { rank: 2, teamId: "1232", teamName: "진짜FC", teamImage: "", point: 230, winRate: 0.4 },
                        { rank: 3, teamId: "1233", teamName: "레알FC", teamImage: "", point: 230, winRate: 0.4 },
                        { rank: 4, teamId: "1234", teamName: "맨시티FC", teamImage: "", point: 230, winRate: 0.4 },
                        { rank: 5, teamId: "1235", teamName: "블루드래곤FC", teamImage: "", point: 230, winRate: 0.4 },
                    ]}
                />

                <YBFindList
                    localId="anyang"
                    list={[
                        {
                            teamId: "12343",
                            matchId: "23111200001",
                            teamName: "불도저FC",
                            playDate: "2023-11-12 20:30",
                            playPlace: "00풋살장",
                            findNum: 2,
                        },
                        {
                            teamId: "12342",
                            matchId: "23102900002",
                            teamName: "어쩌고FC",
                            playDate: "2023-10-29 18:00",
                            playPlace: "00중학교",
                            findNum: 3,
                        },
                        {
                            teamId: "12341",
                            matchId: "23102800012",
                            teamName: "저쩌고FC",
                            playDate: "2023-10-28 21:00",
                            playPlace: "00공원 실내풋살장",
                            findNum: 1,
                        },
                        {
                            teamId: "12345",
                            matchId: "23102800014",
                            teamName: "진짜FC",
                            playDate: "2023-10-27 21:00",
                            playPlace: "00공원 실내풋살장",
                            findNum: 1,
                        },
                    ]}
                />
                <RankCard
                    type="PLAYER"
                    localId="anyang"
                    list={[
                        {
                            rank: 1,
                            userId: "test1239",
                            nickname: "닉네임1",
                            profileImg: "https://img.sbs.co.kr/newimg/news/20230710/201805762_1280.jpg",
                            winRate: 0.6,
                            point: 240,
                        },
                        {
                            rank: 2,
                            userId: "test1231",
                            nickname: "닉네임닉네임",
                            profileImg: "",
                            winRate: 0.6,
                            point: 230,
                        },
                        {
                            rank: 3,
                            userId: "test1232",
                            nickname: "진짜임",
                            profileImg: "https://img.sbs.co.kr/newimg/news/20230710/201805762_1280.jpg",
                            winRate: 0.6,
                            point: 230,
                        },
                        {
                            rank: 4,
                            userId: "test1233",
                            nickname: "안양의메시",
                            profileImg: "",
                            winRate: 0.6,
                            point: 230,
                        },
                        {
                            rank: 5,
                            userId: "test1234",
                            nickname: "안양의메시",
                            profileImg: "",
                            winRate: 0.6,
                            point: 230,
                        },
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
    gap: 48px;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 36px 52px;
    }
`;

export default Main;
