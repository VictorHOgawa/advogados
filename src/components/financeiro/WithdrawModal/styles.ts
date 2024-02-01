import { Modal } from "react-bootstrap";
import styled from "styled-components";
interface ModalProps {
  isVisible: boolean;
}
export const Content = styled.main<ModalProps>`
  margin: auto;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4em;
`;
export const FormHeader = styled.div`
  margin-bottom: 2rem;
  div {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
  }
  span {
    font-weight: 0.875rem;
    text-align: center;
    color: ${({ theme }) => theme.color.gray_80};
  }
  img {
    width: 4.3rem;
    height: 5.5rem;
    margin-right: 1rem;
  }
`;
export const WithDrawCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.green_70};
  box-shadow: 0.3em 0.3em 0.3em rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  align-items: center;
  span{
    font-size: 0.8rem;
    color: lightgray;
  }
  h2{
    font-size: 1.2rem;
    color: white;
  }
`;
export const FormGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  label {
    font-weight: 600;
  }
  input {
    padding: 1.25rem 1rem;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.gray_20};
    outline: 0;
    color: ${({ theme }) => theme.color.gray_100};
    font-size: 0.9rem;
  }
`;
export const SuccessModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin: 3.5rem 0 1.5rem;
  }
  .first-image {
    width: auto;
    height: 6rem;
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
  .button {
    width: 70%;
    margin: 3rem 0 4.5rem;
  }
`;
export const CircleIcon = styled.div`
      width: 5.5rem;
    height: 5.5rem;
    margin: 3.5rem 0 1.5rem;
`;