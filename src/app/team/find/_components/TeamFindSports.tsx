import React, { useState } from "react";
import useModal from "@/hook/useModal";
import clsx from "clsx";

import { NOW_RECRUIT_LIST } from "@/constants/mock/RECRUIT";
import TeamListCard from "../../_components/TeamListCard";
import FilterButton from "@/components/common/FilterButton";
import {
  baseContainer,
  flexColumnGap12,
  flexColumnGap20,
  flexRowGap10,
  flexSpaceBetween,
} from "@/styles/container.css";
import { InputCheckbox } from "@/components/common/input/SelectInput";
import { fonts } from "@/styles/fonts.css";
import LocationFilterModal from "./LocationFilterModal";
import { useGet } from "@/apis/hook/query";
import { ApiTeamDetail } from "@/apis/types/team";

function TeamFindSports({ sports }: { sports: string }) {
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState<string[]>([]);
  const { data } = useGet<ApiTeamDetail[]>(`/api/teams/browse/filter/item/${sports.toUpperCase()}`);
  const { ModalComponents, showModal, modalState } = useModal({ key: "team-find-location" });
  console.log(data);
  return (
    <>
      <div className={clsx(baseContainer, flexColumnGap20)} style={{ paddingTop: "20px" }}>
        <div className={clsx(flexSpaceBetween)}>
          <FilterButton onClick={() => showModal()}>지역 선택</FilterButton>
          <label className={flexRowGap10}>
            <InputCheckbox size="MEDIUM" />
            <span className={fonts.body4.medium}>모집 중만 보기</span>
          </label>
        </div>

        <div className={clsx(flexColumnGap12)}>
          {data?.map((item) => (
            <TeamListCard
              key={item.id}
              teamId={item.id}
              teamLogo={item.logoUrl ?? ""}
              teamName={item.teamName}
              location={item.activeArea}
              teamIntro={item.teamIntro}
              university={""}
              gender={""}
              likeCnt={8400}
              memberCnt={20}
            />
          ))}
        </div>
      </div>
      <LocationFilterModal ModalComponents={ModalComponents} />
    </>
  );
}

export default TeamFindSports;
