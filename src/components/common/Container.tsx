import styled from "@emotion/styled";

export const BaseContainer = styled.section`
  padding: 12px 16px 20px;
`;

export const DividedContainer = styled.article`
  margin-left: -16px;
  margin-right: -16px;
  padding: 16px 16px 20px;
  border-top: 12px solid ${({ theme }) => theme.white};
`;
