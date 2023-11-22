import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";

import { getDateDiffMessage, getDateInterval } from "@/src/util/time";
import { MdHeadText, MdText } from "@/src/styles/common";
import Modal from "@/src/components/Common/Modal";
import FloatBottom from "@/src/components/Common/FloatBottom";
import Button from "@/src/components/Common/Button";
import { CentralBtn, FilterBtn } from "@/src/components/Common/OptionalButton";
import { DateTimeIcon } from "@/src/assets/icons/common/DateTimeIcon";
import { LocationPickerIconOutlined } from "@/src/assets/icons/common/LocationPickerIcon";
import { FilterIcon } from "@/src/assets/icons/common/FilterIcon";

interface YongbyungItemType {
    teamId: string;
    teamRank: number;
    teamName: string;
    playAt: string;
    playground: string;
    findNum: number;
}

function Yongbyung() {
    const router = useRouter();
    const theme = useTheme();
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
            teamName: "불도저FC",
            playAt: "2023-11-10 16:00",
            playground: "00풋살장",
            findNum: 2,
        },
        {
            teamId: "b",
            teamRank: 12,
            teamName: "어쩌고FC",
            playAt: "2023-10-30 18:00",
            playground: "00중학교",
            findNum: 3,
        },
        {
            teamId: "c",
            teamRank: 21,
            teamName: "저쩌고FC",
            playAt: "2023-10-30 20:00",
            playground: "00공원 실내풋살장",
            findNum: 1,
        },
        {
            teamId: "d",
            teamRank: 16,
            teamName: "저쩌고FC",
            playAt: "2023-10-31 20:00",
            playground: "00공원 실내풋살장",
            findNum: 1,
        },
        {
            teamId: "e",
            teamRank: 11,
            teamName: "저쩌고FC",
            playAt: "2023-11-02 20:00",
            playground: "00공원 실내풋살장",
            findNum: 1,
        },
        {
            teamId: "f",
            teamRank: 4,
            teamName: "저쩌고FC",
            playAt: "2023-11-01 20:00",
            playground: "00공원 실내풋살장",
            findNum: 1,
        },
        {
            teamId: "g",
            teamRank: 5,
            teamName: "저쩌고FC",
            playAt: "2023-10-29 20:00",
            playground: "00공원 실내풋살장",
            findNum: 1,
        },
        {
            teamId: "h",
            teamRank: 10,
            teamName: "저쩌고FC",
            playAt: "2023-10-30 20:00",
            playground: "00공원 실내풋살장",
            findNum: 1,
        },
    ];

    return (
        <>
            <Container>
                <TopBtns>
                    <CentralBtn type="button">경기 안양시</CentralBtn>
                    <FilterBtn type="button" onClick={() => setShowFilters((prev) => !prev)} showFilters={showFilters}>
                        <FilterIcon /> {FILTER_VALUE[filter]}
                        <ul className="filter-selector">
                            {Object.keys(FILTER_VALUE)
                                .map((key) => ({
                                    value: key,
                                    name: FILTER_VALUE[key],
                                }))
                                .map((item) => (
                                    <li
                                        key={item.value}
                                        className={item.value === filter ? "selected" : ""}
                                        onClick={() => setFilter(item.value)}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                        </ul>
                    </FilterBtn>
                </TopBtns>

                <List>
                    {MOCK_YONGBYUNG.map((item, index) => (
                        <Item key={index}>
                            <Left>
                                <img className="find-team-logo" />
                                <TeamName>
                                    <span className="find-team-name">{item.teamName}</span>
                                    <span className="find-team-rank">지역 {item.teamRank}위</span>
                                </TeamName>
                                <PlayInfo as="div">
                                    <p>
                                        <DateTimeIcon width={16} height={16} fill={theme.color.gray3} />
                                        {getDateDiffMessage(getDateInterval(item.playAt), new Date(item.playAt))}{" "}
                                        {item.playAt.split(" ")[1]}
                                    </p>
                                    <p>
                                        <LocationPickerIconOutlined width={16} height={16} fill={theme.color.gray3} />{" "}
                                        {item.playground}
                                    </p>
                                </PlayInfo>
                            </Left>
                            <Apply>
                                <Button
                                    type="button"
                                    mode="sub1"
                                    size="medium"
                                    text="용병 지원"
                                    callback={() => {
                                        setShowModal((prev) => !prev);
                                        setSelectedContents(item);
                                    }}
                                />
                                <MdText className="find-player-number">{item.findNum}명 모집</MdText>
                            </Apply>
                        </Item>
                    ))}
                </List>
            </Container>
            {showModal && (
                <Modal
                    title="용병 모집 지원"
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
                        <p className="popup-contents">{selectedContents?.teamName}</p>
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
    margin: 0 0 16px;
    gap: 4px;
`;
const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const Left = styled.div``;

const Item = styled.li`
    display: flex;
    padding: 20px 24px;
    justify-content: space-between;
    gap: 6px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.shadow.card20};
    border-radius: 8px;
`;
const TeamName = styled(MdHeadText)`
    display: inline-flex;
    margin: 0 0 12px;
    align-items: center;
    gap: 8px;
    .find-team-name {
        font-size: 2rem;
    }
    .find-team-rank {
        color: ${({ theme }) => theme.color.gray4};
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: -0.3px;
    }
`;
const PlayInfo = styled(MdText)`
    flex: 2;
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    gap: 6px;
    svg {
        margin-right: 4px;
    }
    p {
        display: inline-flex;
        align-items: center;
    }
`;
const Apply = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`;

const ModalContainer = styled.div`
    .popup-contents {
        margin: 0 0 6px;
        font-size: 1.6rem;
        text-align: center;
    }
    .popup-confirm-msg {
        margin: 12px 0 8px;
        padding: 12px 0 0;
        font-size: 1.8rem;
        font-weight: 600;
        text-align: center;
    }
    .popup-desc {
        font-size: 1.4rem;
        line-height: 2rem;
        text-align: center;
    }
`;

export default Yongbyung;
