import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

function FlipCard() {
  return (
    <Container>
      <Card className="card">
        <div className="card-face back"></div>
        <div className="card-face front"></div>
      </Card>
    </Container>
  );
}

const flipScale = keyframes`
  0% {
      transform: translateX(-100%) rotateY(0deg) scale(1);
  }
  15% {
      transform: translateX(0) rotateY(90deg) scale(1.1);
  }
  75% {
      transform: translateX(0) rotateY(180deg) scale(1.25);
  }
  100% {
      transform: translateX(0) rotateY(180deg) scale(1);
  }
`;
const Container = styled.div`
  display: flex;
  margin: 60px 0 0;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  perspective: 1000px;
`;
const Card = styled.div`
  width: 200px;
  height: 300px;
  position: absolute;
  transform-style: preserve-3d;
  transform-origin: center;
  animation: ${flipScale} 1.6s forwards;

  .card-face {
    width: 200px;
    height: 300px;
    clip-path: polygon(0 5%, 50% 0, 100% 5%, 100% 92%, 50% 100%, 0 92%);
    position: absolute;
    backface-visibility: hidden;
  }

  .back {
    background-color: #ffd700; /* 노란색 */
    transform: rotateY(0deg); /* 앞면은 초기 상태 */
  }

  .front {
    background-color: #1e90ff; /* 파란색 */
    transform: rotateY(180deg);
  }
`;

export default FlipCard;
