import React from "react";
import styled from "@emotion/styled";
import { BaseContainer } from "../common/Container";
import Button from "../common/Button";
import { StepPageDescription, StepPageTitle } from "../common/global/Text";

type Props = {
  headerAlign?: "center" | "left";
  children: React.ReactNode;
  stepper?: boolean;
  title?: string;
  description?: string;
  button?: {
    type?: "button" | "submit" | "reset";
    text: string;
    onClick: () => void;
    disabled?: boolean;
  };
};
function StagePageContainer({ children, headerAlign = "left", stepper = false, title, description, button }: Props) {
  return (
    <Container stepper={stepper}>
      <article>
        {title && (
          <Header align={headerAlign}>
            <StepPageTitle>{title}</StepPageTitle>
            {description && <StepPageDescription>{description}</StepPageDescription>}
          </Header>
        )}
        {children}
      </article>
      {button && (
        <ButtonWrapper>
          <Button
            type={button.type ?? "button"}
            mode="MAIN"
            onClick={button.onClick}
            disabled={button.disabled}
            fullWidth
          >
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

  article {
    flex: 1;
  }
`;
const ButtonWrapper = styled.div`
  margin-bottom: -20px;
  padding-bottom: calc(var(--env-sab) + 16px);
  z-index: 10;
`;

const Header = styled.header<{ align: Props["headerAlign"] }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align === "center" ? "center" : "flex-start")};
  margin-bottom: 28px;
`;

export default StagePageContainer;
