import { styled } from "styled-components";

interface ContainerProps {
  type: boolean;
}
interface CardsProps {
  color?: string;
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
  margin-top: 1rem;
  width: 100%;
  padding: 0 0rem 0 0rem;
  @media (min-width: 700px) {
    width: 90%;
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
export const HeadersCardDiv = styled.div`
  display: flex;
  @media (max-width: 700px) {
    padding: 0.2rem;
    width: 105%;
    justify-content: space-between;
  }
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
export const IndicationCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  height: 12rem;
  border-radius: 10px;
  border: 1px solid black;
  align-items: center;
  overflow: hidden;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3,
  p {
    margin: 0;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1em;
    height: 2rem;
    text-align: center;
    margin-top: 0.3rem;
  }

  p {
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    font-size: 0.8rem;
  }
  button {
    background-color: #2f5cfc;
    padding: 0.1rem;
    border: none;
    width: 6rem;
    color: white;
    border-radius: 5px;
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
  }
`;
export const BackButton = styled.button`
  height: 3rem;
  width: 9rem;
  background-color: #0d123c;
  border: 1px solid black;
  color: white;
  border-radius: 10px;
`;
export const HeaderPartnerCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    margin-bottom: 1rem;
  }
`;
export const HeaderPartnerCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 6.25rem;
  border-radius: 10px;
  width: 7rem;
  padding: 0.2rem;
  background-color: lightgray;
  align-items: center;
  font-size: 0.8rem;
  @media (max-width: 700px) {
  }
  img {
    height: 3rem;
    width: 100%;
  }
`;
export const HeaderPartnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
  margin-right: 1.2rem;
  h3 {
    font-weight: bold;
    margin: 0px;
  }
`;
