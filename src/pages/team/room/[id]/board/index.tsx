import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import TeamLayout from "@/src/components/Team/Layout";
import Pagination from "@/src/components/Board/Pagination";
import Search from "@/src/components/Board/Search";
import { BasicButton } from "@/src/components/Common/OptionalButton";
import Button from "@/src/components/Common/Button";

function TeamBoard() {
    const router = useRouter();
    const teamId = router.query.id;
    const page = router.query.page;
    const teamColor = "#237c50";

    const moveArticle = (target: string) => {
        router.push(`/team/room/${teamId}/board/${target}`);
    };

    const data = [
        {
            articleId: "123",
            label: "공지",
            title: "제목제목제목제목제목제목제목제목제목제목제목제목제목제목",
            commentCount: 24,
            viewCount: 120,
            writer: "어쩌고저쩌고",
            writtenAt: "2023-06-20",
        },
        {
            articleId: "122",
            label: "",
            title: "제목제목제목제목제목제목제목제목제목제목제목제목제목제목",
            commentCount: 24,
            viewCount: 120,
            writer: "어쩌고저쩌고",
            writtenAt: "2023-06-20",
        },
        {
            articleId: "125",
            label: "공지",
            title: "제목제목제목제목제목제목제목제목제목제목제목제목제목제목",
            commentCount: 24,
            viewCount: 120,
            writer: "어쩌고저쩌고",
            writtenAt: "2023-06-20",
        },
    ];

    return (
        <TeamLayout teamName="팀 이름" title="팀 게시판" color={teamColor}>
            <List>
                {data.map((value) => (
                    <Article key={value.articleId} onClick={() => moveArticle(value.articleId)}>
                        <ArticleTitle>
                            {value.label && <span className="article-label">{value.label}</span>}
                            <span className="article-title">{value.title}</span>
                        </ArticleTitle>
                        <ArticleDetail>
                            <p className="article-count-wrap">
                                <span className="article-comment">
                                    댓글 <span className="comment-count">{value.commentCount}</span>
                                </span>
                                <span className="article-view">조회 {value.viewCount}</span>
                            </p>
                            <p className="article-info-wrap">
                                <span className="article-writer">{value.writer}</span> |{" "}
                                <span className="article-date">{value.writtenAt}</span>
                            </p>
                        </ArticleDetail>
                    </Article>
                ))}
                <Btns>
                    <Button type="button" mode="sub1" size="xsmall" text="글쓰기" />
                </Btns>
                <Search />
                <Pagination base={`/team/room/${teamId}/board`} now={0} last={12} />
            </List>
        </TeamLayout>
    );
}

const List = styled.ul`
    display: flex;
    flex-direction: column;
`;
const Article = styled.li`
    cursor: pointer;
    padding: 12px 4px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray1};
    &:last-of-type {
        border: none;
    }
`;

const ArticleTitle = styled.div`
    margin: 0 0 12px;
    display: inline-flex;
    width: 100%;
    align-items: center;
    gap: 6px;
    .article-label {
        padding: 2px 6px;
        border-radius: 20px;
        border: 1px solid ${({ theme }) => theme.color.black};
        font-size: 0.7rem;
        font-weight: 500;
        text-align: center;
        word-break: keep-all;
    }
    .article-title {
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
const ArticleDetail = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    opacity: 0.75;
    .article-count-wrap {
        flex: 1;
        display: inline-flex;
        gap: 6px;
        .comment-count {
            font-weight: 600;
        }
    }
`;

const Btns = styled.div`
    margin: 20px 0 0;
`;

export default TeamBoard;
