import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { FOOTBALL_CLUBS, FOOTBALL_LEAGUE_KR } from "@/src/constants/FootballClubs";

interface IUserFanPropsType {
    data: string[];
}

function UserFan({ data }: IUserFanPropsType) {
    return (
        <Container>
            {data.map((item) =>
                FOOTBALL_CLUBS.filter((v) => v.value === item).map((value) => (
                    <Item key={item}>
                        <span className="fav-team-category">{FOOTBALL_LEAGUE_KR[value.category]}</span>{" "}
                        <span className="fav-team-name">{value.optionName}</span>
                    </Item>
                ))
            )}
        </Container>
    );
}

const Container = styled.ul`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`;
const Item = styled.li`
    .fav-team-category {
        display: inline-block;
        padding: 4px 8px;
        border-radius: 12px;
        background-color: var(--black-op45);
        color: var(--white);
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: -0.25px;
    }
    .fav-team-name {
        display: inline-block;
        vertical-align: middle;
    }
`;

export default UserFan;
