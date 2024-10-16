import React, { useState } from "react";
import styled from "@emotion/styled";

import PlayerSelector from "@/components/Team/PlayerSelector";
import { usePageTitle } from "@/hook/usePageTitle";
import useBgWhite from "@/hook/useBgWhite";
import { BasicInput } from "@/components/common/Input";
import DropDown from "@/components/common/DropDown";
import { FONTS } from "@/styles/common";
import { TEAM_PLAYERS_MOCK } from "@/constants/mock/TEAM";

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
      <Top>
        <BasicInput type="text" search placeholder="이름으로 찾기" />
        <Filter>
          <DropDown id="" getSelectedValue={setFilter} defaultValue="" options={PLAYERS_FILTER} />
          <p>총 {TEAM_PLAYERS_MOCK.length}명</p>
        </Filter>
      </Top>
      <Players>
        {TEAM_PLAYERS_MOCK.map((player) => {
          const { position, gender, birthDate, tag, ...rest } = player;
          const [birthYear] = birthDate.split("-");
          const displayBirth = !!rest.generation ? [`${birthYear}년생`] : [];
          return (
            <PlayerSelector
              key={player.playerId}
              position={position}
              birthDate={birthDate}
              tag={[gender === "m" ? "남성" : "여성", ...displayBirth, ...tag]}
              {...rest}
            />
          );
        })}
      </Players>
    </Container>
  );
}

const Container = styled.div`
  padding: 8px 16px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  p {
    flex-shrink: 0;
  }
`;
const Players = styled.div`
  margin: 0 -16px;
`;

export default PlayerList;
