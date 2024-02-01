import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body, button, input, textarea {
    font-family: 'Archivo', sans-serif;
  }

  p {
    margin: '0';
    padding: '0';
  }
  .swiper-container-vertical{
   height: 13.8rem;
   overflow: hidden;
   padding-top: 0.6rem;
}
`;
export default GlobalStyle;
