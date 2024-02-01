import styled from "styled-components";

export const Container = styled.div`
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  background: radial-gradient(
    340.32% 136.38% at 0% 3.35%,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(4px);
  width: 90%;
  text-align: justify;
  padding: 3.2rem;
  color: white;
  margin: auto;
  font-size: 1rem;
  position: absolute;
  bottom: 3rem;
  left: 5%;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const AuthorAndArrows = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.5rem;
  }

  span {
    font-size: 0.9rem;
  }
`;

export const Arrows = styled.div`
  color: white;
  display: flex;
  gap: 1rem;

  @media(min-width: 768px) {
  }

  div {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;
