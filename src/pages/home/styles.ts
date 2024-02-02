import { styled } from "styled-components";

interface CardsProps {
  color?: string;
  lastOdd?: boolean;
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
    padding-top: 0.4rem;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
  }
`;
export const CardContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 0 2.25rem 0 2.25rem;
  @media (max-width: 960px) {
    padding: 0 0 0 0;
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
    width: 95%;
  }
  @media (max-width: 750px) {
    padding: 1rem;
    width: 95%;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
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
interface RadioSelectorProps {
  checked: boolean;
}
export const RegisterPartner = styled.button`
  background-color: ${({ theme }) => theme.color.green_70};
  color: white;
  border: 0;
  width: 10rem;
  align-self: flex-end;
  border-radius: 5px;
  padding: 0.5rem;
  transition: 0.3s;
  font-size: 0.8rem;
  @media (max-width: 700px) {
    width: 9.5rem;
  }
  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.green_80};
  }
`;
export const SearchPartner = styled.div`
  display: flex;
  margin-top: 1rem;
  background-color: #f5f4f7;
  padding: 1rem;
  align-items: center;
  width: 20rem;
  border-radius: 10px;
  input {
    margin-left: 0.3rem;
    border: none;
    color: #8790ab;
    background-color: transparent;
  }
  input:focus {
    outline: none;
  }
`;
export const Line = styled.div`
  width: 49%;
  height: 2px;
  margin-top: 0.5rem;
  background-color: black;
`;
export const PartnerCard = styled.button`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  height: 15rem;
  font-size: 0.8rem;
  border-radius: 10px;
  width: 10rem;
  padding: 1rem;
  background-color: lightgray;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 700px) {
    width: 9rem;
    height: 13rem;
    padding: 0.1rem;
    scale: 0.9;
  }
  h2 {
    height: 2.45rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: auto;
    font-size: 1.1rem;
  }
  h3 {
    font-size: 1rem;
  }
`;

export const SwiperButton = styled.button`
  width: 1.6rem;
  height: 2.5rem;
  border: none;
  background-color: transparent;
  &:hover {
    scale: 1.1;
  }
`;
export const Section = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 49%;
  padding: 2rem;
  @media (max-width: 700px) {
    width: 100%;
    max-height: 70vh;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
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
export const HeaderTitle = styled.div`
  display: flex;
  width: 90%;
  padding: 0 2.25rem 0 2.25rem;
  @media (max-width: 960px) {
    padding: 0 0 0 0;
  }
`;
export const NewsCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
  height: 4.2rem;
  border-radius: 10px;
  width: 100%;
  background-color: #86888a;
  justify-content: space-between;
  padding: 0.5rem;
  img {
    height: 80%;
    align-self: center;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    align-self: center;
  }
  h3 {
    margin-top: 2.6rem;
    font-size: 0.8rem;
  }
  h1 {
    font-size: 0.7rem;
    color: white;
    font-weight: bold;
    margin: 0;
  }
  p {
    font-size: 0.6rem;
    margin: 0;
    color: #d0d0d0;
  }
`;
