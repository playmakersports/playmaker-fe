import React from "react";
import styled from "@emotion/styled";

import FloatBottom from "@/src/components/Common/FloatBottom";
import ButtonLarge from "@/src/components/Common/ButtonLarge";

function Team() {
    const teamColor = "#237c50";
    return (
        <Container>
            <NameBox color={teamColor}>
                <NameHead>
                    <Name>축구 FC</Name>
                    <p>관리</p>
                </NameHead>
                <TeamInfo>
                    <p className="team-info-number">
                        <span className="numbers">100</span>
                        <span className="numbers">20</span>
                    </p>
                    <p className="numbers team-info-founded">2020.12.30</p>
                </TeamInfo>
            </NameBox>
            1
            <FloatBottom>
                <>
                    <ButtonLarge callback={() => console.log("hi")} main={false} text="경기 목록" />
                    <ButtonLarge callback={() => console.log("")} main={false} text="선수 목록" />
                </>
            </FloatBottom>
        </Container>
    );
}

const defaultFontFamily =
    "system-ui, -apple-system, Pretendard, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

const Container = styled.section`
    padding: 160px 16px 0;
`;

const NameBox = styled.article<{ color: string }>`
    position: fixed;
    padding: 48px 32px 24px;
    top: 0;
    left: 0;
    width: 100%;
    height: 184px;
    background-color: ${(props) => props.color ?? "silver"};
    z-index: 10;
    &::after {
        position: absolute;
        display: block;
        margin-left: -4px;
        content: "";
        left: 0;
        bottom: -35px;
        background-color: ${(props) => props.color ?? "silver"};
        width: calc(100% + 6px);
        height: 36px;
        clip-path: polygon(50% 100%, 0 0, 100% 0);
    }
`;

const NameHead = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;
const Name = styled.h3`
    background: none;
    color: #fff;
    font-size: 1.85rem;
    font-weight: 600;
    text-align: center;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`;
const TeamInfo = styled.div`
    display: flex;
    margin: 24px 0 0;
    justify-content: space-between;
    align-items: top;
    color: #fff;
    .team-info-number {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        span:first-of-type {
            margin-top: -3px;
            font-size: 2.9rem;
            font-weight: 400;
            &::after {
                display: block;
                content: "포인트";
                margin: 2px 0 0;
                font-size: 0.95rem;
                font-weight: 300;
                font-family: ${defaultFontFamily};
            }
        }
        span:last-of-type {
            font-size: 1.8rem;
            font-weight: 400;
            &::after {
                display: block;
                content: "동네랭킹";
                margin: 3px 0 0;
                font-size: 0.95rem;
                font-weight: 300;
                font-family: ${defaultFontFamily};
            }
        }
    }
    .team-info-founded {
        font-size: 1.6rem;
        letter-spacing: -0.1px;
        &::after {
            display: block;
            margin: 3px 0 0;
            content: "창단";
            font-weight: 300;
            font-family: ${defaultFontFamily};
            font-size: 0.95rem;
            text-align: right;
        }
    }
`;
export default Team;
