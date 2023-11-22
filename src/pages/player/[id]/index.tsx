import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import UserInfoList from "@/src/components/Player/UserInfoList";
import UserHashTag from "@/src/components/Player/UserHashTag";
import UserFan from "@/src/components/Player/UserFan";
import UserBadgeHeader from "@/src/components/Player/UserBadgeHeader";
import FloatBottom from "@/src/components/Common/FloatBottom";
import Button from "@/src/components/Common/Button";

function Player() {
    const router = useRouter();

    const infos = { birth: "2001-02-19", location: ["서울 강남구", "경기 성남시분당구"] };
    const hashtags = ["공격형", "미드필더", "피지컬", "왼발", "골키퍼", "육상부", "체대생", "선수출신"];
    const favTeam = ["seoul", "liverpool"];

    const handleMovePage = (path: string) => {
        router.push(path);
    };

    return (
        <Wrapper>
            <UserBadgeHeader />
            <Contents>
                <UserInfoList data={infos} />
                <SelfIntro>매너게임합니다! 열정넘침!</SelfIntro>
                <UserHashTag data={hashtags} />
                <Title>좋아하는 팀</Title>
                <UserFan data={favTeam} />
            </Contents>
            <FloatBottom>
                <>
                    <Button
                        type="button"
                        mode="basic"
                        size="large"
                        text="정보 수정"
                        callback={() => console.log("hi")}
                    />
                    <Button
                        type="button"
                        mode="main1"
                        size="large"
                        text="경기 기록 보기"
                        callback={() => handleMovePage(`/player/${router.query.id}/playlog`)}
                    />
                </>
            </FloatBottom>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    margin-top: -64px;
`;
const Contents = styled.div`
    padding: 16px;
`;
const SelfIntro = styled.p`
    margin: 24px 0 0;
    padding: 24px 4px 16px;
    border-top: 1px solid ${({ theme }) => theme.color.gray1};
    font-size: 1.6rem;
    text-align: center;
    word-break: keep-all;
    opacity: 0.9;
`;

const Title = styled.h3`
    border-top: 1px solid ${({ theme }) => theme.color.gray1};
    margin: 32px 0 0;
    padding: 24px 2px 16px;
    font-size: 1.8rem;
    font-weight: 600;
    font-family: SUITE Variable;
`;

export default Player;
