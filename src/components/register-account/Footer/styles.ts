import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.gray_60};
  height: 10rem;
  font-size: 0.85rem;
  color: #4e4b59;
  position: absolute;
  bottom: 0;
  width: 100%;

  & > * {
    margin: 0 3rem;
  }

  p {
    margin: 0;
  }

  @media(min-width: 768px) {
    height: 4rem;
  }
`