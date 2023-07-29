import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import TeamLayout from "@/src/components/Team/Layout";
import Pagination from "@/src/components/Board/Pagination";
import Search from "@/src/components/Board/Search";
import Button from "@/src/components/Common/Button";

function TeamPhoto() {
    const router = useRouter();
    const teamId = router.query.id;
    // const page = router.query.page;
    const teamColor = "#237c50";

    const moveArticle = (target: string) => {
        router.push(`/team/room/${teamId}/photos/${target}`);
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
            articleId: "125",
            label: "",
            title: "제목제목제목제목제목제목제목제목제목제목제목제목제목제목",
            commentCount: 24,
            viewCount: 120,
            writer: "어쩌고저쩌고",
            writtenAt: "2023-06-20",
        },
        {
            articleId: "126",
            label: "공지",
            title: "제목제목제목제목제목제목제목제목제목제목제목제목제목제목",
            commentCount: 24,
            viewCount: 120,
            writer: "어쩌고저쩌고",
            writtenAt: "2023-06-20",
        },
    ];

    return (
        <TeamLayout teamName="팀 이름" title="팀 갤러리" color={teamColor}>
            <>
                <List>
                    {data.map((value) => (
                        <Article key={value.articleId} onClick={() => moveArticle(value.articleId)}>
                            <ArticleImage />
                            <ArticleTitle>{value.title}</ArticleTitle>
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
                </List>
                <Btns>
                    <Button type="button" mode="sub1" size="xsmall" text="글쓰기" />
                </Btns>
                <Search />
                <Pagination base={`/team/room/${teamId}/photos`} now={0} last={12} />
            </>
        </TeamLayout>
    );
}

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`;
const Article = styled.li`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--black);
`;
const ArticleImage = styled.div`
    width: 100%;
    height: 120px;
    background-color: #d5d5d5;
`;
const ArticleTitle = styled.p`
    display: -webkit-box;
    overflow: hidden;
    font-weight: 500;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;
const ArticleDetail = styled.div`
    font-size: 0.8rem;
    opacity: 0.75;
    .article-count-wrap {
        display: inline-flex;
        gap: 6px;
        .comment-count {
            font-weight: 600;
        }
    }
    .article-info-wrap {
        margin: 4px 0 0;
    }
`;

const Btns = styled.div`
    margin: 20px 0 0;
`;

export default TeamPhoto;
