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
    margin: 12px 0 16px;
    padding: 0 16px;
    flex-direction: column;
`;
const Card = styled.li`
    cursor: pointer;
    padding: 12px 8px;
    color: var(--black);
    border-bottom: 1px solid var(--black-op15);
    &:last-of-type {
        border-bottom: none;
    }
    .alert-title {
        display: flex;
        align-items: center;
        margin: 0 0 8px 0;
        font-weight: 500;
        font-size: 1rem;
        i {
            display: inline-block;
            margin: 0 6px 0 0;
            content: "N";
            width: 16px;
            height: 16px;
            border-radius: 100%;
            background-color: var(--warn);
            color: #fff;
            font-size: 11px;
            text-align: center;
            line-height: 17px;
        }
    }
    .alert-detail {
        font-size: 0.9rem;
        font-weight: 300;
        opacity: 0.7;
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
