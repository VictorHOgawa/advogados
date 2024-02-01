import Theme from "@/styles/themes";
import { styled } from "styled-components";

interface ContainerProps {
  type: boolean;
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
  h2 {
      font-size: 1.6rem;
      font-weight: 600;
      @media(max-width: 950px){
        font-size: 1.1rem;
    }
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
export const VideoCard = styled.div`
display: flex;
flex-direction: row;
width: 100%;
iframe{
    width: 20rem;
    height: 10rem;
    border-radius: 10px;
    margin-right: 1rem;
}
h1{
    font-size: 1.5rem;
}
p{
    font-size: 1rem;
}
button{
    background-color: ${Theme.color.gray_40};
    width: 8rem;
    height: 2.5rem;
    border-radius: 10px;
    border: none;
    color: white;
}
div{
    display: flex;
    flex-direction: column;
}
`;
export const Line = styled.div`
    border-top: 2px solid ${Theme.color.gray_20};
    margin: 1.5rem 0 1rem 0.1rem;

`;