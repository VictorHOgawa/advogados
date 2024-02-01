import styled from "styled-components";

interface ModalProps {
  isVisible: boolean;
}

export const Content = styled.div<ModalProps>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin: 3.5rem 0 1.5rem;
  }

  h2 {
    color: ${({ theme }) => theme.color.gray_100};
    font-size: 1.6rem;
    text-align: center;
    font-weight: 600;
  }

  span {
    text-align: center;
    color: ${({ theme }) => theme.color.gray_100};
  }

  .button1 {
    width: 70%;
    margin: 1.4rem 0 0.75rem;
  }

  .button2 {
    width: 70%;
    margin-bottom: 3.5rem;
  }
`;