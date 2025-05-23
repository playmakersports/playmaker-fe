import React from "react";
import styled from "styled-components";

import { BaseContainer, WhiteSectionDivider } from "@/components/common/Container";
import Button from "@/components/common/Button";

import LogoSymbolType from "@/assets/logo/LogoSymbolGreen.svg";
import LogoTextType from "@/assets/logo/LogoTextType.svg";

type Props = {
  children: React.ReactNode;
  button?: {
    type?: HTMLButtonElement["type"];
    text: string;
    onClick: () => void;
  };
  logoFill?: string;
};
function LoginWrapper({ children, button, logoFill }: Props) {
  return (
    <Container>
      {!button && (
        <Background viewBox="0 0 414 694" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M145 193.5C73 66.7 3 12 -23 0.5L-38 721.5L440 709.5V330L418 240.5C357 277.667 217 320.3 145 193.5Z"
            fill="url(#paint0_linear_2198_3712)"
            fillOpacity="0.1"
          />
          <path
            d="M220 223C75.9086 245.359 3 60.5 -23 49L-38 770L440 758V378.5L423 196.5C376.5 145 249 218.5 220 223Z"
            fill="url(#paint1_linear_2198_3712)"
            fillOpacity="0.1"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2198_3712"
              x1="-38"
              y1="-8.08817"
              x2="70.9706"
              y2="269.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={logoFill ?? "#2BCE8A"} />
              <stop offset="1" stopColor={logoFill ?? "#2BCE8A"} stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2198_3712"
              x1="-38"
              y1="40.9531"
              x2="180.542"
              y2="372.539"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={logoFill ?? "#2BCE8A"} />
              <stop offset="1" stopColor={logoFill ?? "#2BCE8A"} stopOpacity="0" />
            </linearGradient>
          </defs>
        </Background>
      )}
      <LogoArea>
        <LogoSymbolType className="logo-icon" width={132} height={72} />
        <LogoTextType className="logo-text" width={150} height={16} fill={logoFill ?? "var(--main)"} />
      </LogoArea>
      <Bottom>
        <Wrapper>{children}</Wrapper>
        {button && (
          <ButtonWrapper>
            <WhiteSectionDivider style={{ marginBottom: "12px" }} />
            <Button type={button.type ?? "button"} size="large" mode="primary" onClick={button.onClick} fullWidth>
              {button.text}
            </Button>
          </ButtonWrapper>
        )}
      </Bottom>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  position: relative;
  display: flex;
  height: calc(100vh - var(--safe-area-top) - 2px);
  padding-bottom: 0;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  overflow: hidden;
`;
const Background = styled.svg`
  display: block;
  position: absolute;
  left: -48px;
  top: 15%;
  width: 600px;
  height: 800px;
  z-index: 0;
`;
const LogoArea = styled.div`
  display: flex;
  margin: 60px 0;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;
const Bottom = styled.section`
  z-index: 1;
`;
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
