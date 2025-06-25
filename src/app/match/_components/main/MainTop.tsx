import React from "react";
import clsx from "clsx";

import { fonts } from "@/styles/fonts.css";
import { teamFindSearchContainer, teamFindSearchInput } from "@/app/team/find/_components/teamFind.css";
import { flexColumnGap16, flexColumnGap4, flexRowGap4 } from "@/styles/container.css";
import { matchMainTeamListItem, matchMainTeamListLogo } from "./matchMain.css";
import SearchIcon from "@/assets/icon/common/Search.svg";

function MatchMainTop() {
  return (
    <div className={flexColumnGap16} style={{ padding: "8px 0 16px" }}>
      <div className={teamFindSearchContainer} style={{ marginBottom: "8px" }}>
        <SearchIcon fill="var(--primary500)" width={20} height={20} />
        <input type="text" className={teamFindSearchInput} placeholder="경기 제목 또는 팀 이름 입력" />
      </div>
      <ul style={{ padding: "0 16px" }} className={flexRowGap4}>
        <li>
          <div className={clsx(flexColumnGap4, matchMainTeamListItem)}>
            <div className={matchMainTeamListLogo} />
            <div className={fonts.caption1.medium}>팀 이름</div>
          </div>
        </li>
        <li>
          <div className={clsx(flexColumnGap4, matchMainTeamListItem)} data-selected="true">
            <div className={matchMainTeamListLogo} data-selected="true" />
            <div className={fonts.caption1.semibold}>팀 이름</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MatchMainTop;
