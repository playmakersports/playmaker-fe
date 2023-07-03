import styled from "@emotion/styled";

export const BasicButton = styled.button<{ color?: string; backgroundColor?: string }>`
    display: inline-block;
    padding: 8px 12px;
    background-color: ${({ backgroundColor }) => backgroundColor ?? "var(--main)"};
    border-radius: 16px;
    color: ${({ color }) => color ?? "#000"};
`;
