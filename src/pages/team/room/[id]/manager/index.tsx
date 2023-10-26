import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";

import TeamLayout from "@/src/components/Team/Layout";

function Manager() {
    const router = useRouter();
    const theme = useTheme();
    const teamId = router.query.id;
    const teamColor = "#237c50";

    const movePage = (target: string) => {
        if (target === "info") {
            router.push(`/team/create?type=edit&teamId=${teamId}`);
        } else {
            router.push(`/team/room/${teamId}/manager/${target}`);
        }
        return;
    };

    const MENUS = [
        { icon: <></>, name: "기본정보", path: "info" },
        { icon: <></>, name: "팀원관리", path: "members" },
        { icon: <></>, name: "경기관리", path: "match-control" },
        { icon: <></>, name: "가입설정", path: "join-setting" },
        { icon: <></>, name: "가입대기 목록", path: "join-player" },
        { icon: <></>, name: "용병관리", path: "yongbyung" },
    ];

    return (
        <TeamLayout teamName="팀 이름" title="팀 관리" color={teamColor}>
            <List>
                {MENUS.map((menu) => (
                    <div key={menu.path} className="manager-item" onClick={() => movePage(menu.path)}>
                        {menu.icon && <i>{menu.icon}</i>}
                        {menu.name}
                    </div>
                ))}
            </List>
        </TeamLayout>
    );
}

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    .manager-item {
        cursor: pointer;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        height: 160px;
        background-color: ${({ theme }) => theme.color.lightGray};
        border: 1px solid ${({ theme }) => theme.color.gray1};
        border-radius: 20px;
        color: ${({ theme }) => theme.color.gray4};
        font-size: 0.95rem;
        font-weight: 600;
        i {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px;
            width: 64px;
            height: 64px;
            background-color: ${({ theme }) => theme.color.gray1};
            border-radius: 100%;
        }
    }
`;

export default Manager;
