import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import styled, { keyframes } from "styled-components";

import { fonts } from "@/styles/fonts.css";
import { stageWelcomeContainer } from "./stage.css";
import Button from "@/components/common/Button";

import MaleCharacter from "@/assets/character/character_boy_happy.png";
import FemaleCharacter from "@/assets/character/character_girl_happy.png";

function Welcome() {
  const { watch } = useFormContext();
  const router = useRouter();
  const gender = watch("sexKey");
  const username = watch("name");
  const WELCOME_TEXT = ["이제 뛰어볼까", "너의 스포츠 정신을 보여줘", "지금부터 시작이야", "할 수 있어"];

  return (
    <div className={stageWelcomeContainer}>
      <div style={{ flex: 1 }}>
        <Texts>
          {WELCOME_TEXT.map((text, index) => (
            <TextAnimate
              key={index}
              style={{
                marginLeft: (index + 1) % 2 === 0 ? "-52px" : "52px",
                animationDelay: `${index * 0.82}s`,
              }}
              index={index}
              length={WELCOME_TEXT.length}
            >
              <span className={fonts.body4.regular}>{text}</span>
            </TextAnimate>
          ))}
        </Texts>
        <Character>
          {gender === "MALE" && <Image src={MaleCharacter} alt="" width={170} aria-disabled />}
          {gender === "FEMALE" && <Image src={FemaleCharacter} alt="" width={170} aria-disabled />}
        </Character>
        <HeadText className={fonts.head6.semibold}>
          {username} 님,
          <br />
          만나서 반가워요!
        </HeadText>
      </div>
      <div>
        <Button type="button" size="large" fullWidth onClick={() => router.replace("/user/apply/optional")}>
          시작하기
        </Button>
      </div>
    </div>
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
      transform: translateY(-180px);
    }
`;

const Texts = styled.div`
  margin: 200px auto 0;
  max-width: 260px;
  position: relative;
`;
const TextAnimate = styled.p<{ index: number; length: number }>`
  display: flex;
  justify-content: center;
  animation: ${TextShowAnimate} ${({ length }) => (length + 1) * 0.65}s linear infinite;
  position: absolute;
  width: 100%;
  opacity: 0;
  &:last-of-type {
    animation-delay: ${({ index }) => index * 0.82}s;
  }
  span {
    display: inline-block;
    padding: 6px 16px;
    border-radius: 24px;
    background-color: var(--primary100);
    color: var(--primary800);
    letter-spacing: 0.25px;
  }
`;
const Character = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const HeadText = styled.p`
  margin-top: 8px;
  opacity: 0;
  text-align: center;
  animation: ${HeadTextShowAnimate} 0.7s forwards;
`;

export default Welcome;
