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

    const infos = [
        { title: "출생연월", contents: "'01.02" },
        { title: "나이", contents: "21" },
        { title: "지역", contents: "강남구" },
    ];

    const hashtags = ["공격형", "미드필더", "피지컬", "왼발", "골키퍼", "육상부", "체대생", "180이상", "선수출신"];

    const handleMovePage = (path: string) => {
        router.push(path);
    };

    return (
        <Container scrolled={isScrolled}>
            <UserBadgeHeader isScrolled={isScrolled} />
            <UserInfoList data={infos} />
            <SelfIntro>홀란드보다 잘생김</SelfIntro>
            <Title>HASHTAG</Title>
            <UserHashTag data={hashtags} />
            <Title>FAN OF</Title>
            <UserFan />
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
    padding: 8px 20px 60px;
    transition: margin 0.45s;
    @media (min-width: 768px) {
        padding: 20px 20px 60px;
    }
`;

const SelfIntro = styled.p`
    margin: 12px 0 -12px;
    padding: 20px 8px;
    text-align: center;
    color: var(--black);
    font-size: 0.9rem;
    opacity: 0.9;
`;

const Title = styled.h3`
    margin: 32px 0 12px;
    font-size: 0.7rem;
    line-height: 0.9rem;
    font-weight: 700;
    text-align: center;
    color: var(--black);
    opacity: 0.65;
    &::before,
    &::after {
        content: "";
        display: inline-block;
        margin: 0.225rem 16px;
        width: 64px;
        height: 1px;
        background-color: var(--black);
        opacity: 0.7;
    }
`;

export default Player;
