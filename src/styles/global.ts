import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * a{
    text-decoration: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  button,
  input,
  select,
  textarea {
    padding: inherit;
    margin: inherit;
    font-family: inherit;
    font-size: 100%;
  }

  textarea {
    overflow: auto;
  }

  table {
    table-layout: fixed; /* it keeps fixed the column sizes, intead of resize them according to the content */
    width: 100%;
    border-collapse: collapse;
  }

  :focus {
    outline: 0;
  }

  html {
    overflow-y: scroll;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    background-color: ${(props) => props.theme["blue-900"]};
    line-height: 160%; 
  }

  #root{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100%;
    max-width: 90rem;
    align-items: center;
    color: ${(props) => props.theme["blue-300"]};
    font-family: 'Nunito', sans-serif;
  }

  
  

`;
