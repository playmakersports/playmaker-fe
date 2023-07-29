import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import FloatBottom from "@/src/components/Common/FloatBottom";
import Button from "@/src/components/Common/Button";
import BoardCard from "@/src/components/Team/BoardCard";

function Team() {
    const router = useRouter();
    const teamId = router.query.id;
    const teamColor = "#237c50";

    const TEAM_BAORD_MOCK = [
        { articleId: "123", label: "공지", title: "1주년 기념", writtenAt: "2023.06.05" },
        { articleId: "133", label: "", title: "게시판 제목1", writtenAt: "2023.05.05" },
        { articleId: "143", label: "", title: "게시판 제목2", writtenAt: "2023.05.05" },
    ];

    return (
        <Container>
            <NameBox color={teamColor}>
                <NameHead>
                    <Name>팀이름 FC</Name>
                    <button className="control-icon" onClick={() => router.push(`/team/room/${teamId}/manager`)}>
                        매니저
                    </button>
                </NameHead>
                <TeamInfo>
                    <p className="team-info-number">
                        <span className="numbers">100</span>
                        <span className="numbers">20</span>
                    </p>
                    <p className="numbers team-info-founded">2020.12.30</p>
                </TeamInfo>
            </NameBox>
            <BoardCard teamId={teamId as string} board={TEAM_BAORD_MOCK} photos={TEAM_BAORD_MOCK} />
            <FloatBottom>
                <Button
                    type="button"
                    text="경기 목록"
                    mode="basic"
                    size="large"
                    callback={() => router.push(`/team/room/${teamId}/playlog`)}
                />
                <Button
                    type="button"
                    text="선수 목록"
                    mode="basic"
                    size="large"
                    callback={() => router.push(`/team/room/${teamId}/players`)}
                />
            </FloatBottom>
        </Container>
    );
}

const Container = styled.section`
    padding: 212px 16px 0;
`;

const NameBox = styled.article<{ color: string }>`
    position: fixed;
    padding: 40px 28px 24px;
    top: 0;
    left: 0;
    width: 100%;
    height: 168px;
    background-color: ${({ color }) => color ?? "silver"};
    z-index: 10;
    &::after {
        position: absolute;
        display: block;
        margin-left: -4px;
        content: "";
        left: 0;
        bottom: -27px;
        background-color: ${({ color }) => color ?? "silver"};
        width: calc(100% + 6px);
        height: 28px;
        clip-path: polygon(50% 100%, 0 0, 100% 0);
    }
`;

const NameHead = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .control-icon {
        display: flex;
        padding: 6px 12px;
        align-items: center;
        gap: 2px;
        color: #000;
        font-size: 0.85rem;
        font-weight: 500;
        border-radius: 20px;
        background-color: #fff;
        &::before {
            content: "";
            width: 20px;
            height: 20px;
            background-image: url("/assets/icons/control_icon.svg");
            background-size: 18px;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
`;
const Name = styled.h3`
    background: none;
    color: #fff;
    font-size: 1.85rem;
    font-weight: 600;
    text-align: center;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`;
const TeamInfo = styled.div`
    display: flex;
    margin: 20px 2px 0;
    justify-content: space-between;
    align-items: top;
    color: #fff;
    .team-info-number {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        span:first-of-type {
            margin-top: -3px;
            font-size: 2.9rem;
            font-weight: 500;
            &::after {
                display: block;
                content: "포인트";
                margin: 2px 0 0;
                font-size: 0.8rem;
                letter-spacing: -0.5px;
                font-weight: 400;
                font-family: inherit;
                opacity: 0.75;
            }
        }
        span:last-of-type {
            font-size: 1.8rem;
            font-weight: 500;
            &::after {
                display: block;
                content: "동네랭킹";
                margin: 3px 0 0;
                font-size: 0.8rem;
                letter-spacing: -0.5px;
                font-weight: 400;
                font-family: inherit;
                opacity: 0.75;
            }
        }
    }
    .team-info-founded {
        font-size: 1.45rem;
        letter-spacing: -0.1px;
        &::after {
            display: block;
            margin: 3px 0 0;
            content: "창단";
            font-size: 0.8rem;
            letter-spacing: -0.5px;
            font-weight: 400;
            font-family: inherit;
            text-align: right;
            opacity: 0.75;
        }
    }
`;

export default Team;
