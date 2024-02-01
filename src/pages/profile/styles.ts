import Theme from "@/styles/themes";
import { styled } from "styled-components";

interface ContainerProps {
  type: boolean;
}
interface RadioSelectorProps {
  checked: boolean;
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.gray_10};
  margin: 0.37rem 0 1rem 0.4rem;
  border-radius: 25px 0 0 25px;
  padding: 1.2rem;
  position: relative;
  width: calc(100% - 17rem);
  left: calc(100% - 17rem);
  align-items: center;
  @media (max-width: 950px) {
    width: 100%;
    left: 100%;
  }
  @media (max-width: 700px) {
    width: 100%;
    left: 100%;
    padding: 0rem;
    padding-top: 0.4rem
  }
`;

export const Main = styled.main`
  width: 90%;
  margin: 2%;
  background-color: white;
  border-radius: 10px;
  padding: 2.25rem;
  @media (max-width: 950px) {
    padding: 1rem;
    }
  header {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.gray_100};
    h2 {
      font-size: 1.6rem;
      font-weight: 600;
    }
    button {
      background-color: ${({ theme }) => theme.color.brand_blue};
      color: white;
      border: 0;
      border-radius: 6px;
      padding: 0.75rem 3rem;
      transition: 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.color.brand_blue_hover};
      }
    }
  }
  label {
    font-weight: 600;
  }
`;
export const PersonalInfo = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr 1fr;
  justify-items: center;
  margin-top: 4rem;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;
export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
`;
export const ChangeAvatarButton = styled.button`
    background-color: transparent;
    border: 0;
    color: ${({ theme }) => theme.color.brand_blue};
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => theme.color.brand_blue_hover};
    }
    &:disabled {
      color: ${({ theme }) => theme.color.gray_80};
    }
`;
export const PassWordButton = styled.button`
      background-color: ${({ theme }) => theme.color.brand_blue};
      color: white;
      border: 0;
      border-radius: 6px;
      padding: 0.75rem 3rem;
      transition: 0.3s;
      &:hover {
        background-color: ${({ theme }) => theme.color.brand_blue_hover};
      }
`;
export const FormGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  input{
    padding: 1.25rem 1rem;
    width: clamp(10rem, 20vw, 20rem);
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.gray_20};
    outline: 0;
    color: ${({ theme }) => theme.color.gray_100};
    font-size: 0.9rem;
    @media(max-width: 700px){
      width: 100%;
    }
  }
  select,
  option {
    padding: 1.25rem 1rem;
    width: clamp(10rem, 20vw, 20rem);
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.gray_20};
    outline: 0;
    color: ${({ theme }) => theme.color.gray_100};
    font-size: 0.9rem;
  }
`;
export const RadioContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  input[type="radio"] {
    display: none;
  }
`;
export const RadioGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
export const RadioSelector = styled.label<RadioSelectorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.625rem;
  height: 1.625rem;
  border: 1px solid ${({ theme }) => theme.color.gray_60};
  border-radius: 50%;
  div {
    transition: 0.3s;
    width: 1.125rem;
    height: 1.125rem;
    background-color: ${({ theme, checked }) =>
      checked ? theme.color.gray_60 : "trasnsparent"};
    border-radius: 50%;
  }
`;
export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 700px) {
    margin-top: 1rem;
  }
`;
export const Line = styled.div`
  border-Top: 2px solid ${Theme.color.gray_20};
  margin: 2rem 2.5rem 0rem 10rem;
  @media (max-width: 700px) {
    margin: 1.5rem 0rem;

  }
`;
