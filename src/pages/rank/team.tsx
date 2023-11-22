import React from "react";
import styled from "@emotion/styled";
import Button from "@/src/components/Common/Button";

function LocalTeamRank() {
    const today = new Date();

    const data = [
        {
            teamname: "",
            teamRank: 1,
        },
    ];
    return (
        <Container>
            <FirstPlace>
                <p className="location-name">경기 안양시, 최고의 팀</p>
                <FirstTeamInfo>
                    <p className="team-image numbers"></p>
                    <p className="team-name">불도저FC</p>
                    <p className="team-match-history">28전 22승 3무 3패</p>
                </FirstTeamInfo>
                <FirstTeamPoint>
                    <p className="team-point">
                        <strong className="numbers">128</strong>점
                    </p>
                    <p className="team-recent-win">
                        <strong className="numbers">22</strong>승
                    </p>
                </FirstTeamPoint>
            </FirstPlace>
            <List>
                {data.map((item, index) => (
                    <Item key={index}>
                        <i className="find-team-logo" />
                        <TeamName>
                            <span className="find-team-name">{item.teamname}</span>
                            <span className="find-team-rank">
                                <strong>지역랭킹</strong> {item.teamRank}위
                            </span>
                        </TeamName>
                        <p className="find-play-info">
                            <br />
                        </p>
                        <Apply>
                            <Button type="button" mode="sub1" size="medium" text="용병 지원" />
                            <p className="find-player-number">명</p>
                        </Apply>
                    </Item>
                ))}
            </List>
        </Container>
    );
}

const Container = styled.section``;
const FirstPlace = styled.div`
    position: relative;
    padding: 28px 24px;
    height: 200px;
    background-color: ${({ theme }) => theme.color.sub1};
    overflow: hidden;
    .location-name {
        color: #fff;
        opacity: 0.8;
        font-size: 1.4rem;
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 40px;
        display: block;
        width: 100px;
        height: 100%;
        background: linear-gradient(
            180deg,
            ${({ theme }) => theme.color.sub2} 0%,
            ${({ theme }) => theme.color.sub1} 100%
        );
        background-color: ${({ theme }) => theme.color.sub2};
        transform: skew(-40deg);
    }
`;

const FirstTeamInfo = styled.div`
    position: relative;
    margin: 20px 0 0;
    .team-image {
        position: absolute;
        top: -8px;
        right: 0;
        width: 96px;
        height: 96px;
        background-color: #fff;
        border-radius: 100%;
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 28px;
            height: 28px;
            background-color: ${({ theme }) => theme.color.sub2};
            transform: rotate(45deg);
            box-shadow: 0 0 4px 1px ${({ theme }) => theme.color.sub2};
        }
        &::after {
            content: "1";
            position: absolute;
            top: 0;
            left: 0;
            width: 28px;
            height: 28px;
            text-align: center;
            color: #fff;
            font-weight: 600;
            font-size: 2rem;
            line-height: 24px;
        }
    }
    .team-name {
        color: #fff;
        font-size: 2.8rem;
        font-weight: 700;
    }
    .team-match-history {
        margin: 8px 0 0;
        color: #fff;
        font-weight: 300;
        font-size: 1.4rem;
        opacity: 0.8;
    }
`;
const FirstTeamPoint = styled.div`
    position: absolute;
    display: flex;
    gap: 1px;
    bottom: 0;
    height: 76px;
    background-color: ${({ theme }) => theme.color.highlight};
    p {
        display: inline-flex;
        align-items: flex-end;
        gap: 2px;
        height: 100%;
        padding: 0 12px 40px 8px;
        font-weight: 700;
        font-size: 1.6rem;
        letter-spacing: -1px;
    }
    .team-point {
        color: ${({ theme }) => theme.color.highlight};
        background-color: #53c4a2;
    }
    .team-recent-win {
        color: ${({ theme }) => theme.color.highlight};
        background-color: ${({ theme }) => theme.color.green};
    }
    .numbers {
        margin-bottom: -4px;
        font-size: 3.2rem;
    }
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;
const TeamName = styled.p`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    .find-team-name {
        font-size: 1.1rem;
        font-weight: 600;
    }
    .find-team-rank {
        color: ${({ theme }) => theme.color.gray4};
        font-size: 0.85rem;
        font-weight: 400;
        letter-spacing: -0.3px;
    }
`;
const Item = styled.li`
    display: flex;
    padding: 0 0 0 64px;
    flex-direction: column;
    justify-content: space-between;
    gap: 6px;
    .find-team-logo {
        position: absolute;
        left: 16px;
        display: block;
        width: 52px;
        height: 52px;
        background-color: grey;
        border-radius: 100%;
    }
    .find-play-info {
        flex: 2;
        font-size: 0.9rem;
        line-height: 1.2rem;
        opacity: 0.8;
        .play-place {
            font-size: 0.8rem;
        }
    }
`;

const Apply = styled.div`
    position: absolute;
    right: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    .find-player-number {
        display: inline-flex;
        align-items: center;
        font-size: 0.85rem;
        font-weight: 500;
        color: ${({ theme }) => theme.color.gray3};
        gap: 4px;
        &::before {
            content: "모집";
        }
    }
`;

const ModalContainer = styled.div`
    .popup-contents {
        margin: 0 0 6px;
        line-height: 1rem;
        font-size: 0.9rem;
        text-align: center;
    }
    .popup-confirm-msg {
        margin: 12px 0 8px;
        padding: 12px 0 0;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
    }
    .popup-desc {
        color: var(--dark);
        font-size: 0.8rem;
        line-height: 1.1rem;
        text-align: center;
    }
`;

export default LocalTeamRank;
