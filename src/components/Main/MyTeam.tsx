"use client";

import React, { Suspense } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useGet } from "@/apis/hook/query";

import Loading from "../common/Loading";
import { ApiSelectMember } from "@/apis/types/user";
import { SCROLL_MASKED_GRADIENT, TEXT_ACTIVE } from "@/styles/common";
import { scrollMaskedHandler, scrollMaskedHandlerRef } from "@/util/display";
import PlusIcon from "@/assets/icon/common/Plus.svg";

function MyTeam() {
  const router = useRouter();

  const { data } = useGet<ApiSelectMember>("/api/test/login/selectmyprofile"); // 임시
  const myTeamList = data?.team;

  return (
    <TeamList as="article" aria-label="나의 팀 목록">
      <ul
        className="team-list"
        ref={(ref) => scrollMaskedHandlerRef(ref, "horizontal")}
        onScroll={(e) => scrollMaskedHandler(e, "horizontal")}
      >
        <Suspense fallback={<Loading />}>
          {myTeamList ? (
            <>
              {myTeamList?.map((item) => (
                <TeamItem
                  key={item.teamId}
                  aria-label={item.teamName}
                  role="button"
                  onClick={() => router.push(`/team/${item.teamId}`)}
                >
                  <TeamImage src={item.logoUrl} />
                  <p>{item.teamName}</p>
                </TeamItem>
              ))}
              <TeamItem aria-label="새로운 팀 찾기" onClick={() => router.push("/team/list")}>
                <More>
                  <PlusIcon width={20} height={20} />
                </More>
                <p>팀 찾기</p>
              </TeamItem>
            </>
          ) : (
            <NoTeamList aria-label="새로운 팀 찾기" onClick={() => router.push("/team/list")}>
              <More>
                <PlusIcon width={20} height={20} />
              </More>
              <p>운동을 함께할 팀을 찾아보세요</p>
            </NoTeamList>
          )}
        </Suspense>
      </ul>
    </TeamList>
  );
}

const TeamList = styled.div`
  padding: 0;
  ${SCROLL_MASKED_GRADIENT("var(--background-light-rgb)")}

  .team-list {
    display: flex;
    gap: 12px;
    padding: 12px 1px;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;
const TeamItem = styled.li`
  user-select: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--gray900);
  border-radius: 2px;
  ${TEXT_ACTIVE("var(--gray100)", { scalable: true })}

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

const TeamImage = styled.div<{ src: string }>`
  display: block;
  margin: 0 8px;
  width: 55px;
  height: 55px;
  background-color: var(--gray200);
  background-image: url(${({ src }) => src});
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
`;

const More = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  width: 50px;
  height: 50px;
  border: 1px dashed var(--gray300);
  border-radius: 100%;
  & + p {
    color: var(--gray700);
  }
  svg {
    fill: var(--gray500);
  }
`;

const NoTeamList = styled(TeamItem)`
  padding: 0 8px;
  flex-direction: row;
  ${More} + p {
    color: var(--gray500);
  }
`;

export default MyTeam;
