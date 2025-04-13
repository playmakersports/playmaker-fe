"use client";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Flicking, { ChangedEvent, WillChangeEvent } from "@egjs/react-flicking";
import { FONTS } from "@/styles/common";
import NumberFlow from "@number-flow/react";

function Banner() {
  const flickRef = useRef<Flicking>(null);
  const [activePanel, setActivePanel] = useState(0);
  const data = [
    {
      background: "https://basketkorea.com/news/data/20230701/p1065582677150200_187_thum.jpg",
      title: `2025 국민대배 전국 대학생 농구대회`,
      description: "2025.02.19 - 02.28",
      buttonName: "",
      linkTo: "",
    },
    {
      background: "https://cdn.news.unn.net/news/photo/202010/236095_122053_4627.jpg",
      title: "KSUF U-리그 대학배구",
      description: "2025.03.20 - 2025.03.31",
      buttonName: "",
      linkTo: "",
    },
    {
      background: "https://basketkorea.com/news/data/20230701/p1065582677150200_187_thum.jpg",
      title: `2025 국민대배 전국 대학생 농구대회`,
      description: "2025.02.19 - 02.28",
      buttonName: "",
      linkTo: "",
    },
  ];

  const onPanelChanged = (e: ChangedEvent | WillChangeEvent) => {
    setActivePanel(e.index);
  };

  return (
    <Container>
      <Flicking
        ref={flickRef}
        moveType="strict"
        circular={true}
        onWillChange={onPanelChanged}
        onChanged={onPanelChanged}
      >
        {data.map((banner, index) => (
          <Panel key={index}>
            <div className="inner-container" style={{ backgroundImage: `url(${banner.background})` }}>
              <p className="left">
                <span className="title">{banner.title}</span>
                <span className="description">{banner.description}</span>
              </p>
            </div>
          </Panel>
        ))}
      </Flicking>
      <Index aria-hidden="true">
        <NumberFlow value={activePanel + 1} />
        <span>/</span>
        {data.length}
      </Index>
    </Container>
  );
}

const BANNER_HEIGHT = 250;
const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: calc(${BANNER_HEIGHT}px + var(--safe-area-top));
  overflow: hidden;
  box-shadow: var(--shadow-alpha20);

  .flicking-viewport {
    position: relative;
    width: 100%;
    transform-style: preserve-3d;
    overflow: visible;
  }
  .flicking-camera {
    display: flex;
    align-items: center;
    transform-style: preserve-3d;
    will-change: transform;
  }
`;

const Panel = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: calc(${BANNER_HEIGHT}px + var(--safe-area-top));
  display: flex;
  justify-content: center;
  align-items: center;

  div.inner-container {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 20px calc(20px + 16px);
    align-items: flex-end;
    justify-content: space-between;
    white-space: pre-wrap;
    background-size: 100%;
    background-position: center;

    p.left {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
      color: #fff;
    }
    span.title {
      ${FONTS.body2("semibold")};
    }
    span.description {
      ${FONTS.caption1("medium")};
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 55%;
      background: linear-gradient(to top, #000, transparent);
    }
  }
`;

const Index = styled.div`
  position: absolute;
  display: inline-flex;
  gap: 2px;
  bottom: calc(20px + 16px);
  right: 20px;
  z-index: 1;
  padding: 3px 10px;
  color: var(--white);
  border-radius: 999px;
  box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.08);
  background-color: rgba(256, 256, 256, 0.4);
  ${FONTS.caption1("medium")};
`;

export default Banner;
