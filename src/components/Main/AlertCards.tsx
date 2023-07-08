import React from "react";
import styled from "@emotion/styled";

import { MAIN_ALERT } from "@/src/constants/CODE";

interface CardDataPropsType {
    code: string;
    contents: string;
    redirect: string;
    icon?: string;
}
interface CardPropsType {
    data: CardDataPropsType[];
}

function AlertCards({ data }: CardPropsType) {
    return (
        <Cards>
            {data.map((value, index) => (
                <Card key={index}>
                    <p className="alert-title">
                        <i>N</i>
                        <span>{MAIN_ALERT[value.code]}</span>
                    </p>
                    <p className="alert-detail">{value.contents}</p>
                </Card>
            ))}
        </Cards>
    );
}

const Cards = styled.ul`
    display: flex;
    margin: 6px 0 12px;
    padding: 0 16px;
    flex-direction: column;
`;
const Card = styled.li`
    cursor: pointer;
    padding: 10px 8px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray1};
    &:last-of-type {
        border-bottom: none;
    }
    .alert-title {
        display: inline-flex;
        align-items: center;
        margin: 0 0 8px 0;
        font-weight: 500;
        font-size: 0.95rem;
        gap: 8px;
        i {
            content: "N";
            width: 16px;
            height: 16px;
            border-radius: 100%;
            background-color: ${({ theme }) => theme.color.warn};
            color: #fff;
            font-size: 0.65rem;
            font-weight: 600;
            text-align: center;
            line-height: 1rem;
        }
    }
    .alert-detail {
        font-size: 0.8rem;
        font-weight: 300;
        opacity: 0.75;
    }
    @media (min-width: 640px) {
        display: flex;
        padding: 16px;
        .alert-title {
            margin: 0 16px 0 0;
        }
    }
`;

export default AlertCards;
