import React, { useState } from "react";
import clsx from "clsx";

import { fonts } from "@/styles/fonts.css";
import { teamFindListItem, teamFindListSelectButton } from "./schedule.css";
import { flexAlignCenter, flexColumnGap16, flexColumnGap4, flexRowGap8 } from "@/styles/container.css";
import { BasicInput } from "@/components/common/input/BaseInput";
import HighlightKeyword from "../../board/_components/HightlightKeyword";

type Props = {
  onChange: (value: { teamId: string; teamName: string }) => void;
  closeModal: () => void;
};
function TeamFindList(props: Props) {
  const { onChange, closeModal } = props;
  const [search, setSearch] = useState("");

  const data = [
    { teamName: "서울대학교 농구동아리", leader: "김이프", teamId: "1232" },
    { teamName: "어반농구", leader: "김이프", teamId: "654" },
    { teamName: "SPABA", leader: "김이프", teamId: "745" },
    { teamName: "SPAPA", leader: "김이프", teamId: "7475" },
    { teamName: "BALL", leader: "김이프", teamId: "23423423" },
  ];

  return (
    <>
      <BasicInput
        iconType="search"
        type="text"
        placeholder="팀 이름 입력"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={flexColumnGap16} style={{ height: "360px" }}>
        <p className={fonts.body4.regular} style={{ color: "var(--gray400)" }}>
          검색결과 {`(${data.length}건)`}
        </p>
        <ul style={{ overflowY: "auto" }}>
          {data.map((team) => (
            <li key={team.teamId} className={clsx(flexRowGap8, flexAlignCenter, teamFindListItem)}>
              <div className={flexColumnGap4} style={{ flex: 1 }}>
                <span className={fonts.body3.medium}>
                  <HighlightKeyword text={team.teamName} keyword={search} />
                </span>
                <span className={fonts.caption1.regular} style={{ color: "var(--gray400)" }}>
                  팀 리더: {team.leader}
                </span>
              </div>
              <button
                type="button"
                className={teamFindListSelectButton}
                onClick={() => {
                  onChange({ teamId: team.teamId, teamName: team.teamName });
                  closeModal();
                }}
              >
                선택
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TeamFindList;
