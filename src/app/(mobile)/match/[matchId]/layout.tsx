"use client";

import React from "react";
import styled from "styled-components";
import { BaseContainer } from "@/components/common/Container";

function MatchLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 12px 16px calc(var(--env-sab) + 20px);
`;

export default MatchLayout;
