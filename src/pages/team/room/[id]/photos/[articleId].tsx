import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import TeamLayout from "@/src/components/Team/Layout";
import { BasicButton } from "@/src/components/Common/Button";

function PhotoArticle() {
    const router = useRouter();
    const teamId = router.query.id;
    const page = router.query.page;
    const teamColor = "#237c50";

    const COMMENTS_MOCK = [
        {
            commentId: "1234",
            contents: "댓글 내용입니당",
            written: "닉네임1이야",
            writtenAt: "2023-01-12",
            myComment: true,
        },
        {
            commentId: "1235",
            contents: "댓글 내용입니당",
            written: "닉네임2이야",
            writtenAt: "2023-01-12",
            myComment: false,
        },
        {
            commentId: "1236",
            contents: "댓글 내용입니당",
            written: "닉네임1이야",
            writtenAt: "2023-01-12",
            myComment: true,
        },
        {
            commentId: "1237",
            contents: "댓글 내용입니당",
            written: "닉네임3이야",
            writtenAt: "2023-01-12",
            myComment: false,
        },
        {
            commentId: "1238",
            contents: "댓글 내용입니당",
            written: "닉네임3이야",
            writtenAt: "2023-01-12",
            myComment: false,
        },
    ];

    return (
        <TeamLayout teamName="팀 이름" title="글 제목" color={teamColor}>
            <>
                <Info>
                    <p className="article-writer">나는천재야</p>
                    <p className="article-date">2023-06-29</p>
                </Info>
                <Contents>글 내용</Contents>
                <Btns>
                    <BasicButton type="button">수정</BasicButton>
                    <BasicButton type="button">삭제</BasicButton>
                    <BasicButton type="button">글쓰기</BasicButton>
                </Btns>
                <Comments>
                    <h3>댓글 {COMMENTS_MOCK.length}개</h3>
                    <List>
                        {COMMENTS_MOCK.map((comment) => (
                            <Comment key={comment.commentId}>
                                <div className="comment-info">
                                    <p>
                                        <span className="comment-writer">{comment.written}</span>{" "}
                                        <span className="comment-date">{comment.writtenAt}</span>
                                    </p>
                                    {comment.myComment && <button type="button">✕</button>}
                                </div>
                                <div className="comment-contents">{comment.contents}</div>
                            </Comment>
                        ))}
                    </List>
                </Comments>
            </>
        </TeamLayout>
    );
}

const Info = styled.div`
    display: flex;
    margin: 0 0 24px;
    justify-content: space-between;
    font-size: 0.9rem;
    opacity: 0.8;
    .article-writer {
        font-weight: 600;
    }
    .article-date {
    }
`;

const Contents = styled.article`
    margin: 0 0 16px;
`;

const Btns = styled.div`
    display: flex;
    margin: 0 0 16px;
    justify-content: flex-end;
    gap: 8px;
`;

const Comments = styled.div`
    h3 {
        margin: 0 0 8px;
        font-weight: 600;
        font-size: 1.2rem;
    }
`;
const List = styled.ul`
    display: flex;
    flex-direction: column;
`;
const Comment = styled.li`
    padding: 8px 0;
    border-bottom: 1px solid var(--black-op15);
    &:last-of-type {
        border: none;
    }
    .comment-info {
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        p {
            display: inline-flex;
            align-items: center;
            margin: 0 0 8px;
            gap: 8px;
            font-size: 0.9rem;
            .comment-writer {
                font-weight: 500;
            }
            .comment-date {
                font-size: 0.8rem;
                opacity: 0.65;
            }
        }
    }
    .comment-contents {
        font-size: 0.95rem;
        font-weight: 300;
    }
`;

export default PhotoArticle;
