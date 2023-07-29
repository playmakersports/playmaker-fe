import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import TeamLayout from "@/src/components/Team/Layout";
import Button from "@/src/components/Common/Button";
import { Comment } from "@/src/components/Board/styles";

function BoardArticle() {
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
                    <Button type="button" mode="sub1" size="xsmall" shadow={false} text="수정" />
                    <Button type="button" mode="sub1" size="xsmall" shadow={false} text="삭제" />
                    <Button type="button" mode="sub1" size="xsmall" shadow={false} text="글쓰기" />
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
                                    {comment.myComment && (
                                        <button type="button" className="comment-delete">
                                            ✕
                                        </button>
                                    )}
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
    margin: 0 0 36px;
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

export default BoardArticle;
