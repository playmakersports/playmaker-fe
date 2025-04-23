import React, { useState } from "react";
import { useToast } from "@/hook/useToast";

import { teamHeartButtonBox, teamHeartButtonIcon } from "./team.main.css";
import HeartIcon from "@/assets/icon/common/outlined/Heart.svg";
import HeartFilledIcon from "@/assets/icon/common/filled/Heart.svg";

type Props = {
  defaultHeart?: boolean;
  teamId: string | number;
};
function TeamHeart(props: Props) {
  const { defaultHeart = false, teamId } = props;
  const { trigger } = useToast();
  const [heart, setHeart] = useState(defaultHeart);

  const handleLike = () => {
    setHeart((prev) => !prev);
    if (heart) {
      trigger("좋아요 목록에서 제거했습니다.");
    } else {
      trigger("좋아요 목록에 추가했습니다.");
    }
  };

  return (
    <button type="button" className={teamHeartButtonBox} onClick={handleLike}>
      {heart ? (
        <HeartFilledIcon className={teamHeartButtonIcon} fill="var(--red500)" />
      ) : (
        <HeartIcon className={teamHeartButtonIcon} fill="var(--gray700)" />
      )}
    </button>
  );
}

export default TeamHeart;
