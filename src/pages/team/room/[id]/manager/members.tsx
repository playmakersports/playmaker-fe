import React from "react";
import { useRouter } from "next/router";

import TeamLayout from "@/src/components/Team/Layout";
import Card from "@/src/components/Main/Card";
import styled from "@emotion/styled";
import Button from "@/src/components/Common/Button";

function ManagerMembers() {
    const router = useRouter();
    const teamId = router.query.id;
    const teamColor = "#237c50";

    return (
        <TeamLayout teamName="팀 이름" title="팀원 관리" color={teamColor}>
            <Card>
                <Image src="" />
                <Name>
                    홍길동
                    <Position>공격</Position>
                </Name>
                <List>
                    <li>
                        <dt>생년월일</dt>
                        <dd>1995.07.05</dd>
                    </li>
                    <li>
                        <dt>성별</dt>
                        <dd>남</dd>
                    </li>
                    <li>
                        <dt>포인트</dt>
                        <dd>100</dd>
                    </li>
                    <li>
                        <dt>랭킹</dt>
                        <dd>20</dd>
                    </li>
                </List>
                <Buttons>
                    <Button type="button" mode="sub1" size="medium" text="권한 변경" />
                    <Button type="button" mode="sub1" size="medium" text="팀 방출" />
                </Buttons>
            </Card>
        </TeamLayout>
    );
}

const Image = styled.img`
    float: left;
    margin-right: 12px;
    width: 52px;
    height: 52px;
    background-color: gray;
    border-radius: 100%;
`;

const Name = styled.h3`
    display: inline-flex;
    align-items: center;
    margin: 0 0 10px;
    font-size: 1.2rem;
    font-weight: 600;
    gap: 8px;
`;

const Position = styled.span`
    display: inline-block;
    padding: 2px 4px;
    background-color: ${({ theme }) => theme.color.gray3};
    border-radius: 4px;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 500;
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px 12px;
    li {
        display: flex;
        align-items: center;
        gap: 6px;
    }
    dt {
        color: ${({ theme }) => theme.color.gray3};
        font-size: 0.8rem;
        font-weight: 500;
    }
    dd {
        font-size: 0.9rem;
    }
`;

const Buttons = styled.div`
    display: flex;
    margin: 16px 0 0;
    gap: 12px;
    justify-content: space-between;
`;

export default ManagerMembers;
