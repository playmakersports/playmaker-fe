import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import { fonts } from "@/styles/fonts.css";
import RightArrow from "@/assets/icon/arrow/RightDirection.svg";

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
};

function GroupTitle({ children, icon, link }: Props) {
  const router = useRouter();

  return (
    <Container>
      <h4 className={fonts.body2.semibold}>
        {icon}
        {children}
      </h4>
      {link && (
        <ArrowButton type="button" onClick={() => router.push(link)}>
          <RightArrow />
        </ArrowButton>
      )}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    display: inline-flex;
    align-items: center;
    user-select: none;
    gap: 8px;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;
const ArrowButton = styled.button`
  svg {
    width: 24px;
    height: 24px;
    fill: var(--gray700);
  }
`;

export default GroupTitle;
