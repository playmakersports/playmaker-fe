"use client";

import React, { useRef, useState } from "react";
import styled from "styled-components";
import Flicking, { ChangedEvent, WillChangeEvent } from "@egjs/react-flicking";

function Banner() {
  const flickRef = useRef<Flicking>(null);
  const [activePanel, setActivePanel] = useState(0);
  const BANNER_MOCK = [
    { background: "skyblue", title: "", description: "", buttonName: "", linkTo: "" },
    { background: "lime", title: "", description: "", buttonName: "", linkTo: "" },
    { background: "yellow", title: "", description: "", buttonName: "", linkTo: "" },
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
          <Panel key={index} style={{ backgroundColor: banner.background }}></Panel>
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
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
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
