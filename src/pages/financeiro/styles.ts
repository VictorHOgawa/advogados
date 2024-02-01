import { styled } from "styled-components";

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
export const WithDrawContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 950px) {
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
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
export const WithdrawDiv = styled.div`
  display: flex;
  background-color: transparent;
  margin-top: 2.7rem;
  /* gap: 1rem; */
  width: 24.25rem;
  @media (max-width: 950px) {
    align-self: center;
    margin-top: 1rem;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 400px) {
    align-self: center;
    width: 100%;
  }
  div{
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.color.gray_20};  
    padding: 1rem 1rem 1rem 1rem;
    align-items: center;
    justify-content: center;
    @media (max-width: 950px) {
      width: 80%;
    }
    @media (max-width: 700px) {
      width: 100%;
    }
    p, h3 {
  margin: 0;
}    
  }
  button{
    background-color: ${({ theme }) => theme.color.green_60};
    border: none; 
    padding: 0.3rem 0.8rem 0.3rem 0.8rem;
    border-radius: 5px;
    color: white;
    font-size: 1.1rem;
    @media (max-width: 450px) {
      font-size: 0.8rem;
    }
  }
  p{
    font-size: 0.6rem;
    color: ${({ theme }) => theme.color.gray_100};
  }
  h3{
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.green_70};
    @media (max-width: 450px) {
      font-size: 1%.1;
    }
  }
`;
export const RevenueCard = styled.div`
  display: flex;
  width: 14rem;
  height: 6.25rem;
  background-color: ${({ theme }) => theme.color.green_70};
  box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.6);
  padding: 0.7rem;
  border-radius: 10px;
  margin-right: 2rem;
  @media (max-width: 750px) {
    align-self: center;
  }
  img{
    height: 70%;
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 100%;
    justify-content: space-between;
  }
  p{
    margin: 0;
    font-size: 0.6rem;
    color: lightgray;
  }
  h2{
    margin: 0;
    font-size: 1.1rem;
    text-align: center;
    color: white;
  }
  h3{
    margin: 0;
    font-size: 0.8rem;
    text-align: center;
    color: white;
    font-weight: bold;
  }
`;