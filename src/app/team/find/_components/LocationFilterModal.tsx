import React, { useState } from "react";
import clsx from "clsx";
import { ModalProps } from "@/hook/useModal";
import { groupBy, mapValues } from "es-toolkit";
import { useAreaGet } from "@/apis/hook/common";

import { fonts } from "@/styles/fonts.css";
import { flexColumnGap12, flexColumnGap24 } from "@/styles/container.css";

import { BasicInput } from "@/components/common/input/BaseInput";
import Button from "@/components/common/Button";
import { LocationChildList, LocationContainer } from "@/app/register/_components/location-styled";

type Props = {
  ModalComponents: (props: ModalProps<{ location: string }>) => React.JSX.Element | undefined;
};
function LocationFilterModal(props: Props) {
  const { ModalComponents } = props;

  const { data, isLoading } = useAreaGet();
  const [sido, setSido] = useState({ key: "", name: "" });
  const [sigungu, setSigungu] = useState<string>("");

  const sidoList = data?.map((v) => v.parent);
  const sigunguList = mapValues(
    groupBy(data ?? [], (item) => item.parent.codeSequenceKey),
    (arr) => arr[0].child
  );

  return (
    <ModalComponents draggable="bar">
      {({ closeModal, setState }) => (
        <>
          <div className={flexColumnGap24}>
            <div className={flexColumnGap12}>
              <p className={fonts.body2.semibold}>지역 필터링</p>
              <BasicInput type="text" iconType="search" placeholder="지역을 검색해 주세요." />
            </div>
            <LocationContainer style={{ maxHeight: "55vh" }} className={fonts.body3.regular}>
              <LocationChildList>
                <ul className="parent">
                  {sidoList?.map((parent) => (
                    <li
                      key={parent.codeSequenceKey}
                      onClick={() => setSido({ key: parent.codeSequenceKey, name: parent.codeValue })}
                      className={clsx({
                        active: sido.key === parent.codeSequenceKey,
                        [fonts.body3.semibold]: sido.key === parent.codeSequenceKey,
                      })}
                      role="button"
                    >
                      {parent.codeValue}
                    </li>
                  ))}
                </ul>
                <ul className="child" style={{ overflowY: "auto", maxHeight: "55vh" }}>
                  {sigunguList[sido.key]?.map((child) => (
                    <li
                      role="button"
                      key={`${child.codeSequenceKey}+${child.codeValue}`}
                      onClick={() => setSigungu(child.codeSequenceKey)}
                      className={sigungu === child.codeSequenceKey ? "active" : ""}
                    >
                      {child.codeValue}
                    </li>
                  ))}
                </ul>
              </LocationChildList>
            </LocationContainer>
          </div>
          <div style={{ margin: "20px 0 -20px", display: "flex", gap: "8px" }}>
            <Button
              type="button"
              mode="gray"
              fillType="outline"
              size="large"
              flex={1}
              onClick={() => {
                setState({ location: "" });
                closeModal();
              }}
            >
              초기화
            </Button>
            <Button
              type="button"
              mode="primary"
              fillType="default"
              disabled={!sigungu}
              size="large"
              flex={1}
              onClick={() => {
                setState({ location: sigungu });
                closeModal();
              }}
            >
              적용
            </Button>
          </div>
        </>
      )}
    </ModalComponents>
  );
}

export default LocationFilterModal;
