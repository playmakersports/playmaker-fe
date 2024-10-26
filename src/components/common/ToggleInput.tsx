import styled from "@emotion/styled";
import React from "react";

type Props = { toggled: boolean; setToggle: React.Dispatch<React.SetStateAction<boolean>> };
function ToggleInput({ toggled, setToggle }: Props) {
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Wrapper onClick={handleToggle} isToggled={toggled}>
      <Circle isToggled={toggled} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isToggled: boolean }>`
  width: 40px;
  height: 22px;
  border-radius: 12px;
  background-color: ${({ isToggled }) => (isToggled ? "var(--main)" : "var(--gray400)")};
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;
`;

const Circle = styled.div<{ isToggled: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 2px;
  left: ${({ isToggled }) => (isToggled ? "20px" : "2px")};
  transition: transform 0.3s, left 0.3s;
`;

export default ToggleInput;
