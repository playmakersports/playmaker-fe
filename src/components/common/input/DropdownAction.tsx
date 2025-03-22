import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { FONTS } from "@/styles/common";
import { InputStyledWrapper } from "../Wrapper";
import { DropdownAsset } from "./container";

import DotMenuIcon from "@/assets/icon/common/filled/DotMenu.svg";
import BottomToggleArrowIcon from "@/assets/icon/arrow/DownArrowToggle.svg";

type OptionsType = { name: string; action: () => void; divided?: boolean };
type Props = {
  title?: string;
  options: Array<OptionsType>;
  children?: React.ReactNode;
  icon?: boolean;
};
function DropdownAction(props: Props) {
  const { title, icon = false, options, children } = props;
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState("left");

  useEffect(() => {
    const outSideClick = (e: any) => {
      if (showOptions && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mouseup", outSideClick);

    return () => {
      document.removeEventListener("mouseup", outSideClick);
    };
  }, [showOptions]);

  useEffect(() => {
    const checkPosition = () => {
      if (!dropdownRef.current) return;
      const rect = dropdownRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const elementCenter = rect.left + rect.width / 2;
      const viewportCenter = windowWidth / 2;

      if (elementCenter < viewportCenter) {
        setPosition("left");
      } else {
        setPosition("right");
      }
    };

    checkPosition();
    window.addEventListener("resize", checkPosition);

    return () => {
      window.removeEventListener("resize", checkPosition);
    };
  }, []);

  const onClickShowOptions = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <Container data-icon={icon}>
      {icon ? (
        <div
          ref={dropdownRef}
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
          <BottomToggleArrowIcon />
        </ValueContainer>
      )}

      <DropdownAsset.Box $isShow={showOptions} style={{ [position]: 0 }}>
        <DropdownAsset.List style={{ overflow: "inherit" }}>
          {options.map((option, index) => (
            <li key={index} onClick={option.action} data-divided={option.divided}>
              <span className="option-name">{option.name}</span>
            </li>
          ))}
        </DropdownAsset.List>
      </DropdownAsset.Box>
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
