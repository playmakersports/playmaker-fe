import React from "react";
import styled from "@emotion/styled";

import Card from "../Main/Card";

interface BoardDataType {
    articleId: string;
    label: string;
    title: string;
    writtenAt: string;
}

interface BoardCardPropsType {
    teamId: string | undefined;
    board: BoardDataType[];
    photos: BoardDataType[];
}

function BoardCard({ teamId, board, photos }: BoardCardPropsType) {
    return (
        <Cards>
            <Card title="팀 게시판" link={`/team/room/${teamId}/board`}>
                <CardContents>
                    {board.map((item) => (
                        <li key={item.articleId}>
                            <span className="card-board-title">
                                {item.label && <span className="card-board-label">{item.label}</span>}
                                {item.title}
                            </span>
                            <span className="card-board-written numbers">{item.writtenAt}</span>
                        </li>
                    ))}
                </CardContents>
            </Card>
            <Card title="사진 게시판" link={`/team/room/${teamId}/photos`}>
                <CardContents>
                    {photos.map((item) => (
                        <li key={item.articleId}>
                            <span className="card-board-title">
                                {item.label && <span className="card-board-label">{item.label}</span>}
                                {item.title}
                            </span>
                            <span className="card-board-written numbers">{item.writtenAt}</span>
                        </li>
                    ))}
                </CardContents>
            </Card>
        </Cards>
    );
}

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const CardContents = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    li {
        display: flex;
        padding: 4px 0;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        .card-board-title {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-size: 0.95rem;
            line-height: 1.1rem;
        }
        .card-board-label {
            padding: 0 6px;
            border-radius: 20px;
            border: 1px solid ${({ theme }) => theme.color.black};
            font-size: 0.7rem;
            font-weight: 500;
        }
        .card-board-written {
            opacity: 0.6;
            font-size: 0.85rem;
        }
    }
`;

export default BoardCard;
