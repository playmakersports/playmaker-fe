import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import ItemTitle from "./ItemTitle";
import { MdHeadText, MdText } from "@/src/styles/common";
import { getDateDiffMessage, getDateInterval } from "@/src/util/time";

interface Props {
    localId: string;
    list: {
        teamId: string;
        matchId: string;
        teamName: string;
        playDate: string;
        playPlace: string;
        findNum: number;
    }[];
}

function YBFindList({ localId, list }: Props) {
    const [RankOrder, setRankOrder] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setRankOrder((prev) => {
                if (prev === list.length) return 0;
                return (prev + 1) % list.length;
            });
        }, 2500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container>
            <ItemTitle title="용병 모집" moreLink={`/find/yongbyung?location=${localId}`} />
            <Display>
                {list.map((item, index) => (
                    <Item
                        as="li"
                        key={item.matchId}
                        className={
                            RankOrder === index
                                ? "current"
                                : (RankOrder === 0 && list.length - 1 === index) || RankOrder - 1 === index
                                ? "prev"
                                : "next"
                        }
                    >
                        <span className="yb-item-team"> {item.teamName}</span>
                        <span className="yb-item-date">
                            {getDateDiffMessage(getDateInterval(item.playDate))} {item.playDate.split(" ")[1]}
                        </span>
                        <span className="yb-item-place">{item.playPlace}</span>
                        <span className="yb-item-number"> {item.findNum}명 모집</span>
                    </Item>
                ))}
            </Display>
        </Container>
    );
}

const Container = styled.div``;
const Display = styled.ul`
    position: relative;
    height: 48px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadow.card20};
    @media (min-width: 768px) {
        height: 132px;
    }
`;
const Item = styled(MdHeadText)`
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: -100%;
    padding: 16px 24px;
    width: 100%;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black};

    &.prev {
        top: -100%;
        transition: top 0.4s ease;
    }
    &.current {
        top: 0;
        transition: top 0.4s ease;
    }
    &.next {
        top: 100%;
    }
    .yb-item-place {
        display: none;
    }
    @media (min-width: 768px) {
        padding: 16px 20px;
        .yb-item-place {
            display: block;
        }
    }
`;

export default YBFindList;
