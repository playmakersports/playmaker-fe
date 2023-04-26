import React from "react";
import styled from "@emotion/styled";

import { MAIN_ALERT } from "@/src/constants/CODE";

interface CardPropsType {
    code: string;
    contents: string;
    redirect: string;
    icon?: string;
}

function AlertCard({ code, contents, redirect, icon }: CardPropsType) {
    return (
        <Container>
            <p className="alert-title">
                <i>N</i>
                <span>{MAIN_ALERT[code]}</span>
            </p>
            <p className="alert-detail">{contents}</p>
        </Container>
    );
}

const Container = styled.article`
    cursor: pointer;
    padding: 12px 8px;
    color: var(--black);
    border-bottom: 1px solid var(--black-op15);
    .alert-title {
        display: flex;
        align-items: center;
        margin: 0 0 12px 0;
        font-weight: 500;
        font-size: 1.1rem;
        i {
            display: inline-block;
            margin: 0 6px 0 0;
            content: "N";
            width: 17px;
            height: 17px;
            border-radius: 100%;
            background-color: var(--warn);
            color: #fff;
            font-size: 12px;
            text-align: center;
            line-height: 18px;
        }
    }
    .alert-detail {
        font-size: 0.95rem;
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

export default AlertCard;
