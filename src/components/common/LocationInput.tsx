import React, { useRef, useState } from "react";
import { InputStyledWrapper } from "./Wrapper";
import styled from "styled-components";
import useModal from "@/hook/useModal";
import { useGet } from "@/apis/hook/query";
import Flicking, { ChangedEvent, FlickingError, WillChangeEvent } from "@egjs/react-flicking";

import { CARD_ACTIVE, FONTS } from "@/styles/common";
import ArrowBottomIcon from "@/assets/icon/arrow/DownArrow.svg";
import { ApiCodeArea } from "@/apis/types/code";

type Props = { title?: string; defaultValue?: number; setLocationKey: (key: number) => void };
function LocationInput({ title, defaultValue, setLocationKey }: Props) {
  const { data, isLoading } = useGet<ApiCodeArea>("/api/code/area");
  const [sido, setSido] = useState(defaultValue ? Math.floor(defaultValue / 1000) : 0);
  const [sigungu, setSigungu] = useState(defaultValue ?? 0);

  const sidoRef = useRef<Flicking>(null);
  const sigunguRef = useRef<Flicking>(null);

  const { showModal: showSiDo, ModalComponents: ModalSido } = useModal();
  const { showModal: showSigungu, ModalComponents: ModalSigungu } = useModal();

  const onSidoChanged = (e: ChangedEvent | WillChangeEvent) => {
    if (data) {
      setSido(data?.parent[e.index].locationkey);
    }
  };
  const onSigunguChanged = (e: ChangedEvent | WillChangeEvent) => {
    if (data) {
      setSigungu(
        data?.child.filter((location) => Math.floor(location.locationkey / 1000) === sido)[e.index].locationkey
      );
    }
  };

  const setSidoSelected = (index: number, target: number) => {
    setSido(target);
    sidoRef.current!.moveTo(index).catch((err) => {
      if (err instanceof FlickingError) return;
      throw err;
    });
  };
  const setSigunguSelected = (index: number, target: number) => {
    setSigungu(target);
    sigunguRef.current!.moveTo(index).catch((err) => {
      if (err instanceof FlickingError) return;
      throw err;
    });
  };

  return (
    <>
      <Container>
        <p className="input-title">{title ?? "주소"}</p>
        <Selects>
          <Select onClick={showSiDo}>
            {sido ? (
              <div className="selected-value">
                {data?.parent.find((item) => item.locationkey === sido)?.locationname}
              </div>
            ) : (
              <div className="placeholder">시도 선택</div>
            )}
            <i className="arrow-icon">
              <ArrowBottomIcon />
            </i>
          </Select>
          <Select onClick={showSigungu}>
            {sigungu ? (
              <div className="selected-value">
                {data?.child.find((item) => item.locationkey === sigungu)?.locationname}
              </div>
            ) : (
              <div className="placeholder">시군구 선택</div>
            )}
            <i className="arrow-icon">
              <ArrowBottomIcon />
            </i>
          </Select>
        </Selects>
      </Container>
      <ModalSido
        disabledDimOut
        buttons={[
          {
            mode: "primary",
            name: "다음",
            onClick: (close) => {
              close();
              showSigungu();
            },
          },
        ]}
      >
        <Wrapper>
          <Flicking
            ref={sidoRef}
            horizontal={false}
            onWillChange={onSidoChanged}
            onChanged={onSidoChanged}
            defaultIndex={data?.parent.findIndex((item) => item.locationkey === sido)}
          >
            {data?.parent.map((item, index) => (
              <Panel
                key={item.locationkey}
                className={item.locationkey === sido ? "active-pick" : ""}
                onClick={() => setSidoSelected(index, item.locationkey)}
              >
                {item.locationname}
              </Panel>
            ))}
          </Flicking>
        </Wrapper>
      </ModalSido>
      <ModalSigungu
        disabledDimOut
        buttons={[
          {
            mode: "primary",
            disabled: sido !== Math.floor(sigungu / 1000),
            name: "선택",
            onClick: (close) => {
              close();
              setLocationKey(sigungu);
            },
          },
        ]}
      >
        <Wrapper>
          <Flicking
            ref={sigunguRef}
            horizontal={false}
            onWillChange={onSigunguChanged}
            onChanged={onSigunguChanged}
            defaultIndex={data?.child.findIndex((item) => item.locationkey === sigungu)}
          >
            {data?.child
              .filter((location) => Math.floor(location.locationkey / 1000) === sido)
              .map((item, index) => (
                <Panel
                  key={item.locationkey}
                  className={item.locationkey === sigungu ? "active-pick" : ""}
                  data-code={item.locationkey}
                  onClick={() => setSigunguSelected(index, item.locationkey)}
                >
                  {item.locationname}
                </Panel>
              ))}
          </Flicking>
        </Wrapper>
      </ModalSigungu>
    </>
  );
}

const Container = styled.div`
  .input-title {
    font-size: 1.4rem;
    margin-bottom: 4px;
    padding: 0 10px;
    font-weight: 500;
    color: var(--gray700);
    line-height: 2.4rem;
  }

  .input-information {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    padding: 0 8px;
    font-size: 1.2rem;
    color: var(--gray700);
    gap: 4px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
const Selects = styled.div`
  display: flex;
  gap: 10px;
`;
const Select = styled(InputStyledWrapper)`
  ${CARD_ACTIVE}
  user-select: none;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px 0 rgba(141, 141, 141, 0.15);

  div.selected-value {
    ${FONTS.body3("regular")};
    font-weight: 400;
  }
  div.placeholder {
    ${FONTS.body3("regular")};
    font-weight: 400;
    color: var(--gray500);
  }
  i.arrow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    svg {
      transform: rotate(180deg);
      fill: var(--gray400);
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  height: 240px;
  overflow: hidden;

  .flicking-viewport {
    position: relative;
    width: 100%;
    transform-style: preserve-3d;
    overflow: visible;
  }
  .flicking-camera {
    transform-style: preserve-3d;
    will-change: transform;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: linear-gradient(to bottom, var(--background-light) 0%, rgba(var(--background-light-rgb), 0) 100%);
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: linear-gradient(to top, var(--background-light) 0%, rgba(var(--background-light-rgb), 0) 100%);
  }
`;
const Panel = styled.div`
  padding: 18px 12px;
  display: block;
  text-align: center;
  ${FONTS.body3("regular")};
  font-size: 1.8rem;
  color: var(--gray600);
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.5px;
  transition: all 0.2s;
  transition-delay: 0.2s;

  &.active-pick {
    color: var(--main);
    font-weight: 700;
    font-size: 2.2rem;
  }
`;

export default LocationInput;
