import React from "react";
import MainTab from "@/components/Main/MainTab";
import {
  dropdownBottomSheetLabel,
  playersListSortTabContentsBox,
  playersListSortTabContentsWrapper,
} from "./team.players.css";

import CheckIcon from "@/assets/icon/common/Check.svg";
import { ModalProps } from "@/hook/useModal";
import { flexColumnGap20 } from "@/styles/container.css";

type Props = {
  ModalComponents: (props: ModalProps) => React.ReactNode;
  sortTab: string;
  setSortTab: (value: string) => void;
  sortType: string;
  setSortType: (value: string) => void;
};
function PlayersListSort(props: Props) {
  const { ModalComponents, sortTab, setSortTab, sortType, setSortType } = props;
  const tabItems = [
    { name: "이름순", value: "name" },
    { name: "기수순", value: "gisu" },
    { name: "출석률순", value: "attend" },
  ];

  const SORT_TYPE: Record<string, Array<{ name: string; value: string }>> = {
    name: [
      { name: "이름 오름차순 (ㄱ-ㅎ)", value: "asc" },
      { name: "이름 내림차순 (ㅎ-ㄱ)", value: "desc" },
    ],
    gisu: [
      { name: "기수 오름차순", value: "asc" },
      { name: "기수 내림차순", value: "desc" },
    ],
    desc: [
      { name: "출석률 높은 순", value: "desc" },
      { name: "출석률 낮은 순", value: "asc" },
    ],
  };

  const currentTabIndex = tabItems.findIndex((item) => item.value === sortTab);
  return (
    <ModalComponents draggable="all">
      {(close) => (
        <div style={{ margin: "0 -16px" }} className={flexColumnGap20}>
          <MainTab
            padding={16}
            type="line"
            color="gray"
            size="large"
            initialValue={sortTab}
            nowValue={setSortTab}
            sameWidth
            items={tabItems}
          />
          <div style={{ overflowX: "hidden" }}>
            <div
              className={playersListSortTabContentsWrapper}
              style={{
                transform: `translateX(calc((
                min(var(--mobile-max-width), 100vw) * -1 * ${currentTabIndex}
                )))`,
              }}
            >
              {Object.keys(SORT_TYPE).map((type) => (
                <div key={type} className={playersListSortTabContentsBox}>
                  {SORT_TYPE[type].map((option) => (
                    <label key={option.value} className={dropdownBottomSheetLabel}>
                      {option.name}
                      <input
                        style={{ display: "none" }}
                        type="radio"
                        name="dropdown-option"
                        defaultChecked={sortType === `${type}_${option.value}` ? true : false}
                        value={option.value}
                        onClick={() => {
                          setSortType(`${type}_${option.value}`);
                          close();
                        }}
                      />
                      <CheckIcon
                        width={24}
                        height={24}
                        fill="var(--primary500)"
                        style={{ display: sortType === `${type}_${option.value}` ? "block" : "none" }}
                      />
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </ModalComponents>
  );
}

export default PlayersListSort;
