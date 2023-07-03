import React, { useState } from "react";
import styled from "@emotion/styled";

import ButtonLarge from "../Common/ButtonLarge";

function PlaylogListCol({ match }: any) {
    const [showMatchDetail, setShowMatchDetail] = useState(false);
    return (
        <Col>
            <div
                className={`match-column ${showMatchDetail && "match-select"}`}
                onClick={() => setShowMatchDetail((prev) => !prev)}
            >
                <p className="match-teamname">{match.counter}</p>
                <p className="numbers">{match.counter_point}</p>
                <i className="numbers">-</i>
                <p className="numbers">{match.myteam_point}</p>
                <p className="match-teamname">{match.myteam}</p>
            </div>

            <MatchDetail showMatchDetail={showMatchDetail}>
                <div className="match-detail-wrap">
                    <DetailInfos>
                        <li>
                            <dt>경기일시</dt>
                            <dd>{match.date}</dd>
                        </li>
                        <li>
                            <dt>경기장소</dt>
                            <dd>{match.place}</dd>
                        </li>
                    </DetailInfos>
                    <ButtonLarge text="경기 상세" main={false} callback={() => {}} />
                </div>
            </MatchDetail>
        </Col>
    );
}

function TeamPlaylogList() {
    const LOG_DUMMY = [
        {
            counter: "블루윙FC",
            date: "2023-06-28 13:30",
            place: "안양풋살장",
            goal: 1,
            mom: true,
            counter_point: 1,
            myteam_point: 3,
            myteam: "팀이름 FC",
            matchId: 123,
        },
        {
            counter: "친선",
            date: "2023-06-20 19:20",
            place: "안양풋살장",
            goal: 1,
            mom: true,
            counter_point: 1,
            myteam_point: 3,
            myteam: "팀이름 FC",
            matchId: 124,
        },
        {
            counter: "친선",
            date: "2023-06-11 19:20",
            place: "실내체육관",
            goal: 1,
            mom: true,
            counter_point: 1,
            myteam_point: 3,
            myteam: "팀이름 FC",
            matchId: 125,
        },
        {
            counter: "친선",
            date: "2020-05-31 20:30",
            place: "실내체육관",
            goal: 1,
            mom: true,
            counter_point: 1,
            myteam_point: 3,
            myteam: "최강 FC",
            matchId: 126,
        },
    ];

    return (
        <Table>
            {LOG_DUMMY.map((match) => (
                <PlaylogListCol key={match.matchId} match={match} />
            ))}
        </Table>
    );
}

const Table = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
`;
const Col = styled.article`
    .match-column,
    .col-header {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 8px;
        text-align: center;
        font-size: 0.95rem;
        .match-teamname {
            flex: 1.5;
        }
        i {
            display: inline-block;
            margin: 0 20px;
            opacity: 0.7;
        }
        .numbers {
            font-size: 1.8rem;
            font-weight: 500;
        }
    }

    .match-column {
        border-bottom: 1px solid var(--bg-dark);
    }
    .col-header {
        cursor: auto;
        padding: 12px 0;
        background-color: var(--lightgray);
        color: #000;
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: -0.2px;
        opacity: 0.8;
    }
    .match-select {
        border-bottom: none;
        background-color: #2a365d;
        color: #fff;
        font-weight: 500;
    }
`;

const MatchDetail = styled.div<{ showMatchDetail: boolean }>`
    height: ${(props) => (props.showMatchDetail ? "124px" : "0")};
    background-color: #3c4a76;
    color: #fff;
    transition: height 0.4s;
    overflow: hidden;
    .match-detail-wrap {
        display: flex;
        height: 100%;
        flex-direction: column;
        padding: 8px 16px 16px;
        gap: 12px;
        border-top: 1px solid #ffffff28;
        justify-content: space-between;
    }
    @media (min-width: 768px) {
        height: ${(props) => (props.showMatchDetail ? "80px" : "0")};
        .match-detail-wrap {
            flex-direction: row;
            gap: 40px;
            padding: 16px;
            button {
                flex: 0.4;
                min-height: auto;
            }
        }
    }
`;

const DetailInfos = styled.ul`
    flex: 1.5;
    display: inline-flex;
    justify-content: space-between;
    font-size: 0.9rem;
    li {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        dt {
            font-size: 0.8rem;
            font-weight: 500;
            opacity: 0.8;
        }
        dd {
            font-weight: 400;
        }
    }
`;

export default TeamPlaylogList;
