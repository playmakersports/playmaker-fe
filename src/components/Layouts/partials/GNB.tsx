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
    background-color: var(--main);
    color: #000;
    z-index: 9;
    @media (max-width: 640px) {
        align-items: top;
        padding: 0 24px;
        left: 0%;
    }
    @media (min-width: 640px) {
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
    @media (max-width: 640px) {
        padding: 20px 0 0 0;
    }
`;

export default GNB;
