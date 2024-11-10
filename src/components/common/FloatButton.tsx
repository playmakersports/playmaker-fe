import React from "react";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};
function FloatButton(props: Props) {
  const { children } = props;

  return <Container>{children}</Container>;
}

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  max-width: calc(var(--mobile-max-width) - 2px);
  bottom: 0;
  padding: 0 16px calc(16px + var(--env-sab));
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  backdrop-filter: blur(2px);
  background: linear-gradient(to top, rgba(256, 256, 256, 0.8) 0%, rgba(256, 256, 256, 0.05) 100%);
`;

export default FloatButton;
