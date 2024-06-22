import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { FONTS } from "@/styles/common";
import RightArrowThinIcon from "@/assets/icon/arrow/RightArrowThin.svg";

type Props = {
  text: string;
  href: string;
};

function MoreButton(props: Props) {
  const { text, href } = props;
  const router = useRouter();

  return (
    <Container type="button" onClick={() => router.push(href)}>
      {text} <RightArrowThinIcon width={12} height={12} />
    </Container>
  );
}

const Container = styled.button`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
  /* padding: 12px 0; */
  width: 100%;
  color: ${({ theme }) => theme.gray1};
  border-radius: 16px;
  transition: all 0.2s;
  ${FONTS.MD2};
  svg {
    fill: ${({ theme }) => theme.gray1};
  }
  transition: box-shadow 0.3s cubic-bezier (0.05, 0, 0, 1), background-color 0.3s cubic-bezier (0.05, 0, 0, 1);
  &:active {
    transform: scale(0.97);
    background-color: var(--background);
    box-shadow: 0 0 0 8px var(--background);
  }
`;

export default MoreButton;
