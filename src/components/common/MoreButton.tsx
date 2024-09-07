import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { FONTS, TEXT_ACTIVE } from "@/styles/common";
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
  width: 100%;
  color: var(--gray500);
  border-radius: 10px;
  ${FONTS.MD2};
  font-weight: 400;
  svg {
    fill: var(--gray500);
  }

  ${TEXT_ACTIVE("var(--background)", {
    scalable: true,
  })};
`;

export default MoreButton;
