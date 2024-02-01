import { Modal } from "react-bootstrap";
import styled from "styled-components";

interface ModalProps {
  isVisible: boolean;
}

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 80vh;
  margin: auto;
  strong {
    font-size: 2rem;
  }

  span {
    font-size: 1.2rem;
  }

  @media(min-width: 768px) {
    strong {
      font-size: 3rem;
    }

    span {
      font-size: 1.4rem;
    }
  }

  .custom-loader {
  
  }
`;