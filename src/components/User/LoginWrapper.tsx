import React from "react";
import styled from "@emotion/styled";
import useBgWhite from "@/hook/useBgWhite";

import { BaseContainer, WhiteSectionDivider } from "@/components/common/Container";
import Button from "@/components/common/Button";

import LogoIconType from "@/assets/logo/LogoIconType.svg";
import LogoTextType from "@/assets/logo/LogoTextType.svg";

type Props = {
  children: React.ReactNode;
  button: {
    type?: HTMLButtonElement["type"];
    text: string;
    onClick: () => void;
  };
  logoFill?: string;
};
function LoginWrapper({ children, button, logoFill }: Props) {
  useBgWhite();
  return (
    <Container>
      <LogoArea>
        <LogoIconType className="logo-icon" fill={logoFill ?? "var(--main)"} />
        <LogoTextType className="logo-text" fill={logoFill ?? "var(--main)"} />
      </LogoArea>
      <Bottom>
        <Wrapper>{children}</Wrapper>
        <ButtonWrapper>
          <WhiteSectionDivider style={{ marginBottom: "12px" }} />
          <Button type={button.type ?? "button"} mode="MAIN" onClick={button.onClick} fullWidth>
            {button.text}
          </Button>
        </ButtonWrapper>
      </Bottom>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  display: flex;
  height: calc(100vh - var(--safe-area-top) - 2px);
  padding-bottom: 0;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;

const LogoArea = styled.div`
  display: flex;
  margin: 60px 0;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  svg.logo-icon {
    width: 100px;
    height: 100px;
    border-radius: 20px;
  }
  svg.logo-text {
    width: 190px;
    height: 29px;
  }
`;
const Bottom = styled.section``;
const Wrapper = styled.article`
  padding-bottom: 24px;
`;
const ButtonWrapper = styled.div`
  width: calc(100% + 32px);
  height: max-content;
  margin: 0 -16px;
  padding: 0 16px calc(var(--env-sab) + 48px);
  background: var(--background);
`;

export default LoginWrapper;
