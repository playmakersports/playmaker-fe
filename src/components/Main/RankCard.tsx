import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import ItemTitle from "./ItemTitle";
import { MdHeadText, MdText } from "@/src/styles/common";
import CrownIcon from "@/src/assets/icons/common/CrownIcon";

interface Props {
    type: string;
    localId: string;
    list: {
        rank: number;
        userId: string;
        nickname: string;
        profileImg: string;
        winRate: number;
        point: number;
    }[];
}

function RankCard({ type, localId, list }: Props) {
    return (
        <Container>
            <ItemTitle title="이시각 선수 랭킹" moreLink={`/rank/${type.toLowerCase()}?location=${localId}`} />

            <RankList>
                {list.map((item) => (
                    <RankItem key={item.userId}>
                        <RankNum as="span">
                            {item.rank === 1 ? <CrownIcon width={32} height={26} /> : item.rank}
                        </RankNum>
                        <Nickname>
                            <img src={item.profileImg} alt={`${item.nickname}의 프로필 이미지`} />
                            {item.nickname}
                        </Nickname>
                        <Stats>
                            <span className="card-number numbers percent">{item.winRate * 100}%</span>
                            <span className="card-number numbers point">{item.point}</span>
                        </Stats>
                    </RankItem>
                ))}
            </RankList>
        </Container>
    );
}

const Container = styled.div``;
const RankList = styled.ul`
    display: flex;
    padding: 12px 16px;
    flex-direction: column;
    gap: 12px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.shadow.card20};
`;
const RankItem = styled.li`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    height: 36px;
`;

const RankNum = styled(MdHeadText)`
    padding: 3px 0;
    width: 36px;
    text-align: center;
    font-size: 2rem;
`;
const Nickname = styled(MdText)`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    img {
        display: inline-block;
        width: 32px;
        height: 32px;
        object-fit: cover;
        overflow: hidden;
        border-radius: 100%;
        border: 1px solid ${({ theme }) => theme.color.gray2};
    }
`;
const Stats = styled(MdText)`
    display: inline-flex;
    gap: 8px;
    .card-number {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        color: ${({ theme }) => theme.color.gray4};
        font-size: 1.8rem;
        text-align: center;
        letter-spacing: -0.3px;
        &::before {
            font-size: 1.2rem;
            font-weight: 400;
            color: ${({ theme }) => theme.color.gray2};
        }
    }
    .percent::before {
        content: "승률";
    }
    .point::before {
        content: "포인트";
    }
`;

export default RankCard;
