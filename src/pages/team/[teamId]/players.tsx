import React, { useState } from "react";
import styled from "@emotion/styled";

import PlayerSelector from "@/components/Team/PlayerSelector";
import { usePageTitle } from "@/hook/usePageTitle";
import useBgWhite from "@/hook/useBgWhite";
import { BasicInput } from "@/components/common/Input";
import DropDown from "@/components/common/DropDown";
import { FONTS } from "@/styles/common";

function PlayerList() {
  const [filter, setFilter] = useState("");
  usePageTitle({ title: "팀원 목록" });
  useBgWhite();

  const PLAYERS_FILTER = [
    { name: "전체", value: "" },
    { name: "운영진", value: "manage" },
    { name: "기수", value: "student" },
    { name: "휴학생", value: "rest" },
  ];
  return (
    <Container>
      <BasicInput type="text" search placeholder="이름으로 찾기" />
      <Filter>
        <DropDown id="" getSelectedValue={setFilter} defaultValue="" options={PLAYERS_FILTER} />
        <p>총 10명</p>
      </Filter>
      <Players>
        <PlayerSelector />
        <PlayerSelector />
        <PlayerSelector />
      </Players>
    </Container>
  );
}

const Container = styled.div`
  padding: 8px 16px;
`;
const Filter = styled.div`
  display: flex;
  margin: 16px -16px 0;
  padding: 16px;
  background: var(--gray300);
  align-items: center;
  gap: 40px;
  p {
    flex-shrink: 0;
    ${FONTS.MD1W500}
  }
`;
const Players = styled.div`
  margin: 0 -16px;
`;

export default PlayerList;
