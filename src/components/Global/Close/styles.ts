import styled from "styled-components";

export const Close = styled.button`
  background-color: transparent;
  border: 0;

  position: absolute;
  top: 2rem;
  right: 2rem;
  transition: 0.3s;
  color: ${({ theme }) => theme.color.gray_100};

  &:hover {
    color: ${({ theme }) => theme.color.gray_80};
  }
`;
