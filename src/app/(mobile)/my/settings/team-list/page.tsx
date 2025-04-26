"use client";
import React, { ReactNode } from "react";
import { useHeader } from "@/hook/useHeader";
import { usePopup } from "@/components/common/global/PopupProvider";
import { useToast } from "@/hook/useToast";

import { baseContainer, flexColumnGap16, flexColumnGap20, flexColumnGap24 } from "@/styles/container.css";
import {
  settingsMyTeamListContainer,
  settingsMyTeamListGroupTitle,
  settingsMyTeamListSportsGroupItem,
  settingsMyTeamListSportsGroupItemLogo,
  settingsMyTeamListSportsGroupTitle,
} from "../_components/userSetting.css";
import Chip from "@/components/common/Chip";

import FolderIcon from "@/assets/icon/common/filled/Folder.svg";
import PeopleIcon from "@/assets/icon/common/filled/People.svg";
import BaseballIcon from "@/assets/icon/sports/outlined/Baseball.svg";
import BasketballIcon from "@/assets/icon/sports/outlined/Basketball.svg";
import FootballIcon from "@/assets/icon/sports/outlined/Football.svg";
import VolleyballIcon from "@/assets/icon/sports/outlined/Volleyball.svg";

function MyTeamList() {
  const popup = usePopup();
  const { trigger } = useToast();
  useHeader({
    title: "소속 팀 관리",
    options: { titleAlign: "center" },
    subActions: { name: "", action: () => {} },
  });

  const groupedTeams: Record<string, TeamListMock[]> = TEAM_LIST_MOCK.reduce((acc: any, team) => {
    if (!acc[team.sports]) {
      acc[team.sports] = [];
    }
    acc[team.sports].push(team);
    return acc;
  }, {});

  const SPORTS_ICON: Record<string, ReactNode> = {
    야구: <BaseballIcon width={20} height={20} fill="var(--gray400)" />,
    농구: <BasketballIcon width={20} height={20} fill="var(--gray400)" />,
    축구: <FootballIcon width={20} height={20} fill="var(--gray400)" />,
    배구: <VolleyballIcon width={20} height={20} fill="var(--gray400)" />,
  };

  const handleTeamLeave = async (teamName: string, teamId: string) => {
    const confirm = await popup?.confirm(
      `'${teamName}'에서 탈퇴하시겠어요?\n재가입은 팀 탈퇴한 뒤 14일 이후에 가능합니다.`,
      { buttonText: { yes: "네, 탈퇴할게요" }, title: "팀 탈퇴하기", showIcon: true, color: "red" }
    );
    if (confirm) {
      trigger("탈퇴가 완료되었습니다.");
    }
  };

  return (
    <section className={baseContainer} style={{ paddingTop: "20px" }}>
      <div style={{ marginBottom: "28px" }} className={flexColumnGap16}>
        <h4 className={settingsMyTeamListGroupTitle}>
          <FolderIcon width={24} height={24} fill="var(--gray700)" />
          소속 팀 리스트
        </h4>
        <ul className={settingsMyTeamListContainer}></ul>
      </div>
      <div className={flexColumnGap20}>
        <h4 className={settingsMyTeamListGroupTitle}>
          <PeopleIcon width={24} height={24} fill="var(--gray700)" />
          소속 팀 관리
        </h4>
        <div className={flexColumnGap24}>
          {Object.entries(groupedTeams).map(([sports, teams]) => (
            <div key={sports} className={flexColumnGap16}>
              <h5 className={settingsMyTeamListSportsGroupTitle}>
                {SPORTS_ICON[sports]} {sports}
              </h5>
              <ul className={flexColumnGap16}>
                {teams.map((team: TeamListMock) => (
                  <li key={team.teamId} className={settingsMyTeamListSportsGroupItem}>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img src={team.imgUrl} alt={team.teamName} className={settingsMyTeamListSportsGroupItemLogo} />
                      {team.teamName}
                    </span>
                    <button type="button" onClick={() => handleTeamLeave(team.teamName, team.teamId)}>
                      <Chip type="red" size="large" fillType="light">
                        탈퇴하기
                      </Chip>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface TeamListMock {
  teamId: string;
  teamName: string;
  sports: string;
  imgUrl: string;
}
const TEAM_LIST_MOCK: Array<TeamListMock> = [
  { teamId: "123", teamName: "팀이름", sports: "농구", imgUrl: "" },
  { teamId: "1523", teamName: "걸리버", sports: "농구", imgUrl: "" },
  { teamId: "4123", teamName: "베어스", sports: "야구", imgUrl: "" },
  { teamId: "45123", teamName: "사회인야구", sports: "야구", imgUrl: "" },
  { teamId: "76123", teamName: "FC달려라", sports: "축구", imgUrl: "" },
];

export default MyTeamList;
