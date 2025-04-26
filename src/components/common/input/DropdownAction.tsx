import React, { useRef, useState } from "react";
import styled from "styled-components";
import { flip, hide, offset, useDismiss, useFloating, useInteractions } from "@floating-ui/react";

import { FONTS } from "@/styles/common";
import { InputStyledWrapper } from "../Wrapper";
import { DropdownAsset } from "./container";

import DotMenuIcon from "@/assets/icon/common/MenuDots.svg";
import DownArrow from "@/assets/icon/arrow/DownArrow.svg";

export type ActionOptionsType = { name: string; action: () => void; divided?: boolean };
type Props = {
  title?: string;
  options: Array<ActionOptionsType>;
  children?: React.ReactNode;
  icon?: boolean;
};
function DropdownAction(props: Props) {
  const { title, icon = false, options, children } = props;
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { refs, floatingStyles, middlewareData, context } = useFloating({
    placement: "bottom-end",
    open: showOptions,
    onOpenChange: setShowOptions,
    middleware: [hide(), flip(), offset(8)],
  });
  const dismiss = useDismiss(context);
  const { getFloatingProps } = useInteractions([dismiss]);

  const onClickShowOptions = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <Container data-icon={icon}>
      {icon ? (
        <div
          ref={refs.setReference}
          role="button"
          aria-label={title}
          onClick={onClickShowOptions}
          style={{
            cursor: "pointer",
            width: 24,
            height: 24,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: showOptions ? "scale(0.9)" : "none",
            transition: "transform 0.25s ease-in-out",
          }}
        >
          <DotMenuIcon width={24} height={24} fill="var(--gray700)" />
        </div>
      ) : children ? (
        children
      ) : (
        <ValueContainer ref={dropdownRef} onClick={onClickShowOptions}>
          <span className="current-value">{title}</span>
          <DownArrow />
        </ValueContainer>
      )}

      {showOptions && (
        <DropdownAsset.Box
          ref={refs.setFloating}
          style={{
            ...floatingStyles,
            visibility: middlewareData.hide?.referenceHidden ? "hidden" : "visible",
          }}
          {...getFloatingProps()}
        >
          <DropdownAsset.List style={{ overflow: "inherit" }}>
            {options.map((option, index) => (
              <button type="button" key={index} onClick={option.action} data-divided={option.divided}>
                <span className="option-name">{option.name}</span>
              </button>
            ))}
          </DropdownAsset.List>
        </DropdownAsset.Box>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  &[data-icon="true"] {
    width: 24px;
    height: 24px;
  }
`;
const ValueContainer = styled(InputStyledWrapper)`
  cursor: pointer;
  color: var(--gray700);
  background-color: var(--white);
  ${FONTS.body4("regular")};

  span.current-value {
    user-select: none;
    flex: 1;
  }
  & svg {
    fill: var(--gray700);
  }
`;

export default DropdownAction;
