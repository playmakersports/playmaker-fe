import React, { ReactNode, useCallback, useId, useRef, useState } from "react";
import { fonts } from "@/styles/fonts.css";
import BottomSheet, { BottomSheetProps } from "@/components/common/BottomSheet";
import Portal from "@/components/common/global/Portal";
import { flexColumnGap4 } from "@/styles/container.css";

type ChildrenProps = { closeModal: () => void; setState: (value: unknown) => void };
export type ModalProps = {
  disabledDimOut?: boolean;
  draggable?: "bar" | "all" | false;
  title?: string;
  description?: string;
  children: ReactNode | ((props: ChildrenProps) => ReactNode);
  buttons?: BottomSheetProps["buttons"];
  onClose?: () => void;
  expanded?: boolean;
};

type HookProps = { key?: string };
function useModal(props: HookProps = {}) {
  const idPrefix = useId();
  const idRef = useRef(0);
  const [modals, setModals] = useState<{ key: string; visible: boolean }[]>([]);
  const [modalState, setModalState] = useState<Record<string, unknown>>();
  const [key, setKey] = useState("");

  const showModal = () => {
    const key = props.key ?? `${idPrefix}-${idRef.current++}`;
    setModals((prev) => [...prev, { key, visible: true }]);
    setKey(key);
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
                      <div className={flexColumnGap4} style={{ marginBottom: "32px" }}>
                        <h4 className={fonts.body2.semibold} style={{ color: "var(--gray900)" }}>
                          {props.title}
                        </h4>
                        {props.description && (
                          <span className={fonts.body4.regular} style={{ color: "var(--gray400)" }}>
                            {props.description}
                          </span>
                        )}
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
                  {typeof props.children === "function"
                    ? props.children({
                        closeModal: () => hideModal(key),
                        setState: (value) => setModalState((prev) => ({ ...prev, [key]: value })),
                      })
                    : props.children}
                </BottomSheet>
              </Portal>
            ) : null
          )}
        </>
      );
    },
    [modals]
  );

  return { ModalComponents, showModal, modalState, key };
}

export default useModal;
