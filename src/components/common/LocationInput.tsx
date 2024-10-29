import React, { use, useRef, useState } from "react";
import { InputStyledWrapper } from "./Wrapper";
import styled from "@emotion/styled";
import { CARD_ACTIVE, FONTS } from "@/styles/common";

import ArrowBottomIcon from "@/assets/icon/arrow/BottomArrowThin.svg";
import useModal from "@/hook/useModal";
import Flicking, { ChangedEvent, FlickingError, WillChangeEvent } from "@egjs/react-flicking";

const SIDO = [
  { sidoname: "서울특별시", sidocode: 11 },
  { sidoname: "부산광역시", sidocode: 26 },
  { sidoname: "대구광역시", sidocode: 27 },
  { sidoname: "인천광역시", sidocode: 28 },
  { sidoname: "광주광역시", sidocode: 29 },
  { sidoname: "대전광역시", sidocode: 30 },
  { sidoname: "울산광역시", sidocode: 31 },
  { sidoname: "세종특별자치시", sidocode: 36 },
  { sidoname: "경기도", sidocode: 41 },
  { sidoname: "강원도", sidocode: 42 },
  { sidoname: "충청북도", sidocode: 43 },
  { sidoname: "충청남도", sidocode: 44 },
  { sidoname: "전라북도", sidocode: 45 },
  { sidoname: "전라남도", sidocode: 46 },
  { sidoname: "경상북도", sidocode: 47 },
  { sidoname: "경상남도", sidocode: 48 },
  { sidoname: "제주특별자치도", sidocode: 50 },
];

const SEOUL_SIGUNGU = [
  { sigungu: "강남구", sigungucode: 11680 },
  { sigungu: "강동구", sigungucode: 11740 },
  { sigungu: "강북구", sigungucode: 11305 },
  { sigungu: "강서구", sigungucode: 11500 },
  { sigungu: "관악구", sigungucode: 11620 },
  { sigungu: "광진구", sigungucode: 11215 },
  { sigungu: "구로구", sigungucode: 11530 },
  { sigungu: "금천구", sigungucode: 11545 },
  { sigungu: "노원구", sigungucode: 11350 },
  { sigungu: "도봉구", sigungucode: 11320 },
  { sigungu: "동대문구", sigungucode: 11230 },
  { sigungu: "동작구", sigungucode: 11590 },
  { sigungu: "마포구", sigungucode: 11440 },
  { sigungu: "서대문구", sigungucode: 11410 },
  { sigungu: "서초구", sigungucode: 11650 },
  { sigungu: "성동구", sigungucode: 11200 },
  { sigungu: "성북구", sigungucode: 11290 },
  { sigungu: "송파구", sigungucode: 11710 },
  { sigungu: "양천구", sigungucode: 11470 },
  { sigungu: "영등포구", sigungucode: 11560 },
  { sigungu: "용산구", sigungucode: 11170 },
  { sigungu: "은평구", sigungucode: 11380 },
  { sigungu: "종로구", sigungucode: 11110 },
  { sigungu: "중구", sigungucode: 11140 },
  { sigungu: "중랑구", sigungucode: 11260 },
];

const incheon_sigungu = [
  { sigungu: "강화군", sigungucode: 28710 },
  { sigungu: "계양구", sigungucode: 28185 },
  { sigungu: "남동구", sigungucode: 28200 },
  { sigungu: "동구", sigungucode: 28110 },
  { sigungu: "미추홀구", sigungucode: 28177 },
  { sigungu: "부평구", sigungucode: 28237 },
  { sigungu: "서구", sigungucode: 28245 },
  { sigungu: "연수구", sigungucode: 28237 },
  { sigungu: "옹진군", sigungucode: 28720 },
  { sigungu: "중구", sigungucode: 28140 },
];

type Props = { title?: string };
function LocationInput({ title }: Props) {
  const [sido, setSido] = useState(0);
  const [sigungu, setSigungu] = useState(0);

  const sidoRef = useRef<Flicking>(null);
  const sigunguRef = useRef<Flicking>(null);

  const { showModal: showSiDo, ModalComponents: ModalSido } = useModal();
  const { showModal: showSigungu, ModalComponents: ModalSigungu } = useModal();

  const onSidoChanged = (e: ChangedEvent | WillChangeEvent) => {
    setSido(SIDO[e.index].sidocode);
  };
  const onSigunguChanged = (e: ChangedEvent | WillChangeEvent) => {
    setSigungu(SEOUL_SIGUNGU[e.index].sigungucode);
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
              <div className="selected-value">{SIDO.find((item) => item.sidocode === sido)?.sidoname}</div>
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
                {SEOUL_SIGUNGU.find((item) => item.sigungucode === sigungu)?.sigungu}
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
        buttons={[
          {
            mode: "MAIN",
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
            defaultIndex={SIDO.findIndex((item) => item.sidocode === sido)}
          >
            {SIDO.map((item, index) => (
              <Panel
                key={item.sidocode}
                className={item.sidocode === sido ? "active-pick" : ""}
                onClick={() => setSidoSelected(index, item.sidocode)}
              >
                {item.sidoname}
              </Panel>
            ))}
          </Flicking>
        </Wrapper>
      </ModalSido>
      <ModalSigungu
        buttons={[
          {
            mode: "MAIN",
            name: "선택",
            onClick: (close) => {
              close();
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
            defaultIndex={SEOUL_SIGUNGU.findIndex((item) => item.sigungucode === sigungu)}
          >
            {SEOUL_SIGUNGU.map((item, index) => (
              <Panel
                key={item.sigungucode}
                className={item.sigungucode === sigungu ? "active-pick" : ""}
                data-code={item.sigungucode}
                onClick={() => setSigunguSelected(index, item.sigungucode)}
              >
                {item.sigungu}
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
    ${FONTS.MD1W500}
  }
  div.placeholder {
    ${FONTS.MD1W500}
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
  padding: 8px 12px;
  display: block;
  text-align: center;
  ${FONTS.MD1W500};
  color: var(--gray600);
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.5px;
  transition: all 0.25s;
  transition-delay: 0.2s;

  &.active-pick {
    color: var(--main);
    font-weight: 700;
    font-size: 2rem;
  }
`;

export default LocationInput;
