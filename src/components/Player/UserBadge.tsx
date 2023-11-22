import React from "react";
import styled from "@emotion/styled";
import FlagROK from "@/src/assets/flags/FlagROK";
import WinnerCupIcon from "@/src/assets/icons/common/WinnerCupIcon";

function UserBadge({ simple = false }: { simple?: boolean }) {
    return (
        <Container>
            <Numbers>
                <p className="point numbers">120</p>
                <p className="rank numbers">20</p>
                <p className="flag">
                    <FlagROK />
                </p>
            </Numbers>
            <Photo>
                <img
                    src="https://yonhapnewstv-prod.s3.ap-northeast-2.amazonaws.com/article/AKR/20230620/AKR20230620147800641_01_i_P4.jpg"
                    alt="프로필 이미지"
                />
            </Photo>
            <Stats>
                <Left></Left>
                <Right>
                    <div className="box goal-box">
                        <strong className="numbers">1</strong>골
                    </div>
                    <div className="box goal-mom">
                        <strong className="numbers">1</strong>
                        <WinnerCupIcon width={20} height={18} />
                    </div>
                </Right>
            </Stats>
            <Description simple={simple}>
                <p className="username">빠리지앵이강인</p>
                {simple && <p className="username-real">본명</p>}
                {!simple && <p className="high-rank">최고 15위</p>}
            </Description>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    height: 280px;
    clip-path: polygon(0 5%, 50% 0, 100% 5%, 100% 92%, 50% 100%, 0 92%);
    background-color: #777;
    text-align: center;
`;

const Numbers = styled.div`
    position: absolute;
    padding: 24px 8px 12px 12px;
    height: 180px;
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
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    .point {
        font-size: 3.6rem;
        font-weight: 500;
    }
    .rank {
        font-size: 2.8rem;
    }
    .flag {
        margin-top: 4px;
        svg {
            width: 36px;
            height: auto;
        }
    }
`;
const Photo = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    img {
        width: 100%;
        height: 220px;
        object-fit: cover;
    }
`;
const Stats = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-between;
    bottom: calc(100% - 200px);
`;
const Left = styled.div``;
const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    .box {
        display: inline-flex;
        align-items: flex-end;
        gap: 2px;
        padding: 4px 8px 12px;
        font-size: 1.4rem;
        font-weight: 600;
        .numbers {
            font-size: 2.2rem;
        }
    }
    .goal-box {
        color: #dcdcdc;
        background-color: #646464;
        border-top: 1px solid #5b5b5b;
        border-left: 2px solid #5b5b5b;
    }
    .goal-mom {
        color: #111213;
        background-color: #c1d463;
        border-top: 1px solid #aec053;
        border-left: 2px solid #aec053;
    }
`;

const Description = styled.div<{ simple: boolean }>`
    position: absolute;
    bottom: 0;
    padding-bottom: 16px;
    width: 100%;
    height: calc(100% - 200px);
    background-color: #f3f3f3;
    .username {
        margin: 0 auto;
        width: 100%;
        padding: ${({ simple }) => (simple ? "16px 0 0" : "12px 0 8px")};
        color: #111213;
        font-weight: 700;
        font-size: 1.8rem;
        font-family: SUITE Variable;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .username-real {
        margin: 8px 0 0;
        font-size: 1.6rem;
        color: #000;
        opacity: 0.8;
    }
    .high-rank {
        display: inline-block;
        padding: 4px 8px;
        font-size: 1.3rem;
        font-weight: 600;
        color: #494b4d;
        border: 1px solid #494b4d;
        border-radius: 16px;
    }
`;

export default UserBadge;
