import React, { useState } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { useGet } from "@/apis/hook/query";

import { ApiCodeArea } from "@/apis/types/code";
import StageWrapper, { SetStepType } from "../../user/apply/stage/_components/StageWrapper";
import { fonts } from "@/styles/fonts.css";
import { stageFormWrapper, stageWrapper } from "../../user/apply/stage/_components/stage.css";
import Loading from "@/components/common/Loading";
import Chip from "@/components/common/Chip";

interface LocationType {
  key: string | null;
  name: string;
}

function TeamCreateStage3({ setStep }: SetStepType) {
  const { setValue, watch } = useFormContext();
  const { data, isLoading } = useGet<ApiCodeArea>("/api/code/activeArea");

  const handlePrevStep = () => {
    setStep("Stage2");
  };
  const handleNextStep = () => {
    setStep("Stage4");
  };

  const [sido, setSido] = useState<LocationType>({ key: "11", name: "서울특별시" });
  const formLocation = watch("location") ?? [];
  const formLocationDisplayValues = formLocation.map((key: string) => ({
    key,
    name: findAreaByCodeSequenceKey(data, key)?.text,
  }));
  const [location, setLocation] = useState<LocationType | undefined>(formLocationDisplayValues);

  const onClickLocation = (locationKey: string, name: string) => {
    setLocation({ key: locationKey, name: `${sido.name} ${name}` });
    setValue("location", locationKey);
  };

  const onRemoveLocation = () => {
    setLocation(undefined);
    setValue("location", "");
  };

  return (
    <StageWrapper onClickPrev={handlePrevStep} onClickNext={handleNextStep} length={4} current={3}>
      <div className={stageFormWrapper} style={{ overflow: "hidden", margin: "0 -16px", padding: "0 16px" }}>
        <div style={{ marginBottom: "-4px" }}>
          <h3 className={stageWrapper.title}>팀의 활동 지역을 선택해 주세요</h3>
          <p className={stageWrapper.description}>주로 운동하시는 지역을 1곳 선택해주세요</p>
        </div>
        {isLoading ? (
          <div style={{ marginTop: "32px" }}>
            <Loading />
          </div>
        ) : (
          <Location>
            <div className="location-selected">
              <Chip
                type="primary"
                fillType="light"
                size="large"
                closeAction={() => {
                  onRemoveLocation();
                }}
              >
                {location?.name}
              </Chip>
            </div>
            <List className={fonts.body3.regular}>
              <ul className="parent">
                {data?.map((item) => {
                  const parent = item.parent;
                  return (
                    <li
                      key={parent.codeSequenceKey}
                      onClick={() => setSido({ key: parent.codeSequenceKey, name: parent.codeValue })}
                      className={clsx({
                        active: sido.key === parent.codeSequenceKey,
                        [fonts.body3.semibold]: sido.key === parent.codeSequenceKey,
                      })}
                      role="button"
                    >
                      {parent.codeValue}
                    </li>
                  );
                })}
              </ul>
              <ul className="child">
                {data
                  ?.find((item) => item.parent.codeSequenceKey === sido.key)
                  ?.child?.map((item) => (
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
      </div>
    </StageWrapper>
  );
}

const Location = styled.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 -16px;
  border-bottom: 1px solid var(--gray200);
  div.location-selected {
    display: inline-flex;
    padding: 0 16px;
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

function findAreaByCodeSequenceKey(data?: ApiCodeArea, targetKey?: string | number) {
  const item = data?.find((item) => item.child.some((child) => child.codeSequenceKey === targetKey));

  if (!item) return null;

  const child = item?.child?.find((child) => child.codeSequenceKey === targetKey);
  return {
    parent: item.parent.codeValue,
    child: child?.codeValue,
    text: `${item.parent.codeValue} ${child?.codeValue}`,
  };
}

export default TeamCreateStage3;
