import React from "react";
import styled from "@emotion/styled";

interface UserInfoListDataType {
    title: string;
    contents: string;
}
interface UserInfoListPropsType {
    data: UserInfoListDataType[];
}

function UserInfoList({ data }: UserInfoListPropsType) {
    return (
        <Container>
            {data.map((info, idx) => (
                <Item key={idx}>
                    <dt>{info.title}</dt>
                    <dd>{info.contents}</dd>
                </Item>
            ))}
        </Container>
    );
}

const Container = styled.ul`
    display: flex;
    margin: 0 auto;
    padding: 0 20px;
    justify-content: space-evenly;
    gap: 16px;
    @media (min-width: 768px) {
        width: 600px;
    }
`;

const Item = styled.li`
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 8px;
    letter-spacing: -0.25px;
    dt {
        font-weight: 800;
        font-size: 0.8rem;
        opacity: 0.85;
    }
    dd {
        font-size: 1.2rem;
        word-break: keep-all;
    }
`;

export default UserInfoList;
