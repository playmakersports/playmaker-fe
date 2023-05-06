import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

function UserFan() {
    return (
        <Container>
            <Item>
                <div className="image-wrap">
                    <Image
                        src="https://i.namu.wiki/i/dcar9mL7641e7725_mXwvggQ1_hS71c-zYPmrL-U6Qyid767fQ9qktBy_m_IMQfzpUq6Y74LlwOePxAE36d3jkdBysSVXUlL22vviSfBKL81f5KIlaNgSByzNYsIPi9m3J6QraWoEJ-Du8ZcrNoH1g.svg"
                        width={32}
                        height={32}
                        alt="리버풀 FC"
                    />
                </div>
                <div className="club-info">
                    <p className="club-league">Premier League</p>
                    <p className="club-name">리버풀 FC</p>
                </div>
            </Item>
            <Item>
                <div className="image-wrap">
                    <Image
                        src="https://i.namu.wiki/i/k-Dy-_nWBXmL8ma9We-CaGVeSB9sntdm4mBFXCiN3BuxhuJkDudd6A3axn09qyF9bOPod58IjGZDjuuvrom3ivwfB4zxdCwP1UEJzpONHyuj--CIOVUobKSFcIbZoY0jdlTBhZvtlzmVQG5VywP3wA.svg"
                        width={32}
                        height={32}
                        alt="리버풀 FC"
                    />
                </div>
                <div className="club-info">
                    <p className="club-league">K League 1</p>
                    <p className="club-name">전북 현대</p>
                </div>
            </Item>
        </Container>
    );
}

const Container = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;
const Item = styled.li`
    display: flex;
    justify-content: center;
    gap: 6px;
    .image-wrap {
        padding: 5px 0;
        border: 1px solid #eee;
        width: 44px;
        height: 44px;
        background-color: #fff;
        border-radius: 60px;
        text-align: center;
    }
    .club-info {
        min-width: 76px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4px;
    }
    .club-league {
        font-size: 0.6rem;
        font-weight: 600;
        letter-spacing: -0.2px;
    }
    .club-name {
        font-size: 0.9rem;
    }
`;

export default UserFan;
