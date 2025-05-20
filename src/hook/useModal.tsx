import React, { ReactNode, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

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
};

const ANIMATION_RUNNING_TIME = 250;
function useModal() {
  const [showBottom, setShowBottom] = useState(false);
  const showModal = () => {
    setShowBottom(true);
  };

  const ModalComponents = useCallback(
    (props: ModalProps) => {
      const { disabledDimOut = false, title, description, children, draggable = false, buttons, onClose } = props;

      if (showBottom) {
        return (
          <Portal>
            <BottomSheet
              draggable={draggable}
              disabledDimOut={disabledDimOut}
              header={
                title && (
                  <HeaderContainer>
                    {title && <h4 className={fonts.body2.semibold}>{title}</h4>}
                    {description && (
                      <span className={fonts.body4.regular} style={{ color: "var(--gray400)" }}>
                        {description}
                      </span>
                    )}
                  </HeaderContainer>
                )
              }
              onClose={onClose}
              setShow={setShowBottom}
              buttons={buttons}
              expanded={false}
            >
              {children}
            </BottomSheet>
          </Portal>
        );
      }
    },
    [showBottom]
  );

  return { ModalComponents, showModal };
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default useModal;
