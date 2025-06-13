import React from "react";
import { stageWrapper } from "./stage.css";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

type Props = {
  children: React.ReactNode;
  onClickNext?: () => void;
  onClickPrev?: () => void;
  onClickLast?: () => void;
  start?: boolean;
  last?: boolean;
  length: number;
  current: number;
  currentStageName?: string;
  disableNext?: boolean;
};
export type SetStepType = { setStep: React.Dispatch<React.SetStateAction<string>> };
function StageWrapper(props: Props) {
  const {
    children,
    onClickNext,
    onClickPrev,
    onClickLast,
    start = false,
    last = false,
    length,
    current,
    currentStageName,
    disableNext = false,
  } = props;

  return (
    <div className={stageWrapper.container}>
      <section className={stageWrapper.contents}>
        <div style={{ margin: "24px 0 16px" }}>
          {currentStageName && current === -1 ? (
            <Badge type="gray" fillType="light" size="large">
              {currentStageName}
            </Badge>
          ) : (
            <Badge type="gray" fillType="light" size="large">
              {current} / {length}
            </Badge>
          )}
        </div>

        {children}
      </section>
      <div className={stageWrapper.buttons}>
        {!start && (
          <Button type="button" size="large" flex={1} mode="gray" fillType="outline" onClick={onClickPrev}>
            이전
          </Button>
        )}
        {!last && (
          <Button type="button" size="large" disabled={disableNext} flex={1} onClick={onClickNext}>
            다음
          </Button>
        )}
        {last && (
          <Button type="submit" size="large" disabled={disableNext} flex={1} onClick={onClickLast}>
            완료
          </Button>
        )}
      </div>
    </div>
  );
}

export default StageWrapper;
