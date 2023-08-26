import styled from "@emotion/styled";

export const BasicButton = styled.button<{ color?: string; backgroundColor?: string }>`
    display: inline-block;
    padding: 8px 12px;
    background-color: ${({ backgroundColor }) => backgroundColor ?? "var(--main)"};
    border-radius: 16px;
    color: ${({ color }) => color ?? "#000"};
`;

export const CentralBtn = styled.button<{ icon?: string }>`
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0 auto 20px;
    padding: 12px 28px;
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.color.gray3};
    color: ${({ theme }) => theme.color.gray4};
    font-weight: 500;
    &::before {
        content: "";
        display: ${({ icon }) => icon || "none"};
        width: 20px;
        height: 20px;
        background-image: url(${({ icon }) => icon || ""});
        background-size: 20px;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.65;
    }
`;

export const FilterBtn = styled(CentralBtn)<{ showFilters: boolean }>`
    position: relative;
    .filter-selector {
        position: absolute;
        margin: 12px 0 0;
        padding: 16px;
        opacity: ${({ showFilters }) => (showFilters ? "1" : "0")};
        top: ${({ showFilters }) => (showFilters ? "100%" : "50%")};
        left: 50%;
        width: 180px;
        background-color: ${({ theme }) => theme.color.white};
        border: 1px solid ${({ theme }) => theme.color.gray1};
        border-radius: 16px;
        transform: translateX(-50%);
        font-size: 0.9rem;
        z-index: ${({ showFilters }) => (showFilters ? "1" : "-1")};
        transition: top 0.3s, opacity 0.3s;
        li {
            padding: 16px 0;
            color: ${({ theme }) => theme.color.gray4};
            border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
            &:last-of-type {
                border-bottom: none;
            }
        }
    }
`;
