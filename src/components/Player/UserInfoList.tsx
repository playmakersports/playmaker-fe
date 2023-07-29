import React from "react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";

import { darkMode } from "@/src/atoms/state";

interface UserInfoListDataType {
    birth: string;
    location: string[];
}
interface UserInfoListPropsType {
    data: UserInfoListDataType;
}

function UserInfoList({ data }: UserInfoListPropsType) {
    const [darkModeState] = useAtom(darkMode);

    return (
        <Container>
            <Item icon="birthday_cake" dark={darkModeState}>
                <dt>출생</dt>
                <dd>
                    <p>{data.birth}</p>
                    <p>21세</p>
                </dd>
            </Item>
            <Item icon="location" dark={darkModeState}>
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

const Item = styled.li<{ icon: string; dark: boolean }>`
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
        font-size: 0.8rem;
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
            filter: invert(${(props) => (props.dark ? 1 : 0)});
        }
    }
    dd {
        font-size: 0.85rem;
        line-height: 1.3rem;
        word-break: keep-all;
    }
`;

export default UserInfoList;
