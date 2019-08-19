import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  html,
    body {
      margin: 0;
      padding: 0;
      color: ${({ theme }) => theme.primary};
      font-family: 'Roboto', sans-serif;
    }
  
  *:focus {
    outline: none;
  }
`;

export default GlobalStyle;
