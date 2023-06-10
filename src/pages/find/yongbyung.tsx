import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import Modal from "@/src/components/Common/Modal";
import FloatBottom from "@/src/components/Common/FloatBottom";
import ButtonLarge from "@/src/components/Common/ButtonLarge";

interface YongbyungItemType {
    teamId: string;
    teamname: string;
    playAt: string;
    playground: string;
    findNum: number;
}

function Yongbyung() {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [selectedContents, setSelectedContents] = useState<YongbyungItemType>();

    const MOCK_YONGBYUNG: YongbyungItemType[] = [
        { teamId: "a", teamname: "불도저FC", playAt: "6월 12일 16:00", playground: "00풋살장", findNum: 2 },
        { teamId: "b", teamname: "어쩌고FC", playAt: "6월 13일 16:00", playground: "00중학교", findNum: 3 },
        { teamId: "c", teamname: "저쩌고FC", playAt: "6월 13일 21:00", playground: "00공원 실내풋살장", findNum: 1 },
        { teamId: "d", teamname: "저쩌고FC", playAt: "6월 13일 21:00", playground: "00공원 실내풋살장", findNum: 1 },
        { teamId: "e", teamname: "저쩌고FC", playAt: "6월 13일 21:00", playground: "00공원 실내풋살장", findNum: 1 },
        { teamId: "f", teamname: "저쩌고FC", playAt: "6월 13일 21:00", playground: "00공원 실내풋살장", findNum: 1 },
        { teamId: "g", teamname: "저쩌고FC", playAt: "6월 13일 21:00", playground: "00공원 실내풋살장", findNum: 1 },
        { teamId: "h", teamname: "저쩌고FC", playAt: "6월 13일 21:00", playground: "00공원 실내풋살장", findNum: 1 },
    ];

    return (
        <>
            <Container>
                {/* <p>{router.query["location"]}의 용병 모집 현황입니다.</p> */}
                <List>
                    {MOCK_YONGBYUNG.map((item, index) => (
                        <Item
                            key={index}
                            onClick={() => {
                                setShowModal((prev) => !prev);
                                setSelectedContents(item);
                            }}
                        >
                            <p className="find-team-name">{item.teamname}</p>
                            <p className="find-play-info">
                                {item.playAt}
                                <br />
                                {item.playground}
                            </p>
                            <p className="find-player-number">{item.findNum}명</p>
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
                            main: false,
                            onClick: () => setShowModal((prev) => !prev),
                        },
                        {
                            type: "button",
                            text: "용병 지원",
                            main: true,
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
                        <div className="popup-contents">모집 {selectedContents?.findNum}명</div>
                        <div className="popup-confirm-msg">지원하시겠습니까?</div>
                        <div className="popup-desc">경기 당일 취소는 패널티가 부과될 수 있습니다</div>
                    </ModalContainer>
                </Modal>
            )}
            <FloatBottom>
                <ButtonLarge type="button" text="용병 모집 올리기" main={true} />
            </FloatBottom>
        </>
    );
}

const Container = styled.section`
    padding: 24px 16px 0;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;
const Item = styled.li`
    cursor: pointer;
    margin: 0 0 20px;
    padding: 0 6px 16px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: var(--gnb-border);
    p {
        font-size: 1rem;
        line-height: 1.5rem;
    }
    .find-team-name {
        flex: 1.2;
        font-weight: 500;
    }
    .find-play-info {
        flex: 2;
        font-size: 1rem;
        opacity: 0.8;
    }
    .find-player-number {
        flex: 0.5;
        opacity: 0.8;
        text-align: right;
    }
    &:last-of-type {
        border-bottom: none;
    }
    &:hover {
        opacity: 0.7;
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
        border-top: var(--gnb-border);
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
