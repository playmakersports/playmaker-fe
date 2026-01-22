import React from "react";
import styled from "styled-components";
import { useRouter } from "@tanstack/react-router";

import { FONTS, TEXT_ACTIVE } from "@/styles/common";
import RightArrowThinIcon from "@/assets/icon/arrow/RightArrow.svg";

type Props = {
  text: string;
  href: string;
};

function MoreButton(props: Props) {
  const { text, href } = props;
  const router = useRouter();

  return (
    <Container type="button" onClick={() => router.navigate({ to: href })}>
      {text} <RightArrowThinIcon width={12} height={12} />
    </Container>
  );
}

const Container = styled.button`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin: 12px 0 0;
  width: 100%;
  color: var(--gray600);
  border-radius: 10px;
  ${FONTS.body4("regular")};
  font-weight: 400;
  svg {
    fill: var(--gray600);
  }
  &:hover {
    background-color: var(--gray100);
    box-shadow: 0 0 0 4px var(--gray100);
  }
  ${TEXT_ACTIVE("var(--gray200)", {
    scalable: true,
  })};
`;

export default MoreButton;
