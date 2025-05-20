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
  flexRowGap8,
  flexSpaceBetween,
} from "@/styles/container.css";
import { teamFindLocationButton } from "./teamFind.css";
import { InputCheckbox } from "@/components/common/input/SelectInput";
import { fonts } from "@/styles/fonts.css";

function TeamFindSports({ sports }: { sports: string }) {
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState<string[]>([]);
  const { ModalComponents, showModal } = useModal();

  const handleLocation = (location: string) => {
    setLocation((prev) => {
      if (prev.includes(location)) {
        return prev.filter((item) => item !== location);
      } else {
        return [...prev, location];
      }
    });
  };

  const LOCATIONS = [
    { name: "서울특별시", abbr: "서울", value: "seoul" },
    { name: "경기도", abbr: "경기", value: "gyeonggi" },
    { name: "인천광역시", abbr: "인천", value: "incheon" },
    { name: "대전광역시", abbr: "대전", value: "daejeon" },
    { name: "대구광역시", abbr: "대구", value: "daegu" },
    { name: "부산광역시", abbr: "부산", value: "busan" },
    { name: "광주광역시", abbr: "광주", value: "gwangju" },
  ];
  return (
    <>
      <div className={clsx(baseContainer, flexColumnGap20)} style={{ paddingTop: "20px" }}>
        <div className={clsx(flexSpaceBetween)}>
          <FilterButton onClick={() => showModal()}>
            {location.length > 0
              ? location.map((item) => LOCATIONS.find((loc) => loc.value === item)?.abbr).join(", ")
              : "모든 지역"}
          </FilterButton>
          <label className={flexRowGap10}>
            <InputCheckbox size="MEDIUM" />
            <span className={fonts.body4.medium}>모집 중만 보기</span>
          </label>
        </div>

        <div className={clsx(flexColumnGap12)}>
          {NOW_RECRUIT_LIST.map((item) => (
            <TeamListCard
              key={item.teamId}
              status={item.status}
              university={item.university}
              teamId={item.teamId}
              teamLogo={item.teamLogo}
              teamName={item.teamName}
              location={item.location}
              dueDate={item.dueDate}
              gender={item.gender}
              likeCnt={8400}
              memberCnt={20}
            />
          ))}
        </div>
      </div>
      <ModalComponents draggable="all">
        <div className={flexRowGap10} style={{ rowGap: "24px", flexWrap: "wrap" }}>
          <button
            type="button"
            className={teamFindLocationButton}
            data-active={location.length === 0}
            onClick={() => setLocation([])}
          >
            모든 지역
          </button>
          {LOCATIONS.map((item) => (
            <button
              type="button"
              key={item.value}
              className={teamFindLocationButton}
              onClick={() => handleLocation(item.value)}
              data-active={location.includes(item.value)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </ModalComponents>
    </>
  );
}

export default TeamFindSports;
