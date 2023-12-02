import React from "react";
import styled from "@emotion/styled";

interface Props {
    data: string[];
}

function UserHashTag({ data }: Props) {
    return (
        <Container>
            {data.map((value, idx) => (
                <Item key={idx}>#{value}</Item>
            ))}
        </Container>
    );
}

const Container = styled.ul`
    margin: 8px 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
`;
const Item = styled.li`
    padding: 6px 12px;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.color.gray3};
    color: ${({ theme }) => theme.color.gray4};
    font-weight: 500;
    font-size: 1.4rem;
`;

export default UserHashTag;
