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
