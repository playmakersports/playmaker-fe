import React, { useState } from "react";
import { useToast } from "@/hook/useToast";

import { teamHeartButtonBox, teamHeartButtonIcon } from "./team.main.css";
import HeartIcon from "@/assets/icon/common/outlined/Heart.svg";
import HeartFilledIcon from "@/assets/icon/common/filled/Heart.svg";

type Props = {
  teamId: string | number;
};
function TeamHeart(props: Props) {
  const { teamId } = props;
  const toast = useToast();
  const [heart, setHeart] = useState(false);

  const onClickHeart = () => {
    setHeart((prev) => !prev);
    if (heart) {
      toast.trigger("좋아요 목록에서 제거했습니다.");
    } else {
      toast.trigger("좋아요 목록에 추가했습니다.");
    }
  };

  return (
    <button type="button" className={teamHeartButtonBox} onClick={onClickHeart}>
      {heart ? (
        <HeartFilledIcon className={teamHeartButtonIcon} data-filled="true" />
      ) : (
        <HeartIcon className={teamHeartButtonIcon} fill="var(--gray700)" />
      )}
    </button>
  );
}

export default TeamHeart;
