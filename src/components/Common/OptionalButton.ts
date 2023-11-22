import styled from "@emotion/styled";

export const BasicButton = styled.button<{ color?: string; backgroundColor?: string }>`
    display: inline-block;
    padding: 8px 12px;
    background-color: ${({ backgroundColor }) => backgroundColor ?? "var(--main)"};
    border-radius: 16px;
    color: ${({ color }) => color ?? "#000"};
`;

export const CentralBtn = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 12px 20px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.color.main2};
    color: #000;
    font-size: 1.4rem;
    svg {
        opacity: 0.8;
        width: 22px;
        height: 22px;
    }
`;

export const FilterBtn = styled(CentralBtn)<{ showFilters: boolean }>`
    position: relative;
    .filter-selector {
        position: absolute;
        margin: 12px 0 0;
        padding: 8px;
        visibility: ${({ showFilters }) => (showFilters ? "visible" : "hidden")};
        opacity: ${({ showFilters }) => (showFilters ? "1" : "0")};
        top: ${({ showFilters }) => (showFilters ? "100%" : "50%")};
        left: 50%;
        min-width: 132px;
        width: max-content;
        background-color: ${({ theme }) => theme.color.white};
        border-radius: 12px;
        transform: translateX(-50%);
        font-size: 1.4rem;
        z-index: ${({ showFilters }) => (showFilters ? "1" : "-1")};
        transition: top 0.3s, opacity 0.3s;
        box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.1);
        li {
            padding: 12px 4px;
            color: ${({ theme }) => theme.color.gray4};
            border-bottom: 1px solid ${({ theme }) => theme.color.gray1};
            &.selected {
                color: ${({ theme }) => theme.color.black};
                font-weight: 700;
            }
            &:last-of-type {
                border-bottom: none;
            }
        }
    }
`;
