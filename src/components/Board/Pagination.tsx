import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

interface IPaginationType {
    base: string;
    now: number;
    last: number;
}

function Pagination({ base, now, last }: IPaginationType) {
    const router = useRouter();
    const startPage = Math.floor(now / 5) * 5;
    const endPage = Math.min(startPage + 5, last);
    const totalPages = Array.from({ length: endPage - startPage }, (_, i) => i + startPage);

    const movePage = (target: number) => {
        router.push(`${base}?page=${target}`);
    };

    return (
        <PageList>
            {now > 4 && (
                <PageButton className="move-page-area" onClick={() => movePage(totalPages[0] - 1)}>
                    이전
                </PageButton>
            )}
            {totalPages.map((v) => (
                <PageButton key={v} onClick={() => movePage(v)} isNow={v === now}>
                    {v + 1}
                </PageButton>
            ))}
            {totalPages.length === 5 && last > 5 ? (
                <PageButton className="move-page-area" onClick={() => movePage(totalPages[4] + 1)}>
                    다음
                </PageButton>
            ) : null}
        </PageList>
    );
}

const PageList = styled.ul`
    display: flex;
    gap: 8px;
    margin: 12px auto 0;
    max-width: 320px;
    height: 28px;
    text-align: center;
    opacity: 0.8;
`;
const PageButton = styled.li<{ isNow?: boolean }>`
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    border-radius: 20px;
    border: ${({ isNow }) => isNow && "2px solid var(--black)"};
    color: var(--black);
    font-size: 0.9rem;
    font-weight: ${({ isNow }) => isNow && 900};
    text-align: center;
    line-height: 32px;
    &.move-page-area {
        width: 48px;
    }
`;

export default Pagination;
