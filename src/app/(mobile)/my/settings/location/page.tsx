"use client";
import React, { useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { useGet } from "@/apis/hook/query";
import { useToast } from "@/hook/useToast";
import { useForm } from "react-hook-form";
import { useHeader } from "@/hook/useHeader";

import { fonts } from "@/styles/fonts.css";
import { baseContainer } from "@/styles/container.css";
import { stageFormWrapper, stageWrapper } from "@/app/(mobile)/user/apply/stage/_components/stage.css";
import { ApiCodeArea } from "@/apis/types/code";
import Loading from "@/components/common/Loading";
import Chip from "@/components/common/Chip";

interface LocationType {
  key: string | null;
  name: string;
}
function MyLocation() {
  const toast = useToast();
  useHeader({
    title: "활동 지역",
    options: { titleAlign: "center" },
    subActions: {
      name: "저장",
      action: () => {},
    },
  });
  const { setValue, watch } = useForm();
  const { data, isLoading } = useGet<ApiCodeArea>("/api/code/activeArea");

  const [sido, setSido] = useState<LocationType>({ key: "11", name: "서울특별시" });
  const formLocation = watch("location") ?? [];
  const formLocationDisplayValues = formLocation.map((key: string) => ({
    key,
    name: data?.find((item) => item.codeSequenceKey === key)?.codeValue,
  }));
  const [locations, setLocations] = useState<LocationType[]>(formLocationDisplayValues);

  const onClickLocation = (locationKey: string, name: string) => {
    if (locations.length >= 2) {
      toast.trigger("위치는 최대 2개까지 선택 가능합니다.", { type: "error" });
      return;
    }
    if (formLocation.includes(locationKey)) {
      toast.trigger("이미 선택한 지역입니다.", { type: "error" });
      return;
    }
    setLocations((prev) => [...prev, { key: locationKey, name: `${sido.name} ${name}` }]);
    setValue("location", [...formLocation, locationKey]);
  };

  const onRemoveLocation = (locationKey: string) => {
    setLocations((prev) => prev.filter((location) => location.key !== locationKey));
    setValue(
      "location",
      formLocation.filter((key: string) => key !== locationKey)
    );
  };

  return (
    <section
      className={clsx(baseContainer, stageFormWrapper)}
      style={{
        overflow: "hidden",
        paddingTop: "40px",
      }}
    >
      <div style={{ marginBottom: "-4px" }}>
        <h3 className={stageWrapper.title}>플레이어님의 활동 위치를 선택해주세요</h3>
        <p className={stageWrapper.description}>주로 운동하시는 지역을 최대 2군데 선택해주세요</p>
      </div>
      {isLoading ? (
        <div style={{ marginTop: "32px" }}>
          <Loading />
        </div>
      ) : (
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
          <List className={fonts.body3.regular}>
            <ul className="parent">
              {data
                ?.filter((v) => !v.codeValueDes)
                .map((item) => (
                  <li
                    key={item.codeSequenceKey}
                    onClick={() => setSido({ key: item.codeSequenceKey, name: item.codeValue })}
                    className={clsx({ active: sido.key === item.codeSequenceKey })}
                    role="button"
                  >
                    {item.codeValue}
                  </li>
                ))}
            </ul>
            <ul className="child">
              {data
                ?.filter((v) => v.codeValueDes === sido.key)
                .map((item) => (
                  <li
                    role="button"
                    key={`${item.codeSequenceKey}+${item.codeValue}`}
                    className={clsx(
                      formLocation.includes(item.codeSequenceKey) && { active: true, [fonts.body3.semibold]: true }
                    )}
                    onClick={() => onClickLocation(item.codeSequenceKey, item.codeValue)}
                  >
                    {item.codeValue}
                  </li>
                ))}
            </ul>
          </List>
        </Location>
      )}
    </section>
  );
}

const Location = styled.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 -20px;
  border-bottom: 1px solid var(--gray200);
  div.location-selected {
    display: inline-flex;
    padding: 0 20px;
    gap: 12px;
  }
`;
const List = styled.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--gray200);

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
      overflow-y: auto;
      & li {
        color: var(--gray500);
        &.active {
          color: var(--primary500);
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

export default MyLocation;
