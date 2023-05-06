import React from "react";
import styled from "@emotion/styled";

interface UserHashTagPropsType {
    data: string[];
}

function UserHashTag({ data }: UserHashTagPropsType) {
    return (
        <Container>
            {data.map((value, idx) => (
                <Item key={idx}>{value}</Item>
            ))}
        </Container>
    );
}

const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
`;
const Item = styled.li`
    padding: 6px 8px;
    background-color: var(--lightgray);
    color: var(--white);
    font-size: 0.95rem;
`;

export default UserHashTag;
