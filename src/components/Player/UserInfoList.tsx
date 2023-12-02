import React from "react";
import styled from "@emotion/styled";
import BirthdayCakeIcon from "@/src/assets/icons/common/BirthdayCakeIcon";
import { LocationPickerIcon } from "@/src/assets/icons/common/LocationPickerIcon";

interface UserInfoListDataType {
    birth: string;
    location: string[];
}
interface Props {
    data: UserInfoListDataType;
}

function UserInfoList({ data }: Props) {
    return (
        <Container>
            <Item>
                <dt>
                    <BirthdayCakeIcon width={22} />
                    출생
                </dt>
                <dd>
                    <p>{data.birth}</p>
                    <p>21세</p>
                </dd>
            </Item>
            <Item>
                <dt>
                    <LocationPickerIcon width={22} />
                    지역
                </dt>
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

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;
    letter-spacing: -0.2px;
    white-space: nowrap;
    text-overflow: ellipsis;
    dt {
        display: inline-flex;
        align-items: center;
        font-weight: 600;
        font-size: 1.5rem;
        gap: 4px;
        opacity: 0.8;
    }
    dd {
        display: inline-flex;
        flex-wrap: wrap;
        font-size: 1.6rem;
        line-height: 2.1rem;
        word-break: keep-all;
        gap: 0 12px;
    }
`;

export default UserInfoList;
