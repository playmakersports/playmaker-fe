import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { TitleText, SubTitleText, MdText } from "@/src/styles/common";
import Link from "next/link";

interface Props {
    type: string;
    localId: string;
    localName: string;
    list: { rank: number; teamId: string; teamName: string; teamImage: string; point: number; winRate: number }[];
}

function RankCarousel({ type, localId, localName, list }: Props) {
    const [RankOrder, setRankOrder] = useState(1);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setRankOrder((prev) => {
                if (prev === 5) return 1;
                return (prev + 1) % 6;
            });
        }, 2500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Wrapper>
            <Title>
                <TitleText>우리동네 팀 랭킹</TitleText>
                <Link href={`/rank/${type.toLowerCase()}?location=${localId}`}>
                    <MdText>더보기</MdText>
                </Link>
            </Title>
            <Container>
                <Carousel order={RankOrder}>
                    {[list[4], ...list, list[0]].map((item, index) => (
                        <Item key={`${item.teamId}-${index}`}>
                            <Card main={item.rank === RankOrder}>
                                <TeamName>
                                    {item.rank} {item.teamName}
                                </TeamName>
                                <Info>
                                    <span className="info-name">포인트</span>{" "}
                                    <span className="numbers">{item.point}</span>
                                </Info>
                                <Info>
                                    <span className="info-name">승률</span>
                                    <span className="numbers">{item.winRate * 100}%</span>
                                </Info>
                            </Card>
                        </Item>
                    ))}
                </Carousel>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div``;
const Title = styled.div`
    display: flex;
    margin: 0 0 16px;
    justify-content: space-between;
    align-items: center;
`;
const Container = styled.div`
    margin: 0 -16px;
    overflow: hidden;
`;
const Carousel = styled.ul<{ order: number }>`
    display: flex;
    height: 132px;
    transform: ${({ order }) => `translate(-${80 * order}%, 0)`};
    transition: ${({ order }) => order !== 1 && "transform 0.3s"};
`;
const Item = styled.li`
    flex: 0 0 80%;
    height: 132px;
`;
const Card = styled.div<{ main: boolean }>`
    padding: 24px;
    height: 100%;
    border-radius: 20px;
    background-color: ${({ main, theme }) => (main ? theme.color.main : theme.color.green)};
    transform: translateX(12.5%) scale(${({ main }) => (main ? 1 : 0.9)});
    transform-origin: center;
    transition: all 0.3s;
`;

const TeamName = styled(SubTitleText)`
    margin: 0 0 8px;
    font-size: 2.5rem;
    font-weight: 700;
`;
const Info = styled(MdText)`
    margin: 0 6px 0 0;
    display: inline-flex;
    align-items: center;
    gap: 3px;
    .info-name {
        opacity: 0.8;
    }
    .numbers {
        font-size: 2rem;
        font-weight: 500;
    }
`;

export default RankCarousel;
