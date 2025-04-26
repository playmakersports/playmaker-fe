import React from "react";
import Image from "next/image";

import { useFormContext } from "react-hook-form";
import { stageFavSportsGrid, stageFormWrapper, stageWrapper } from "./stage.css";
import { SUPPORT_SPORTS } from "@/constants/SPORTS";
import styled from "styled-components";
import clsx from "clsx";
import { fonts } from "@/styles/fonts.css";
import { FONTS } from "@/styles/common";

function Stage5() {
  const { register } = useFormContext();

  return (
    <div className={stageFormWrapper}>
      <div>
        <h3 className={stageWrapper.title}>관심 스포츠를 선택해 주세요</h3>
        <p className={stageWrapper.description}>최대 3개까지 선택할 수 있어요</p>
      </div>
      <div className={stageFavSportsGrid}>
        {SUPPORT_SPORTS.map((item) => (
          <SportsButton key={item.value}>
            <input
              type="checkbox"
              id={`${item.value}+${item.name}`}
              value={item.value}
              style={{ display: "none" }}
              {...register("sports")}
            />
            <label htmlFor={`${item.value}+${item.name}`}>
              <div className="icon-wrapper">
                <Image src={item.icon} alt={item.name} width={50} height={50} />
              </div>
              <span className="sports-name">{item.name}</span>
            </label>
          </SportsButton>
        ))}
      </div>
    </div>
  );
}

const SportsButton = styled.div`
  width: 100%;
  max-width: 110px;
  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 110px;
      border-radius: 10px;
      border: 1px solid var(--gray200);
    }
    span.sports-name {
      ${FONTS.body3("medium")};
      padding: 10px 0;
      color: var(--gray700);
    }

    &:active div.icon-wrapper > img {
      transform: scale(0.95);
      transition: transform 0.2s ease-in-out;
    }
  }

  input:checked + label div.icon-wrapper {
    border-color: var(--primary500);
  }
  input:checked + label span.sports-name {
    ${FONTS.body3("semibold")};
    color: var(--primary500);
  }
`;

export default Stage5;
