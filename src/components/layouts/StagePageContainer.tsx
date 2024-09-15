import React from "react";
import styled from "@emotion/styled";
import { BaseContainer } from "../common/Container";
import Button from "../common/Button";
import { StepPageDescription, StepPageTitle } from "../common/global/Text";

type Props = {
  children: React.ReactNode;
  stepper?: boolean;
  title?: string;
  description?: string;
  button?: {
    text: string;
    onClick: () => void;
    disabled?: boolean;
  };
};
function StagePageContainer({ children, stepper = false, title, description, button }: Props) {
  return (
    <Container stepper={stepper}>
      <article>
        {title && (
          <Header>
            <StepPageTitle>{title}</StepPageTitle>
            {description && <StepPageDescription>{description}</StepPageDescription>}
          </Header>
        )}
        {children}
      </article>
      {button && (
        <ButtonWrapper>
          <Button type="button" mode="MAIN" onClick={button.onClick} disabled={button.disabled} fullWidth>
            {button.text}
          </Button>
        </ButtonWrapper>
      )}
    </Container>
  );
}

const Container = styled(BaseContainer)<{ stepper: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ stepper }) => `calc(100vh - var(--safe-area-top) - 1px - ${stepper ? "24px" : "0px"})`};
`;
const ButtonWrapper = styled.div`
  margin-bottom: -20px;
  padding-bottom: calc(var(--env-sab) + 48px);
`;

const Header = styled.header`
  margin-bottom: 28px;
`;

export default StagePageContainer;
