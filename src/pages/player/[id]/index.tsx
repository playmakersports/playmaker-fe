import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import UserInfoList from "@/src/components/Player/UserInfoList";
import UserHashTag from "@/src/components/Player/UserHashTag";
import UserFan from "@/src/components/Player/UserFan";
import UserBadgeHeader from "@/src/components/Player/UserBadgeHeader";
import FloatBottom from "@/src/components/Common/FloatBottom";
import ButtonLarge from "@/src/components/Common/ButtonLarge";

function Player() {
    const router = useRouter();
    console.log(router.query.id);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const infos = { birth: "2001-02-19", location: ["서울 강남구", "경기 성남시분당구"] };
    const hashtags = ["공격형", "미드필더", "피지컬", "왼발", "골키퍼", "육상부", "체대생", "선수출신"];
    const favTeam = ["seoul", "liverpool"];

    const handleMovePage = (path: string) => {
        router.push(path);
    };

    return (
        <Container scrolled={isScrolled}>
            <UserBadgeHeader isScrolled={isScrolled} />
            <UserInfoList data={infos} />
            <SelfIntro>매너게임합니다! 열정넘침!</SelfIntro>
            <UserHashTag data={hashtags} />
            <Title>좋아하는 팀</Title>
            <UserFan data={favTeam} />
            <FloatBottom>
                <>
                    <ButtonLarge callback={() => console.log("hi")} main={false} text="정보 수정" />
                    <ButtonLarge
                        callback={() => handleMovePage(`/player/${router.query.id}/playlog`)}
                        main={true}
                        text="경기 기록 보기"
                    />
                </>
            </FloatBottom>
        </Container>
    );
}

const Container = styled.section<{ scrolled: boolean }>`
    margin: ${(props) => (props.scrolled ? "192px 0 0" : "248px 0 0")};
    padding: 8px 20px 40px;
    transition: margin 0.45s;
    @media (min-width: 768px) {
        padding: 20px 20px 60px;
    }
`;

const SelfIntro = styled.p`
    margin: 24px 0 0;
    padding: 24px 4px 16px;
    border-top: 1px solid var(--black-op15);
    color: var(--black);
    font-size: 1rem;
    text-align: center;
    word-break: keep-all;
    opacity: 0.9;
`;

const Title = styled.h3`
    border-top: 1px solid var(--black-op15);
    margin: 32px 0 0;
    padding: 24px 2px 16px;
    font-size: 1.2rem;
    font-weight: 600;
`;

export default Player;
