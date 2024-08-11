import BottomSheet, { BottomSheetProps } from "@/components/common/BottomSheet";
import { FONTS } from "@/styles/common";
import styled from "@emotion/styled";
import React, { ReactNode, useCallback, useState } from "react";

type ModalProps = { title?: string; children: ReactNode; buttons: BottomSheetProps["buttons"] };

function useModal() {
  const [showBottom, setShowBottom] = useState(false);
  const showModal = () => {
    setShowBottom(true);
  };

  const ModalComponents = useCallback(
    (props: ModalProps) => {
      const { title, children, buttons } = props;

      if (showBottom) {
        return (
          <BottomSheet header={<Title>{title}</Title>} setShow={setShowBottom} buttons={buttons} expanded={false}>
            {children}
          </BottomSheet>
        );
      }
    },
    [showBottom]
  );

  const Title = styled.h3`
    margin-bottom: 16px;
    ${FONTS.HEAD1}
  `;

  return { ModalComponents, showModal };
}

export default useModal;
