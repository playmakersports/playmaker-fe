import React from "react";
import styled from "@emotion/styled";

interface UserInfoListDataType {
    birth: string;
    location: string[];
}
interface UserInfoListPropsType {
    data: UserInfoListDataType;
}

function UserInfoList({ data }: UserInfoListPropsType) {
    return (
        <Container>
            <Item icon="birthday_cake">
                <dt>출생</dt>
                <dd>
                    <p>{data.birth}</p>
                    <p>21세</p>
                </dd>
            </Item>
            <Item icon="location">
                <dt>지역</dt>
                <dd>
                    {data.location.map((item) => (
                        <p key={item}>{item}</p>
                    ))}
                </dd>
            </Item>
        </Container>
    );
}

const Container = styled.ul`
    display: flex;
    margin: 0 auto;
    padding: 0 8px;
    justify-content: space-evenly;
    gap: 16px;
    @media (min-width: 768px) {
        width: 600px;
    }
`;

const Item = styled.li<{ icon: string }>`
    flex: 1;
    display: flex;
    gap: 8px;
    letter-spacing: -0.2px;
    white-space: nowrap;
    text-overflow: ellipsis;
    dt {
        display: flex;
        padding: 4px 0 0;
        align-items: flex-start;
        font-weight: 600;
        font-size: 1.5rem;
        opacity: 0.65;
        &::before {
            content: "";
            margin: -3px 0 0;
            width: 22px;
            height: 18px;
            background-image: url(${(props) => `/assets/icons/${props.icon}_icon.svg`});
            background-size: 18px;
            background-position: left;
            background-repeat: no-repeat;
            filter: invert(1);
        }
    }
    dd {
        font-size: 1.6rem;
        line-height: 2.1rem;
        word-break: keep-all;
    }
`;

export default UserInfoList;
