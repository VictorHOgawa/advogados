import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;

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
