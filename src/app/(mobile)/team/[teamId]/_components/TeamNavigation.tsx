import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

function TeamNavigation() {
  const params = useParams();
  const path = usePathname();
  const currentPath = path.split("/")[3];
  const teamId = params["teamId"] as string;

  return (
    <Container>
      <Menu>
        <Link href={`/team/${teamId}`}>
          <li data-active={!currentPath}>홈</li>
        </Link>
        <Link href={`/team/${teamId}/matches`}>
          <li data-active={currentPath === "matches"}>경기</li>
        </Link>
        <Link href={`/team/${teamId}/board`} prefetch>
          <li data-active={currentPath === "board"}>게시판</li>
        </Link>
        <Link href={`/team/${teamId}/schedule`} prefetch>
          <li data-active={currentPath === "schedule"}>일정</li>
        </Link>
        <Link href={`/team/${teamId}/players`} prefetch>
          <li data-active={currentPath === "players"}>팀원</li>
        </Link>
      </Menu>
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: center;
  left: 0;
  bottom: calc(8px + var(--env-sab));
`;
const Menu = styled.ul`
  display: flex;
  width: calc(var(--mobile-max-width) - 16px * 2);
  margin: 0 12px;
  padding: 6px 16px;
  background-color: var(--gray0);
  border-radius: 100px;
  box-shadow: 0px 6px 20px 0 rgba(208, 214, 226, 0.7);

  a {
    flex: 1;
    padding: 12px 0;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--gray700);
    transition: color 0.2s, font-weight 0.2s, background-color 0.2s;
    border-radius: 10px;

    &:active {
      background-color: var(--gray100);
    }

    & li[data-active="true"] {
      color: var(--main);
      font-weight: 600;
    }
  }
`;

export default TeamNavigation;
