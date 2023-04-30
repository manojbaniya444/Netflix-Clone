import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    background-color: black;
    @media (max-width: ${({theme}) => theme.responsive.mobile}) {
    font-size: 12px;
  }
}
.link{
  text-decoration: none;
}

`;
