import React, { useState } from "react";
import { ModalProps } from "@/hook/useModal";

import { fonts } from "@/styles/fonts.css";
import { flexColumnGap12, flexColumnGap24 } from "@/styles/container.css";

import { BasicInput } from "@/components/common/input/BaseInput";
import Button from "@/components/common/Button";

type Props = {
  ModalComponents: (props: ModalProps) => React.JSX.Element | undefined;
};
function LocationFilterModal(props: Props) {
  const { ModalComponents } = props;
  const [location, setLocation] = useState<string[]>([]);

  return (
    <ModalComponents draggable="all">
      {({ closeModal, setState }) => (
        <>
          <div className={flexColumnGap24}>
            <div className={flexColumnGap12}>
              <p className={fonts.body2.semibold}>지역 필터링</p>
              <BasicInput type="text" iconType="search" placeholder="지역을 검색해 주세요." />
            </div>
            <button
              type="button"
              onClick={() => {
                setLocation((prev) => [...prev, "선택1"]);
              }}
            >
              선택1
            </button>
            <button
              type="button"
              onClick={() => {
                setLocation((prev) => [...prev, "선택2"]);
              }}
            >
              선택2
            </button>
            <button
              type="button"
              onClick={() => {
                setLocation((prev) => [...prev, "선택3"]);
              }}
            >
              선택3
            </button>
          </div>
          <div style={{ margin: "20px 0 -20px", display: "flex", gap: "8px" }}>
            <Button type="button" mode="gray" fillType="outline" size="large" flex={1} onClick={() => closeModal()}>
              취소
            </Button>
            <Button
              type="button"
              mode="primary"
              fillType="default"
              disabled={location.length === 0}
              size="large"
              flex={1}
              onClick={() => {
                setState({ location });
                closeModal();
              }}
            >
              {location.length > 0 ? `${location.length}건 적용` : "적용"}
            </Button>
          </div>
        </>
      )}
    </ModalComponents>
  );
}

export default LocationFilterModal;
