import BottomSheet, { BottomSheetProps } from "@/components/common/BottomSheet";
import { FONTS } from "@/styles/common";
import styled from "@emotion/styled";
import React, { ReactNode, useCallback, useState } from "react";

export type ModalProps = {
  disabledDimOut?: boolean;
  draggable?: "bar" | "all" | false;
  title?: string;
  children: ReactNode | ((closeModal: () => void) => ReactNode);
  buttons?: BottomSheetProps["buttons"];
};

const ANIMATION_RUNNING_TIME = 250;
function useModal() {
  const [showBottom, setShowBottom] = useState(false);
  const showModal = () => {
    setShowBottom(true);
  };

  const ModalComponents = useCallback(
    (props: ModalProps) => {
      const { disabledDimOut = false, title, children, draggable = false, buttons } = props;

      if (showBottom) {
        return (
          <BottomSheet
            draggable={draggable}
            disabledDimOut={disabledDimOut}
            header={title && <Title>{title}</Title>}
            setShow={setShowBottom}
            buttons={buttons}
            expanded={false}
          >
            {children}
          </BottomSheet>
        );
      }
    },
    [showBottom]
  );

  const Title = styled.h3`
    margin-bottom: 22px;
    ${FONTS.HEAD1}
  `;

  return { ModalComponents, showModal };
}

export default useModal;
