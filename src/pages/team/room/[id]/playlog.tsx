import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import TeamLayout from "@/src/components/Team/Layout";
import TeamPlaylogList from "@/src/components/Team/TeamPlaylogList";

function TeamPlaylog() {
    const router = useRouter();
    const teamId = router.query.id;
    // const page = router.query.page;
    const teamColor = "#237c50";
    const PLAY_DUMMY = {
        playCount: 24,
        winMatchCount: 12,
        topRanked: 4,
    };

    return (
        <TeamLayout teamName="팀 이름" title="경기 기록" color={teamColor}>
            <Container>
                <Header>
                    <BadgeWrap>
                        <p>팀 로고</p>
                    </BadgeWrap>
                    <PlayOverview>
                        <li>
                            <dt>경기횟수</dt>
                            <dd className="numbers">{PLAY_DUMMY.playCount}</dd>
                        </li>
                        <li>
                            <dt>누적승리</dt>
                            <dd className="numbers match-wincount">
                                {PLAY_DUMMY.winMatchCount}
                                <span>{((PLAY_DUMMY.winMatchCount / PLAY_DUMMY.playCount) * 100).toFixed(1)}%</span>
                            </dd>
                        </li>
                        <li>
                            <dt>최고순위</dt>
                            <dd className="numbers">{PLAY_DUMMY.topRanked}</dd>
                        </li>
                    </PlayOverview>
                </Header>
                <TeamPlaylogList />
            </Container>
        </TeamLayout>
    );
}

const Container = styled.section`
    margin: -20px -16px 0;
    @media (min-width: 768px) {
        display: flex;
    }
`;

const Header = styled.header`
    display: flex;
    padding: 12px 24px;
    width: 100%;
    background-color: var(--bg-dark);
    justify-content: space-between;
    @media (min-width: 768px) {
        width: 240px;
        height: auto;
        flex-direction: column;
        background-color: transparent;
        border-right: 1px solid var(--lightgray);
    }
`;

const BadgeWrap = styled.div`
    p {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 92px;
        height: 92px;
        border-radius: 100%;
        overflow: hidden;
        background-color: red;
    }
`;
const PlayOverview = styled.ul`
    display: flex;
    margin: 18px 0 0;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
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
    .match-wincount {
        display: inline-flex;
        flex-direction: column;
        span {
            font-size: 1rem;
        }
    }

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
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
        .match-wincount {
            flex-direction: row;
            align-items: center;
            span {
                display: inline-block;
                margin-left: 8px;
                opacity: 0.8;
            }
        }
    }
`;
export default TeamPlaylog;
