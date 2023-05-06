import React from "react";
import styled from "@emotion/styled";

import Link from "next/link";

function GNB() {
    return (
        <Container>
            <Item>
                <Link href="/team">
                    <span>소속팀</span>
                </Link>
            </Item>
            <Item>
                <Link href="/">
                    <span>메인</span>
                </Link>
            </Item>
            <Item>
                <Link href="/player">
                    <span>내정보</span>
                </Link>
            </Item>
        </Container>
    );
}

const Container = styled.ul`
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0%;
    width: 100%;
    height: 80px;
    color: var(--black);
    background-color: var(--gnb-bg);
    z-index: 10;
    @media (max-width: 768px) {
        align-items: top;
        padding: 0 24px;
        left: 0%;
        border-radius: 20px 20px 0 0;
        border-top: var(--gnb-border);
        box-shadow: 1px 0 12px 4px rgba(0, 0, 0, 0.02);
    }
    @media (min-width: 768px) {
        border: var(--gnb-border);
        align-items: center;
        margin: 24px;
        padding: 0 24px;
        width: 320px;
        height: 68px;
        right: 0%;
        border-radius: 40px;
    }
`;

const Item = styled.li`
    flex: 1;
    text-align: center;
    span {
        padding: 16px 20px;
    }
    @media (max-width: 768px) {
        padding: 20px 0 0 0;
    }
`;

export default GNB;
