import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  border: 0;
  background: transparent;
  color: black;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.secondary_100};
  padding: 1.5rem;
  border-radius: 20px;
`;

export const IframeContainer = styled.div`
  position: relative;
  margin-top: 1rem;
  width: 100%;
  padding-bottom: 45%;
  height: 0;

  iframe {
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const FeedbackAndContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  align-items: center;
  gap: 1rem;
  h1{
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Feedback = styled.div`
  .buttons-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const DislikeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.625rem;
  height: 3.625rem;
  background-color: #d30000;
  border: 1px solid white;
  border-radius: 50%;
  transition: 0.2s;

  @media (max-width: 1024px) {
    scale: 0.8;
  }
`;

export const LikeButton = styled(DislikeButton)`
  background-color: #20b038;
  border: 1px solid black;
`;

export const Contact = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  button {
    padding: 0.25rem 1rem;
    margin-top: -0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.8rem;
    font-weight: 900;
    border-radius: 7.263px;
    border: 0.726px solid #1d1f2e;
    background: #49c958;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media (max-width: 1024px) {
    margin-right: 0;
    button {
      scale: 0.7;
      gap: 0.5rem;
      padding: 0.25 0.5rem;
    }
  }
`;

export const BackButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  button {
    border-radius: 7.263px;
    background: black;
    color: white;
    font-size: 1.375rem;
    border: 0;
    font-weight: 900;
    width: 16rem;
    padding: 0.5rem 0;
    transition: 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 0.5rem;
    scale: 0.8;
  }
`;
