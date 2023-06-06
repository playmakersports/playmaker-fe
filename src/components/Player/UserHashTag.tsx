import React from "react";
import styled from "@emotion/styled";

interface UserHashTagPropsType {
    data: string[];
}

function UserHashTag({ data }: UserHashTagPropsType) {
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
    gap: 8px;
`;
const Item = styled.li`
    padding: 6px 12px;
    border: 1px solid var(--lightgray);
    font-size: 0.9rem;
    border-radius: 20px;
    opacity: 0.8;
`;

export default UserHashTag;
