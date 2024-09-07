import React from "react";
import styled from "@emotion/styled";

import HeartStrokeIcon from "@/assets/icon/global/HeartStroke.svg";
import HeartFillIcon from "@/assets/icon/global/HeartFill.svg";

type Props = { isHeart: boolean; onHeart: (prev: boolean) => void };
function Heart(props: Props) {
  const { isHeart, onHeart } = props;
  return (
    <HeartButton
      type="button"
      onClick={() => onHeart(!isHeart)}
      aria-label={`내가 좋아요 ${isHeart ? "한 팀" : "하지 않은 팀"}. 좋아요를 ${
        isHeart ? "해제" : ""
      }하려면 선택하세요.`}
    >
      {isHeart ? <HeartFillIcon className="fill-heart" /> : <HeartStrokeIcon className="stroke-heart" />}
    </HeartButton>
  );
}

const HeartButton = styled.button`
  svg {
    width: 20px;
    height: 20px;
  }
  svg.fill-heart {
    fill: var(--main);
  }
  svg.stroke-heart {
    fill: var(--gray4);
  }
`;

export default Heart;
