import React from "react";
import styled from "@emotion/styled";

import { MdText, SubTitleText } from "@/src/styles/common";

export const ALERT_CODE: { [key: string]: string } = {
    UPCOMING_MATCH: "예정경기",
    JOIN_PURPOSE: "영입제안",
    MATCH_PURPOSE: "매치제안",
};

function AlertList() {
    const ALERT_DATA = [
        { code: "UPCOMING_MATCH", contents: "5월 1일 20:00, CS풋살클럽 경기", redirect: "" },
        { code: "JOIN_PURPOSE", contents: "FC달린다 등 2개 팀의 영입 제안", redirect: "" },
        { code: "MATCH_PURPOSE", contents: "FC불도저의 5월 5일 매치 제안", redirect: "" },
    ];

    return (
        <Wrapper>
            {ALERT_DATA.map((value, index) => (
                <Item key={index}>
                    <Title>
                        <strong>N</strong>
                        <SubTitleText>{ALERT_CODE[value.code]}</SubTitleText>
                    </Title>
                    <Detail>{value.contents}</Detail>
                </Item>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.ul`
    display: flex;
    margin: 6px 0 12px;
    padding: 0 16px;
    flex-direction: column;

    @media (min-width: 768px) {
        margin: 0 auto;
        max-width: 1024px;
    }
`;
const Item = styled.li`
    cursor: pointer;
    display: flex;
    padding: 10px 8px;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray1};
    gap: 8px;

    &:last-of-type {
        border-bottom: none;
    }

    @media (min-width: 640px) {
        display: flex;
        padding: 16px;
    }
`;

const Title = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 4px;

    strong {
        content: "N";
        display: inline-flex;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        background-color: ${({ theme }) => theme.color.warn};
        color: #fff;
        font-size: 1.1rem;
        font-weight: 900;
        align-items: center;
        justify-content: center;
    }
`;

const Detail = styled(MdText)`
    color: ${({ theme }) => theme.color.gray4};
`;

export default AlertList;
