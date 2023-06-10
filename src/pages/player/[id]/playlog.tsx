import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import UserBadge from "@/src/components/Player/UserBadge";
import PlaylogList from "@/src/components/Player/PlaylogList";

function Playlog() {
    const router = useRouter();
    const PLAY_DUMMY = {
        playCount: 24,
        goalCount: 27,
        winMatchCount: 12,
        momCount: 6,
        topRanked: 4,
    };

    return (
        <Container>
            <Header>
                <BadgeWrap>
                    <UserBadge simple={true} />
                </BadgeWrap>
                <PlayOverview>
                    <li>
                        <dt>경기횟수</dt>
                        <dd className="numbers">{PLAY_DUMMY.playCount}</dd>
                    </li>
                    <li>
                        <dt>누적골</dt>
                        <dd className="numbers">{PLAY_DUMMY.goalCount}</dd>
                    </li>
                    <li>
                        <dt>골기여율</dt>
                        <dd className="numbers">{((PLAY_DUMMY.goalCount / PLAY_DUMMY.playCount) * 100).toFixed(1)}%</dd>
                    </li>
                    <li>
                        <dt>경기승률</dt>
                        <dd className="numbers">
                            {((PLAY_DUMMY.winMatchCount / PLAY_DUMMY.playCount) * 100).toFixed(1)}%
                        </dd>
                    </li>
                    <li>
                        <dt>M.o.M</dt>
                        <dd className="numbers">{PLAY_DUMMY.momCount}</dd>
                    </li>
                    <li>
                        <dt>최고순위</dt>
                        <dd className="numbers">{PLAY_DUMMY.topRanked}</dd>
                    </li>
                </PlayOverview>
            </Header>
            <PlaylogList />
        </Container>
    );
}

const Container = styled.section`
    @media (min-width: 768px) {
        display: flex;
    }
`;

const Header = styled.header`
    display: flex;
    padding: 0 20px;
    width: 100%;
    height: 200px;
    background-color: var(--bg-dark);
    @media (min-width: 768px) {
        width: 240px;
        height: auto;
        flex-direction: column;
        background-color: transparent;
        border-right: 1px solid var(--lightgray);
    }
`;

const BadgeWrap = styled.div`
    padding: 12px 16px;
    width: 140px;
    transform: scale(0.6);
    transform-origin: top left;
    @media (min-width: 768px) {
        position: relative;
        padding: 20px;
        width: 176px;
        height: 296px;
        transform: scale(0.9);
    }
`;
const PlayOverview = styled.ul`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 24px 0;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    li {
        flex: 1;
        text-align: center;
        word-break: keep-all;
        dt {
            display: inline-block;
            margin: 0 0 5px;
            font-size: 0.8rem;
            opacity: 0.65;
            letter-spacing: -0.2px;
        }
        dd {
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 12px;
        li {
            dt,
            dd {
                display: inline-block;
                line-height: 1.5rem;
                vertical-align: middle;
            }
            dt {
                margin: 0 8px 0 0;
            }
        }
    }
`;

export default Playlog;
