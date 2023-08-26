import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import Modal from "@/src/components/Common/Modal";
import FloatBottom from "@/src/components/Common/FloatBottom";
import Button from "@/src/components/Common/Button";
import { CentralBtn, FilterBtn } from "@/src/components/Common/OptionalButton";

interface YongbyungItemType {
    teamId: string;
    teamRank: number;
    teamname: string;
    playAt: string;
    playground: string;
    findNum: number;
}

function Yongbyung() {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    // 필터
    const [filter, setFilter] = useState("DATE");
    const [showFilters, setShowFilters] = useState(false);
    const [selectedContents, setSelectedContents] = useState<YongbyungItemType>();

    const FILTER_VALUE: { [key: string]: string } = {
        DATE: "빠른경기순",
        RANK: "랭킹순",
    };

    const MOCK_YONGBYUNG: YongbyungItemType[] = [
        {
            teamId: "a",
            teamRank: 1,
            teamname: "불도저FC",
            playAt: "2023-07-10 16:00",
            playground: "00풋살장",
            findNum: 2,
        },
        {
            teamId: "b",
            teamRank: 12,
            teamname: "어쩌고FC",
            playAt: "2023-07-10 18:00",
            playground: "00중학교",
            findNum: 3,
        },
        {
            teamId: "c",
            teamRank: 21,
            teamname: "저쩌고FC",
            playAt: "2023-07-10 20:00",
            playground: "00공원 실내풋살장",
            findNum: 1,
        },
        {
            teamId: "d",
            teamRank: 16,
            teamname: "저쩌고FC",
            playAt: "2023-07-10 20:00",
            playground: "00공원 실내풋살장",
            findNum: 1,
        },
        {
            teamId: "e",
            teamRank: 11,
            teamname: "저쩌고FC",
            playAt: "2023-07-10 20:00",
            playground: "00공원 실내풋살장",
            findNum: 1,
        },
        {
            teamId: "f",
            teamRank: 4,
            teamname: "저쩌고FC",
            playAt: "2023-07-10 20:00",
            playground: "00공원 실내풋살장",
            findNum: 1,
        },
        {
            teamId: "g",
            teamRank: 5,
            teamname: "저쩌고FC",
            playAt: "2023-07-10 20:00",
            playground: "00공원 실내풋살장",
            findNum: 1,
        },
        {
            teamId: "h",
            teamRank: 10,
            teamname: "저쩌고FC",
            playAt: "2023-07-10 20:00",
            playground: "00공원 실내풋살장",
            findNum: 1,
        },
    ];

    const getDateInterval = (target: string) => {
        const today = new Date();
        const targetDate = new Date(target.split(" ")[0]);
        const targetTime = target.split(" ")[1];

        // 입력된 날짜와 현재 날짜 사이의 차이 계산
        const timeDiff = targetDate.getTime() - today.getTime();
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        // 날짜 차이에 따라 다른 문자열 반환
        if (diffDays === 0) {
            return `오늘 ${targetTime}`;
        } else if (diffDays === 1) {
            return `내일 ${targetTime}`;
        } else if (diffDays === 2) {
            return `2일 뒤 ${targetTime}`;
        } else if (diffDays === 3) {
            return `3일 뒤 ${targetTime}`;
        } else if (diffDays >= 4) {
            const month = targetDate.getMonth() + 1; // getMonth()의 반환값은 0부터 시작하므로 1을 더함
            const day = targetDate.getDate();
            return `${month}월 ${day}일 ${targetTime}`;
        } else {
            return "오늘 이전의 날짜입니다.";
        }
    };

    return (
        <>
            <Container>
                {/* {router.query["location"]} */}
                <TopBtns>
                    <CentralBtn type="button" icon="/assets/icons/location_icon.svg">
                        경기 안양시
                    </CentralBtn>
                    <FilterBtn
                        type="button"
                        icon="/assets/icons/moderate_icon.svg"
                        onClick={() => setShowFilters((prev) => !prev)}
                        showFilters={showFilters}
                    >
                        {FILTER_VALUE[filter]}
                        <ul className="filter-selector">
                            {Object.keys(FILTER_VALUE)
                                .map((key) => ({
                                    value: key,
                                    name: FILTER_VALUE[key],
                                }))
                                .map((item) => (
                                    <li key={item.value} onClick={() => setFilter(item.value)}>
                                        {item.name}
                                    </li>
                                ))}
                        </ul>
                    </FilterBtn>
                </TopBtns>

                <List>
                    {MOCK_YONGBYUNG.map((item, index) => (
                        <Item key={index}>
                            <i className="find-team-logo" />
                            <TeamName>
                                <span className="find-team-name">{item.teamname}</span>
                                <span className="find-team-rank">
                                    <strong>지역랭킹</strong> {item.teamRank}위
                                </span>
                            </TeamName>
                            <p className="find-play-info">
                                {getDateInterval(item.playAt)}
                                <br />
                                <span className="play-place">{item.playground}</span>
                            </p>
                            <Apply>
                                <Button
                                    type="button"
                                    mode="sub1"
                                    size="xsmall"
                                    text="지원"
                                    callback={() => {
                                        setShowModal((prev) => !prev);
                                        setSelectedContents(item);
                                    }}
                                />
                                <p className="find-player-number">{item.findNum}명</p>
                            </Apply>
                        </Item>
                    ))}
                </List>
            </Container>
            {showModal && (
                <Modal
                    setShow={setShowModal}
                    btns={[
                        {
                            type: "button",
                            text: "닫기",
                            mode: "basic",
                            onClick: () => setShowModal((prev) => !prev),
                        },
                        {
                            type: "button",
                            text: "용병 지원",
                            mode: "main1",
                            onClick: () => console.log("지원"),
                        },
                    ]}
                >
                    <ModalContainer>
                        <h2>용병 모집 지원</h2>
                        <p className="popup-contents">{selectedContents?.teamname}</p>
                        <div className="popup-contents">
                            {selectedContents?.playAt} / {selectedContents?.playground}
                        </div>
                        <div className="popup-confirm-msg">지원하시겠습니까?</div>
                        <div className="popup-desc">경기 당일 취소는 패널티가 부과될 수 있습니다</div>
                    </ModalContainer>
                </Modal>
            )}
            <FloatBottom>
                <Button type="button" text="용병 모집 올리기" mode="main1" size="large" />
            </FloatBottom>
        </>
    );
}

const Container = styled.section`
    padding: 24px 16px 0;
`;
const TopBtns = styled.div`
    display: flex;
    gap: 4px;
`;
const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;
const TeamName = styled.p`
    flex: 1.4;
    display: inline-flex;
    flex-direction: column;
    gap: 4px;
    .find-team-name {
        font-weight: 600;
    }
    .find-team-rank {
        display: inline-flex;
        align-items: center;
        color: ${({ theme }) => theme.color.gray4};
        font-size: 0.75rem;
        font-weight: 400;
        letter-spacing: -0.3px;
        gap: 3px;
        strong {
            display: inline-block;
            padding: 2px 4px;
            background-color: ${({ theme }) => theme.color.main2};
            border-radius: 4px;
            font-size: 0.7rem;
            font-weight: 500;
        }
    }
    @media (min-width: 768px) {
        flex-direction: row;
        gap: 6px;
        align-items: center;
    }
`;
const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .find-team-logo {
        display: block;
        margin-right: 8px;
        width: 36px;
        height: 36px;
        background-color: grey;
        border-radius: 100%;
    }
    .find-play-info {
        flex: 2;
        font-size: 0.85rem;
        line-height: 1.2rem;
        opacity: 0.8;
        .play-place {
            font-size: 0.8rem;
        }
        @media (min-width: 768px) {
            display: inline-flex;
            gap: 6px;
            align-items: center;
            .play-place::before {
                content: "/ ";
            }
        }
    }

    &:last-of-type {
        border-bottom: none;
    }
    @media (min-width: 768px) {
        padding: 0 0 20px;
        margin: 0 0 -12px;
        border-bottom: 1px solid ${({ theme }) => theme.color.gray1};
    }
`;

const Apply = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    .find-player-number {
        display: inline-flex;
        align-items: center;
        font-size: 0.7rem;
        font-weight: 500;
        color: ${({ theme }) => theme.color.gray3};
        gap: 4px;
        &::before {
            content: "모집";
        }
    }
`;

const ModalContainer = styled.div`
    .popup-contents {
        margin: 0 0 6px;
        line-height: 1rem;
        font-size: 0.9rem;
        text-align: center;
    }
    .popup-confirm-msg {
        margin: 12px 0 8px;
        padding: 12px 0 0;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
    }
    .popup-desc {
        color: var(--dark);
        font-size: 0.8rem;
        line-height: 1.1rem;
        text-align: center;
    }
`;

export default Yongbyung;
