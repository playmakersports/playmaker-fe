import styled from "@emotion/styled";

export const Comment = styled.li`
    padding: 12px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray1};
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
        font-size: 0.9rem;
        font-weight: 300;
        line-height: 1.3rem;
    }
    .comment-delete {
        padding: 0 8px;
    }
`;
