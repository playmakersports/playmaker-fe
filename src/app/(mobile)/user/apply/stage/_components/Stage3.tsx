import React, { useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { useToast } from "@/hook/useToast";
import { useGet } from "@/apis/hook/query";

import { ApiCodeArea } from "@/apis/types/code";
import { stageFormWrapper, stageWrapper } from "./stage.css";
import { FONTS } from "@/styles/common";
import Chip from "@/components/common/Chip";

interface LocationType {
  key: number | null;
  name: string;
}
function Stage3() {
  const { setValue, watch } = useFormContext();
  const formLocation = watch("location") ?? [];
  const [sido, setSido] = useState<LocationType>({ key: null, name: "" });
  const [locations, setLocations] = useState<LocationType[]>([]);
  const toast = useToast();
  // const { data, isLoading } = useGet<ApiCodeArea>("/api/code/area");
  const data = {
    parent: [
      { locationkey: 1, locationname: "서울" },
      { locationkey: 2, locationname: "경기" },
    ],
    child: [
      { locationkey: 1001, locationname: "강남구", parent: "서울" },
      { locationkey: 1002, locationname: "서초구", parent: "서울" },
      { locationkey: 2001, locationname: "수원시", parent: "경기" },
      { locationkey: 2002, locationname: "고양시", parent: "경기" },
    ],
  };

  const onClickLocation = (locationKey: number, name: string) => {
    if (locations.length >= 2) {
      toast.trigger("위치는 최대 2개까지 선택 가능합니다.", { type: "error" });
      return;
    }
    setLocations((prev) => [...prev, { key: locationKey, name: `${sido.name}, ${name}` }]);
    setValue("location", [...formLocation, locationKey]);
  };
  const onRemoveLocation = (locationKey: number) => {
    setLocations((prev) => prev.filter((location) => location.key !== locationKey));
    setValue(
      "location",
      formLocation.filter((key: number) => key !== locationKey)
    );
  };

  return (
    <div className={stageFormWrapper} style={{ height: "100%" }}>
      <div style={{ marginBottom: "-4px" }}>
        <h3 className={stageWrapper.title}>플레이어님의 활동 위치를 선택해주세요</h3>
        <p className={stageWrapper.description}>주로 운동하시는 지역을 최대 2군데 선택해주세요</p>
      </div>
      <Location>
        <div className="location-selected">
          {locations.map((location) => (
            <Chip
              key={location.key}
              type="primary"
              fillType="light"
              size="large"
              closeAction={() => {
                onRemoveLocation(location.key!);
              }}
            >
              {location.name}
            </Chip>
          ))}
        </div>
        <List>
          <ul className="parent">
            {data?.parent.map((item) => (
              <li
                key={item.locationkey}
                onClick={() => setSido({ key: item.locationkey, name: item.locationname })}
                className={clsx({ active: sido.key === item.locationkey })}
                role="button"
              >
                {item.locationname}
              </li>
            ))}
          </ul>
          <ul className="child">
            {data?.child
              .filter((location) => Math.floor(location.locationkey / 1000) === sido.key)
              .map((item) => (
                <li
                  role="button"
                  key={item.locationkey}
                  onClick={() => onClickLocation(item.locationkey, item.locationname)}
                >
                  {item.locationname}
                </li>
              ))}
          </ul>
        </List>
      </Location>
    </div>
  );
}

const Location = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  margin: 0 -16px;
  border-bottom: 1px solid var(--gray200);
  div.location-selected {
    display: inline-flex;
    padding: 0 20px;
    gap: 12px;
  }
`;
const List = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--gray200);
  ${FONTS.body3("regular")};

  & > ul {
    flex: 1;

    &.parent {
      background-color: var(--gray50);
      border-right: 1px solid var(--gray200);
      & li {
        color: var(--gray400);
        &.active {
          background-color: var(--white);
          color: var(--primary500);
          ${FONTS.body3("semibold")};
          &:active {
            background-color: var(--white);
          }
        }
        &:active {
          background-color: var(--gray100);
        }
      }
    }

    &.child {
      & li {
        color: var(--gray500);
        &.active {
          color: var(--primary500);
          ${FONTS.body3("semibold")};
        }
        &:active {
          background-color: var(--primary50);
        }
      }
    }
  }
  & li {
    cursor: pointer;
    user-select: none;
    padding: 12px 0;
    text-align: center;
  }
`;

export default Stage3;
