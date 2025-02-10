"use client";

import React, { useRef, useState } from "react";
import styled from "styled-components";
import Flicking, { ChangedEvent, WillChangeEvent } from "@egjs/react-flicking";

function Banner() {
  const flickRef = useRef<Flicking>(null);
  const [activePanel, setActivePanel] = useState(0);
  const BANNER_MOCK = [
    {
      background: "https://basketkorea.com/news/data/20230701/p1065582677150200_187_thum.jpg",
      title: `2025 국민대배\n전국 대학생 농구대회`,
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
      title: `2025 국민대배\n전국 대학생 농구대회`,
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
        {BANNER_MOCK.map((banner, index) => (
          <Panel key={index}>
            <div className="inner-container" style={{ backgroundImage: `url(${banner.background})` }}>
              <p>
                <span className="title">{banner.title}</span>
                <span className="description">{banner.description}</span>
              </p>
            </div>
          </Panel>
        ))}
      </Flicking>
      <Bullet>
        {BANNER_MOCK.map((_, index) => (
          <span key={`bullet-${index}`} className={activePanel === index ? "active-bullet" : ""}></span>
        ))}
      </Bullet>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 210px;
  border-radius: var(--radius-10);
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
  position: relative;
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;

  div.inner-container {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 18px;
    align-items: center;
    justify-content: flex-end;
    white-space: pre-wrap;
    text-align: right;
    background-size: 100%;
    background-position: center;

    span {
      position: relative;
      color: #fff;
      z-index: 1;
    }
    span.title {
      display: block;
      font-size: 2.6rem;
      font-weight: 700;
      line-height: 3.4rem;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
    }
    span.description {
      display: inline-block;
      margin-top: 8px;
      font-size: 1.4rem;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 70%;
      height: 100%;
      background: linear-gradient(to left, rgba(0, 0, 0, 0.8), transparent);
    }
  }
`;

const Bullet = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  bottom: 0;
  margin: 0 auto 10px;
  width: 100%;

  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: var(--background-light);
    &.active-bullet {
      background-color: var(--main);
    }
  }
`;

export default Banner;
