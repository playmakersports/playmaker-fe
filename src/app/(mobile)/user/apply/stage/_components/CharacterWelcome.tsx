import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

import { FONTS } from "@/styles/common";
import MaleCharacter from "@/assets/character/character_boy_happy.png";
import FemaleCharacter from "@/assets/character/character_girl_happy.png";

type Props = { name: string; gender: "male" | "female" };
function CharacterWelcome({ name, gender }: Props) {
  const WELCOME_TEXT = ["이제 뛰어볼까", "너의 스포츠 정신을 보여줘", "지금부터 시작이야", "할 수 있어"];
  return (
    <Container>
      <Texts>
        {WELCOME_TEXT.map((text, index) => (
          <TextAnimate key={index} left={(index + 1) % 2 === 0} index={index} length={WELCOME_TEXT.length}>
            <span>{text}</span>
          </TextAnimate>
        ))}
      </Texts>
      <Character>
        {gender === "male" && <Image src={MaleCharacter} alt="" width={170} aria-disabled />}
        {gender === "female" && <Image src={FemaleCharacter} alt="" width={170} aria-disabled />}
      </Character>
      <HeadText>
        {name} 님<br />
        만나서 반가워요!
      </HeadText>
    </Container>
  );
}

const HeadTextShowAnimate = keyframes`
    from {
        opacity: 0;
        transform: translateY(-35%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
const TextShowAnimate = keyframes`
    0% {
      opacity: 0;
      transform: translateY(1px);
      }
    30% {
      opacity: 0.9;
      scale: 1.15;
    }
    80% {
      opacity: 0.8;
      scale: 1.05;
    }
    100% {
      opacity: 0;
      transform: translateY(-175px);
    }
`;
const Container = styled.div`
  margin-top: 20px;
  padding: 12px 0 0;
`;
const Texts = styled.div`
  width: 260px;
  position: relative;
`;
const TextAnimate = styled.p<{ index: number; left: boolean; length: number }>`
  display: flex;
  margin-left: ${({ left }) => (left ? "-52px" : "52px")};
  justify-content: center;
  animation: ${TextShowAnimate} ${({ length }) => (length + 1) * 0.65}s linear infinite;
  animation-delay: ${({ index }) => index * 0.85}s;
  position: absolute;
  width: 100%;
  opacity: 0;
  &:last-of-type {
    animation-delay: ${({ index }) => index * 0.82}s;
  }
  span {
    ${FONTS.body4("semibold")};
    display: inline-block;
    padding: 8px 16px;
    border-radius: 24px;
    background-color: rgba(256, 256, 256, 0.4);
    letter-spacing: 0.25px;
  }
`;
const Character = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const HeadText = styled.p`
  opacity: 0;
  ${FONTS.body1("semibold")};
  text-align: center;
  font-size: 2.4rem;
  line-height: 3.8rem;
  animation: ${HeadTextShowAnimate} 0.7s forwards;
`;

export default CharacterWelcome;
