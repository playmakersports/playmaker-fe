import React from "react";
import styled from "@emotion/styled";

import RightArrowSmallIcon from "@/assets/icon/arrow/RightArrowSmall.svg";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type Props = {
  children: React.ReactNode;
  link?: string;
};

function GroupTitle({ children, link }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <Container>
      <h4>{children}</h4>
      {link && <RightArrowSmallIcon onClick={() => router.push(link)} />}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  margin: 10px 0 -4px;
  padding: 0 8px;
  align-items: center;
  justify-content: space-between;
  &:first-of-type {
    margin-top: 0;
  }
  h4 {
    user-select: none;
    color: var(--gray900);
    font-weight: 600;
    font-size: 1.8rem;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: var(--gray600);
  }
`;

export default GroupTitle;
