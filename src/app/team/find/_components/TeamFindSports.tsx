import React, { useState } from "react";
import useModal from "@/hook/useModal";
import clsx from "clsx";

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
  const [isOnlyRecruiting, setIsOnlyRecruiting] = useState(false);
  const [location, setLocation] = useState<string[]>([]);
  const { ModalComponents, showModal, modalState } = useModal<{ location: string }>({ key: "team-location" });

  const { data, isLoading, isFetched } = useGet<ApiTeamDetail[]>(`/api/teams/browse/filter`, {
    teamItem: sports.toUpperCase(),
    recruiting: isOnlyRecruiting ? "true" : undefined,
    activeArea: modalState["team-location"]?.location,
  });

  return (
    <>
      <div className={clsx(baseContainer, flexColumnGap20)} style={{ paddingTop: "20px" }}>
        <div className={clsx(flexSpaceBetween)}>
          <FilterButton onClick={() => showModal()}>지역 선택</FilterButton>
          <label className={flexRowGap10}>
            <InputCheckbox
              size="MEDIUM"
              checked={isOnlyRecruiting}
              onChange={(e) => setIsOnlyRecruiting(e.target.checked)}
            />
            <span className={fonts.body4.medium}>모집 중만 보기 </span>
          </label>
        </div>

        {isLoading ? (
          <div className={clsx(flexColumnGap12)}>
            <div className="skeleton-loading-ui" style={{ width: "100%", height: "98px", borderRadius: "10px" }}></div>
            <div className="skeleton-loading-ui" style={{ width: "100%", height: "98px", borderRadius: "10px" }}></div>
            <div className="skeleton-loading-ui" style={{ width: "100%", height: "98px", borderRadius: "10px" }}></div>
          </div>
        ) : (
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
        )}

        {isFetched && data?.length === 0 && <div className={fonts.body3.medium}>검색 결과가 없습니다</div>}
      </div>
      <LocationFilterModal ModalComponents={ModalComponents} />
    </>
  );
}

export default TeamFindSports;
