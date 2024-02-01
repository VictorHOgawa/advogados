import styled from "styled-components";

export const Header = styled.header`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 2rem;
  background-color: white;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.gray_100};
  transition: 0.3s;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  svg:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.gray_80};
  }
`;