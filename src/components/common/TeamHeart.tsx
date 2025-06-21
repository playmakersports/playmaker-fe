import React, { useEffect } from "react";
import styled from "styled-components";
import { usePost } from "@/apis/hook/query";
import { useToast } from "@/hook/useToast";

import HeartStrokeIcon from "@/assets/icon/common/outlined/Heart.svg";
import HeartFillIcon from "@/assets/icon/common/filled/Heart.svg";
import Spinner from "@/assets/icon/common/Spinner.svg";

type Props = {
  teamId: string | number;
  isHeart: boolean;
  onHeart: (prev: boolean) => void;
};

const TeamHeart: React.FC<Props> = ({ teamId, isHeart, onHeart }) => {
  const { trigger } = useToast();
  const { mutate, isPending, isSuccess, isError, error } = usePost(`/api/teamjoin/subscribed/${teamId}`);

  useEffect(() => {
    if (isError) {
      trigger(error.message);
    }
  }, [isError, trigger, error]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isPending) return;

    event.stopPropagation();
    mutate({ data: {} });
    if (isSuccess) {
      onHeart(!isHeart);
    }
  };

  return (
    <HeartButton
      type="button"
      onClick={handleClick}
      aria-label={`내가 좋아요 ${isHeart ? "한 팀" : "하지 않은 팀"}. 좋아요를 ${
        isHeart ? "해제" : ""
      }하려면 선택하세요.`}
    >
      {isPending ? (
        <Spinner />
      ) : isHeart ? (
        <HeartFillIcon className="fill-heart" />
      ) : (
        <HeartStrokeIcon className="stroke-heart" />
      )}
    </HeartButton>
  );
};

const HeartButton = styled.button`
  svg {
    width: 24px;
    height: 24px;
  }
  svg.fill-heart {
    fill: var(--primary500);
  }
  svg.stroke-heart {
    fill: var(--gray400);
  }
`;

export default TeamHeart;
