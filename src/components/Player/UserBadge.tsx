import React from "react";
import styled from "@emotion/styled";

function UserBadge({ simple }: { simple?: boolean }) {
    return (
        <Container>
            <Numbers className="numbers">
                <p className="point">120</p>
                <p className="rank">20</p>
                <img className="flag" src="/assets/Flag/ROK_40px_Flag.png" alt="대한민국 국기" />
            </Numbers>
            <Photo>
                <img src="/assets/profile_image.png" alt="프로필 이미지" />
            </Photo>
            <Description simple={!!simple}>
                <p className="username">이강인이피엘가자</p>
                {simple && <p className="username-real">본명</p>}
                {simple || (
                    <ul className="userstats numbers">
                        <li>
                            <dt>GOAL</dt>
                            <dd>120</dd>
                        </li>
                        <li>
                            <dt>M.O.M</dt>
                            <dd>8</dd>
                        </li>
                        <li>
                            <dt>TOP RANKED</dt>
                            <dd>20</dd>
                        </li>
                    </ul>
                )}
            </Description>
        </Container>
    );
}

const badgePath =
    "M0 260.461V20.1191L45.8567 10.0596L91.7134 0L184 20.1191V260.461C184 260.461 102 276 92 296C82 276 0 260.461 0 260.461Z";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px auto 0;
    width: 184px;
    height: 296px;
    clip-path: ${`path("${badgePath}")`};
    background-color: #777;
    text-align: center;
`;

const Numbers = styled.div`
    position: absolute;
    padding: 32px 8px 12px 12px;
    height: 168px;
    top: 0;
    left: 0;
    background: rgb(184, 0, 0);
    background: linear-gradient(
        180deg,
        rgba(184, 0, 0, 1) 0%,
        rgba(184, 0, 0, 0.8) 50%,
        rgba(184, 0, 0, 0) 100%
    ); // 소속팀 상징색
    text-align: left;
    color: #fff;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    .point {
        font-size: 2.4rem;
        font-weight: 500;
    }
    .rank {
        font-size: 1.85rem;
    }
    .flag {
        margin: 8px 0 0 0;
        width: 28px;
    }
`;
const Photo = styled.div`
    height: 168px;
    overflow: hidden;
    img {
        float: right;
        width: 100%;
        object-fit: cover;
    }
`;
const Description = styled.div<{ simple: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 132px;
    background-color: #faebeb; // 소속팀 상징색
    .username {
        margin: 0 auto;
        width: 160px;
        padding: ${(props) => (props.simple ? "28px 0 0" : "12px 0 8px")};
        border-bottom: 1px solid #e65f5f; // 소속팀 상징색
        border: ${(props) => (props.simple ? "none" : "")};
        color: #e65f5f;
        font-weight: 700;
        font-size: 1.35rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .username-real {
        margin: 12px 0 0;
        font-size: 1.15rem;
        color: #000;
        opacity: 0.7;
    }
    .userstats {
        display: flex;
        flex-wrap: wrap;
        padding: 8px 16px;
        align-items: center;
        justify-content: center;
        gap: 6px 14px;
        li {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #000000;
            line-height: 1.1rem;
            dt {
                font-weight: 500;
                font-size: 1.1rem;
            }
            dd {
                font-size: 1.05rem;
            }
        }
    }
`;

export default UserBadge;
