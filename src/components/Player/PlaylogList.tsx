import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "../Common/Button";

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
                    {match.goal > 0 && <Contribute>{match.goal}골</Contribute>}{" "}
                    {match.mom && <Contribute>MoM</Contribute>}
                </p>
            </div>

            <MatchDetail showMatchDetail={showMatchDetail}>
                <div className="match-detail-wrap">
                    <div className="match-point-warp">
                        <span>{match.counter}</span>
                        <span className="numbers">{match.counter_point}</span>
                        <i className="numbers">-</i>
                        <span className="numbers">{match.myteam_point}</span>
                        <span>{match.myteam}</span>
                    </div>
                    <Button
                        type="button"
                        mode="basic"
                        size="medium"
                        text="경기 상세"
                        main={false}
                        callback={() => {}}
                    />
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
        align-items: center;
        padding: 16px 0;
        text-align: center;
        font-size: 0.9rem;
        user-select: none;
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
        border-bottom: 1px solid ${({ theme }) => theme.color.gray1};
    }
    .col-header {
        cursor: auto;
        padding: 12px 0;
        background-color: ${({ theme }) => theme.color.gray1};
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
const Contribute = styled.span`
    display: inline-flex;
    align-items: center;
    text-align: center;
    padding: 4px 6px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.color.gray3};
    color: ${({ theme }) => theme.color.white};
    font-size: 0.75rem;
    font-weight: 600;
`;
const MatchDetail = styled.div<{ showMatchDetail: boolean }>`
    height: ${({ showMatchDetail }) => (showMatchDetail ? "120px" : "0")};
    opacity: ${({ showMatchDetail }) => (showMatchDetail ? 1 : 0)};
    background-color: #3c4a76;
    color: #fff;
    transition: height 0.4s, opacity 0.4s;
    overflow: hidden;
    .match-detail-wrap {
        display: flex;
        height: 100%;
        flex-direction: column;
        padding: 8px 20px 20px;
        gap: 8px;
        border-top: 1px solid #ffffff28;
        .match-point-warp {
            flex: 1;
            display: inline-flex;
            align-items: center;
            span {
                flex: 0.5;
                font-size: 0.9rem;
                text-align: center;
            }
            i {
                opacity: 0.7;
                text-align: center;
            }
            .numbers {
                flex: 0.2;
                font-size: 1.7rem;
                font-weight: 500;
            }
        }
        button {
            margin: 0 16px;
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
