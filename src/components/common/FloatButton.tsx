import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  gap?: string;
};
function FloatButton(props: Props) {
  const { children, gap = "0" } = props;

  return <Container gap={gap}>{children}</Container>;
}

const Container = styled.div<{ gap: string }>`
  position: fixed;
  display: flex;
  width: 100%;
  max-width: var(--mobile-max-width);
  bottom: 0;
  padding: 0 16px calc(16px + var(--safe-bottom-navigation));
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  backdrop-filter: blur(2px);
  background: linear-gradient(to top, rgba(256, 256, 256, 0.8) 0%, rgba(256, 256, 256, 0.05) 100%);
  gap: ${(props) => props.gap};
`;

export default FloatButton;
