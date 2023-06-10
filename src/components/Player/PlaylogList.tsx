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
                <p className="match-counter">{match.counter}</p>
                <p className="match-date">{match.date}</p>
                <p className="match-contribute">
                    {match.goal}골, {match.mom && "MoM"}
                </p>
            </div>

            <MatchDetail showMatchDetail={showMatchDetail}>
                <div className="match-detail-wrap">
                    <p>
                        <span>{match.counter}</span>
                        <span className="numbers">{match.counter_point}</span>
                        <i className="numbers">-</i>
                        <span className="numbers">{match.myteam_point}</span>
                        <span>{match.myteam}</span>
                    </p>
                    <ButtonLarge text="경기 상세" main={false} callback={() => {}} />
                </div>
            </MatchDetail>
        </Col>
    );
}

function PlaylogList() {
    const LOG_DUMMY = [
        {
            counter: "블루윙FC",
            date: "2020-03-20",
            goal: 1,
            mom: true,
            counter_point: 1,
            myteam_point: 3,
            myteam: "팀이름 FC",
            matchId: 123,
        },
        {
            counter: "친선",
            date: "2020-03-20",
            goal: 1,
            mom: true,
            counter_point: 1,
            myteam_point: 3,
            myteam: "팀이름 FC",
            matchId: 123,
        },
        {
            counter: "친선",
            date: "2020-03-20",
            goal: 1,
            mom: true,
            counter_point: 1,
            myteam_point: 3,
            myteam: "팀이름 FC",
            matchId: 123,
        },
        {
            counter: "친선",
            date: "2020-03-20",
            goal: 1,
            mom: true,
            counter_point: 1,
            myteam_point: 3,
            myteam: "최강 FC",
            matchId: 123,
        },
    ];

    return (
        <Table>
            <Col>
                <div className="col-header">
                    <p className="match-counter">상대팀</p>
                    <p className="match-date">경기일</p>
                    <p className="match-contribute">기여내용</p>
                </div>
            </Col>
            {LOG_DUMMY.map((match, idx) => (
                <PlaylogListCol key={idx} match={match} />
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
        padding: 16px 0;
        text-align: center;
        font-size: 0.95rem;
        .match-counter {
            flex: 1.5;
        }
        .match-date {
            flex: 1;
        }
        .match-contribute {
            flex: 1.5;
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
    height: ${(props) => (props.showMatchDetail ? "132px" : "0")};
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
        p {
            flex: 1;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            span {
                flex: 1;
                font-size: 0.95rem;
                text-align: center;
            }
            i {
                opacity: 0.7;
            }
            .numbers {
                font-size: 1.8rem;
                font-weight: 500;
            }
        }
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

export default PlaylogList;
