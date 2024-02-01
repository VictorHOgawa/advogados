import styled from "styled-components";

interface CardsProps {
    color? : string;
  }

export const Cards = styled.div<CardsProps>`
  display: flex;
  width: 14rem;
  height: 6.25rem;
  background-color: ${({ theme, color}) =>
      color? color : theme.color.green_70};
  box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.6);
  padding: 0.7rem;
  border-radius: 10px;
  margin-right: 2rem;
  @media (max-width: 768px) {
    width: 11.5rem;
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
    font-size: 1rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    text-align: center;
    color: white;
  }
  h3{
    margin: 0;
    font-size: 0.8rem;
    height: 1.4rem;
    color: white;
    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
    font-weight: bold;
  }
`;