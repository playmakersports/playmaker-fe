import React from "react";
import { stageWrapper } from "./stage.css";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

type Props = {
  children: React.ReactNode;
  onClickNext?: () => void;
  onClickPrev?: () => void;
  start: boolean;
  last: boolean;
  length: number;
  current: number;
};
function StageWrapper(props: Props) {
  const { children, onClickNext, onClickPrev, start, last, length, current } = props;

  return (
    <div className={stageWrapper.container}>
      <section className={stageWrapper.contents}>
        <div style={{ marginTop: "24px", padding: "0 16px 16px" }}>
          <Badge type="primary" fillType="light" size="large">
            {current} / {length}
          </Badge>
        </div>
        {children}
      </section>
      <div className={stageWrapper.buttons}>
        {!start && (
          <Button type="button" size="large" flex={1} mode="gray" fillType="light" onClick={onClickPrev}>
            이전
          </Button>
        )}
        {!last && (
          <Button type="button" size="large" flex={2} onClick={onClickNext}>
            다음
          </Button>
        )}
        {last && (
          <Button type="submit" size="large" flex={2}>
            완료
          </Button>
        )}
      </div>
    </div>
  );
}

export default StageWrapper;
