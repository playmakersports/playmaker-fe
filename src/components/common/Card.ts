import styled from "@emotion/styled";

export const BasicWhiteCard = styled.div`
  padding: 20px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.card};
  user-select: none;
`;

export const BasicWhiteSection = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.card};
  user-select: none;
`;
