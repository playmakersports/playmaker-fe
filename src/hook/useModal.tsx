import React, { ReactNode, useCallback, useId, useRef, useState } from "react";
import { fonts } from "@/styles/fonts.css";
import BottomSheet, { BottomSheetProps } from "@/components/common/BottomSheet";
import Portal from "@/components/common/global/Portal";

export type ModalProps = {
  disabledDimOut?: boolean;
  draggable?: "bar" | "all" | false;
  title?: string;
  description?: string;
  children: ReactNode | ((closeModal: () => void) => ReactNode);
  buttons?: BottomSheetProps["buttons"];
  onClose?: () => void;
  expanded?: boolean;
};

function useModal() {
  const idPrefix = useId();
  const idRef = useRef(0);
  const [modals, setModals] = useState<{ key: string; visible: boolean }[]>([]);

  const showModal = () => {
    const key = `${idPrefix}-${idRef.current++}`;
    setModals((prev) => [...prev, { key, visible: true }]);
    return key;
  };

  const hideModal = (key: string) => {
    setModals((prev) => prev.map((m) => (m.key === key ? { ...m, visible: false } : m)));
    // 실제 제거는 BottomSheet에서 애니메이션 이후 수행할 수 있음
    setTimeout(() => {
      setModals((prev) => prev.filter((m) => m.key !== key));
    }, 250); // BottomSheet 애니메이션 시간
  };

  const ModalComponents = useCallback(
    (props: ModalProps) => {
      return (
        <>
          {modals.map(({ key, visible }) =>
            visible ? (
              <Portal key={key}>
                <BottomSheet
                  draggable={props.draggable}
                  disabledDimOut={props.disabledDimOut}
                  header={
                    props.title && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                        }}
                      >
                        <h4 className={fonts.body2.semibold}>{props.title}</h4>
                        {props.description && <span className={fonts.body4.regular}>{props.description}</span>}
                      </div>
                    )
                  }
                  onClose={props.onClose}
                  setShow={(v) => {
                    if (!v) hideModal(key);
                  }}
                  buttons={props.buttons}
                  expanded={props.expanded}
                >
                  {typeof props.children === "function" ? props.children(() => hideModal(key)) : props.children}
                </BottomSheet>
              </Portal>
            ) : null
          )}
        </>
      );
    },
    [modals]
  );

  return { ModalComponents, showModal };
}

export default useModal;
